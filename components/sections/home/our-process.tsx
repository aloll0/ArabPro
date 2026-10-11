"use client";

import { Reveal } from "@/components/motion/reveal";
import { useTranslation } from "@/lib/i18n/context";

interface ProcessStep {
  step: string;
  name: string;
  en: string;
  desc: string;
}

export function OurProcess() {
  const { t } = useTranslation();
  const steps = t("process.steps", []) as ProcessStep[];

  return (
    <section className="border-t border-border">
      <div className="container-x section-y">
        <div className="mb-16">
          <Reveal>
            <p className="text-label mb-4">{t("process.label")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl text-foreground lg:text-5xl">
              {t("process.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              {t("process.subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((st, i) => (
            <Reveal key={st.step || i} delay={i * 0.1}>
              <div className="relative flex h-full flex-col justify-between rounded border border-border/40 bg-surface/40 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface/70">
                <div>
                  <div className="mb-6 flex items-baseline justify-between border-b border-border/30 pb-3">
                    <span className="font-mono text-2xl font-bold text-accent">
                      {st.step}
                    </span>
                    <span className="text-label text-[0.65rem] text-muted-foreground">
                      {st.en}
                    </span>
                  </div>
                  <h3 className="font-display mb-3 text-lg font-medium text-foreground">
                    {st.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {st.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
