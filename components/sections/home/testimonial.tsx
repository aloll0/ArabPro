import { Marquee } from "@/components/motion/marquee";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { Reveal } from "@/components/motion/reveal";

const AWARDS = [
  "Awwwards SOTD ×6",
  "FWA of the Day ×4",
  "CSSDA Best UX",
  "Webby Honoree",
  "Type Directors Club",
  "GSAP Site of the Week",
];

/** Social proof: award marquee + one big testimonial. */
export function Testimonial() {
  return (
    <section className="border-t border-border">
      <div className="py-10" aria-label="Awards">
        <Marquee duration={28} reverse>
          {AWARDS.map((award) => (
            <span
              key={award}
              className="flex items-center gap-[4vw] whitespace-nowrap text-label !text-base"
            >
              {award}
              <span className="text-accent" aria-hidden="true">
                —
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-x section-y border-t border-border">
        <Reveal>
          <p className="text-label mb-10">04 — Word on the street</p>
        </Reveal>
        <figure>
          <blockquote>
            <SplitTextReveal
              as="p"
              type="lines"
              className="text-display-sm max-w-5xl italic text-foreground/90"
            >
              “They don’t build websites. They build the feeling you get in the
              first ten seconds of a great film — and then they make it load in
              one.”
            </SplitTextReveal>
          </blockquote>
          <Reveal delay={0.25}>
            <figcaption className="mt-10 text-sm text-muted-foreground">
              <span className="text-foreground">Léa Fontaine</span> — Head of
              Brand, Maison Huit
            </figcaption>
          </Reveal>
        </figure>
      </div>
    </section>
  );
}
