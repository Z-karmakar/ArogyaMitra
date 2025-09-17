import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, language = "हिंदी" } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ success: false, error: "Invalid message" }, { status: 400 })
    }

    const response = await generateGeminiResponse(message, language)

    return NextResponse.json({
      success: true,
      response,
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process message. Please check your API configuration.",
      },
      { status: 500 },
    )
  }
}

async function generateGeminiResponse(userMessage: string, language: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not set")
  }

  const getSystemPrompt = (lang: string) => {
    const prompts = {
      हिंदी: `You are आरोग्यमित्र (Aarogya Mitra), a helpful AI health assistant for Indian users. Always respond in Hindi (Devanagari script).

Guidelines:
- Provide helpful health information and advice in Hindi
- Always recommend consulting a doctor for serious symptoms
- Be empathetic and supportive
- Use simple, clear Hindi language
- Focus on preventive care and healthy lifestyle tips
- Never provide specific medical diagnoses
- Encourage professional medical consultation when needed`,

      English: `You are ArogyaMitra, a helpful AI health assistant for Indian users. Always respond in English.

Guidelines:
- Provide helpful health information and advice in English
- Always recommend consulting a doctor for serious symptoms
- Be empathetic and supportive
- Use simple, clear English language
- Focus on preventive care and healthy lifestyle tips
- Never provide specific medical diagnoses
- Encourage professional medical consultation when needed`,

      বাংলা: `You are আরোগ্যমিত্র (Aarogya Mitra), a helpful AI health assistant for Indian users. Always respond in Bengali (Bangla script).

Guidelines:
- Provide helpful health information and advice in Bengali
- Always recommend consulting a doctor for serious symptoms
- Be empathetic and supportive
- Use simple, clear Bengali language
- Focus on preventive care and healthy lifestyle tips
- Never provide specific medical diagnoses
- Encourage professional medical consultation when needed`,

      தமிழ்: `You are ஆரோக்யமித்ரா (Aarogya Mitra), a helpful AI health assistant for Indian users. Always respond in Tamil.

Guidelines:
- Provide helpful health information and advice in Tamil
- Always recommend consulting a doctor for serious symptoms
- Be empathetic and supportive
- Use simple, clear Tamil language
- Focus on preventive care and healthy lifestyle tips
- Never provide specific medical diagnoses
- Encourage professional medical consultation when needed`,

      తెలుగు: `You are ఆరోగ్యమిత్ర (Aarogya Mitra), a helpful AI health assistant for Indian users. Always respond in Telugu.

Guidelines:
- Provide helpful health information and advice in Telugu
- Always recommend consulting a doctor for serious symptoms
- Be empathetic and supportive
- Use simple, clear Telugu language
- Focus on preventive care and healthy lifestyle tips
- Never provide specific medical diagnoses
- Encourage professional medical consultation when needed`,
    }
    return prompts[lang as keyof typeof prompts] || prompts["हिंदी"]
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${getSystemPrompt(language)}\n\nUser message: ${userMessage}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
          ],
        }),
      },
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Gemini API error:", errorData)
      throw new Error(`Gemini API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json()

    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
      return data.candidates[0].content.parts[0].text
    } else {
      throw new Error("Invalid response format from Gemini API")
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error)

    const fallbackResponses = {
      हिंदी: "क्षमा करें, मैं अभी आपकी मदद नहीं कर पा रहा हूं। कृपया कुछ देर बाद दोबारा कोशिश करें। यदि समस्या बनी रहे तो किसी डॉक्टर से सलाह लें।",
      English:
        "Sorry, I'm unable to help you right now. Please try again later. If the problem persists, please consult a doctor.",
      বাংলা: "দুঃখিত, আমি এখন আপনাকে সাহায্য করতে পারছি না। অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন। সমস্যা অব্যাহত থাকলে একজন ডাক্তারের সাথে পরামর্শ করুন।",
      தமிழ்: "மன்னிக்கவும், நான் இப்போது உங்களுக்கு உதவ முடியவில்லை. தயவுசெய்து சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும். பிரச்சனை தொடர்ந்தால் ஒரு மருத்துவரை அணுகவும்.",
      తెలుగు: "క్షమించండి, నేను ఇప్పుడు మీకు సహాయం చేయలేకపోతున్నాను. దయచేసి కొంత సమయం తర్వాత మళ్లీ ప్రయత్నించండి. సమస్య కొనసాగితే వైద్యుడిని సంప్రదించండి.",
    }

    return fallbackResponses[language as keyof typeof fallbackResponses] || fallbackResponses["हिंदी"]
  }
}
