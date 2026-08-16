import type { ReactNode } from "react";

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div>
      <span aria-hidden="true" className="mb-3 block h-1 w-10 rounded-full bg-accent" />
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}
