import { identity } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-4 text-sm text-muted sm:px-6">
        <p>
          &copy; {year} {identity.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
