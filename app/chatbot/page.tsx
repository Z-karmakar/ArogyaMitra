"use client"

import { useState, useRef, useEffect} from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send, Mic, Paperclip, MoreVertical } from "lucide-react"
import Link from "next/link"
interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  status?: "sending" | "sent" | "delivered" | "read"
}

export default function ChatbotPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("हिंदी");
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    setSelectedLanguage(savedLanguage ?? "हिंदी"); // nullish coalescing ensures string
  }, []);
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const getContent = (lang: string) => {
    const translations = {
      हिंदी: {
        title: "आरोग्यमित्र",
        subtitle: "AI स्वास्थ्य सहायक",
        placeholder: "अपना संदेश लिखें...",
        initialMessage: "नमस्ते! मैं आरोग्यमित्र हूं। मैं आपकी स्वास्थ्य संबंधी समस्याओं में मदद कर सकता हूं। आप मुझसे कुछ भी पूछ सकते हैं।",
        errorMessage: "क्षमा करें, कुछ तकनीकी समस्या हुई है। कृपया दोबारा कोशिश करें।",
        networkError: "क्षमा करें, संदेश भेजने में समस्या हुई है। कृपया अपना इंटरनेट कनेक्शन जांचें और दोबारा कोशिश करें।",
      },
      English: {
        title: "ArogyaMitra",
        subtitle: "AI Health Assistant",
        placeholder: "Type your message...",
        initialMessage:
          "Hello! I'm ArogyaMitra. I can help you with your health-related problems. You can ask me anything.",
        errorMessage: "Sorry, there was a technical issue. Please try again.",
        networkError:
          "Sorry, there was a problem sending the message. Please check your internet connection and try again.",
      },
      বাংলা: {
        title: "আরোগ্যমিত্র",
        subtitle: "AI স্বাস্থ্য সহায়ক",
        placeholder: "আপনার বার্তা লিখুন...",
        initialMessage:
          "নমস্কার! আমি আরোগ্যমিত্র। আমি আপনার স্বাস্থ্য সংক্রান্ত সমস্যায় সাহায্য করতে পারি। আপনি আমাকে যেকোনো কিছু জিজ্ঞাসা করতে পারেন।",
        errorMessage: "দুঃখিত, একটি প্রযুক্তিগত সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
        networkError: "দুঃখিত, বার্তা পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন এবং আবার চেষ্টা করুন।",
      },
      தமிழ்: {
        title: "ஆரோக்யமித்ரா",
        subtitle: "AI உடல்நலம் உதவியாளர்",
        placeholder: "உங்கள் செய்தியை தட்டச்சு செய்யுங்கள்...",
        initialMessage: "வணக்கம்! நான் ஆரோக்யமித்ரா. உங்கள் உடல்நலம் தொடர்பான பிரச்சனைகளில் உதவ முடியும். நீங்கள் என்னிடம் எதையும் கேட்கலாம்.",
        errorMessage: "மன்னிக்கவும், ஒரு தொழில்நுட்ப சிக்கல் ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
        networkError:
          "மன்னிக்கவும், செய்தி அனுப்புவதில் சிக்கல் ஏற்பட்டது. தயவுசெய்து உங்கள் இணைய இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
      },
      తెలుగు: {
        title: "ఆరోగ్యమిత్ర",
        subtitle: "AI ఆరోగ్య సహాయకుడు",
        placeholder: "మీ సందేశాన్ని టైప్ చేయండి...",
        initialMessage: "నమస్కారం! నేను ఆరోగ్యమిత్రను. మీ ఆరోగ్య సంబంధిత సమస్యలలో సహాయం చేయగలను. మీరు నన్ను ఏదైనా అడగవచ్చు.",
        errorMessage: "క్షమించండి, ఒక సాంకేతిక సమస్య వచ్చింది. దయచేసి మళ్లీ ప్రయత్నించండి.",
        networkError: "క్షమించండి, సందేశం పంపడంలో సమస్య వచ్చింది. దయచేసి మీ ఇంటర్నెట్ కనెక్షన్‌ను తనిఖీ చేసి మళ్లీ ప్రయత్నించండి.",
      },
    }
    return translations[lang as keyof typeof translations] || translations["हिंदी"]
  }

  const content = getContent(selectedLanguage)

  useEffect(() => {
    // Get language from URL params or localStorage
    const urlParams = new URLSearchParams(window.location.search)
    const langFromUrl = urlParams.get("lang")
    const langFromStorage = localStorage.getItem("selectedLanguage")

    const initialLang = langFromUrl || langFromStorage || "हिंदी"
    setSelectedLanguage(initialLang)

    // Set initial welcome message
    const welcomeContent = getContent(initialLang)
    setMessages([
      {
        id: "1",
        text: welcomeContent.initialMessage,
        sender: "bot",
        timestamp: new Date(),
        status: "read",
      },
    ])
  }, [])

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage)
  }, [selectedLanguage])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
      status: "sending",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsTyping(true)

    // Update message status to sent
    setTimeout(() => {
      setMessages((prev) => prev.map((msg) => (msg.id === userMessage.id ? { ...msg, status: "sent" } : msg)))
    }, 500)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputText,
          language: selectedLanguage,
        }),
      })

      const data = await response.json()

      if (data.success) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: "bot",
          timestamp: new Date(),
          status: "read",
        }
        setMessages((prev) => [...prev, botMessage])

        // Update user message status to delivered
        setMessages((prev) => prev.map((msg) => (msg.id === userMessage.id ? { ...msg, status: "delivered" } : msg)))
      } else {
        // Handle API error
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: content.errorMessage,
          sender: "bot",
          timestamp: new Date(),
          status: "read",
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error("Error sending message:", error)

      // Show error message to user
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: content.networkError,
        sender: "bot",
        timestamp: new Date(),
        status: "read",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(selectedLanguage === "English" ? "en-IN" : "hi-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  }

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "sending":
        return <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin" />
      case "sent":
        return <div className="w-3 h-3 text-gray-400">✓</div>
      case "delivered":
        return <div className="w-3 h-3 text-gray-400">✓✓</div>
      case "read":
        return <div className="w-3 h-3 text-blue-500">✓✓</div>
      default:
        return null
    }
  }

  return (
    <div suppressHydrationWarning className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div suppressHydrationWarning className="bg-primary text-primary-foreground p-4 flex items-center gap-4 shadow-md">
        <Link href="/">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/20">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
            <span className="text-lg font-bold text-primary">
              {selectedLanguage === "हिंदी"
                ? "आ"
                : selectedLanguage === "English"
                  ? "A"
                  : selectedLanguage === "বাংলা"
                    ? "আ"
                    : selectedLanguage === "தமிழ்"
                      ? "ஆ"
                      : "ఆ"}
            </span>
          </div>
          <div>
            <h1 className="font-semibold">{content.title}</h1>
            <p className="text-sm opacity-90">{content.subtitle}</p>
          </div>
        </div>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="bg-primary-foreground text-primary border border-primary-foreground/30 rounded px-2 py-1 text-sm font-medium"
        >
          <option value="हिंदी">हिंदी</option>
          <option value="English">English</option>
          <option value="বাংলা">বাংলা</option>
          <option value="தமிழ்">தமிழ்</option>
          <option value="తెలుగు">తెలుగు</option>
        </select>
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/20">
          <MoreVertical className="w-5 h-5" />
        </Button>
      </div>

      {/* Messages */}
      <div suppressHydrationWarning className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-white text-foreground shadow-sm"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <div
                className={`flex items-center gap-1 mt-1 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                {message.sender === "user" && getStatusIcon(message.status)}
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div suppressHydrationWarning className="bg-white border-t p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Paperclip className="w-5 h-5" />
          </Button>
          <div className="flex-1 relative">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  sendMessage()
                }
              }}
              placeholder={content.placeholder}
              className="pr-12 rounded-full border-gray-300 focus:border-primary"
            />
            <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500">
              <Mic className="w-4 h-4" />
            </Button>
          </div>
          <Button onClick={sendMessage} disabled={!inputText.trim()} className="rounded-full w-12 h-12 p-0">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
