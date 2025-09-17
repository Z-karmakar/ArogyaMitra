const Hero = ({ translations, selectedLanguage }) => {
  const whatsappNumber = "+919876543210" // Replace with actual WhatsApp number

  const getHeroContent = (lang) => {
    const heroTranslations = {
      हिंदी: {
        headline: "आपका स्वास्थ्य साथी",
        whatsappText: "WhatsApp पर",
        subheadline: "24/7 उपलब्ध AI डॉक्टर से मुफ्त में स्वास्थ्य सलाह लें। सिर्फ WhatsApp पर मैसेज करें और तुरंत जवाब पाएं।",
        qrText: "QR कोड स्कैन करें",
        orText: "या",
        buttonText: "WhatsApp पर चैट करें",
        freeText: "बिल्कुल मुफ्त • तुरंत जवाब",
        whatsappMessage: "नमस्ते! मुझे आरोग्यमित्र के बारे में जानकारी चाहिए।",
        trustIndicators: {
          secure: "सुरक्षित और निजी",
          available: "24/7 उपलब्ध",
          users: "10 लाख+ लोग इस्तेमाल कर रहे हैं",
        },
      },
      English: {
        headline: "Your Health Companion",
        whatsappText: "on WhatsApp",
        subheadline:
          "Get free health advice from AI doctor available 24/7. Just message on WhatsApp and get instant answers.",
        qrText: "Scan QR Code",
        orText: "or",
        buttonText: "Chat on WhatsApp",
        freeText: "Completely Free • Instant Response",
        whatsappMessage: "Hello! I want to know about Arogyamitra.",
        trustIndicators: {
          secure: "Safe and Private",
          available: "24/7 Available",
          users: "1M+ people using",
        },
      },
      বাংলা: {
        headline: "আপনার স্বাস্থ্য সাথী",
        whatsappText: "WhatsApp এ",
        subheadline:
          "২৪/৭ উপলব্ধ AI ডাক্তারের কাছ থেকে বিনামূল্যে স্বাস্থ্য পরামর্শ নিন। শুধু WhatsApp এ মেসেজ করুন এবং তাৎক্ষণিক উত্তর পান।",
        qrText: "QR কোড স্ক্যান করুন",
        orText: "অথবা",
        buttonText: "WhatsApp এ চ্যাট করুন",
        freeText: "সম্পূর্ণ বিনামূল্যে • তাৎক্ষণিক উত্তর",
        whatsappMessage: "নমস্কার! আমি আরোগ্যমিত্রா பற்றி தெரிந்து கொள்ள விரும்புகிறேன்.",
        trustIndicators: {
          secure: "নিরাপদ ஏব்றும் தனிப்பட்ட",
          available: "24/7 கிடைக்கும்",
          users: "10 லட்சம்+ பேர் பயன்படுத்துகின்றனர்",
        },
      },
      தமிழ்: {
        headline: "உங்கள் உடல்நலம் துணை",
        whatsappText: "WhatsApp இல்",
        subheadline:
          "24/7 கிடைக்கும் AI மருத்துவரிடமிருந்து இலவச உடல்நலம் ஆலோசனை பெறுங்கள். WhatsApp இல் செய்தி அனுப்பி உடனடி பதில் பெறுங்கள்.",
        qrText: "QR குறியீட்டை ஸ்கேன் செய்யுங்கள்",
        orText: "அல்லது",
        buttonText: "WhatsApp இல் அரட்டையடியுங்கள்",
        freeText: "முற்றிலும் இலவசம் • உடனடி பதில்",
        whatsappMessage: "வணக்கம்! ஆரோగ్యమిత్ర గురించి తెలుసుకోవాలని అనుకుంటున్నాను.",
        trustIndicators: {
          secure: "సురక్షితం మరియు వ్యక్తిగతం",
          available: "24/7 అందుబాటులో",
          users: "10 లక్షల+ మంది వాడుతున్నారు",
        },
      },
    }
    return heroTranslations[lang] || heroTranslations["हिंदी"]
  }

  const content = getHeroContent(selectedLanguage)
  const chatbotUrl = "/chatbot"

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            {content.headline}
            <span className="block text-primary mt-2">{content.whatsappText}</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            {content.subheadline}
          </p>

          {/* CTA Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            {/* QR Code */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center mb-4">
                <svg className="w-20 h-20 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM19 13h2v2h-2zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM15 19h2v2h-2zM17 17h2v2h-2zM17 19h2v2h-2zM19 17h2v2h-2z" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">{content.qrText}</p>
            </div>

            {/* OR Divider */}
            <div className="flex items-center">
              <div className="hidden md:block w-px h-20 bg-border mx-4"></div>
              <div className="md:hidden w-20 h-px bg-border my-4"></div>
              <span className="text-muted-foreground bg-background px-3">{content.orText}</span>
              <div className="hidden md:block w-px h-20 bg-border mx-4"></div>
              <div className="md:hidden w-20 h-px bg-border my-4"></div>
            </div>

            {/* WhatsApp Button */}
            <div className="text-center">
              <a
                href={chatbotUrl}
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                {content.buttonText}
              </a>
              <p className="text-sm text-muted-foreground mt-2">{content.freeText}</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
              </svg>
              {content.trustIndicators.secure}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z" />
              </svg>
              {content.trustIndicators.available}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,5.9C14.9,5.9 13.9,6.9 13.9,8C13.9,9.1 14.9,10.1 16,10.1C17.1,10.1 18.1,9.1 18.1,8C18.1,6.9 17.1,5.9 16,5.9M16,13C18.7,13 22,14.4 22,17V20H10V17C10,14.4 13.3,13 16,13M8,4C10.2,4 12,5.8 12,8C12,10.2 10.2,12 8,12C5.8,12 4,10.2 4,8C4,5.8 5.8,4 8,4M8,13C10.7,13 14,14.4 14,17V20H2V17C2,14.4 5.3,13 8,13Z" />
              </svg>
              {content.trustIndicators.users}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
