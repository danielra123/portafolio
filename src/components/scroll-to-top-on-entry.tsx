"use client";

import { useLayoutEffect } from "react";

export function ScrollToTopOnEntry() {
  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;

    window.history.scrollRestoration = "manual";
    document.documentElement.style.scrollBehavior = "auto";

    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        "",
        window.location.pathname + window.location.search,
      );
    }

    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = previousScrollBehavior;

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return null;
}
