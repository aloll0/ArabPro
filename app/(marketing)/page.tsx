import { Hero } from "@/components/sections/home/hero";
import { ClientsMarquee } from "@/components/sections/home/clients-marquee";
import { FeaturedWork } from "@/components/sections/home/featured-work";
import { Manifesto } from "@/components/sections/home/manifesto";
import { Services } from "@/components/sections/home/services";
import { ClientScenarios } from "@/components/sections/home/client-scenarios";
import { OurProcess } from "@/components/sections/home/our-process";
import { Testimonial } from "@/components/sections/home/testimonial";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ClientsMarquee />
      <Manifesto />
      <FeaturedWork />
      <Services />
      <ClientScenarios />
      <OurProcess />
      <Testimonial />
    </main>
  );
}
