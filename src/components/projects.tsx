import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section id="proyectos" aria-label="Proyectos" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Proyectos
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 80} className="h-full">
              <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.context}</p>

                <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-foreground/90">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden="true" className="text-accent">
                        &bull;
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/90"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
