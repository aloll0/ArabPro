"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/context";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { lang, toggleLang } = useTranslation();

  return (
    <div className="fixed bottom-6 right-6 z-150 select-none">
      <motion.button
        type="button"
        onClick={toggleLang}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-cursor="hover"
        aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
        className="group relative flex items-center gap-2.5 rounded-full border border-accent/30 bg-surface/85 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-surface hover:shadow-[0_0_25px_rgba(181,126,220,0.25)]"
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-black">
          <Globe className="size-3.5" />
        </span>

        <div className="flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider">
          <span
            className={
              lang === "ar"
                ? "text-accent font-bold"
                : "text-muted-foreground transition-colors group-hover:text-foreground"
            }
          >
            عربي
          </span>
          <span className="text-border">/</span>
          <span
            className={
              lang === "en"
                ? "text-accent font-bold"
                : "text-muted-foreground transition-colors group-hover:text-foreground"
            }
          >
            EN
          </span>
        </div>

        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
      </motion.button>
    </div>
  );
}
