// Gemini API integration utilities

interface GeminiConfig {
  apiKey: string
  model: string
}

interface GeminiMessage {
  role: "user" | "model"
  parts: { text: string }[]
}

interface GeminiRequest {
  contents: GeminiMessage[]
  generationConfig?: {
    temperature?: number
    topK?: number
    topP?: number
    maxOutputTokens?: number
  }
}

interface GeminiResponse {
  candidates: {
    content: {
      parts: { text: string }[]
    }
    finishReason: string
  }[]
}

export class GeminiClient {
  private config: GeminiConfig

  constructor(apiKey: string, model = "gemini-pro") {
    this.config = {
      apiKey,
      model,
    }
  }

  async generateContent(prompt: string, context?: string): Promise<string> {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.config.model}:generateContent?key=${this.config.apiKey}`

    const systemPrompt =
      context ||
      `
      You are ArogyaMitra (आरोग्यमित्र), a helpful AI health assistant. 
      - Always respond in Hindi (Devanagari script)
      - Provide helpful health advice and information
      - Be empathetic and understanding
      - Always recommend consulting a doctor for serious conditions
      - Keep responses concise but informative
      - Use simple, easy-to-understand language
    `

    const request: GeminiRequest = {
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemPrompt}\n\nUser question: ${prompt}` }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      })

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`)
      }

      const data: GeminiResponse = await response.json()

      if (!data.candidates || data.candidates.length === 0) {
        throw new Error("No response from Gemini API")
      }

      return data.candidates[0].content.parts[0].text
    } catch (error) {
      console.error("Gemini API error:", error)
      throw new Error("Failed to generate response")
    }
  }
}

// Helper function to create a Gemini client instance
export function createGeminiClient(): GeminiClient {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is required")
  }

  return new GeminiClient(apiKey)
}
