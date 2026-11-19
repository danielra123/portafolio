import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  eyebrow?: string;
  description?: string;
};

export function SectionHeading({ children, eyebrow, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2 className={`${eyebrow ? "mt-3" : ""} text-2xl font-bold tracking-tight text-foreground sm:text-3xl`}>
        {children}
      </h2>
      {description && (
        <p className="mt-2 text-sm text-muted sm:text-base max-w-2xl">
          {description}
        </p>
      )}
      <div className="mt-3 flex items-center gap-1.5">
        <span aria-hidden="true" className="h-1 w-12 rounded-full bg-accent" />
        <span aria-hidden="true" className="h-1 w-2 rounded-full bg-accent/40" />
      </div>
    </div>
  );
}
