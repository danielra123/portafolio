import Link from "next/link";
import { identity, navLinks } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 py-3">
          <Link
            href="#top"
            className="truncate text-sm font-semibold tracking-tight text-foreground"
          >
            {identity.name}
          </Link>

          <div className="flex shrink-0 items-center gap-3">
            <nav
              aria-label="Navegación principal"
              className="hidden items-center gap-6 md:flex"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>

        <nav
          aria-label="Navegación principal móvil"
          className="flex items-center gap-4 overflow-x-auto pb-2.5 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-xs text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
