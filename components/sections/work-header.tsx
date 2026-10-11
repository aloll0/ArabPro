"use client";

import { useTranslation } from "@/lib/i18n/context";

export function WorkHeader() {
  const { lang } = useTranslation();

  return (
    <div className="mb-14">
      <p className="text-label mb-3 text-accent font-mono">
        01 / Case Studies Portfolio
      </p>
      <h2 className="font-display text-4xl text-foreground lg:text-5xl">
        {lang === "ar"
          ? "معرض الأعمال ودراسات الحالة"
          : "Selected Work & Case Studies"}
      </h2>
      <p className="mt-3 max-w-xl text-sm text-muted-foreground">
        {lang === "ar"
          ? "استعرض أبرز المشاريع المنفذة للجهات الحكومية والشركات الكبرى والمشاريع الطموحة."
          : "Explore flagship projects delivered for government entities, enterprise clients, and ambitious brands across Saudi Arabia."}
      </p>
    </div>
  );
}
