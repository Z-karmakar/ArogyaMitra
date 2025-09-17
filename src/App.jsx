"use client"

import { useState,useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Features from "./components/Features"
import TrustBanner from "./components/TrustBanner"
import Footer from "./components/Footer"
const translations = {
  हिंदी: {
    projectName: "आरोग्यमित्र",
    projectNameShort: "आ",
  },
  English: {
    projectName: "ArogyaMitra",
    projectNameShort: "A",
  },
  বাংলা: {
    projectName: "আরোগ্যমিত্র",
    projectNameShort: "আ",
  },
  தமிழ்: {
    projectName: "ஆரோக்யமித்ரா",
    projectNameShort: "ஆ",
  },
  తెలుగు: {
    projectName: "ఆరోగ్యమిత్ర",
    projectNameShort: "ఆ",
  },
}

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => localStorage.getItem("selectedLanguage") || "हिंदी"
  );
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "हिंदी";
    setSelectedLanguage(savedLanguage);
  }, []);

  useEffect(() => {
      localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);
  const currentTranslations = translations[selectedLanguage] || translations["हिंदी"];

  return (
    <div suppressHydrationWarning className="min-h-screen bg-background">
      <Navbar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        translations={currentTranslations}
      />
      <main>
        <Hero translations={currentTranslations} selectedLanguage={selectedLanguage} />
        <HowItWorks selectedLanguage={selectedLanguage} />
        <Features selectedLanguage={selectedLanguage} translations={currentTranslations} />
        <TrustBanner selectedLanguage={selectedLanguage} translations={currentTranslations} />
      </main>
      <Footer translations={currentTranslations} selectedLanguage={selectedLanguage} />
    </div>
  )
}

export default App
