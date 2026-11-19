import { heroPitch, identity } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Presentación"
      className="relative overflow-hidden pt-8 pb-14 sm:pt-20 sm:pb-24"
    >
      {/* Decorative gradient glow in background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-accent/20 via-blue-500/10 to-indigo-500/10 blur-3xl sm:h-96 sm:w-[48rem]"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
          {/* Main Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left order-2 sm:order-1">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Disponibilidad inmediata &middot; Remoto o Presencial</span>
            </div>

            {/* Main Name & Title */}
            <div className="mt-4 sm:mt-6">
              <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Hola, soy{" "}
                <span className="text-gradient block sm:inline mt-1 sm:mt-0">
                  {identity.name}
                </span>
              </h1>

              <div className="mt-2.5 sm:mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-base font-semibold sm:text-xl text-muted">
                <span className="text-foreground">{identity.title}</span>
                <span className="hidden sm:inline text-border">&bull;</span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-normal text-muted">
                  <svg className="h-4 w-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Bogotá, Colombia
                </span>
              </div>
            </div>

            {/* Pitch / Bio */}
            <div className="mt-4 sm:mt-6 max-w-2xl space-y-2.5 text-sm sm:text-lg leading-relaxed text-foreground/80">
              {heroPitch.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {/* Feature Pills */}
            <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2 text-xs font-medium text-muted">
              <span className="rounded-md border border-border/70 bg-surface/80 px-2.5 py-1">
                🎓 Ingeniero de Sistemas Titulado
              </span>
              <span className="rounded-md border border-border/70 bg-surface/80 px-2.5 py-1">
                💻 Angular 19 & Node.js
              </span>
              <span className="rounded-md border border-border/70 bg-surface/80 px-2.5 py-1">
                ⚡ .NET & PostgreSQL
              </span>
              <span className="rounded-md border border-border/70 bg-surface/80 px-2.5 py-1">
                🧪 Jest, Supertest & Cypress
              </span>
            </div>

            {/* Action Buttons: Full width on mobile, inline on desktop */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href={identity.cvHref}
                download
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-98"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar CV
              </a>

              <a
                href="#experiencia"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-surface-hover active:scale-98"
              >
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Ver experiencia
              </a>

              <a
                href="#contacto"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-surface-hover active:scale-98"
              >
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contáctame
              </a>
            </div>
          </div>

          {/* Discreet professional photo */}
          <div className="relative shrink-0 order-1 sm:order-2">
            <div className="relative h-28 w-28 sm:h-36 sm:w-36 overflow-hidden rounded-2xl border-2 border-border/80 bg-surface shadow-lg shadow-accent/5">
              <img
                src="/daniel-ramirez.jpg"
                alt={identity.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Disponible
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
