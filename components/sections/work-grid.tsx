"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  caseStudies,
  allCategories,
  allCategoriesAr,
} from "@/content/case-studies";
import { ProjectCard } from "@/components/sections/project-card";
import { useTranslation } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

/** Filterable project grid with layout animations. */
export function WorkGrid() {
  const { lang } = useTranslation();
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const categories = lang === "ar" ? allCategoriesAr : allCategories;
  const isAll = selectedIdx === 0;
  const activeCategory = categories[selectedIdx] || categories[0];

  const filtered = isAll
    ? caseStudies
    : caseStudies.filter((c) =>
        lang === "ar"
          ? c.categoriesAr?.includes(activeCategory)
          : c.categories.includes(activeCategory),
      );

  return (
    <div>
      <div
        className="mb-16 flex flex-wrap gap-2.5"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((c, idx) => {
          const isActive = selectedIdx === idx;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              aria-pressed={isActive}
              data-cursor="hover"
              className={cn(
                "rounded-full border px-5 py-2 text-[0.72rem] font-semibold tracking-wider transition-colors duration-300",
                isActive
                  ? "border-accent bg-accent text-accent-foreground shadow-sm"
                  : "border-border/60 text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-x-10 gap-y-20 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} index={i} priority={i < 2} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-16 text-sm text-muted-foreground" aria-live="polite">
        {lang === "ar"
          ? `${filtered.length} عمل إبداعي في هذه الفئة`
          : `${filtered.length} project${filtered.length === 1 ? "" : "s"} shown`}
      </p>
    </div>
  );
}
