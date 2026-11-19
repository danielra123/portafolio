import { identity } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  const contactMethods = [
    {
      title: "Correo Electrónico",
      value: identity.email,
      href: `mailto:${identity.email}`,
      actionLabel: "Enviar mensaje",
      icon: (
        <svg className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "WhatsApp",
      value: "+57 324 290 4462",
      href: "https://wa.me/573242904462?text=Hola%20Daniel,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar.",
      actionLabel: "Enviar mensaje por WhatsApp",
      icon: (
        <svg className="h-6 w-6 text-emerald-500 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.788-1.68-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.201-.301.302-.502.101-.2.05-.376-.026-.527-.075-.15-.678-1.634-.929-2.239-.245-.589-.494-.509-.678-.518-.176-.009-.377-.009-.578-.009-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.151.201 2.124 3.243 5.145 4.549.718.31 1.279.496 1.716.634.722.229 1.378.197 1.897.12.578-.087 1.78-.727 2.03-1.43.251-.703.251-1.306.176-1.431-.075-.125-.276-.2-.577-.35zm-5.466 7.618c-2.083 0-4.123-.559-5.908-1.616l-.424-.252-4.394 1.152 1.173-4.283-.277-.441a10.007 10.007 0 0 1-1.536-5.555c0-5.522 4.488-10.01 10.01-10.01 2.674 0 5.187 1.042 7.078 2.934 1.891 1.891 2.932 4.404 2.932 7.078 0 5.523-4.489 10.01-10.011 10.01zm8.498-18.508A11.936 11.936 0 0 0 12.006 0C5.381 0 0 5.381 0 12.006c0 2.115.553 4.181 1.604 5.999L0 24l6.166-1.617a11.96 11.96 0 0 0 5.84 1.503h.005c6.623 0 12.006-5.382 12.006-12.006 0-3.208-1.25-6.224-3.52-8.494z"/>
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      value: "daniel-ramirez-ab539b35",
      href: identity.linkedin,
      actionLabel: "Ver perfil",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      title: "GitHub",
      value: "github.com/danielra123",
      href: identity.github,
      actionLabel: "Ver repositorios",
      icon: (
        <svg className="h-6 w-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contacto" aria-label="Contacto" className="scroll-mt-20 border-t border-border/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Canales de Comunicación"
            description="¿Buscas un desarrollador Full Stack para tu proyecto o empresa? Hablemos."
          >
            Contacto Directo
          </SectionHeading>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const isExternal = method.href.startsWith("http");
              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="glass-card group flex items-center justify-between gap-4 rounded-2xl p-5 transition-all hover:border-accent hover:shadow-lg active:scale-98"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface border border-border/80 group-hover:scale-105 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {method.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-bold text-foreground group-hover:text-accent transition-colors break-all sm:break-normal">
                        {method.value}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Quick CV Download card at the bottom of contact */}
          <div className="mt-10 glass-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl p-6 bg-gradient-to-r from-accent/5 via-surface to-accent/5 border border-accent/20">
            <div>
              <h3 className="text-base font-bold text-foreground">
                ¿Prefieres revisar mi hoja de vida completa?
              </h3>
              <p className="mt-1 text-sm text-muted">
                Descarga mi CV en formato PDF con el desglose detallado de proyectos, experiencia y tecnologías.
              </p>
            </div>
            <a
              href={identity.cvHref}
              download
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm shadow-accent/30 hover:opacity-95 active:scale-98 transition-all"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar CV (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
