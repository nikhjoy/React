// src/utils/locale.js
export const SUPPORTED_LOCALES = ["fr", "en", "esp"];

/**
 * getLocaleFromPath(pathname, defaultLocale = "fr")
 * - find locale anywhere in the first few segments (supports /prs/<locale>/..., /<locale>/...)
 */
export function getLocaleFromPath(pathname, defaultLocale = "fr") {
  const parts = (pathname || "").split("/").filter(Boolean);
  for (const i of [0,1,2]) {
    if (parts[i] && SUPPORTED_LOCALES.includes(parts[i])) return parts[i];
  }
  return defaultLocale;
}

/**
 * changeLocaleInPath(pathname, newLocale)
 * - Replace existing locale segment if found (/prs/en/foo -> /prs/esp/foo)
 * - If no locale found:
 *   - if first segment is 'prs', insert after it -> /prs/esp/...
 *   - otherwise prefix -> /esp/...
 * - Preserves query string and hash using window.location
 */
export function changeLocaleInPath(pathname, newLocale) {
  const url = new URL(window.location.href);
  const parts = (pathname || "").split("/").filter(Boolean); // array of segments
  // find index of current locale
  const idx = parts.findIndex(p => SUPPORTED_LOCALES.includes(p));

  let newPathParts;
  if (idx >= 0) {
    // replace existing locale
    newPathParts = [...parts];
    newPathParts[idx] = newLocale;
  } else if (parts[0] === "prs") {
    // insert after /prs
    newPathParts = ["prs", newLocale, ...parts.slice(1)];
  } else {
    // prefix with locale
    newPathParts = [newLocale, ...parts];
  }

  const newPath = "/" + newPathParts.join("/");
  return `${newPath}${url.search}${url.hash}`;
}
