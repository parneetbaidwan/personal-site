"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) ?? null;
    const initial = saved ?? getSystemTheme();
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={label}
      className="group flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {/* mysterious “sigil” */}
      <span
        aria-hidden="true"
        className="relative block h-3.5 w-3.5 rounded-full border border-[var(--accent)]"
        style={{
          boxShadow: "0 0 0.75rem var(--glow)",
        }}
      >
        {/* tiny “eclipse” */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle at 30% 30%, rgba(244,244,245,0.12), rgba(244,244,245,0) 60%)"
                : "radial-gradient(circle at 70% 30%, rgba(17,17,20,0.10), rgba(17,17,20,0) 60%)",
          }}
        />
      </span>

      {/* minimal text: looks like a control, not a button */}
      <span className="tracking-wide">{theme === "dark" ? "Eclipse" : "Dawn"}</span>
    </button>
  );
}
