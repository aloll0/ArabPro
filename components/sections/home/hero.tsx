"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { LazyHeroCanvas } from "@/components/three";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { TransitionLink } from "@/components/layout/page-transition";
import { useTranslation } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

/**
 * Fullscreen cinematic hero: procedural 3D background, masked
 * split-text title synced with the preloader, scroll indicator.
 */
export function Hero() {
  const loaderDone = useAppStore((s) => s.loaderDone);
  const { t, lang } = useTranslation();

  const titleLines =
    lang === "ar"
      ? [t("hero.title1"), t("hero.title2")]
      : [t("hero.title1"), t("hero.title2")];

  const subtitle = t("hero.subtitle");

  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      {/* 3D background — lazy, never blocks first paint */}
      <div className="absolute inset-0" aria-hidden="true">
        <LazyHeroCanvas className="absolute inset-0" />
        {/* bottom fade so text always sits on solid ground */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="container-x relative pb-20 pt-40">
        <motion.div
          className="mb-8 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={loaderDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-label inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface/50 px-3.5 py-1 text-accent backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            {t("hero.label")}
          </span>

          <span className="text-label hidden text-muted-foreground/60 sm:inline">
            {lang === "ar"
              ? "الصقر (ع) • الخطوط (ر) • النقطة (ب)"
              : "Vision (ع) • Direction (ر) • Precision (ب)"}
          </span>
        </motion.div>

        <h1
          aria-label={titleLines.join(" ")}
          className="text-display-xl max-w-[14ch]"
        >
          {titleLines.map((line: string, i: number) => (
            <SplitTextReveal
              key={`${lang}-${line}-${i}`}
              as="span"
              type="words"
              trigger="manual"
              play={loaderDone}
              delay={0.15 + i * 0.12}
              className={cn(
                "block",
                i === 1 && "italic text-accent",
                i === 2 && "md:px-[4vw]",
              )}
            >
              {line}
            </SplitTextReveal>
          ))}
        </h1>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-10">
          <motion.p
            className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={loaderDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={loaderDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.85 }}
          >
            <Magnetic>
              <Button asChild size="lg" data-cursor="hover">
                <TransitionLink href="/work">
                  {t("hero.ctaWork")}
                </TransitionLink>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="outline" size="lg" data-cursor="hover">
                <TransitionLink href="/contact">
                  {t("hero.ctaContact")}
                </TransitionLink>
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        initial={{ opacity: 0 }}
        animate={loaderDone ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 1 }}
        aria-hidden="true"
      >
        <span className="text-label">{t("hero.scroll")}</span>
        <span className="relative block h-12 w-px overflow-hidden bg-border">
          <motion.span
            className="absolute left-0 top-0 h-4 w-px bg-accent"
            animate={{ y: [-16, 48] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>
      </motion.div>
    </section>
  );
}
