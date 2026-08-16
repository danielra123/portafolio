import { aboutText } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="sobre-mi" aria-label="Sobre mí" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading>Sobre mí</SectionHeading>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/90 sm:text-lg">
            {aboutText}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
