"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { ParallaxLayer } from "@/components/motion/parallax-layer";
import { Marquee } from "@/components/motion/marquee";
import { useTranslation } from "@/lib/i18n/context";
import {
  ShieldCheck,
  Zap,
  Target,
  Sparkles,
  Users,
  Camera,
  MapPin,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  const { t, lang } = useTranslation();

  const PILLARS = [
    {
      icon: ShieldCheck,
      name: lang === "ar" ? "شراكات استراتيجية" : "Strategic Partnerships",
      description:
        lang === "ar"
          ? "بناء علاقات طويلة الأمد وفرص نوعية تخدم النمو والتوسع في السوق السعودي والخليجي."
          : "Building enduring relationships and high-value opportunities that drive sustainable market expansion.",
    },
    {
      icon: Target,
      name: lang === "ar" ? "حلول متكاملة" : "Integrated Solutions",
      description:
        lang === "ar"
          ? "ربط الخدمات التسويقية والرقمية والتجارية والميدانية في مسار واحد متناغم تحت سقف واحد."
          : "Unifying marketing, digital, commercial and on-ground services into one seamless operational path.",
    },
    {
      icon: Zap,
      name: lang === "ar" ? "تنفيذ مرن" : "Flexible Execution",
      description:
        lang === "ar"
          ? "تصميم نطاق العمل بحسب طبيعة المشروع واحتياج العميل الفعلي، بعيداً عن القوالب الجاهزة."
          : "Scoping custom solutions built around project objectives, not rigid boilerplate packages.",
    },
    {
      icon: Sparkles,
      name: lang === "ar" ? "أداء عالٍ وقابل للقياس" : "High Performance",
      description:
        lang === "ar"
          ? "تركيز مطلق على جودة الإخراج، سرعة الإنجاز، ومؤشرات الأداء القابلة للقياس (ROAS & CAC)."
          : "Relentless focus on cinematic craft, delivery velocity, and measurable commercial return.",
    },
  ];

  const CAPABILITIES = [
    {
      icon: Users,
      title: t("production.modelsTitle"),
      desc: t("production.modelsDesc"),
      highlights:
        lang === "ar"
          ? [
              "نساء ورجال بأزياء وطنية (ثوب، شماغ، عباية)",
              "أطفال ومراهقون وكبار السن",
              "مؤثرون ومقدمو برامج وممثلون",
              "عقود موثقة وحقوق استخدام واضحة",
            ]
          : [
              "Authentic national attire (thobe, shemagh, abaya)",
              "Children, youth and seniors",
              "Actors, hosts and influencers",
              "Documented rights & usage contracts",
            ],
    },
    {
      icon: Camera,
      title: t("production.crewTitle"),
      desc: t("production.crewDesc"),
      highlights:
        lang === "ar"
          ? [
              "كاميرات سينمائية 4K / 8K وعدسات سينمائية",
              "إضاءة متقدمة LED و HMI ومولدات",
              "درون احترافي مرخص وسلايدر وكرين",
              "ميكروفونات لاسلكية ومسجلات صوت متطورة",
            ]
          : [
              "4K / 8K cinema cameras & prime lenses",
              "Advanced LED & HMI lighting rigs",
              "Licensed drone ops, cranes & sliders",
              "Wireless boom mics & field sound rigs",
            ],
    },
    {
      icon: MapPin,
      title: t("production.locationsTitle"),
      desc: t("production.locationsDesc"),
      highlights:
        lang === "ar"
          ? [
              "استوديوهات بسايكلوراما بيضاء وسوداء وكروما",
              "استوديوهات بودكاست وتصوير منتجات مجهزة",
              "مواقع داخلية وخارجية (صحراء، مزارع، تراث، مدن)",
              "استخراج تصاريح التصوير والتنسيق مع الجهات",
            ]
          : [
              "White/black cyclorama & green screen studios",
              "Dedicated podcast & product studios",
              "Diverse indoor & outdoor locations",
              "Official filming permits & authority coordination",
            ],
    },
  ];

  return (
    <main className="pt-40">
      <header className="container-x mb-24">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-label text-accent font-mono">
              {lang === "ar" ? "عن عرب برو" : "About Arab Pro"}
            </span>
            <span className="text-border">/</span>
            <span className="text-label text-muted-foreground">
              {lang === "ar" ? "تأسست في الرياض 2019" : "Est. Riyadh 2019"}
            </span>
          </div>
        </Reveal>
        <SplitTextReveal
          as="h1"
          type="words"
          className="text-display-xl max-w-[15ch]"
        >
          {t("brand.tagline")}
        </SplitTextReveal>
        <Reveal delay={0.25}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            {t("brand.description")}
          </p>
        </Reveal>
      </header>

      {/* Hero Image Band */}
      <div className="relative h-[55vh] overflow-hidden">
        <ParallaxLayer speed={-0.35} className="absolute -inset-y-20 inset-x-0">
          <Image
            src="/covers/national-day-film.svg"
            alt="Arab Pro Studio Visual"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Strategic Pillars */}
      <section className="container-x section-y">
        <Reveal>
          <p className="text-label mb-4 text-accent">
            {lang === "ar" ? "ركائز العمل والتميز" : "Strategic Pillars"}
          </p>
          <h2 className="font-display mb-14 text-3xl text-foreground lg:text-4xl">
            {lang === "ar"
              ? "شريك مُصمم للاحتياجات التسويقية والإنتاجية المركبة"
              : "A Partner Built for Complex Marketing & Production Needs"}
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.name} delay={(i % 2) * 0.12}>
              <div className="rounded border border-border/40 bg-surface/50 p-8 transition-colors hover:border-accent/40 hover:bg-surface/80">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <pillar.icon className="size-6" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display mb-3 text-2xl text-foreground">
                  {pillar.name}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Production Infrastructure & Capabilities */}
      <section className="border-t border-border">
        <div className="container-x section-y">
          <Reveal>
            <p className="text-label mb-4 text-accent">
              {lang === "ar" ? "البنية التحتية" : "Infrastructure"}
            </p>
            <h2 className="font-display mb-16 text-3xl text-foreground lg:text-4xl">
              {t("production.title")}
            </h2>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.12}>
                <div className="flex h-full flex-col justify-between rounded border border-border/40 bg-surface/40 p-8 transition-colors hover:border-accent/50 hover:bg-surface/80">
                  <div>
                    <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <cap.icon className="size-6" />
                    </div>
                    <h3 className="font-display mb-3 text-2xl text-foreground">
                      {cap.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                      {cap.desc}
                    </p>
                    <ul className="space-y-2.5 border-t border-border/30 pt-4">
                      {cap.highlights.map((hl, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-foreground/80"
                        >
                          <CheckCircle className="size-3.5 shrink-0 text-accent mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rolling Statement Banner */}
      <div className="border-t border-border py-12" aria-hidden="true">
        <Marquee duration={85} repeat={4}>
          <span className="flex items-center gap-[4vw] whitespace-nowrap font-display text-4xl italic text-muted-foreground/60 md:text-5xl">
            {lang === "ar"
              ? "من الاستراتيجية إلى الشاشة — ومن الفكرة إلى الميدان — نبني المستقبل معاً —"
              : "From strategy to screen — from idea to the field — building the future together —"}
          </span>
        </Marquee>
      </div>
    </main>
  );
}
