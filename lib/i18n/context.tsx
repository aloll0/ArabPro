"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import arTranslations from "./locales/ar.json";
import enTranslations from "./locales/en.json";

export type Language = "ar" | "en";
export type Direction = "rtl" | "ltr";

interface I18nContextType {
  lang: Language;
  dir: Direction;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: <T = string>(path: string, fallback?: T) => T;
  translations: typeof arTranslations;
}

const translationsMap = {
  ar: arTranslations,
  en: enTranslations,
};

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "arabpro_preferred_lang";

function getInitialLang(): Language {
  if (typeof window === "undefined") return "ar";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") return saved;
  } catch {
    // localStorage may fail in restricted iframes
  }
  return "ar";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLang);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      if (lang === "ar") {
        document.documentElement.classList.add("lang-ar");
        document.documentElement.classList.remove("lang-en");
      } else {
        document.documentElement.classList.add("lang-en");
        document.documentElement.classList.remove("lang-ar");
      }
    }
  }, [lang]);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar");
  }, [lang, setLang]);

  const currentDict = translationsMap[lang] || translationsMap.ar;

  const t = useCallback(
    <T = string,>(path: string, fallback?: T): T => {
      const keys = path.split(".");
      let result: unknown = currentDict;
      for (const k of keys) {
        if (result && typeof result === "object" && k in result) {
          result = (result as Record<string, unknown>)[k];
        } else {
          // fallback to Arabic if missing in English or vice-versa
          let fb: unknown = translationsMap.ar;
          for (const fbK of keys) {
            if (fb && typeof fb === "object" && fbK in fb) {
              fb = (fb as Record<string, unknown>)[fbK];
            } else {
              fb = undefined;
              break;
            }
          }
          return (fb ?? fallback ?? path) as T;
        }
      }
      return (result ?? fallback ?? path) as T;
    },
    [currentDict],
  );

  const value = useMemo<I18nContextType>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      setLang,
      toggleLang,
      t,
      translations: currentDict,
    }),
    [lang, setLang, toggleLang, t, currentDict],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    // Graceful fallback for components rendering outside provider during SSR/testing
    return {
      lang: "ar" as Language,
      dir: "rtl" as Direction,
      setLang: () => {},
      toggleLang: () => {},
      t: <T = string,>(path: string, fallback?: T) => (fallback ?? path) as T,
      translations: arTranslations,
    };
  }
  return context;
}
