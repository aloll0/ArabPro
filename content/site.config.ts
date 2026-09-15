/**
 * ─────────────────────────────────────────────────────────────────
 *  SITE CONFIG — the single file to edit for every new client.
 *  Brand, copy, SEO defaults, socials and nav all live here.
 *  Colors & fonts live in `app/globals.css` (CSS variables).
 * ─────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Brand name — used in navbar, footer, metadata, OG image */
  name: "ARAB PRO",
  /** Legal / long-form name for JSON-LD */
  legalName: "ARAB PRO",
  /** One-line positioning, shown in hero + metadata */
  tagline: "Digital experiences with a cinematic soul",
  /** SEO description */
  description:
    "ARAB PRO is an award-winning creative studio crafting cinematic websites, real-time 3D and brand experiences for ambitious companies.",
  /** Production URL — used for canonical, sitemap, OG */
  url: "https://arab-pro.com",
  /** Contact */
  email: "[EMAIL_ADDRESS]",
  location: "Saudi Arabia — Riyadh",
  /** Founded year, shown in footer */
  since: 2026,

  nav: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as const,

  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X / Twitter", href: "https://x.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Awwwards", href: "https://awwwards.com" },
  ] as const,

  hero: {
    /** Each entry is one line of the display title */
    titleLines: ["Cinematic", "digital", "experiences"] as const,
    subtitle:
      "We design and build immersive websites, real-time 3D and motion systems for brands that refuse to be ordinary.",
    cta: { label: "See our work", href: "/work" },
  },

  /** Fake client logos for the marquee — replace per project */
  clients: [
    "NOVA FILMS",
    "KLAR",
    "ORBITAL",
    "MAISON HUIT",
    "SPECTRA",
    "VANTA LABS",
    "POLARIS",
    "HELIOTROPE",
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
