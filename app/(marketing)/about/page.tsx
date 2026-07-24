import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/content/site.config";
import { Reveal } from "@/components/motion/reveal";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { ParallaxLayer } from "@/components/motion/parallax-layer";
import { Marquee } from "@/components/motion/marquee";
import { padIndex } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small studio with film-grade art direction and obsessive engineering.",
};

const VALUES = [
  {
    name: "Craft over volume",
    description:
      "We take on a handful of projects a year. Each one gets the whole studio.",
  },
  {
    name: "Performance is design",
    description:
      "A cinematic site that stutters is a broken site. We budget every kilobyte.",
  },
  {
    name: "Accessible by default",
    description:
      "Reduced motion, keyboard paths and contrast are part of the brief, not an afterthought.",
  },
  {
    name: "Partners, not vendors",
    description:
      "The best work happens when we're in the room early — strategy through ship.",
  },
];

const TEAM = [
  { name: "Giulia Ferri", role: "Creative Director" },
  { name: "Marco Bell", role: "Lead Creative Developer" },
  { name: "Ada Lindqvist", role: "3D & Motion" },
  { name: "Tomás Rey", role: "Design Engineer" },
];

export default function AboutPage() {
  return (
    <main className="pt-40">
      <header className="container-x mb-24">
        <Reveal>
          <p className="text-label mb-8">About the studio</p>
        </Reveal>
        <SplitTextReveal
          as="h1"
          type="words"
          className="text-display-xl max-w-[14ch]"
        >
          Small studio, heavyweight craft
        </SplitTextReveal>
        <Reveal delay={0.25}>
          <p className="mt-10 max-w-xl text-lg text-muted-foreground">
            {siteConfig.legalName} is a creative studio based in Milan, working
            worldwide. We design and engineer digital experiences that move —
            emotionally and at 60 frames per second.
          </p>
        </Reveal>
      </header>

      {/* Image band */}
      <div className="relative h-[50vh] overflow-hidden">
        <ParallaxLayer speed={-0.4} className="absolute -inset-y-20 inset-x-0">
          <Image
            src="/covers/polaris-observatory.svg"
            alt="Abstract studio artwork"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </ParallaxLayer>
      </div>

      {/* Values */}
      <section className="container-x section-y">
        <Reveal>
          <p className="text-label mb-14">What we stand for</p>
        </Reveal>
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
          {VALUES.map((value, i) => (
            <Reveal key={value.name} delay={(i % 2) * 0.12}>
              <div className="border-t border-border pt-6">
                <p className="text-label mb-4">{padIndex(i)}</p>
                <h2 className="font-display text-3xl">{value.name}</h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border">
        <div className="container-x section-y">
          <Reveal>
            <p className="text-label mb-14">The people</p>
          </Reveal>
          <ul>
            {TEAM.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.08}>
                <li className="group flex flex-wrap items-baseline justify-between gap-2 border-t border-border py-6 last:border-b">
                  <span className="font-display text-3xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent">
                    {person.name}
                  </span>
                  <span className="text-label">{person.role}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Rolling statement */}
      <div className="border-t border-border py-12" aria-hidden="true">
        <Marquee duration={24}>
          <span className="flex items-center gap-[4vw] whitespace-nowrap font-display text-5xl italic text-muted-foreground/50">
            Design with intent — build with care —
          </span>
        </Marquee>
      </div>
    </main>
  );
}
