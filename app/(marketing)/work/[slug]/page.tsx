import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  caseStudies,
  getCaseStudy,
  getAdjacentCaseStudies,
} from "@/content/case-studies";
import { CaseStudyContent } from "./case-study-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};
  return {
    title: `${project.titleAr} — ${project.title} | Arab Pro`,
    description: project.taglineAr || project.tagline,
    openGraph: { images: [project.cover] },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentCaseStudies(slug);

  return <CaseStudyContent project={project} prev={prev} next={next} />;
}
