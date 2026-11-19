import { education, identity } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section
      id="educacion"
      aria-label="Educación e idiomas"
      className="scroll-mt-20 border-t border-border/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Formación & Perfil"
            description="Estudios universitarios, dominio de idiomas y disponibilidad profesional."
          >
            Educación & Idiomas
          </SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card: Educación */}
          <Reveal delayMs={0} className="h-full">
            <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Educación</h3>
                    <span className="text-xs text-muted">2021 – 2026</span>
                  </div>
                </div>

                <div className="mt-4">
                  {education.map((item) => (
                    <div key={item.degree}>
                      <h4 className="text-base font-bold text-foreground">
                        {item.degree}
                      </h4>
                      <p className="mt-1 text-sm text-muted">
                        {item.institution}
                      </p>
                      <span className="mt-2.5 inline-block rounded-md bg-accent/10 text-accent px-2.5 py-1 text-xs font-semibold">
                        Título: Ingeniero de Sistemas
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card: Idiomas */}
          <Reveal delayMs={80} className="h-full">
            <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Idiomas</h3>
                    <span className="text-xs text-muted">Competencia comunicativa</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-lg border border-border/80 bg-surface p-3">
                    <span className="text-sm font-medium text-foreground">Español</span>
                    <span className="rounded bg-accent/15 px-2 py-0.5 text-xs font-bold text-accent">Nativo</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/80 bg-surface p-3">
                    <div>
                      <span className="text-sm font-medium text-foreground">Inglés</span>
                      <p className="text-[11px] text-muted">En mejora continua</p>
                    </div>
                    <span className="rounded bg-blue-500/15 px-2 py-0.5 text-xs font-bold text-blue-500">B1</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card: Información adicional */}
          <Reveal delayMs={160} className="h-full sm:col-span-2 lg:col-span-1">
            <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Disponibilidad</h3>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Inmediata</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5 text-xs text-foreground/85">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&bull;</span>
                    <span>Modalidad remota o presencial según requerimientos del equipo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&bull;</span>
                    <span>Capacidad de adaptación rápida a arquitecturas ya existentes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">&bull;</span>
                    <span>Formación constante en habilidades técnicas y blandas.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
