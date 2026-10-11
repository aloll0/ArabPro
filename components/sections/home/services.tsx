"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { padIndex } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/context";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { TransitionLink } from "@/components/layout/page-transition";

interface ServiceItem {
  id: string;
  name: string;
  tag: string;
  desc: string;
  points: string[];
}

/**
 * Integrated 8 Services Ecosystem
 * Interactive tabs / expandable rows with rich deliverables.
 */
export function Services() {
  const { t, lang } = useTranslation();
  const servicesList = t("services.items", []) as ServiceItem[];
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="services" className="border-t border-border">
      <div className="container-x section-y">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-label mb-4">{t("services.label")}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl text-foreground lg:text-5xl">
                {t("services.title")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-sm text-muted-foreground lg:text-base">
              {t("services.subtitle")}
            </p>
          </Reveal>
        </div>

        {/* Desktop / Tablet: Interactive Tabs & Detail View */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Services Selector List */}
          <div className="space-y-2 lg:col-span-5">
            {servicesList.map((service, i) => {
              const isActive = activeTab === i;
              return (
                <button
                  key={service.id || i}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  data-cursor="hover"
                  className={`group relative flex w-full items-center justify-between rounded p-4 text-start transition-all duration-300 border ${
                    isActive
                      ? "border-accent/40 bg-surface/90 shadow-[0_0_20px_rgba(181,126,220,0.12)]"
                      : "border-border/30 bg-surface/30 hover:border-border hover:bg-surface/60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-label transition-colors font-mono ${
                        isActive
                          ? "text-accent font-bold"
                          : "text-muted-foreground"
                      }`}
                    >
                      {padIndex(i)}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-lg transition-colors md:text-xl ${
                          isActive
                            ? "text-accent font-medium"
                            : "text-foreground group-hover:text-foreground/90"
                        }`}
                      >
                        {service.name}
                      </h3>
                      <span className="text-label text-[0.65rem] opacity-60">
                        {service.tag}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`size-4 transition-transform duration-300 ${
                      isActive
                        ? "text-accent translate-x-0.5 -translate-y-0.5"
                        : "text-muted-foreground/40 group-hover:text-muted-foreground"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {servicesList[activeTab] && (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="sticky top-28 flex flex-col justify-between rounded border border-border/80 bg-surface/80 p-8 backdrop-blur-md lg:p-12"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between border-b border-border/50 pb-4">
                      <span className="text-label text-accent font-mono text-sm">
                        {padIndex(activeTab)} / 08
                      </span>
                      <span className="text-label text-muted-foreground">
                        {servicesList[activeTab].tag}
                      </span>
                    </div>

                    <h3 className="font-display mb-4 text-3xl text-foreground lg:text-4xl">
                      {servicesList[activeTab].name}
                    </h3>

                    <p className="mb-8 text-base leading-relaxed text-muted-foreground lg:text-lg">
                      {servicesList[activeTab].desc}
                    </p>

                    <div className="mb-10">
                      <p className="text-label mb-4 text-foreground/80">
                        {lang === "ar"
                          ? "أبرز المخرجات والحلول:"
                          : "Key Capabilities & Deliverables:"}
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {servicesList[activeTab].points?.map(
                          (pt: string, pIdx: number) => (
                            <div
                              key={pIdx}
                              className="flex items-start gap-2.5 rounded border border-border/40 bg-surface-2/40 p-3 text-sm text-foreground/90"
                            >
                              <CheckCircle2 className="size-4 shrink-0 text-accent mt-0.5" />
                              <span className="leading-snug">{pt}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-6">
                    <span className="text-xs text-muted-foreground">
                      {lang === "ar"
                        ? "حلول مخصصة حسب حالة الجهة والميزانية"
                        : "Tailored to your organizational scale & goals"}
                    </span>
                    <TransitionLink
                      href="/contact"
                      data-cursor="hover"
                      className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-label text-accent transition-colors hover:bg-accent hover:text-black"
                    >
                      {lang === "ar"
                        ? "طلب استشارة أو عرض"
                        : "Request Proposal"}
                      <ArrowUpRight className="size-3.5" />
                    </TransitionLink>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
