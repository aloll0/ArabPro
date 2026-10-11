"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { Reveal } from "@/components/motion/reveal";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { ParallaxLayer } from "@/components/motion/parallax-layer";
import { TransitionLink } from "@/components/layout/page-transition";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n/context";

interface CaseStudyContentProps {
  project: CaseStudy;
  prev: CaseStudy;
  next: CaseStudy;
}

export function CaseStudyContent({
  project,
  prev,
  next,
}: CaseStudyContentProps) {
  const { lang } = useTranslation();

  const title =
    lang === "ar" ? project.titleAr || project.title : project.title;
  const clientName =
    lang === "ar" ? project.clientAr || project.client : project.client;
  const tagline =
    lang === "ar" ? project.taglineAr || project.tagline : project.tagline;
  const intro =
    lang === "ar" ? project.introAr || project.intro : project.intro;
  const challenge =
    lang === "ar"
      ? project.challengeAr || project.challenge
      : project.challenge;
  const approach =
    lang === "ar" ? project.approachAr || project.approach : project.approach;
  const categories =
    lang === "ar"
      ? project.categoriesAr || project.categories
      : project.categories;
  const services =
    lang === "ar" ? project.servicesAr || project.services : project.services;

  const prevTitle = lang === "ar" ? prev.titleAr || prev.title : prev.title;
  const nextTitle = lang === "ar" ? next.titleAr || next.title : next.title;

  return (
    <main className="pt-40">
      {/* Header */}
      <header className="container-x mb-16">
        <Reveal>
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Badge key={c}>{c}</Badge>
            ))}
          </div>
        </Reveal>
        <SplitTextReveal as="h1" type="words" className="text-display-xl">
          {title}
        </SplitTextReveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl font-display text-2xl italic text-muted-foreground">
            {tagline}
          </p>
        </Reveal>
      </header>

      {/* Hero media / Video */}
      <div className="relative aspect-video overflow-hidden md:aspect-21/9 bg-surface">
        {project.videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-cover"
          >
            <source src={project.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <ParallaxLayer
            speed={-0.35}
            className="absolute -inset-y-16 inset-x-0"
          >
            <Image
              src={project.cover}
              alt={`${title} — hero artwork`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </ParallaxLayer>
        )}
      </div>

      {/* Meta row */}
      <div className="container-x">
        <div className="grid gap-8 border-b border-border py-12 sm:grid-cols-3">
          <Reveal>
            <p className="text-label mb-2">
              {lang === "ar" ? "العميل" : "Client"}
            </p>
            <p className="font-medium text-foreground">{clientName}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-label mb-2">
              {lang === "ar" ? "السنة" : "Year"}
            </p>
            <p className="font-medium text-foreground">{project.year}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-label mb-2">
              {lang === "ar" ? "الخدمات المنفذة" : "Services"}
            </p>
            <p className="font-medium text-foreground">
              {services.join(" • ")}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Editorial body */}
      <article className="container-x section-y">
        <div className="mx-auto max-w-3xl space-y-20">
          <SplitTextReveal
            as="p"
            type="lines"
            className="text-display-sm text-foreground/95"
          >
            {intro}
          </SplitTextReveal>

          <Reveal>
            <h2 className="text-label mb-6 text-accent">
              {lang === "ar" ? "التحدي ومتطلبات العمل" : "The Challenge"}
            </h2>
            <p className="text-lg leading-relaxed text-foreground/85">
              {challenge}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-label mb-6 text-accent">
              {lang === "ar" ? "الحل والمنهجية الإبداعية" : "The Approach"}
            </h2>
            <p className="text-lg leading-relaxed text-foreground/85">
              {approach}
            </p>
          </Reveal>
        </div>

        {/* Gallery */}
        <div className="mt-28 grid gap-10 md:grid-cols-2">
          {project.gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.15}>
              <div className="relative aspect-4/3 overflow-hidden rounded bg-surface border border-border/40">
                <Image
                  src={src}
                  alt={`${title} — detail ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Results */}
        <div className="mt-28 grid gap-10 border-t border-border pt-12 sm:grid-cols-3">
          {project.results.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.12}>
              <p className="font-display text-5xl text-accent font-semibold">
                {r.value}
              </p>
              <p className="text-label mt-3">
                {lang === "ar" ? r.labelAr || r.label : r.label}
              </p>
            </Reveal>
          ))}
        </div>
      </article>

      {/* Prev / next navigation */}
      <nav
        aria-label="More case studies"
        className="grid border-t border-border sm:grid-cols-2"
      >
        <TransitionLink
          href={`/work/${prev.slug}`}
          data-cursor="view"
          data-cursor-label={lang === "ar" ? "السابق" : "Prev"}
          className="group border-b border-border p-10 transition-colors hover:bg-surface sm:border-b-0 sm:border-r"
        >
          <p className="text-label mb-4 flex items-center gap-2">
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1 rtl:rotate-180" />
            {lang === "ar" ? "المشروع السابق" : "Previous"}
          </p>
          <p className="font-display text-3xl group-hover:text-accent transition-colors">
            {prevTitle}
          </p>
        </TransitionLink>
        <TransitionLink
          href={`/work/${next.slug}`}
          data-cursor="view"
          data-cursor-label={lang === "ar" ? "التالي" : "Next"}
          className="group p-10 text-right transition-colors hover:bg-surface rtl:text-left"
        >
          <p className="text-label mb-4 flex items-center justify-end gap-2 rtl:justify-start">
            {lang === "ar" ? "المشروع التالي" : "Next"}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </p>
          <p className="font-display text-3xl group-hover:text-accent transition-colors">
            {nextTitle}
          </p>
        </TransitionLink>
      </nav>
    </main>
  );
}
