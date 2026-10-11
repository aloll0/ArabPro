"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { getLenis } from "@/lib/hooks/use-lenis";
import { TransitionLink } from "@/components/layout/page-transition";
import { Reveal } from "@/components/motion/reveal";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { Magnetic } from "@/components/motion/magnetic";

import { FullLogo } from "@/components/ui/logo";

import { useTranslation } from "@/lib/i18n/context";

/** Footer with a big final CTA, socials and back-to-top. */
export function Footer() {
  const year = new Date().getFullYear();
  const { t, lang } = useTranslation();

  const scrollTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="container-x section-y">
        <Reveal>
          <p className="text-label mb-8">
            {lang === "ar"
              ? "هل لديك مشروع أو فكرة حملة؟"
              : "Got a project in mind?"}
          </p>
        </Reveal>
        <TransitionLink
          href="/contact"
          data-cursor="view"
          data-cursor-label={lang === "ar" ? "تواصل" : "Say hi"}
          className="group block"
        >
          <SplitTextReveal
            as="p"
            type="words"
            className="text-display-xl transition-colors duration-500 group-hover:text-accent"
          >
            {t("brand.tagline")}
          </SplitTextReveal>
          <span className="mt-6 inline-flex items-center gap-2 text-label transition-colors group-hover:text-accent">
            {lang === "ar" ? "ابدأ محادثة مع فريقنا" : "Start a conversation"}
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </TransitionLink>

        <div className="mt-24 grid gap-10 border-t border-border pt-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <FullLogo width={230} className="mb-4" />
            <p className="max-w-sm text-sm text-muted-foreground">
              {t("brand.subTagline")}. {t("brand.location")}.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="text-label mb-4">
              {lang === "ar" ? "خريطة الموقع" : "Sitemap"}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <TransitionLink
                  href="/"
                  data-cursor="hover"
                  className="link-underline text-foreground/80 hover:text-foreground"
                >
                  {t("nav.home")}
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/work"
                  data-cursor="hover"
                  className="link-underline text-foreground/80 hover:text-foreground"
                >
                  {t("nav.work")}
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/#services"
                  data-cursor="hover"
                  className="link-underline text-foreground/80 hover:text-foreground"
                >
                  {t("nav.services")}
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/about"
                  data-cursor="hover"
                  className="link-underline text-foreground/80 hover:text-foreground"
                >
                  {t("nav.about")}
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/contact"
                  data-cursor="hover"
                  className="link-underline text-foreground/80 hover:text-foreground"
                >
                  {t("nav.contact")}
                </TransitionLink>
              </li>
            </ul>
          </nav>
          <div>
            <p className="text-label mb-4">
              {lang === "ar" ? "قنوات التواصل" : "Socials"}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {siteConfig.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="link-underline text-foreground/80 hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between text-xs text-muted-foreground">
          <p>
            © {year}{" "}
            {lang === "ar" ? siteConfig.legalName : siteConfig.legalNameEn}.{" "}
            {lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
          <Magnetic>
            <button
              type="button"
              onClick={scrollTop}
              data-cursor="hover"
              aria-label="Back to top"
              className="flex size-12 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUp className="size-4" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
