"use client";

import { siteConfig } from "@/content/site.config";
import { Reveal } from "@/components/motion/reveal";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { useTranslation } from "@/lib/i18n/context";
import { Mail, MapPin, Globe } from "lucide-react";

export default function ContactPage() {
  const { t, lang } = useTranslation();

  return (
    <main className="container-x pt-40 pb-28">
      <Reveal>
        <p className="text-label mb-8 text-accent font-mono">
          {t("contact.label")}
        </p>
      </Reveal>
      <SplitTextReveal
        as="h1"
        type="words"
        className="text-display-xl mb-20 max-w-[15ch]"
      >
        {t("contact.title")}
      </SplitTextReveal>

      <div className="grid gap-20 lg:grid-cols-[1fr_22rem]">
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>

        <aside className="space-y-12 rounded border border-border/40 bg-surface/40 p-8">
          <Reveal delay={0.25}>
            <div className="flex items-center gap-2 text-accent mb-3">
              <Mail className="size-4" />
              <p className="text-label">{t("contact.emailLabel")}</p>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              data-cursor="hover"
              className="link-underline text-lg font-medium text-foreground hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="flex items-center gap-2 text-accent mb-3">
              <MapPin className="size-4" />
              <p className="text-label">{t("contact.locationLabel")}</p>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              {t("brand.location")}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex items-center gap-2 text-accent mb-3">
              <Globe className="size-4" />
              <p className="text-label">{t("contact.phoneLabel")}</p>
            </div>
            <a
              href="https://arab-pro.sa"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="link-underline text-foreground/90 hover:text-accent"
            >
              {siteConfig.website}
            </a>
          </Reveal>

          <Reveal delay={0.45}>
            <p className="text-label mb-4 text-accent">
              {lang === "ar" ? "قنوات التواصل الاجتماعي" : "Social Media"}
            </p>
            <ul className="space-y-3">
              {siteConfig.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="link-underline text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </main>
  );
}
