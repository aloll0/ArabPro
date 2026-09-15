import type { Metadata } from "next";
import { StickyGrid } from "@/components/sections/sticky-grid";

export const metadata: Metadata = {
  title: "Work — Arab Pro",
  description:
    "Selected architectural & digital experiences — Arab Pro portfolio.",
};

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-black">
      <StickyGrid />
    </main>
  );
}
