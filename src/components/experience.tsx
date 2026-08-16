import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experiencia" aria-label="Experiencia" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading>Experiencia</SectionHeading>
        </Reveal>

        <ol className="mt-10 space-y-10 border-l-2 border-border pl-6 sm:pl-8">
          {experience.map((item, index) => (
            <Reveal key={item.role + item.organization} delayMs={index * 80}>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[calc(1.5rem+6px)] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-accent/15 sm:-left-[calc(2rem+6px)]"
                />
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {item.role}
                </h3>
                <p className="text-sm text-muted">
                  {item.organization} &middot; {item.location}
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/90">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden="true" className="text-accent">
                        &bull;
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground/90"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
