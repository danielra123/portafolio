import Link from "next/link";
import { identity, navLinks } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          {identity.name}
        </Link>

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

        <div className="flex items-center gap-3">
          <nav
            aria-label="Navegación principal móvil"
            className="flex items-center gap-4 overflow-x-auto md:hidden"
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
