"use client";

import { Reveal } from "@/components/motion/reveal";
import { useTranslation } from "@/lib/i18n/context";
import { TransitionLink } from "@/components/layout/page-transition";
import {
  Rocket,
  RefreshCw,
  Flame,
  Tent,
  FileCheck2,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const SCENARIO_ICONS = [Rocket, RefreshCw, Flame, Tent, FileCheck2, TrendingUp];

interface ScenarioItem {
  title: string;
  need: string;
  solution: string;
}

export function ClientScenarios() {
  const { t, lang } = useTranslation();
  const scenarios = t("scenarios.items", []) as ScenarioItem[];

  return (
    <section className="border-t border-border">
      <div className="container-x section-y">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-label mb-4">{t("scenarios.label")}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl text-foreground lg:text-5xl">
                {t("scenarios.title")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-sm text-muted-foreground lg:text-base">
              {t("scenarios.subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((sc, i) => {
            const Icon = SCENARIO_ICONS[i % SCENARIO_ICONS.length];
            return (
              <Reveal key={sc.title || i} delay={(i % 3) * 0.1}>
                <div className="group relative flex h-full flex-col justify-between rounded border border-border/40 bg-surface/50 p-7 transition-all duration-300 hover:border-accent/50 hover:bg-surface/90 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-full border border-border/60 bg-surface-2 text-accent transition-colors group-hover:border-accent group-hover:bg-accent/15">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground/60">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="font-display mb-2 text-xl text-foreground group-hover:text-accent transition-colors">
                      {sc.title}
                    </h3>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent/80">
                      {sc.need}
                    </p>

                    <div className="mt-4 border-t border-border/30 pt-4">
                      <span className="text-label text-[0.65rem] text-muted-foreground/70 block mb-1.5">
                        {lang === "ar" ? "الحلول المخصصة:" : "Capability Mix:"}
                      </span>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {sc.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/20">
                    <TransitionLink
                      href="/contact"
                      data-cursor="hover"
                      className="inline-flex items-center gap-2 text-label text-xs text-foreground/80 transition-colors group-hover:text-accent"
                    >
                      {lang === "ar"
                        ? "تفعيل هذا المسار"
                        : "Activate this path"}
                      <ArrowUpRight className="size-3.5" />
                    </TransitionLink>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
