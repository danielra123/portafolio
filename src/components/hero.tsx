import { heroPitch, identity } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Presentación"
      className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20"
    >
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
        {identity.name}
      </h1>
      <p className="mt-2 text-lg text-muted sm:text-xl">{identity.title}</p>

      <div className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/90 sm:text-lg">
        {heroPitch.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#proyectos"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
        >
          Ver proyectos
        </a>
        <a
          href={identity.cvHref}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-surface"
        >
          Descargar CV
        </a>
        <a
          href="#contacto"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-surface"
        >
          Contáctame
        </a>
      </div>
    </section>
  );
}
