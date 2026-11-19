import { identity, socialLinks } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-surface/50 py-12 transition-colors">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-sm font-bold text-foreground">
              {identity.name}
            </span>
            <span className="text-xs text-muted mt-0.5">
              Ingeniero de Sistemas &middot; Bogotá, Colombia
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-accent transition-colors"
              >
                {link.icon.toUpperCase()}
              </a>
            ))}
          </div>

          <a
            href="#top"
            aria-label="Volver arriba"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 text-xs font-semibold text-muted hover:border-accent hover:text-foreground active:scale-95 transition-all"
          >
            <span>Volver arriba</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 text-center text-xs text-muted">
          <p>
            &copy; {year} {identity.name}. Diseñado con Next.js y Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
