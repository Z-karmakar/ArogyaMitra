"use client"

import { useState } from "react"


const Navbar = ({ selectedLanguage, setSelectedLanguage, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const languages = ["हिंदी", "English", "বাংলা", "தமிழ்", "తెలుగు"]
  const getNavText = (lang) => {
    const navTranslations = {
      हिंदी: {
        features: "सुविधाएं",
        howItWorks: "कैसे काम करता है",
        contact: "संपर्क",
      },
      English: {
        features: "Features",
        howItWorks: "How It Works",
        contact: "Contact",
      },
      বাংলা: {
        features: "বৈশিষ্ট্য",
        howItWorks: "কিভাবে কাজ করে",
        contact: "যোগাযোগ",
      },
      தமிழ்: {
        features: "அம்சங்கள்",
        howItWorks: "எப்படி வேலை செய்கிறது",
        contact: "தொடர்பு",
      },
      తెలుగు: {
        features: "లక్షణాలు",
        howItWorks: "ఎలా పని చేస్తుంది",
        contact: "సంప్రదించండి",
      },
    }
    return navTranslations[lang] || navTranslations["हिंदी"]
  }
  
  const navText = getNavText(selectedLanguage)

  return (
    <nav suppressHydrationWarning className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-sm">{translations.projectNameShort}</span>
              </div>
              <h1 className="text-xl font-bold text-foreground">{translations.projectName}</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
              >
                {navText.features}
              </a>
              <a
                href="#how-it-works"
                className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
              >
                {navText.howItWorks}
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
              >
                {navText.contact}
              </a>
            </div>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-card border border-border rounded-md px-3 py-1 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              <a
                href="#features"
                className="block text-muted-foreground hover:text-foreground px-3 py-2 text-base font-medium"
              >
                {navText.features}
              </a>
              <a
                href="#how-it-works"
                className="block text-muted-foreground hover:text-foreground px-3 py-2 text-base font-medium"
              >
                {navText.howItWorks}
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-foreground px-3 py-2 text-base font-medium"
              >
                {navText.contact}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
