"use client";

import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { TransitionLink } from "@/components/layout/page-transition";
import { ArrowUpRight, Compass, Eye, Target } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

/** Studio manifesto — Identity story, big editorial statement + full stats. */
export function Manifesto() {
  const { t, lang } = useTranslation();

  const statsList = [
    { value: t("stats.years.value"), label: t("stats.years.label") },
    { value: t("stats.clients.value"), label: t("stats.clients.label") },
    { value: t("stats.campaigns.value"), label: t("stats.campaigns.label") },
    { value: t("stats.accounts.value"), label: t("stats.accounts.label") },
    { value: t("stats.creative.value"), label: t("stats.creative.label") },
    { value: t("stats.projects.value"), label: t("stats.projects.label") },
    { value: t("stats.talents.value"), label: t("stats.talents.label") },
  ];

  const identityElements = [
    {
      icon: Eye,
      letter: lang === "ar" ? "ع — الصقر" : "Falcon (ع)",
      title: t("identity.falcon.title"),
      desc: t("identity.falcon.desc"),
    },
    {
      icon: Compass,
      letter: lang === "ar" ? "ر — الخطوط الثلاثة" : "Lines (ر)",
      title: t("identity.lines.title"),
      desc: t("identity.lines.desc"),
    },
    {
      icon: Target,
      letter: lang === "ar" ? "ب — النقطة" : "Dot (ب)",
      title: t("identity.dot.title"),
      desc: t("identity.dot.desc"),
    },
  ];

  return (
    <section className="border-t border-border">
      <div className="container-x section-y">
        <Reveal>
          <p className="text-label mb-10">{t("manifesto.label")}</p>
        </Reveal>

        <SplitTextReveal
          as="p"
          type="lines"
          className="text-display-sm max-w-4xl text-foreground/95"
        >
          {t("manifesto.text")}
        </SplitTextReveal>

        {/* Identity Concept Story */}
        <div className="mt-16 rounded border border-border/60 bg-surface/40 p-8 backdrop-blur-sm lg:p-12">
          <Reveal>
            <div className="mb-8">
              <span className="text-label text-accent">
                {t("identity.title")}
              </span>
              <h3 className="font-display mt-2 text-2xl text-foreground lg:text-3xl">
                {t("identity.subtitle")}
              </h3>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {identityElements.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.12}>
                <div className="h-full rounded border border-border/40 bg-surface/70 p-6 transition-colors duration-300 hover:border-accent/40">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-accent">
                      {item.letter}
                    </span>
                    <item.icon className="size-5 text-muted-foreground/60" />
                  </div>
                  <h4 className="font-display mb-2 text-lg text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-10">
          <TransitionLink
            href="/about"
            data-cursor="hover"
            className="link-underline inline-flex items-center gap-2 text-label text-foreground"
          >
            {t("manifesto.more")} <ArrowUpRight className="size-3.5" />
          </TransitionLink>
        </Reveal>

        {/* 7 Stats Component */}
        <div className="mt-24 border-t border-border pt-12">
          <Reveal>
            <p className="text-label mb-10 text-accent">{t("stats.title")}</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {statsList.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="border-t border-border/40 pt-4">
                  <p className="font-display text-4xl text-foreground lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="text-label mt-3 leading-normal text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
