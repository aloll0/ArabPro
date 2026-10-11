/**
 * ─────────────────────────────────────────────────────────────────
 *  SITE CONFIG — Arab Pro 2026 Edition
 *  Integrated Saudi Solutions Partner — Riyadh, Kingdom of Saudi Arabia
 * ─────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Brand name — used in navbar, footer, metadata, OG image */
  name: "عرب برو | ARAB PRO",
  nameAr: "عرب برو",
  nameEn: "ARAB PRO",

  /** Legal / long-form name for JSON-LD */
  legalName: "شركة عرب برو للخدمات التسويقية والحلول المتكاملة",
  legalNameEn: "ARAB PRO Integrated Solutions Agency",

  /** One-line positioning, shown in hero + metadata */
  tagline: "ما نصنع إعلانات.. نصنع أثرًا",
  taglineEn: "We don't just make ads.. We create impact.",

  subTagline:
    "من الاستراتيجية إلى الشاشة، ومن الفكرة إلى الميدان — كل ما تحتاجه علامتك تحت سقف واحد",
  subTaglineEn:
    "From strategy to screen, from idea to the field — everything your brand needs under one roof",

  /** SEO description */
  description:
    "شريك حلول سعودي متكامل تأسس عام 2019 في الرياض يخدم الجهات الحكومية، الشركات الكبرى، والمشاريع الطموحة من خلال الاستراتيجية، الهوية، الإنتاج المرئي، الفعاليات، والذكاء الاصطناعي.",
  descriptionEn:
    "Saudi-based integrated solutions partner founded in 2019 in Riyadh, serving government entities, enterprise clients, and ambitious projects through strategy, branding, visual production, events, and AI solutions.",

  /** Production URL — used for canonical, sitemap, OG */
  url: "https://arab-pro.sa",

  /** Contact */
  email: "ceo@arabpro.agency",
  website: "arab-pro.sa",
  location: "الرياض، المملكة العربية السعودية",
  locationEn: "Riyadh, Kingdom of Saudi Arabia",

  /** Founded year */
  since: 2019,

  nav: [
    { label: "أعمالنا", labelEn: "Work", href: "/work" },
    { label: "منظومة الخدمات", labelEn: "Services", href: "/#services" },
    { label: "عن عرب برو", labelEn: "About", href: "/about" },
    { label: "تواصل معنا", labelEn: "Contact", href: "/contact" },
  ] as const,

  socials: [
    {
      label: "LinkedIn",
      href: "https://eg.linkedin.com/company/arabpro-agency",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@arabpro.agency?_r=1&_t=ZS-9ARfoLZtPSH",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/arabpro.agency?xtok=MTBidjQ5MWI3dDJ6bQ==",
    },
  ] as const,

  hero: {
    titleLines: ["ما نصنع إعلانات..", "نصنع أثرًا"] as const,
    titleLinesEn: ["We don't just make ads..", "We create impact"] as const,
    subtitle:
      "من الاستراتيجية إلى الشاشة، ومن الفكرة إلى الميدان — حلول متكاملة تخدم الجهات الحكومية والشركات الكبرى والمشاريع الطموحة.",
    subtitleEn:
      "From strategy to screen, from idea to the field — integrated solutions serving government entities, large companies, and ambitious initiatives.",
    cta: { label: "استعرض أعمالنا", labelEn: "See our work", href: "/work" },
  },

  /** Stats & Counters */
  stats: [
    {
      value: "+7",
      label: "سنوات خبرة (منذ 2019)",
      labelEn: "Years of Experience",
    },
    {
      value: "+200",
      label: "عميل موثوق (جهات وشركات)",
      labelEn: "Trusted Clients",
    },
    {
      value: "+100",
      label: "حملة تسويقية منفذة",
      labelEn: "Campaigns Executed",
    },
    { value: "+300", label: "حساب ومنصة مدارة", labelEn: "Managed Accounts" },
    { value: "+3000", label: "عمل إبداعي منفذ", labelEn: "Creative Works" },
    { value: "+50", label: "مشروع متكامل شامل", labelEn: "Turnkey Projects" },
    {
      value: "+500",
      label: "مودل وموهبة سعودية",
      labelEn: "Saudi Models & Talents",
    },
  ] as const,

  /** Success Partners & Real Clients */
  clients: [
    "قطار الرياض — Flow",
    "إيجاري — Ejari",
    "ابتكار المتحدة — Ebtekar United",
    "منصة سَم — Sam Delivery",
    "أكاسيا — Acacia",
    "أثر الإدارية — Impact MGMT",
    "بيئتي — Beeati",
    "أرباع البن — Quarters Coffee",
    "الرواد — Alrowad",
    "سيرفيكا — Servica",
    "الشّهي — Alsheehi",
    "شَدَن — Shadan",
    "لوكسارا — Loksara",
    "سوفان — Sovan",
    "مبيت — Mabeet",
    "فزعة — Fzah",
    "مُنَبّه — Manabbeh",
    "مركب — Morkb",
    "سرج للذكاء الاصطناعي — Sarj.ai",
    "ريستارت — Restart",
    "قفتوري — Giftory",
    "موجة — Mowjah",
    "أعوان الجزيرة — Awan Al Jazeerah",
    "إيكو دليفري — Eco Delivery",
    "شحن — Shahn",
    "لاين — Line",
  ] as const,

  clientsEn: [
    "Riyadh Metro — Flow",
    "Ejari KSA",
    "Ebtekar United",
    "Sam Delivery",
    "Acacia",
    "Impact MGMT",
    "Beeati",
    "Quarters Coffee",
    "Alrowad",
    "Servica",
    "Alsheehi",
    "Shadan",
    "Loksara",
    "Sovan",
    "Mabeet",
    "Fzah",
    "Manabbeh",
    "Morkb",
    "Sarj AI",
    "Restart",
    "Giftory",
    "Mowjah",
    "Awan Al Jazeerah",
    "Eco Delivery",
    "Shahn",
    "Line Agency",
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
