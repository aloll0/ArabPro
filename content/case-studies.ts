/**
 * Mock case-study content — swap with real client work per project.
 * Covers are procedural SVGs from `scripts/generate-covers.mjs`.
 */

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  year: number;
  categories: string[];
  services: string[];
  cover: string;
  gallery: string[];
  /** Accent color used for hover states on this project */
  accent: string;
  tagline: string;
  intro: string;
  challenge: string;
  approach: string;
  results: { value: string; label: string }[];
  website?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nova-films",
    title: "Nova Films",
    client: "Nova Films",
    year: 2025,
    categories: ["3D", "Web Experience"],
    services: ["Art Direction", "WebGL", "Creative Development"],
    cover: "/covers/nova-films.svg",
    gallery: ["/covers/nova-films-1.svg", "/covers/nova-films-2.svg"],
    accent: "#b57edc",
    tagline: "A portfolio that plays like a title sequence",
    intro:
      "Nova Films produces commercials and short films with an obsessive eye for light. Their site needed to feel like their showreel: dark, tactile, impossible to skim without stopping.",
    challenge:
      "Show twenty years of film work without turning the site into a video wall. Every frame had to load instantly on set, on location, on a producer's phone.",
    approach:
      "We built a WebGL-driven timeline where each production is a lit scene — camera moves, not page loads. Footage streams in only when a project is opened, keeping the initial payload under 300KB.",
    results: [
      { value: "+212%", label: "Time on site" },
      { value: "9.2s", label: "Avg. scroll depth in hero" },
      { value: "SOTD", label: "Awwwards Site of the Day" },
    ],
  },
  {
    slug: "klar-audio",
    title: "KLAR Audio",
    client: "KLAR",
    year: 2025,
    categories: ["E-commerce", "Motion"],
    services: ["E-commerce", "Motion Design", "3D Product"],
    cover: "/covers/klar-audio.svg",
    gallery: ["/covers/klar-audio-1.svg", "/covers/klar-audio-2.svg"],
    accent: "#7d5cff",
    tagline: "Hi-fi you can almost hear through the screen",
    intro:
      "KLAR builds reference-grade speakers in Copenhagen. The brief: make the product page feel as considered as the product — no noise, no clutter, just signal.",
    challenge:
      "Selling €4,000 speakers online means replacing the listening room. The site had to carry weight, material and sound through pure visual craft.",
    approach:
      "A 3D product configurator with physically-based materials, scroll-driven exploded views of the crossover, and a checkout flow reduced to three moves.",
    results: [
      { value: "+68%", label: "Conversion rate" },
      { value: "-41%", label: "Cart abandonment" },
      { value: "FWA", label: "FWA of the Day" },
    ],
  },
  {
    slug: "orbital-festival",
    title: "Orbital Festival",
    client: "Orbital",
    year: 2024,
    categories: ["Web Experience", "Identity"],
    services: ["Identity", "Creative Development", "WebGL"],
    cover: "/covers/orbital-festival.svg",
    gallery: [
      "/covers/orbital-festival-1.svg",
      "/covers/orbital-festival-2.svg",
    ],
    accent: "#b8ff2e",
    tagline: "A lineup announcement that became the event",
    intro:
      "Orbital is a three-day electronic festival in the Alps. Each year the identity regenerates — our system made the website the first artist on the bill.",
    challenge:
      "Ship a site that survives 40,000 concurrent fans at lineup drop, then keeps them exploring for the six months until the gates open.",
    approach:
      "Generative WebGL orbits react to each artist's audio signature. The lineup reveal ran as a live sequence — names decrypting in real time as the countdown hit zero.",
    results: [
      { value: "1.2M", label: "Visits in launch week" },
      { value: "0", label: "Seconds of downtime" },
      { value: "+34%", label: "Early-bird sales YoY" },
    ],
  },
  {
    slug: "maison-huit",
    title: "Maison Huit",
    client: "Maison Huit",
    year: 2024,
    categories: ["Identity", "E-commerce"],
    services: ["Art Direction", "E-commerce", "Editorial Design"],
    cover: "/covers/maison-huit.svg",
    gallery: ["/covers/maison-huit-1.svg", "/covers/maison-huit-2.svg"],
    accent: "#ff2e63",
    tagline: "Couture pacing for a digital flagship",
    intro:
      "Maison Huit is an eight-piece-per-season couture house. Their digital flagship needed the rhythm of a runway: slow, deliberate, unforgettable.",
    challenge:
      "Eight products a season means every pixel works harder. The store had to feel editorial-first while quietly being a ruthless conversion machine.",
    approach:
      "We designed the catalogue as chapters, not grids — full-bleed typography, garment films shot in-house, and a private client area with appointment booking.",
    results: [
      { value: "3.4x", label: "Avg. order value" },
      { value: "72%", label: "Returning clientele" },
      { value: "Vogue", label: "Featured in Vogue Business" },
    ],
  },
  {
    slug: "spectra-lab",
    title: "Spectra Lab",
    client: "Vanta Labs",
    year: 2023,
    categories: ["Product", "Web Experience"],
    services: ["Product Design", "Data Visualization", "Frontend"],
    cover: "/covers/spectra-lab.svg",
    gallery: ["/covers/spectra-lab-1.svg", "/covers/spectra-lab-2.svg"],
    accent: "#2ee6ff",
    tagline: "Making a million data points feel like weather",
    intro:
      "Spectra is Vanta Labs' real-time analytics platform. We rebuilt its public face and its dashboard shell — the part every screenshot, demo and deal flows through.",
    challenge:
      "Analytics tools all scream the same. Spectra needed calm: information density that reads like a glance out the window, not a cockpit.",
    approach:
      "A canvas-rendered visualization engine with a strict motion grammar — data enters like weather fronts. The marketing site runs the real engine with live sample data.",
    results: [
      { value: "+87%", label: "Demo requests" },
      { value: "18min", label: "Median session in sandbox" },
      { value: "Series B", label: "Raised on the new deck + site" },
    ],
  },
  {
    slug: "polaris-observatory",
    title: "Polaris Observatory",
    client: "Polaris Foundation",
    year: 2023,
    categories: ["3D", "Product"],
    services: ["WebGL", "3D", "Accessibility"],
    cover: "/covers/polaris-observatory.svg",
    gallery: [
      "/covers/polaris-observatory-1.svg",
      "/covers/polaris-observatory-2.svg",
    ],
    accent: "#ffc42e",
    tagline: "The night sky, streamed to every classroom",
    intro:
      "Polaris is a public observatory and science foundation. Their virtual planetarium brings live telescope feeds and a navigable star atlas to schools worldwide.",
    challenge:
      "Render 110,000 stars on a 2015 school Chromebook — and keep the experience fully usable by keyboard and screen reader.",
    approach:
      "A tiered WebGL renderer that degrades from shader-instanced points to canvas sprites, with a parallel semantic layer narrating constellations as structured text.",
    results: [
      { value: "410k", label: "Students reached in year one" },
      { value: "60fps", label: "On 8-year-old hardware" },
      { value: "WCAG AA", label: "Fully conformant" },
    ],
  },
];

export const allCategories = [
  "All",
  ...Array.from(new Set(caseStudies.flatMap((c) => c.categories))),
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
