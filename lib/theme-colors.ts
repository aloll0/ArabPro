"use client";

/**
 * Reads a CSS custom property so 3D scenes automatically pick up the
 * client theme from globals.css — re-skin once, everything follows.
 */
export function getCssColor(variable: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
  return value || fallback;
}

export const themeColors = {
  accent: () => getCssColor("--accent", "#b57edc"),
  accentSecondary: () => getCssColor("--accent-secondary", "#c6ff00"),
  foreground: () => getCssColor("--foreground", "#ffffff"),
  background: () => getCssColor("--background", "#000000"),
};
