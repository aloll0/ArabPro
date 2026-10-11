"use client";

import { Marquee } from "@/components/motion/marquee";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { useTranslation } from "@/lib/i18n/context";

const ACCOLADES_AR = [
  "+200 عميل موثوق",
  "+100 حملة متكاملة",
  "+3000 عمل إبداعي",
  "+500 موهبة ومودل سعودي",
  "شريك حلول معتمد منذ 2019",
  "تغطية شاملة بالمملكة والخليج",
];

const ACCOLADES_EN = [
  "+200 Trusted Clients",
  "+100 Integrated Campaigns",
  "+3000 Creative Works",
  "+500 Registered Saudi Talents",
  "Certified KSA Partner Since 2019",
  "Kingdom & Gulf Wide Execution",
];

/** Social proof: continuous seamless marquee + signature manifesto statement. */
export function Testimonial() {
  const { lang } = useTranslation();
  const accolades = lang === "ar" ? ACCOLADES_AR : ACCOLADES_EN;

  return (
    <section className="border-t border-border overflow-hidden">
      <div className="py-10 overflow-hidden" aria-label="Achievements">
        <Marquee duration={80} reverse repeat={3}>
          {accolades.map((item) => (
            <span
              key={item}
              className="flex items-center gap-[4vw] whitespace-nowrap text-label text-base! text-foreground/80"
            >
              {item}
              <span className="text-accent" aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-x section-y border-t border-border">
        <Reveal>
          <p className="text-label mb-10">
            {lang === "ar" ? "07 — الرؤية والأثر" : "07 — Vision & Impact"}
          </p>
        </Reveal>
        <figure>
          <blockquote>
            <SplitTextReveal
              as="p"
              type="lines"
              className="text-display-sm max-w-5xl italic text-foreground/95"
            >
              {lang === "ar"
                ? "“من الاستراتيجية إلى الشاشة، ومن الفكرة إلى الميدان — نبتكر لكل علامة حضوراً متفرداً لا يكتفي بالظهور، بل يرسخ أثراً مستداماً في قلوب وعقول الجمهور.”"
                : "“From strategy to screen, from idea to the field — we engineer an unforgettable presence for ambitious brands that refuses to blend in.”"}
            </SplitTextReveal>
          </blockquote>
          <Reveal delay={0.25}>
            <figcaption className="mt-10 text-sm text-muted-foreground">
              <span className="text-foreground">
                {lang === "ar" ? "عرب برو للحلول المتكاملة" : "Arab Pro Agency"}
              </span>{" "}
              —{" "}
              {lang === "ar"
                ? "الرياض، المملكة العربية السعودية"
                : "Riyadh, Saudi Arabia"}
            </figcaption>
          </Reveal>
        </figure>
      </div>
    </section>
  );
}
