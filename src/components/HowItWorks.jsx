const HowItWorks = ({ selectedLanguage }) => {
  const getStepsContent = (lang) => {
    const stepsTranslations = {
      हिंदी: {
        title: "कैसे काम करता है?",
        subtitle: "सिर्फ 3 आसान स्टेप्स में पाएं विश्वसनीय स्वास्थ्य सलाह",
        buttonText: "अभी शुरू करें",
        whatsappMessage: "नमस्ते! मुझे ArogyaMitra के बारे में जानकारी चाहिए।",
        steps: [
          {
            step: "1",
            title: "WhatsApp खोलें",
            description: "अपने फोन में WhatsApp ऐप खोलें और हमारे नंबर पर मैसेज करें",
          },
          {
            step: "2",
            title: "अपनी समस्या बताएं",
            description: "अपनी स्वास्थ्य समस्या या सवाल को सरल भाषा में लिखें",
          },
          {
            step: "3",
            title: "तुरंत सलाह पाएं",
            description: "AI डॉक्टर से तुरंत विश्वसनीय स्वास्थ्य सलाह और जानकारी पाएं",
          },
        ],
      },
      English: {
        title: "How It Works?",
        subtitle: "Get trusted health advice in just 3 easy steps",
        buttonText: "Start Now",
        whatsappMessage: "Hello! I want to know about ArogyaMitra.",
        steps: [
          {
            step: "1",
            title: "Open WhatsApp",
            description: "Open WhatsApp app on your phone and message our number",
          },
          {
            step: "2",
            title: "Describe Your Problem",
            description: "Write your health problem or question in simple language",
          },
          {
            step: "3",
            title: "Get Instant Advice",
            description: "Get reliable health advice and information instantly from AI doctor",
          },
        ],
      },
      বাংলা: {
        title: "কিভাবে কাজ করে?",
        subtitle: "মাত্র ৩টি সহজ ধাপে পান বিশ্বস্ত স্বাস্থ্য পরামর্শ",
        buttonText: "এখনই শুরু করুন",
        whatsappMessage: "নমস্কার! আমি ArogyaMitra সম্পর্কে জানতে চাই।",
        steps: [
          {
            step: "১",
            title: "WhatsApp খুলুন",
            description: "আপনার ফোনে WhatsApp অ্যাপ খুলুন এবং আমাদের নম্বরে মেসেজ করুন",
          },
          {
            step: "২",
            title: "আপনার সমস্যা বলুন",
            description: "আপনার স্বাস্থ্য সমস্যা বা প্রশ্ন সহজ ভাষায় লিখুন",
          },
          {
            step: "৩",
            title: "তাৎক্ষণিক পরামর্শ পান",
            description: "AI ডাক্তারের কাছ থেকে তাৎক্ষণিক বিশ্বস্ত স্বাস্থ্য পরামর্শ পান",
          },
        ],
      },
      தமிழ்: {
        title: "எப்படி வேலை செய்கிறது?",
        subtitle: "வெறும் 3 எளிய படிகளில் நம்பகமான உடல்நலம் ஆலோசனை பெறுங்கள்",
        buttonText: "இப்போதே தொடங்குங்கள்",
        whatsappMessage: "வணக்கம்! ArogyaMitra பற்றி தெரிந்து கொள்ள விரும்புகிறேன்.",
        steps: [
          {
            step: "1",
            title: "WhatsApp திறக்கவும்",
            description: "உங்கள் போனில் WhatsApp ஆப்பை திறந்து எங்கள் எண்ணுக்கு செய்தி அனுப்புங்கள்",
          },
          {
            step: "2",
            title: "உங்கள் பிரச்சனையை சொல்லுங்கள்",
            description: "உங்கள் உடல்நலம் பிரச்சனை அல்லது கேள்வியை எளிய மொழியில் எழுதுங்கள்",
          },
          {
            step: "3",
            title: "உடனடி ஆலோசனை பெறுங்கள்",
            description: "AI மருத்துவரிடமிருந்து உடனடியாக நம்பகமான உடல்நலம் ஆலோசனை பெறுங்கள்",
          },
        ],
      },
      తెలుగు: {
        title: "ఎలా పని చేస్తుంది?",
        subtitle: "కేవలం 3 సులభమైన దశలలో నమ్మకమైన ఆరోగ్య సలహా పొందండి",
        buttonText: "ఇప్పుడే ప్రారంభించండి",
        whatsappMessage: "నమస్కారం! ArogyaMitra గురించి తెలుసుకోవాలని అనుకుంటున్నాను.",
        steps: [
          {
            step: "1",
            title: "WhatsApp తెరవండి",
            description: "మీ ఫోన్‌లో WhatsApp యాప్ తెరిచి మా నంబర్‌కు మెసేజ్ చేయండి",
          },
          {
            step: "2",
            title: "మీ సమస్యను చెప్పండి",
            description: "మీ ఆరోగ్య సమస్య లేదా ప్రశ్నను సరళమైన భాషలో రాయండి",
          },
          {
            step: "3",
            title: "తక్షణ సలహా పొందండి",
            description: "AI డాక్టర్ నుండి తక్షణమే నమ్మకమైన ఆరోగ్య సలహా పొందండి",
          },
        ],
      },
    }
    return stepsTranslations[lang] || stepsTranslations["हिंदी"]
  }

  const content = getStepsContent(selectedLanguage)

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{content.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {content.steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.step}
              </div>

              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                {index === 0 && (
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9V7H18V9H6M14,11V13H6V11H14M16,15V17H6V15H16Z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                  </svg>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-pretty">{step.description}</p>

              {/* Connector Line (hidden on mobile, shown on desktop) */}
              {index < content.steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={`https://wa.me/+919876543210?text=${encodeURIComponent(content.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {content.buttonText}
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
