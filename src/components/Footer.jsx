const Footer = ({ translations, selectedLanguage }) => {
  const currentYear = new Date().getFullYear()

  const getFooterContent = (lang) => {
    const footerTranslations = {
      हिंदी: {
        description: "WhatsApp पर मुफ्त AI स्वास्थ्य सलाह। 24/7 उपलब्ध, विश्वसनीय और सुरक्षित।",
        services: "सेवाएं",
        help: "सहायता",
        legal: "कानूनी",
        copyright: `© ${currentYear} ${translations.projectName}। सभी अधिकार सुरक्षित।`,
        connectText: "हमसे जुड़ें:",
        disclaimer:
          "ArogyaMitra केवल सामान्य स्वास्थ्य जानकारी प्रदान करता है। गंभीर स्वास्थ्य समस्याओं के लिए कृपया तुरंत डॉक्टर से मिलें। यह पेशेवर चिकित्सा सलाह का विकल्प नहीं है।",
        footerLinks: {
          सेवाएं: [
            { name: "स्वास्थ्य सलाह", href: "#health-advice" },
            { name: "दवा की जानकारी", href: "#medicine-info" },
            { name: "डॉक्टर खोजें", href: "#find-doctor" },
            { name: "आपातकालीन सहायता", href: "#emergency" },
          ],
          सहायता: [
            { name: "कैसे इस्तेमाल करें", href: "#how-to-use" },
            { name: "अक्सर पूछे जाने वाले सवाल", href: "#faq" },
            { name: "संपर्क करें", href: "#contact" },
            { name: "फीडबैक दें", href: "#feedback" },
          ],
          कानूनी: [
            { name: "गोपनीयता नीति", href: "#privacy" },
            { name: "उपयोग की शर्तें", href: "#terms" },
            { name: "अस्वीकरण", href: "#disclaimer" },
            { name: "कुकी नीति", href: "#cookies" },
          ],
        },
      },
      English: {
        description: "Free AI health advice on WhatsApp. 24/7 available, reliable and secure.",
        services: "Services",
        help: "Help",
        legal: "Legal",
        copyright: `© ${currentYear} ${translations.projectName}. All rights reserved.`,
        connectText: "Connect with us:",
        disclaimer:
          "ArogyaMitra only provides general health information. For serious health problems, please consult a doctor immediately. This is not a substitute for professional medical advice.",
        footerLinks: {
          Services: [
            { name: "Health Advice", href: "#health-advice" },
            { name: "Medicine Information", href: "#medicine-info" },
            { name: "Find Doctor", href: "#find-doctor" },
            { name: "Emergency Help", href: "#emergency" },
          ],
          Help: [
            { name: "How to Use", href: "#how-to-use" },
            { name: "FAQ", href: "#faq" },
            { name: "Contact", href: "#contact" },
            { name: "Feedback", href: "#feedback" },
          ],
          Legal: [
            { name: "Privacy Policy", href: "#privacy" },
            { name: "Terms of Use", href: "#terms" },
            { name: "Disclaimer", href: "#disclaimer" },
            { name: "Cookie Policy", href: "#cookies" },
          ],
        },
      },
      বাংলা: {
        description: "WhatsApp এ বিনামূল্যে AI স্বাস্থ্য পরামর্শ। ২৪/৭ উপলব্ধ, নির্ভরযোগ্য এবং নিরাপদ।",
        services: "সেবা",
        help: "সাহায্য",
        legal: "আইনি",
        copyright: `© ${currentYear} ${translations.projectName}। সকল অধিকার সংরক্ষিত।`,
        connectText: "আমাদের সাথে যুক্ত হন:",
        disclaimer:
          "ArogyaMitra শুধুমাত্র সাধারণ স্বাস্থ্য তথ্য প্রদান করে। গুরুতর স্বাস্থ্য সমস্যার জন্য অনুগ্রহ করে অবিলম্বে ডাক্তারের সাথে পরামর্শ করুন।",
        footerLinks: {
          সেবা: [
            { name: "স্বাস্থ্য পরামর্শ", href: "#health-advice" },
            { name: "ওষুধের তথ্য", href: "#medicine-info" },
            { name: "ডাক্তার খুঁজুন", href: "#find-doctor" },
            { name: "জরুরি সাহায্য", href: "#emergency" },
          ],
          সাহায্য: [
            { name: "কিভাবে ব্যবহার করবেন", href: "#how-to-use" },
            { name: "প্রায়শই জিজ্ঞাসিত প্রশ্ন", href: "#faq" },
            { name: "যোগাযোগ", href: "#contact" },
            { name: "মতামত দিন", href: "#feedback" },
          ],
          আইনি: [
            { name: "গোপনীয়তা নীতি", href: "#privacy" },
            { name: "ব্যবহারের শর্তাবলী", href: "#terms" },
            { name: "দাবিত্যাগ", href: "#disclaimer" },
            { name: "কুকি নীতি", href: "#cookies" },
          ],
        },
      },
      தமிழ்: {
        description: "WhatsApp இல் இலவச AI உடல்நலம் ஆலோசனை। 24/7 கிடைக்கும், நம்பகமான மற்றும் பாதுகாப்பான.",
        services: "சேவைகள்",
        help: "உதவி",
        legal: "சட்டபூர்வ",
        copyright: `© ${currentYear} ${translations.projectName}। அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை।`,
        connectText: "எங்களுடன் இணையுங்கள்:",
        disclaimer:
          "ArogyaMitra பொதுவான உடல்நலம் தகவல்களை மட்டுமே வழங்குகிறது। தீவிர உடல்நலம் பிரச்சனைகளுக்கு உடனடியாக மருத்துவரை அணுகவும்।",
        footerLinks: {
          சேவைகள்: [
            { name: "உடல்நலம் ஆலோசனை", href: "#health-advice" },
            { name: "மருந்து தகவல்", href: "#medicine-info" },
            { name: "மருத்துவரைக் கண்டறியுங்கள்", href: "#find-doctor" },
            { name: "அவசர உதவி", href: "#emergency" },
          ],
          உதவி: [
            { name: "எப்படி பயன்படுத்துவது", href: "#how-to-use" },
            { name: "அடிக்கடி கேட்கப்படும் கேள்விகள்", href: "#faq" },
            { name: "தொடர்பு", href: "#contact" },
            { name: "கருத்து தெரிவிக்கவும்", href: "#feedback" },
          ],
          சட்டபூர்வ: [
            { name: "தனியுரிமை கொள்கை", href: "#privacy" },
            { name: "பயன்பாட்டு விதிமுறைகள்", href: "#terms" },
            { name: "மறுப்பு", href: "#disclaimer" },
            { name: "குக்கீ கொள்கை", href: "#cookies" },
          ],
        },
      },
      తెలుగు: {
        description: "WhatsApp లో ఉచిత AI ఆరోగ్య సలహా। 24/7 అందుబాటులో, నమ్మకమైన మరియు సురక్షితమైన.",
        services: "సేవలు",
        help: "సహాయం",
        legal: "చట్టపరమైన",
        copyright: `© ${currentYear} ${translations.projectName}। అన్ని హక్కులు రక్షించబడ్డాయి।`,
        connectText: "మాతో కనెక్ట్ అవ్వండి:",
        disclaimer: "ArogyaMitra సాధారణ ఆరోగ్య సమాచారాన్ని మాత్రమే అందిస్తుంది। తీవ్రమైన ఆరోగ్య సమస్యలకు దయచేసి వెంటనే వైద్యుడిని సంప్రదించండి।",
        footerLinks: {
          సేవలు: [
            { name: "ఆరోగ్య సలహా", href: "#health-advice" },
            { name: "మందుల సమాచారం", href: "#medicine-info" },
            { name: "డాక్టర్‌ను కనుగొనండి", href: "#find-doctor" },
            { name: "అత్యవసర సహాయం", href: "#emergency" },
          ],
          సహాయం: [
            { name: "ఎలా ఉపయోగించాలి", href: "#how-to-use" },
            { name: "తరచుగా అడిగే ప్రశ్నలు", href: "#faq" },
            { name: "సంప్రదించండి", href: "#contact" },
            { name: "అభిప్రాయం ఇవ్వండి", href: "#feedback" },
          ],
          చట్టపరమైన: [
            { name: "గోప్యతా విధానం", href: "#privacy" },
            { name: "వినియోగ నిబంధనలు", href: "#terms" },
            { name: "నిరాకరణ", href: "#disclaimer" },
            { name: "కుకీ విధానం", href: "#cookies" },
          ],
        },
      },
    }
    return footerTranslations[lang] || footerTranslations["हिंदी"]
  }

  const content = getFooterContent(selectedLanguage)

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-sm">{translations.projectNameShort}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{translations.projectName}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4 text-pretty">{content.description}</p>

            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/+919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              +91 98765 43210
            </a>
          </div>

          {/* Footer Links */}
          {Object.entries(content.footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-muted-foreground text-sm">{content.copyright}</div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground text-sm">{content.connectText}</span>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            <strong>महत्वपूर्ण:</strong> {content.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
