"use client";

import { useEffect, useState } from "react";

export type SeasonalTheme = "halloween" | "holiday";

export function getSeasonalTheme(month: number): SeasonalTheme | null {
  if (month === 10) return "halloween";
  if (month === 11 || month === 12) return "holiday";
  return null;
}

function HolidayCorner() {
  return (
    <svg viewBox="0 0 72 72" className="seasonal-art" fill="none" aria-hidden="true">
      <path d="M8 8c17 4 31 16 43 37" className="seasonal-line" />
      <path d="M17 13 11 23l13-3M27 19l-2 12 12-7M37 28l1 12 11-8M45 38l6 10 7-10" className="seasonal-line" />
      <path d="M14 12 7 8m15 9-9-1m20 8-10 3m18 3-9 6m16 2-8 8" className="seasonal-line" />
      <path d="M53 49v7" className="seasonal-line" />
      <circle cx="53" cy="61" r="5" className="seasonal-berry" />
      <circle cx="62" cy="53" r="3" className="seasonal-gold" />
      <path d="M52 56c-5-6-10-4-10-4 2 5 6 7 10 6" className="seasonal-leaf" />
    </svg>
  );
}

function HalloweenCorner() {
  return (
    <svg viewBox="0 0 72 72" className="seasonal-art" fill="none" aria-hidden="true">
      <path d="M39 9a19 19 0 1 0 23 27A17 17 0 0 1 39 9Z" className="seasonal-moon" />
      <path d="M8 45c7-9 13-9 20 0l5-4 5 4c7-9 13-9 20 0-5-2-8 1-10 6l-7-3-8 6-8-6-7 3c-2-5-5-8-10-6Z" className="seasonal-bat" />
      <path d="M48 59c0-6 4-10 10-10s10 4 10 10v6H48v-6Z" className="seasonal-pumpkin" />
      <path d="M56 49c0-3 2-5 5-5" className="seasonal-line" />
      <path d="m54 58 2 2m7-2-2 2" className="seasonal-face" />
    </svg>
  );
}

export function SeasonalDecorations() {
  const [theme, setTheme] = useState<SeasonalTheme | null>(null);

  useEffect(() => {
    const updateTheme = () => setTheme(getSeasonalTheme(new Date().getMonth() + 1));
    updateTheme();
    window.addEventListener("focus", updateTheme);
    return () => window.removeEventListener("focus", updateTheme);
  }, []);

  if (!theme) return null;

  return (
    <div className="seasonal-decorations" data-season={theme} aria-hidden="true">
      <div className="seasonal-corner seasonal-corner-left">
        {theme === "holiday" ? <HolidayCorner /> : <HalloweenCorner />}
      </div>
      <div className="seasonal-corner seasonal-corner-right">
        {theme === "holiday" ? <HolidayCorner /> : <HalloweenCorner />}
      </div>
    </div>
  );
}
