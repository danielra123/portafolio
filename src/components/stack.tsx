import { skillCategories } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function Stack() {
  return (
    <section id="stack" aria-label="Stack técnico" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Stack técnico
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delayMs={index * 60}>
              <div className="h-full rounded-lg border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-foreground">
                  {category.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
