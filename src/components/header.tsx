"use client";

import { useState } from "react";
import Link from "next/link";
import { identity, navLinks } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo / Monogram */}
          <Link
            href="#top"
            className="group flex items-center gap-2.5 transition-transform active:scale-95"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-blue-600 text-xs font-bold text-accent-foreground shadow-sm shadow-accent/30 transition-transform group-hover:scale-105">
              DR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                {identity.name}
              </span>
              <span className="text-[11px] text-muted -mt-0.5">
                Ingeniero de Sistemas
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            <nav aria-label="Navegación principal" className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="ml-3 h-5 w-px bg-border/80" />

            <div className="ml-3 flex items-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:border-accent active:bg-surface-hover"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with backdrop blur and touch targets */}
        {mobileMenuOpen && (
          <nav
            aria-label="Menú móvil"
            className="border-t border-border/80 py-4 pb-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-11 items-center rounded-lg px-3.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-surface hover:text-accent active:bg-surface-hover"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-border/50">
                <a
                  href={identity.cvHref}
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-11 items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm shadow-sm active:opacity-90"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar CV (PDF)
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
