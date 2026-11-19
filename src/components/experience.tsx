import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experiencia" aria-label="Experiencia" className="scroll-mt-20 border-t border-border/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Trayectoria Profesional"
            description="Experiencia práctica en el desarrollo de software para el sector salud y el sector educativo."
          >
            Experiencia Laboral
          </SectionHeading>
        </Reveal>

        <div className="mt-10 space-y-8">
          {experience.map((item, index) => (
            <Reveal key={item.role + item.organization} delayMs={index * 80}>
              <div className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8">
                {/* Decorative left accent bar for the most recent role */}
                {index === 0 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-accent to-blue-600"
                  />
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        {item.period}
                      </span>
                      {index === 0 && (
                        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                          Reciente
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end">
                    <span className="text-sm font-semibold text-foreground/90">
                      {item.organization}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted">
                      <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-foreground/85 sm:text-base">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-6 pt-5 border-t border-border/60">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Tecnologías utilizadas:
                  </span>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border/80 bg-surface px-2.5 py-1 text-xs font-medium text-foreground/90"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
