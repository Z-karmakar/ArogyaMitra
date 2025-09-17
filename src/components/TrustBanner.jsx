const TrustBanner = ({ selectedLanguage, translations }) => {
  const getTrustContent = (lang) => {
    const trustTranslations = {
      हिंदी: {
        title: "विश्वसनीय साझेदार",
        subtitle: "प्रमुख स्वास्थ्य संस्थानों का समर्थन प्राप्त",
        verified: "सत्यापित और भरोसेमंद",
        description: `${translations.projectName} को प्रमुख स्वास्थ्य संस्थानों का समर्थन प्राप्त है। हमारी सभी स्वास्थ्य सलाह चिकित्सा विशेषज्ञों द्वारा सत्यापित है।`,
      },
      English: {
        title: "Trusted Partners",
        subtitle: "Supported by leading health institutions",
        verified: "Verified and Trustworthy",
        description: `${translations.projectName} is supported by leading health institutions. All our health advice is verified by medical experts.`,
      },
      বাংলা: {
        title: "বিশ্বস্ত অংশীদার",
        subtitle: "শীর্ষস্থানীয় স্বাস্থ্য প্রতিষ্ঠানের সমর্থন প্রাপ্ত",
        verified: "যাচাইকৃত এবং বিশ্বস্ত",
        description: `${translations.projectName} শীর্ষস্থানীয় স্বাস্থ্য প্রতিষ্ঠানের সমর্থন প্রাপ্ত। আমাদের সমস্ত স্বাস্থ্য পরামর্শ চিকিৎসা বিশেষজ্ঞদের দ্বারা যাচাই করা হয়।`,
      },
      தமிழ்: {
        title: "நம்பகமான கூட்டாளர்கள்",
        subtitle: "முன்னணி சுகாதார நிறுவனங்களின் ஆதரவு",
        verified: "சரிபார்க்கப்பட்ட மற்றும் நம்பகமான",
        description: `${translations.projectName} முன்னணி சுகாதார நிறுவனங்களின் ஆதரவைப் பெற்றுள்ளது। எங்கள் அனைத்து உடல்நலம் ஆலோசனைகளும் மருத்துவ நிபுணர்களால் சரிபார்க்கப்பட்டவை।`,
      },
      తెలుగు: {
        title: "నమ్మకమైన భాగస్వాములు",
        subtitle: "ప్రముఖ ఆరోగ్య సంస్థల మద్దతు",
        verified: "ధృవీకరించబడిన మరియు నమ్మకమైన",
        description: `${translations.projectName} ప్రముఖ ఆరోగ్య సంస్థల మద్దతు పొందింది। మా అన్ని ఆరోగ్య సలహాలు వైద్య నిపుణులచే ధృవీకరించబడ్డాయి।`,
      },
    }
    return trustTranslations[lang] || trustTranslations["हिंदी"]
  }

  const content = getTrustContent(selectedLanguage)

  const partners = [
    {
      name: "स्वास्थ्य मंत्रालय",
      logo: "GOVT_LOGO",
      description: "भारत सरकार",
    },
    {
      name: "AIIMS",
      logo: "AIIMS_LOGO",
      description: "अखिल भारतीय आयुर्विज्ञान संस्थान",
    },
    {
      name: "WHO",
      logo: "WHO_LOGO",
      description: "विश्व स्वास्थ्य संगठन",
    },
    {
      name: "डिजिटल इंडिया",
      logo: "DIGITAL_INDIA_LOGO",
      description: "डिजिटल इंडिया पहल",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{content.title}</h2>
          <p className="text-muted-foreground">{content.subtitle}</p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center group">
              {/* Logo Placeholder */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                </svg>
              </div>

              {/* Partner Info */}
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">{partner.name}</h3>
              <p className="text-xs text-muted-foreground">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
            </svg>
            <span className="text-green-700 font-semibold">{content.verified}</span>
          </div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">{content.description}</p>
        </div>
      </div>
    </section>
  )
}

export default TrustBanner
