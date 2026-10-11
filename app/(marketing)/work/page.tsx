import type { Metadata } from "next";
import { StickyGrid } from "@/components/sections/sticky-grid";
import { WorkGrid } from "@/components/sections/work-grid";
import { WorkHeader } from "@/components/sections/work-header";

export const metadata: Metadata = {
  title: "أعمالنا — عرب برو | Selected Work — Arab Pro",
  description:
    "14 مشروعاً بارزاً ودراسة حالة واقعية في السوق السعودي والخليجي — شركة عرب برو للحلول المتكاملة.",
};

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-black">
      <StickyGrid />
      <section className="relative z-30 bg-black container-x section-y border-t border-border mt-16">
        <WorkHeader />
        <WorkGrid />
      </section>
    </main>
  );
}
