// src/utils/locale.js
export const SUPPORTED_LOCALES = ["fr", "en", "esp"];
/**
 * getLocaleFromPath(pathname, defaultLocale = "fr")
 * - works whether your app is served at "/" or under a basename like "/prs"
 * - returns the first path segment that matches a supported locale
 */
export function getLocaleFromPath(pathname, defaultLocale = "fr") {
  const parts = (pathname || "").split("/").filter(Boolean);
  // try to find a locale anywhere in the first two segments (supports "/prs/<locale>/..." and "/<locale>/...")
  for (const idx of [0, 1, 2]) {
    if (parts[idx] && SUPPORTED_LOCALES.includes(parts[idx])) {
      return parts[idx];
    }
  }
  return defaultLocale;
}
