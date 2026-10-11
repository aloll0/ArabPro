"use client";

import { siteConfig } from "@/content/site.config";
import { Marquee } from "@/components/motion/marquee";
import { useTranslation } from "@/lib/i18n/context";

/** Infinite seamless strip of client and partner names. */
export function ClientsMarquee() {
  const { lang } = useTranslation();
  const clients = lang === "ar" ? siteConfig.clients : siteConfig.clientsEn;

  return (
    <section
      className="border-y border-border py-10 overflow-hidden"
      aria-label="Selected clients"
    >
      <Marquee duration={110} repeat={2}>
        {clients.map((client) => (
          <span
            key={client}
            className="flex items-center gap-[4vw] whitespace-nowrap font-display text-2xl text-muted-foreground/75 md:text-3xl"
          >
            {client}
            <span className="text-accent" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
