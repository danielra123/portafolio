"use client";

import { useEffect, useState } from "react";
import { identity } from "@/data/portfolio";
import { getSeasonalTheme, type SeasonalTheme } from "@/components/seasonal-decorations";

const TYPE_SPEED_MS = 55;
const HOLD_MS = 650;
const EXIT_MS = 500;

type Phase = "typing" | "hold" | "exit" | "done";

export function IntroSplash() {
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [seasonalTheme, setSeasonalTheme] = useState<SeasonalTheme | null>(null);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    setSeasonalTheme(getSeasonalTheme(new Date().getMonth() + 1));
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;

    if (reducedMotion) {
      setCharCount(identity.name.length);
      setPhase("hold");
      return;
    }

    if (charCount >= identity.name.length) {
      setPhase("hold");
      return;
    }

    const timer = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED_MS);
    return () => clearTimeout(timer);
  }, [phase, charCount, reducedMotion]);

  useEffect(() => {
    if (phase !== "hold") return;
    const timer = setTimeout(() => setPhase("exit"), reducedMotion ? 150 : HOLD_MS);
    return () => clearTimeout(timer);
  }, [phase, reducedMotion]);

  useEffect(() => {
    if (phase !== "exit") return;
    const timer = setTimeout(() => setPhase("done"), reducedMotion ? 200 : EXIT_MS);
    return () => clearTimeout(timer);
  }, [phase, reducedMotion]);

  if (phase === "done") return null;

  const isTyping = phase === "typing";
  const isExiting = phase === "exit";

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-4 transition-opacity duration-500 ${
        isExiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <p className="flex items-center text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
        <span>{identity.name.slice(0, charCount)}</span>
        {!isTyping && seasonalTheme && (
          <svg
            className={`seasonal-name-accent seasonal-name-accent-${seasonalTheme}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="m10 1.5 2.2 6.3 6.3 2.2-6.3 2.2-2.2 6.3-2.2-6.3-6.3-2.2 6.3-2.2L10 1.5Z" />
          </svg>
        )}
        {isTyping && (
          <span
            className="ml-1 inline-block w-[2px] animate-pulse bg-accent"
            style={{ height: "1em" }}
          />
        )}
      </p>
      <p
        className={`mt-3 text-sm text-muted transition-opacity duration-500 sm:text-base ${
          charCount >= identity.name.length ? "opacity-100" : "opacity-0"
        }`}
      >
        {identity.title}
      </p>
    </div>
  );
}
