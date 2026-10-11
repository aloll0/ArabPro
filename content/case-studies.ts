/**
 * Real Arab Pro Case Studies (2026 Profile)
 * 14 verified client projects across Saudi Arabia and the Gulf.
 */

export interface CaseStudy {
  slug: string;
  title: string;
  titleAr: string;
  client: string;
  clientAr: string;
  year: number;
  categories: string[];
  categoriesAr: string[];
  services: string[];
  servicesAr: string[];
  cover: string;
  gallery: string[];
  accent: string;
  tagline: string;
  taglineAr: string;
  intro: string;
  introAr: string;
  challenge: string;
  challengeAr: string;
  approach: string;
  approachAr: string;
  results: { value: string; label: string; labelAr: string }[];
  website?: string;
  videoSrc?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "national-day-film",
    title: "Saudi National Day Film: 'Our Pride is in Our Nature'",
    titleAr: "فيلم اليوم الوطني السعودي: 'عزّنا بطبعنا'",
    client: "Arab Pro Original",
    clientAr: "إنتاج عرب برو",
    year: 2025,
    categories: ["Film", "AI Production"],
    categoriesAr: ["إنتاج سينمائي", "ذكاء اصطناعي"],
    services: [
      "Cinematic Production",
      "AI Generation",
      "Color Grading",
      "Sound Design",
    ],
    servicesAr: [
      "إنتاج سينمائي",
      "توليد بالذكاء الاصطناعي",
      "تصحيح لوني",
      "ميكساج صوتي",
    ],
    cover: "/covers/national-day-film.svg",
    gallery: [
      "/covers/national-day-film-1.svg",
      "/covers/national-day-film-2.svg",
    ],
    accent: "#006c35",
    videoSrc: "/videos/national-day.mp4",
    tagline: "57 seconds uniting Saudi pride through cinema and generative AI",
    taglineAr:
      "57 ثانية تروي قصة الفخر السعودي بمزيج بين الإنتاج السينمائي والذكاء الاصطناعي",
    intro:
      "A cinematic short film crafted for the Saudi National Day celebrating deep cultural heritage and modern national ambition.",
    introAr:
      "فيلم سينمائي مدته 57 ثانية يروي قصة الوطن بتقنيات الذكاء الاصطناعي والإنتاج السينمائي الفاخر، يعكس شموخ الهوية السعودية وتطلعات المستقبل.",
    challenge:
      "Balancing authentic cultural nuances, authentic heritage costumes, and rapid production turnaround with cinema-grade visual standards.",
    challengeAr:
      "تجسيد أدق التفاصيل الثقافية والملامح والأزياء التراثية في عمل بصري مذهل ينافس الإنتاجات العالمية الكبرى خلال زمن قياسي.",
    approach:
      "Combined generative AI concepting with physical 4K film techniques, custom orchestration, and cinematic color science.",
    approachAr:
      "دمج تقنيات الذكاء الاصطناعي في صياغة الكوادر والمشاهد الخيالية مع التصوير الحقيقي، وتوزيع موسيقي أوركسترالي يحرك المشاعر الوطنية.",
    results: [
      { value: "57s", label: "Runtime", labelAr: "مدة الفيلم" },
      {
        value: "4.8M+",
        label: "Views across channels",
        labelAr: "مشاهدة عبر المنصات",
      },
      {
        value: "100%",
        label: "Saudi identity & crew",
        labelAr: "هوية وطنية خالصة",
      },
    ],
  },
  {
    slug: "manabbeh-alhilal",
    title: "Manabbeh × Al Hilal Academy",
    titleAr: "مُنَبّه × أكاديمية الهلال",
    client: "Manabbeh Platform",
    clientAr: "منصة منبه",
    year: 2025,
    categories: ["Partnership", "Motion & Video"],
    categoriesAr: ["شراكات استراتيجية", "إنتاج وموشن"],
    services: [
      "Teaser Video",
      "Custom Motion Film",
      "Campaign Launch",
      "Talent Casting",
    ],
    servicesAr: [
      "فيديو تشويقي",
      "فيلم موشن مخصص",
      "إطلاق الحملة",
      "كاستنج مواهب",
    ],
    cover: "/covers/manabbeh-alhilal.svg",
    gallery: [
      "/covers/manabbeh-alhilal-1.svg",
      "/covers/manabbeh-alhilal-2.svg",
    ],
    accent: "#0052cc",
    tagline: "Launching an iconic sports-tech installment sponsorship",
    taglineAr:
      "إطلاق شراكة رائدة بين التقنية والرياضة بفيديو تشويقي وفيلم موشن مخصص",
    intro:
      "An integrated launch campaign announcing Manabbeh's official partnership with Al Hilal Academy, bridging youth sports and flexible device financing.",
    introAr:
      "حملة إطلاق متكاملة لشراكة منصة منبه مع أكاديمية الهلال، استهدفت أولياء الأمور والشباب بمحتوى تفاعلي وفيلم موشن مبتكر.",
    challenge:
      "Conveying institutional sports prestige alongside modern fintech convenience without feeling purely transactional.",
    challengeAr:
      "إبراز هيبة العلامة الرياضية الأكثر شعبية بالتوازي مع سهولة تقسيط الأجهزة للأكاديميات بطريقة شبابية ملهمة.",
    approach:
      "High-energy video pacing, dynamic kinetic motion graphics, and targeted social blitz across TikTok and X.",
    approachAr:
      "صناعة فيديو تشويقي عالي الإيقاع، وفيلم موشن جرافيك يشرح مزايا الشراكة، مدعوماً بحملة ممولة موجهة ومحتوى UGC جذاب.",
    results: [
      {
        value: "+320%",
        label: "App downloads jump",
        labelAr: "ارتفاع تحميلات التطبيق",
      },
      {
        value: "2.1M",
        label: "Impressions in 72h",
        labelAr: "ظهور في 72 ساعة",
      },
      { value: "94%", label: "Positive sentiment", labelAr: "تفاعل إيجابي" },
    ],
  },
  {
    slug: "ebtekar-united",
    title: "Ebtekar United",
    titleAr: "ابتكار المتحدة",
    client: "Ebtekar United Construction",
    clientAr: "شركة ابتكار المتحدة للمقاولات",
    year: 2024,
    categories: ["Branding", "Corporate Profile"],
    categoriesAr: ["هوية بصرية", "ملفات مؤسسية"],
    services: [
      "Visual Identity",
      "Brand Guidelines",
      "Corporate Collateral",
      "Signage",
    ],
    servicesAr: [
      "هوية بصرية",
      "دليل الهوية",
      "مطبوعات مؤسسية",
      "لوحات ولافتات",
    ],
    cover: "/covers/ebtekar-united.svg",
    gallery: ["/covers/ebtekar-united-1.svg", "/covers/ebtekar-united-2.svg"],
    accent: "#b57edc",
    tagline: "Solid architectural identity for major contracting projects",
    taglineAr: "هوية بصرية رصينة لمشاريع المقاولات الكبرى والمناقصات الحكومية",
    intro:
      "A complete identity redesign for one of Riyadh's expanding contracting and construction companies.",
    introAr:
      "إعادة بناء الهوية البصرية لشركة ابتكار المتحدة للمقاولات لتواكب معايير المشاريع الوطنية الكبرى ورؤية 2030.",
    challenge:
      "Positioning the brand as a dependable tier-one partner for mega infrastructure and government bids.",
    challengeAr:
      "إبراز الجاهزية المؤسسية للمنافسة على المناقصات الكبرى وعقود المشاريع العملاقة.",
    approach:
      "Crafted an architectural logo system, comprehensive bilingual brand manual, vehicle fleet wraps, and executive presentation profiles.",
    approachAr:
      "تصميم شعار هندسي مستوحى من المتانة والابتكار، مع دليل هوية شامل، تغليف أسطول السيارات، ومطبوعات رسمية فاخرة.",
    results: [
      {
        value: "+80%",
        label: "Bid qualification rate",
        labelAr: "تأهيل المناقصات",
      },
      {
        value: "100%",
        label: "Standardized brand assets",
        labelAr: "توحيد نقاط التماس",
      },
      {
        value: "Tier 1",
        label: "Partner status achieved",
        labelAr: "تصنيف شريك معتمد",
      },
    ],
  },
  {
    slug: "sam-delivery",
    title: "Sam Delivery",
    titleAr: "سَم للتوصيل",
    client: "Sam Logistics",
    clientAr: "منصة سَم للخدمات اللوجستية",
    year: 2024,
    categories: ["Identity", "Packaging"],
    categoriesAr: ["هوية بصرية", "تغليف وكرتون"],
    services: [
      "Playful Brand Character",
      "Visual Identity",
      "Packaging Applications",
      "Fleet Design",
    ],
    servicesAr: [
      "شخصية بصرية مرحة",
      "هوية بصرية",
      "تطبيقات التغليف",
      "تصميم أسطول التوصيل",
    ],
    cover: "/covers/sam-delivery.svg",
    gallery: ["/covers/sam-delivery-1.svg", "/covers/sam-delivery-2.svg"],
    accent: "#ff6b4a",
    tagline: "A lively, memorable brand personality for last-mile delivery",
    taglineAr: "هوية مرحة بشخصية بصرية فريدة وتطبيقات تغليف استثنائية",
    intro:
      "Developing a distinct, warm, and friendly personality for a Saudi express shipping and on-demand delivery venture.",
    introAr:
      "بناء هوية بصرية مفعمة بالحيوية تعكس كلمة 'سَم' الكرم والترحيب السعودي في تجربة الشحن والتوصيل السريع.",
    challenge:
      "Standing out in an intensely competitive logistics market saturated with cold and generic corporate designs.",
    challengeAr:
      "التميز في سوق لوجستي مزدحم بشركات عالمية، وتحويل تجربة استلام الطرد إلى لحظة ودودة ومبهجة.",
    approach:
      "Designed an illustrative mascot character, bright branded delivery tape, eco-friendly box packaging, and driver uniform kits.",
    approachAr:
      "ابتكار شخصية بصرية كرتونية مميزة، ونظام تغليف ذكي، وملصقات تفاعلية تمنح العميل ابتسامة مع كل شحنة.",
    results: [
      { value: "4.9/5", label: "Brand recall score", labelAr: "تذكر العلامة" },
      { value: "+150k", label: "Boxes delivered", labelAr: "طرد تم توصيله" },
      {
        value: "+45%",
        label: "Organic social mentions",
        labelAr: "تفاعل عفوي بالسوشيال",
      },
    ],
  },
  {
    slug: "eesal",
    title: "Eesal",
    titleAr: "إيصال",
    client: "Eesal Media",
    clientAr: "إيصال لبناء العلامات",
    year: 2024,
    categories: ["Brand Building", "Poster Style"],
    categoriesAr: ["بناء علامات", "أسلوب بوستر"],
    services: [
      "Bold Visual Identity",
      "Poster Design Systems",
      "Integrated Collateral",
      "Digital Templates",
    ],
    servicesAr: [
      "هوية جريئة",
      "أنظمة بوستر إعلانية",
      "تطبيقات متكاملة",
      "قوالب رقمية",
    ],
    cover: "/covers/eesal.svg",
    gallery: ["/covers/eesal-1.svg", "/covers/eesal-2.svg"],
    accent: "#ff2e63",
    tagline: "Striking typographic brand identity with bold poster aesthetics",
    taglineAr:
      "هوية جريئة بأسلوب البوستر وتطبيقات متكاملة تصنع صدمة بصرية جذابة",
    intro:
      "A typographic masterclass designed for an agile creative platform seeking immediate visual distinction.",
    introAr:
      "نظام هوية جريء يعتمد على التايبوغرافي العملاقة والألوان الحيوية التي تفرض حضورها في أي مكان.",
    challenge:
      "Breaking traditional corporate cliches while maintaining executive authority and commercial credibility.",
    challengeAr:
      "كسر النمطية المكررة في تصميم الهويات التسويقية دون فقدان الهيبة والثقة المهنية.",
    approach:
      "Developed high-contrast editorial grids, large Arabic lettering styles, and modular display poster formats.",
    approachAr:
      "تطوير نظام تصميم بوسترات حركي يدمج الخط العربي الحديث مع مساحات لونية نقية وقوية.",
    results: [
      {
        value: "3x",
        label: "Engagement rate",
        labelAr: "معدل تفاعل المطبوعات",
      },
      {
        value: "Award",
        label: "Best Identity Concept",
        labelAr: "أفضل مفهوم بصري",
      },
      {
        value: "+88%",
        label: "Client inquiries",
        labelAr: "زيادة طلبات الخدمات",
      },
    ],
  },
  {
    slug: "acacia",
    title: "Acacia",
    titleAr: "أكاسيا",
    client: "Acacia Living",
    clientAr: "أكاسيا للأثاث الفاخر",
    year: 2024,
    categories: ["Luxury", "Art Direction"],
    categoriesAr: ["أثاث فاخر", "إخراج فني"],
    services: [
      "Serene Visual Identity",
      "Art Direction",
      "Catalog Editorial",
      "Showroom Signage",
    ],
    servicesAr: [
      "هوية وإخراج فني هادئ",
      "إخراج فني",
      "كتالوجات فاخرة",
      "لافتات معارض",
    ],
    cover: "/covers/acacia.svg",
    gallery: ["/covers/acacia-1.svg", "/covers/acacia-2.svg"],
    accent: "#c5a880",
    tagline: "Timeless elegance and calm art direction for luxury living",
    taglineAr:
      "هوية وإخراج فني هادئ يعكس فخامة قطع الأثاث ودفء المنازل الراقية",
    intro:
      "Curating an elite brand presence for Acacia high-end furniture showrooms across Saudi Arabia.",
    introAr:
      "بناء هوية فنية هادئة تمزج بين رقي الخامات الطبيعية ولمسات التصميم الإيطالي والسعودي المعاصر.",
    challenge:
      "Communicating craft, tactile materials, and understated luxury without visual noise.",
    challengeAr:
      "إيصال جودة الخشب والجلد والتفاصيل اليدوية للأثاث دون صخب أو ازدحام بصري.",
    approach:
      "Earthy tones, generous negative space, sophisticated typography, and studio photography standards.",
    approachAr:
      "لوحة ألوان مستوحاة من خشب الأكاسيا والرمال الصحراوية، مع خطوط نحيفة وجلسات تصوير سينمائية للمنتجات.",
    results: [
      {
        value: "+62%",
        label: "Average order value",
        labelAr: "ارتفاع متوسط قيمة الشراء",
      },
      {
        value: "4 Showrooms",
        label: "Flagships branded",
        labelAr: "فروع تم تطبيق الهوية بها",
      },
      {
        value: "Featured",
        label: "Architecture digest",
        labelAr: "تغطيات صحفية متخصصة",
      },
    ],
  },
  {
    slug: "servica",
    title: "Servica",
    titleAr: "سيرفيكا",
    client: "Servica BPO",
    clientAr: "شركة سيرفيكا لحلول مراكز الاتصال",
    year: 2024,
    categories: ["Digital & 3D", "Corporate Web"],
    categoriesAr: ["رقمي وثلاثي أبعاد", "مواقع شركات"],
    services: [
      "Brand Identity",
      "3D Web Assets",
      "Modern Web Development",
      "UI/UX System",
    ],
    servicesAr: [
      "هوية بصرية",
      "عناصر 3D تفاعلية",
      "تطوير موقع وتجربة مستخدم",
      "تصميم واجهات",
    ],
    cover: "/covers/servica.svg",
    gallery: ["/covers/servica-1.svg", "/covers/servica-2.svg"],
    accent: "#2ee6ff",
    tagline:
      "Futuristic 3D digital presence for contact center enterprise solutions",
    taglineAr: "هوية وموقع وتجربة مستخدم بعناصر 3D تنبض بالذكاء والسرعة",
    intro:
      "Reimagining the brand and digital experience of Servica, an industry leader in customer contact center services.",
    introAr:
      "إعادة تصميم الهوية وبناء موقع إلكتروني استثنائي لسيرفيكا مدعوم بعناصر ثلاثية الأبعاد تعبر عن تدفق البيانات وخدمة العملاء على مدار الساعة.",
    challenge:
      "Transforming a complex technical service into an intuitive, visually captivating corporate story.",
    challengeAr:
      "تبسيط الخدمات التقنية المعقدة لمراكز الاتصال إلى واجهات تفاعلية تلهم صانع القرار في الشركات الكبرى.",
    approach:
      "Interactive WebGL/3D models of modern headsets and communication flows, fluid micro-interactions, and fast load speeds.",
    approachAr:
      "تطوير منصة رقمية فائقة السرعة مع مجسمات 3D تفاعلية ورسوم بيانية توضح كفاءة الرد ورضا العملاء.",
    results: [
      {
        value: "+140%",
        label: "Lead conversion rate",
        labelAr: "زيادة طلبات العروض",
      },
      {
        value: "0.8s",
        label: "First contentful paint",
        labelAr: "سرعة تحميل خيالية",
      },
      {
        value: "Enterprise",
        label: "Key Gov clients signed",
        labelAr: "استقطاب جهات حكومية",
      },
    ],
  },
  {
    slug: "alsheehi",
    title: "Alsheehi",
    titleAr: "الشّهي",
    client: "Alsheehi Engineering",
    clientAr: "مكتب الشّهي للاستشارات الهندسية والمساحة",
    year: 2024,
    categories: ["Engineering", "Web & Content"],
    categoriesAr: ["هندسة ومساحة", "موقع ومحتوى"],
    services: [
      "Visual Identity",
      "Corporate Website",
      "Editorial Content",
      "Project Folio",
    ],
    servicesAr: [
      "هوية بصرية",
      "موقع إلكتروني",
      "صناعة محتوى تخصصي",
      "توثيق المشاريع",
    ],
    cover: "/covers/alsheehi.svg",
    gallery: ["/covers/alsheehi-1.svg", "/covers/alsheehi-2.svg"],
    accent: "#4e73df",
    tagline:
      "Rigorous engineering precision reflected in visual identity and web",
    taglineAr:
      "هوية بصرية وموقع إلكتروني ومحتوى يعكس الدقة الهندسية والمساحية الفائقة",
    intro:
      "Branding and digital presence for a leading Saudi survey and civil engineering consultancy.",
    introAr:
      "تطوير المنظومة البصرية والرقمية لمكتب الشهي للمساحة والهندسة، مع إبراز خبراتهم الميدانية في المشاريع التنموية الكبرى.",
    challenge:
      "Communicating mathematical accuracy, advanced LiDAR survey gear, and technical compliance in a contemporary aesthetic.",
    challengeAr:
      "إبراز التقنيات المساحية المتطورة مثل الدرون والليزر الجوي بأسلوب تسويقي واضح يجذب المطورين العقاريين.",
    approach:
      "Topographical grid lines, crisp geometric logo marks, and an interactive GIS project map portfolio.",
    approachAr:
      "اعتماد خطوط كونتورية مساحية في الخلفيات، وشعار هندسي متوازن، وموقع يستعرض مشاريع الرفع المساحي بدقة.",
    results: [
      {
        value: "+95%",
        label: "Proposal acceptance rate",
        labelAr: "معدل قبول العروض",
      },
      {
        value: "50+ Projects",
        label: "Documented in portfolio",
        labelAr: "مشروع موثق بالموقع",
      },
      {
        value: "KSA Wide",
        label: "Nationwide expansion",
        labelAr: "توسع جغرافي شامل",
      },
    ],
  },
  {
    slug: "shadan",
    title: "Shadan",
    titleAr: "شَدَن",
    client: "Shadan Living",
    clientAr: "منصة شَدَن للشقق المفروشة والضيافة",
    year: 2024,
    categories: ["PropTech", "UI/UX & Platform"],
    categoriesAr: ["تقنية عقارية", "واجهات وتطبيقات"],
    services: [
      "Brand Identity",
      "UI/UX Platform Design",
      "Digital Booking App",
      "Social Media",
    ],
    servicesAr: [
      "هوية بصرية",
      "تصميم UI/UX للمنصة",
      "منصة رقمية للحجز",
      "إدارة السوشيال ميديا",
    ],
    cover: "/covers/shadan.svg",
    gallery: ["/covers/shadan-1.svg", "/covers/shadan-2.svg"],
    accent: "#9d4edd",
    tagline: "Elevated boutique living and seamless digital reservation flow",
    taglineAr: "هوية بصرية، UI/UX، ومنصة رقمية مبتكرة لحجز الشقق الفاخرة",
    intro:
      "End-to-end brand identity and digital booking experience for Shadan serviced residences in Riyadh and Khobar.",
    introAr:
      "بناء علامة شَدَن للضيافة الراقية والشقق المفروشة، مع تصميم واجهات حجز سلسة تجعل الإقامة تجربة لا تُنسى.",
    challenge:
      "Designing a digital booking journey that matches the tactile luxury of a 5-star boutique residence.",
    challengeAr:
      "خلق تجربة استخدام رقمية سريعة وبديهية على الجوال تنافس كبرى منصات الحجز العالمية.",
    approach:
      "Harmonious warm palette, frictionless mobile reservation flow, 360 virtual room tours, and lifestyle social content.",
    approachAr:
      "تصميم واجهات أنيقة تدعم الحجز والدفع الفوري، مع جولات افتراضية داخل الوحدات ومحتوى سوشيال ميديا مخصص.",
    results: [
      {
        value: "85%",
        label: "Average monthly occupancy",
        labelAr: "نسبة الإشغال الشهري",
      },
      {
        value: "3 Steps",
        label: "Direct booking checkout",
        labelAr: "خطوات الحجز المباشر",
      },
      { value: "4.9★", label: "Guest satisfaction", labelAr: "تقييم الضيوف" },
    ],
  },
  {
    slug: "loksara",
    title: "Loksara",
    titleAr: "لوكسارا",
    client: "Loksara Luxury",
    clientAr: "لوكسارا لوصلات الشعر الفاخرة",
    year: 2024,
    categories: ["Beauty & Fashion", "Social Growth"],
    categoriesAr: ["جمال وأزياء", "نمو سوشيال ميديا"],
    services: [
      "Social Media Management",
      "Art Direction",
      "UGC Production",
      "Influencer Collaborations",
    ],
    servicesAr: [
      "إدارة حسابات السوشيال",
      "إخراج فني",
      "إنتاج ريلز وUGC",
      "حملات مؤثرين",
    ],
    cover: "/covers/loksara.svg",
    gallery: ["/covers/loksara-1.svg", "/covers/loksara-2.svg"],
    accent: "#e0a96d",
    tagline:
      "Sensory social media art direction and targeted influencer advocacy",
    taglineAr: "سوشيال ميديا وإخراج فني ساحر لوصلات الشعر الطبيعية الفاخرة",
    intro:
      "Elevating Loksara's social media presence to match international luxury beauty aesthetics in the Saudi market.",
    introAr:
      "إدارة حسابات لوكسارا بمحتوى بصري يخاطب ذائقة المرأة السعودية، مع إخراج فوتوغرافي ومقاطع ريلز فائقة النعومة والجمال.",
    challenge:
      "Showcasing product authenticity, natural texture, and hair volume through screen-only content.",
    challengeAr:
      "إثبات طبيعية ولمعان وجودة الشعر عبر الشاشة وكسب ثقة العميلات في منتج فائق القيمة.",
    approach:
      "High-frame-rate slow motion videos, micro-influencer reviews, before/after transformations, and cohesive editorial feeds.",
    approachAr:
      "تصوير لقطات مقربة (Macro) تبين تفاصيل الخصلات، والتعاون مع كوافيرات ومؤثرات خبيرات لتقديم تجارب واقعية.",
    results: [
      {
        value: "+380%",
        label: "Follower growth in 6mo",
        labelAr: "نمو المتابعين في 6 أشهر",
      },
      {
        value: "5.4x",
        label: "Return on ad spend (ROAS)",
        labelAr: "العائد على الإعلانات (ROAS)",
      },
      {
        value: "+210%",
        label: "Direct website sales",
        labelAr: "مبيعات المتجر المباشرة",
      },
    ],
  },
  {
    slug: "sovan",
    title: "Sovan",
    titleAr: "سوفان",
    client: "Sovan Official",
    clientAr: "سوفان للأزياء والعطور",
    year: 2024,
    categories: ["Fashion & Perfume", "Content Production"],
    categoriesAr: ["أزياء وعطور", "إنتاج محتوى"],
    services: [
      "Social Media Accounts",
      "Studio Photography",
      "Cinematic Reels",
      "Brand Storytelling",
    ],
    servicesAr: [
      "إدارة حسابات السوشيال",
      "تصوير فوتوغرافي بالاستوديو",
      "ريلز سينمائي",
      "سرد قصة العلامة",
    ],
    cover: "/covers/sovan.svg",
    gallery: ["/covers/sovan-1.svg", "/covers/sovan-2.svg"],
    accent: "#b57edc",
    tagline:
      "Hypnotic fragrance campaigns and haute couture visual storytelling",
    taglineAr:
      "إدارة حسابات ومحتوى فوتوغرافي وسينمائي ساحر للأزياء والعطور الراقية",
    intro:
      "Crafting an evocative fragrance and couture narrative that resonates with the Saudi luxury connoisseur.",
    introAr:
      "إنتاج حملات تصوير إبداعية لدار سوفان تمزج بين نفحات العطور الشرقية والتصاميم العصرية بأسلوب درامي آسر.",
    challenge:
      "Capturing the sensory illusion of scent and fabric texture through still images and brief video formats.",
    challengeAr:
      "نقل عبير العطر وإحساس القماش عبر الشاشة وإثارة شغف الاقتناء لدى عشاق الفخامة.",
    approach:
      "Dark-mood studio lighting, macro smoke and droplet captures, poetic Arabic voice-overs, and seamless seasonal campaigns.",
    approachAr:
      "إضاءة درامية خافتة، مؤثرات بصرية مائية ودخانية، وتعليق صوتي شاعري باللهجة السعودية الفصحى.",
    results: [
      {
        value: "Sold Out",
        label: "Signature perfume batch",
        labelAr: "نفاد الدفعة الأولى للعطر",
      },
      {
        value: "+420%",
        label: "Reels view milestones",
        labelAr: "مشاهدات الريلز",
      },
      {
        value: "+175%",
        label: "E-commerce orders",
        labelAr: "زيادة طلبات الشراء",
      },
    ],
  },
  {
    slug: "mabeet",
    title: "Mabeet",
    titleAr: "مبيت",
    client: "Mabeet Tech",
    clientAr: "منصة مبيت للحجوزات والإيواء",
    year: 2024,
    categories: ["Hospitality", "Social Campaigns"],
    categoriesAr: ["ضيافة وسياحة", "حملات تسويقية"],
    services: [
      "Creative Social Campaigns",
      "Performance Paid Ads",
      "Content Creation",
      "Influencer Activations",
    ],
    servicesAr: [
      "حملات سوشيال ميديا إبداعية",
      "حملات أداء ممولة",
      "صناعة محتوى ترويجي",
      "تفعيل المؤثرين",
    ],
    cover: "/covers/mabeet.svg",
    gallery: ["/covers/mabeet-1.svg", "/covers/mabeet-2.svg"],
    accent: "#06d6a0",
    tagline: "Dynamic social media campaigns driving instant vacation bookings",
    taglineAr:
      "حملات سوشيال ميديا إبداعية ضاعفت حجوزات الشاليهات والشقق السياحية",
    intro:
      "Hyper-engaging campaigns promoting weekend getaways and holiday stays across prime vacation destinations in KSA.",
    introAr:
      "إطلاق حملات تسويقية موسمية لمنصة 'مبيت' ركزت على بهجة العطلات واكتشاف أجمل بيوت العطلات في المملكة.",
    challenge:
      "Igniting weekend spontaneous travel decisions while keeping ad acquisition cost (CAC) ultra-competitive.",
    challengeAr:
      "تحفيز قرارات السفر العفوية لعطلات نهاية الأسبوع مع خفض تكلفة اكتساب العميل (CAC).",
    approach:
      "Humorous relatable skits, dynamic Instagram stories countdowns, geo-targeted Snap ads, and real host testimonials.",
    approachAr:
      "فيديوهات تمثيلية عفوية تحاكي مواقف العائلة والأصدقاء عند التخطيط للعطلة، مع استهداف إعلاني جغرافي ذكي.",
    results: [
      {
        value: "-34%",
        label: "Customer Acquisition Cost (CAC)",
        labelAr: "انخفاض تكلفة الاكتساب CAC",
      },
      {
        value: "+280%",
        label: "Weekend bookings",
        labelAr: "قفزة الحجوزات الأسبوعية",
      },
      {
        value: "3.8M",
        label: "Targeted audience reached",
        labelAr: "وصول مستهدف بالمملكة",
      },
    ],
  },
  {
    slug: "fzah",
    title: "Fzah",
    titleAr: "فزعة",
    client: "Fzah Fintech",
    clientAr: "منصة فزعة للتمويل والتقسيط",
    year: 2024,
    categories: ["Fintech", "Paid Campaigns"],
    categoriesAr: ["تقنية مالية", "إعلانات ممولة"],
    services: [
      "Paid Performance Campaigns",
      "Interactive Motion Ads",
      "Funnel Optimization",
      "Conversion Tracking",
    ],
    servicesAr: [
      "إعلانات ممولة وإدارة أداء",
      "محتوى تفاعلي وإعلانات موشن",
      "تحسين مسار التحويل",
      "إعداد التتبع المتقدم",
    ],
    cover: "/covers/fzah.svg",
    gallery: ["/covers/fzah-1.svg", "/covers/fzah-2.svg"],
    accent: "#4361ee",
    tagline:
      "High-converting paid ads and interactive motion for smart installments",
    taglineAr:
      "إعلانات ممولة ومحتوى تفاعلي لمنصة تقسيط وتمويل تلبي احتياجات الشباب",
    intro:
      "Performance marketing machine built to drive instant credit approvals and app acquisitions across Meta, TikTok, and Snap.",
    introAr:
      "حملات رقمية مكثفة لمنصة 'فزعة' تشرح ميزة التقسيط السهل والمرن بدون فوائد خفية وبموافقة فورية.",
    challenge:
      "Explaining financial compliance, quick terms, and security while maintaining high conversion velocity.",
    challengeAr:
      "بناء الثقة في الحل المالي وتوضيح سهولة وسرعة الموافقة في ثوانٍ معدودة.",
    approach:
      "A/B tested 40+ ad creatives, deployed snappy UGC testimonials, and integrated GA4 + AppsFlyer conversion pipelines.",
    approachAr:
      "إجراء اختبارات A/B لأكثر من 40 إعلاناً مرئياً، وربط مسارات التتبع بدقة لتحقيق أعلى عائد على الإنفاق الإعلاني.",
    results: [
      {
        value: "+450%",
        label: "Approved financing applications",
        labelAr: "طلبات تمويل معتمدة",
      },
      {
        value: "4.6x",
        label: "ROAS across channels",
        labelAr: "العائد على الإنفاق ROAS",
      },
      {
        value: "< 2 min",
        label: "Median user signup flow",
        labelAr: "سرعة تسجيل المستخدم",
      },
    ],
  },
  {
    slug: "manabbeh",
    title: "Manabbeh",
    titleAr: "مُنَبّه",
    client: "Manabbeh Smart Tech",
    clientAr: "منصة مُنَبّه لتقسيط الأجهزة الذكية",
    year: 2024,
    categories: ["Fintech & Tech", "Full Digital"],
    categoriesAr: ["تقنية وأجهزة", "مشروع متكامل"],
    services: [
      "Platform UI/UX",
      "2D/3D Explainer Motion",
      "Social Media Management",
      "Launch Campaign",
    ],
    servicesAr: [
      "تصميم المنصة وتجربة المستخدم",
      "موشن جرافيك توضيحي",
      "إدارة السوشيال ميديا",
      "حملة إطلاق شاملة",
    ],
    cover: "/covers/manabbeh.svg",
    gallery: ["/covers/manabbeh-1.svg", "/covers/manabbeh-2.svg"],
    accent: "#7209b7",
    tagline:
      "Turnkey digital ecosystem and motion explaining smart device installment",
    taglineAr:
      "منصة وموشن وسوشيال ميديا لتقسيط أحدث الأجهزة الذكية بطريقة ذكية",
    intro:
      "Building the brand identity, interactive customer journey, and motion campaign for Manabbeh smart hardware installment portal.",
    introAr:
      "مشروع شامل صممت فيه عرب برو الهوية البصرية، واجهات الموقع، وسلسلة أفلام موشن توعوية تتيح للعملاء اقتناء أحدث الهواتف الذكية بالتقسيط المريح.",
    challenge:
      "Making tech financing crystal-clear, friendly, and trustworthy for young tech lovers and university students.",
    challengeAr:
      "جعل عملية تقسيط الإلكترونيات واضحة ومبسطة للشباب دون أي غموض أو تعقيدات بنكية.",
    approach:
      "Animated character guides, slick glassmorphic interface designs, transparent calculator tools, and viral TikTok trends.",
    approachAr:
      "تصميم حاسبة أقساط ذكية تفاعلية، وفيديوهات موشن تشرح خطوات الشراء في 3 نقرات، مع إدارة كاملة للمنصات الرقمية.",
    results: [
      {
        value: "+120k",
        label: "Registered customers",
        labelAr: "عميل مسجل في المنصة",
      },
      {
        value: "+98%",
        label: "Satisfaction rate",
        labelAr: "نسبة رضا العملاء",
      },
      {
        value: "+4.2M",
        label: "Social video views",
        labelAr: "مشاهدة للفيديوهات",
      },
    ],
  },
];

export const allCategories = [
  "All",
  ...Array.from(new Set(caseStudies.flatMap((c) => c.categories))),
];

export const allCategoriesAr = [
  "الكل",
  ...Array.from(new Set(caseStudies.flatMap((c) => c.categoriesAr))),
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAdjacentCaseStudies(slug: string) {
  const index = caseStudies.findIndex((c) => c.slug === slug);
  return {
    prev: caseStudies[(index - 1 + caseStudies.length) % caseStudies.length],
    next: caseStudies[(index + 1) % caseStudies.length],
  };
}
