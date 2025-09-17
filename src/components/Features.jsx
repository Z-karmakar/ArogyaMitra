import FeatureCard from "./FeatureCard"

const Features = ({ selectedLanguage, translations }) => {
  const getFeaturesContent = (lang) => {
    const featuresTranslations = {
      हिंदी: {
        title: "ArogyaMitra की विशेषताएं",
        subtitle: "जानिए क्यों लाखों लोग ArogyaMitra पर भरोसा करते हैं",
        features: [
          {
            icon: "CLOCK_ICON",
            title: "24/7 उपलब्ध",
            description: "दिन हो या रात, कभी भी स्वास्थ्य सलाह पाएं। हमारा AI डॉक्टर हमेशा आपकी सेवा में है।",
            highlight: false,
          },
          {
            icon: "SHIELD_ICON",
            title: "पूरी तरह सुरक्षित",
            description: "आपकी व्यक्तिगत जानकारी पूरी तरह सुरक्षित है। हम आपकी निजता का पूरा सम्मान करते हैं।",
            highlight: true,
          },
          {
            icon: "LANGUAGE_ICON",
            title: "हिंदी में सलाह",
            description: "अपनी भाषा में स्वास्थ्य सलाह पाएं। हिंदी और अन्य स्थानीय भाषाओं में उपलब्ध।",
            highlight: false,
          },
          {
            icon: "MONEY_ICON",
            title: "बिल्कुल मुफ्त",
            description: "कोई छुपी हुई फीस नहीं। स्वास्थ्य सलाह पूरी तरह से मुफ्त है।",
            highlight: false,
          },
          {
            icon: "DOCTOR_ICON",
            title: "विश्वसनीय सलाह",
            description: "प्रमाणित डॉक्टरों द्वारा प्रशिक्षित AI से विश्वसनीय और सटीक स्वास्थ्य जानकारी।",
            highlight: false,
          },
          {
            icon: "PHONE_ICON",
            title: "WhatsApp पर आसान",
            description: "कोई नया ऐप डाउनलोड करने की जरूरत नहीं। सिर्फ WhatsApp का इस्तेमाल करें।",
            highlight: false,
          },
        ],
        bottomText: "अभी भी कोई सवाल है?",
        bottomLink: "WhatsApp पर पूछें",
      },
      English: {
        title: "ArogyaMitra Features",
        subtitle: "Know why millions trust ArogyaMitra",
        features: [
          {
            icon: "CLOCK_ICON",
            title: "24/7 Available",
            description: "Day or night, get health advice anytime. Our AI doctor is always at your service.",
            highlight: false,
          },
          {
            icon: "SHIELD_ICON",
            title: "Completely Safe",
            description: "Your personal information is completely secure. We fully respect your privacy.",
            highlight: true,
          },
          {
            icon: "LANGUAGE_ICON",
            title: "Advice in Your Language",
            description: "Get health advice in your language. Available in Hindi and other local languages.",
            highlight: false,
          },
          {
            icon: "MONEY_ICON",
            title: "Completely Free",
            description: "No hidden fees. Health advice is completely free.",
            highlight: false,
          },
          {
            icon: "DOCTOR_ICON",
            title: "Trusted Advice",
            description: "Reliable and accurate health information from AI trained by certified doctors.",
            highlight: false,
          },
          {
            icon: "PHONE_ICON",
            title: "Easy on WhatsApp",
            description: "No need to download new app. Just use WhatsApp.",
            highlight: false,
          },
        ],
        bottomText: "Still have questions?",
        bottomLink: "Ask on WhatsApp",
      },
      বাংলা: {
        title: "ArogyaMitra বৈশিষ্ট্য",
        subtitle: "জানুন কেন লক্ষ লক্ষ মানুষ ArogyaMitra বিশ্বাস করেন",
        features: [
          {
            icon: "CLOCK_ICON",
            title: "২৪/৭ উপলব্ধ",
            description: "দিন বা রাত, যেকোনো সময় স্বাস্থ্য পরামর্শ পান। আমাদের AI ডাক্তার সর্বদা আপনার সেবায়।",
            highlight: false,
          },
          {
            icon: "SHIELD_ICON",
            title: "সম্পূর্ণ নিরাপদ",
            description: "আপনার ব্যক্তিগত তথ্য সম্পূর্ণ নিরাপদ। আমরা আপনার গোপনীয়তার পূর্ণ সম্মান করি।",
            highlight: true,
          },
          {
            icon: "LANGUAGE_ICON",
            title: "আপনার ভাষায় পরামর্শ",
            description: "আপনার ভাষায় স্বাস্থ্য পরামর্শ পান। বাংলা এবং অন্যান্য স্থানীয় ভাষায় উপলব্ধ।",
            highlight: false,
          },
          {
            icon: "MONEY_ICON",
            title: "সম্পূর্ণ বিনামূল্যে",
            description: "কোনো লুকানো ফি নেই। স্বাস্থ্য পরামর্শ সম্পূর্ণ বিনামূল্যে।",
            highlight: false,
          },
          {
            icon: "DOCTOR_ICON",
            title: "বিশ্বস্ত পরামর্শ",
            description: "প্রত্যয়িত ডাক্তারদের দ্বারা প্রশিক্ষিত AI থেকে বিশ্বস্ত এবং নির্ভুল স্বাস্থ্য তথ্য।",
            highlight: false,
          },
          {
            icon: "PHONE_ICON",
            title: "WhatsApp এ সহজ",
            description: "নতুন অ্যাপ ডাউনলোড করার প্রয়োজন নেই। শুধু WhatsApp ব্যবহার করুন।",
            highlight: false,
          },
        ],
        bottomText: "এখনও কোনো প্রশ্ন আছে?",
        bottomLink: "WhatsApp এ জিজ্ঞাসা করুন",
      },
      தமிழ்: {
        title: "ArogyaMitra அம்சங்கள்",
        subtitle: "ஏன் லட்சக்கணக்கான மக்கள் ArogyaMitra நம்புகிறார்கள் என்பதை அறியுங்கள்",
        features: [
          {
            icon: "CLOCK_ICON",
            title: "24/7 கிடைக்கும்",
            description: "பகல் அல்லது இரவு, எந்த நேரத்திலும் உடல்நலம் ஆலோசனை பெறுங்கள். எங்கள் AI மருத்துவர் எப்போதும் உங்கள் சேவையில்.",
            highlight: false,
          },
          {
            icon: "SHIELD_ICON",
            title: "முற்றிலும் பாதுகாப்பானது",
            description: "உங்கள் தனிப்பட்ட தகவல்கள் முற்றிலும் பாதுகாப்பானவை. உங்கள் தனியுரிமையை நாங்கள் முழுமையாக மதிக்கிறோம்.",
            highlight: true,
          },
          {
            icon: "LANGUAGE_ICON",
            title: "உங்கள் மொழியில் ஆலோசனை",
            description: "உங்கள் மொழியில் உடல்நலம் ஆலோசனை பெறுங்கள். தமிழ் மற்றும் பிற உள்ளூர் மொழிகளில் கிடைக்கும்.",
            highlight: false,
          },
          {
            icon: "MONEY_ICON",
            title: "முற்றிலும் இலவசம்",
            description: "மறைக்கப்பட்ட கட்டணம் இல்லை. உடல்நலம் ஆலோசனை முற்றிலும் இலவசம்.",
            highlight: false,
          },
          {
            icon: "DOCTOR_ICON",
            title: "நம்பகமான ஆலோசனை",
            description: "சான்றளிக்கப்பட்ட மருத்துவர்களால் பயிற்சி பெற்ற AI இலிருந்து நம்பகமான மற்றும் துல்லியமான உடல்நலம் தகவல்.",
            highlight: false,
          },
          {
            icon: "PHONE_ICON",
            title: "WhatsApp இல் எளிதானது",
            description: "புதிய ஆப் பதிவிறக்க வேண்டிய அவசியம் இல்லை. WhatsApp ஐ மட்டும் பயன்படுத்துங்கள்.",
            highlight: false,
          },
        ],
        bottomText: "இன்னும் கேள்விகள் உள்ளதா?",
        bottomLink: "WhatsApp இல் கேளுங்கள்",
      },
      తెలుగు: {
        title: "ArogyaMitra లక్షణాలు",
        subtitle: "లక్షలాది మంది ArogyaMitra ను ఎందుకు నమ్ముతున్నారో తెలుసుకోండి",
        features: [
          {
            icon: "CLOCK_ICON",
            title: "24/7 అందుబాటులో",
            description: "పగలు లేదా రాత్రి, ఎప్పుడైనా ఆరోగ్య సలహా పొందండి. మా AI డాక్టర్ ఎల్లప్పుడూ మీ సేవలో ఉన్నారు.",
            highlight: false,
          },
          {
            icon: "SHIELD_ICON",
            title: "పూర్తిగా సురక్షితం",
            description: "మీ వ్యక్తిగత సమాచారం పూర్తిగా సురక్షితం. మేము మీ గోప్యతను పూర్తిగా గౌరవిస్తాము.",
            highlight: true,
          },
          {
            icon: "LANGUAGE_ICON",
            title: "మీ భాషలో సలహా",
            description: "మీ భాషలో ఆరోగ్య సలహా పొందండి. తెలుగు మరియు ఇతర స్థానిక భాషలలో అందుబాటులో ఉంది.",
            highlight: false,
          },
          {
            icon: "MONEY_ICON",
            title: "పూర్తిగా ఉచితం",
            description: "దాచిన రుసుములు లేవు. ఆరోగ్య సలహా పూర్తిగా ఉచితం.",
            highlight: false,
          },
          {
            icon: "DOCTOR_ICON",
            title: "నమ్మకమైన సలహా",
            description: "ధృవీకరించబడిన వైద్యులచే శిక్షణ పొందిన AI నుండి నమ్మకమైన మరియు ఖచ్చితమైన ఆరోగ్య సమాచారం.",
            highlight: false,
          },
          {
            icon: "PHONE_ICON",
            title: "WhatsApp లో సులభం",
            description: "కొత్త యాప్ డౌన్‌లోడ్ చేయాల్సిన అవసరం లేదు. కేవలం WhatsApp ఉపయోగించండి.",
            highlight: false,
          },
        ],
        bottomText: "ఇంకా ప్రశ్నలు ఉన్నాయా?",
        bottomLink: "WhatsApp లో అడగండి",
      },
    }
    return featuresTranslations[lang] || featuresTranslations["हिंदी"]
  }

  const content = getFeaturesContent(selectedLanguage)

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{content.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">{content.bottomText}</p>
          <a
            href={`https://wa.me/+919876543210?text=${encodeURIComponent(`मुझे ${translations.projectName} के बारे में और जानकारी चाहिए।`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            {content.bottomLink}
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Features
