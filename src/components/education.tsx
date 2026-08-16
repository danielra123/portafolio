import { education, identity } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <section
      id="educacion"
      aria-label="Educación e idiomas"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Educación e idiomas
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-foreground">Educación</h3>
              <ul className="mt-3 space-y-1 text-sm text-foreground/90">
                {education.map((item) => (
                  <li key={item.degree}>
                    <p className="font-medium">{item.degree}</p>
                    <p className="text-muted">{item.institution}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-foreground">Idiomas</h3>
              <p className="mt-3 text-sm text-foreground/90">{identity.languages}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
