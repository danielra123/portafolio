"use client";

import { useEffect, useState } from "react";
import { identity } from "@/data/portfolio";

const TYPE_SPEED_MS = 55;
const HOLD_MS = 650;
const EXIT_MS = 500;

type Phase = "typing" | "hold" | "exit" | "done";

export function IntroSplash() {
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
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
