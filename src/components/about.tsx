import { aboutText } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="sobre-mi" aria-label="Sobre mí" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Sobre mí
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/90 sm:text-lg">
            {aboutText}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
