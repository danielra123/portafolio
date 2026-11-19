import { aboutText, identity } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="sobre-mi" aria-label="Sobre mí" className="scroll-mt-20 border-t border-border/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Perfil Profesional"
            description="Conoce mi enfoque de trabajo y mi propuesta de valor como desarrollador de software."
          >
            Sobre mí
          </SectionHeading>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Main bio card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 lg:col-span-2">
              <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                {aboutText}
              </p>
            </div>

            {/* Quick Summary Sidebar */}
            <div className="glass-card flex flex-col justify-between gap-4 rounded-2xl p-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Datos clave
                </h3>
                <dl className="mt-4 space-y-3.5 text-sm">
                  <div>
                    <dt className="text-xs text-muted">Ubicación</dt>
                    <dd className="font-medium text-foreground">Bogotá, Colombia</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Disponibilidad</dt>
                    <dd className="font-medium text-emerald-600 dark:text-emerald-400">
                      Inmediata (Remoto o Presencial)
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Idiomas</dt>
                    <dd className="font-medium text-foreground">{identity.languages}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Metodologías</dt>
                    <dd className="font-medium text-foreground">Scrum, Agile, Git Flow</dd>
                  </div>
                </dl>
              </div>

              <div className="pt-4 border-t border-border/60">
                <a
                  href="#contacto"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-surface py-2.5 text-xs font-semibold text-foreground border border-border hover:border-accent hover:bg-surface-hover transition-colors"
                >
                  Conectar conmigo &rarr;
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
