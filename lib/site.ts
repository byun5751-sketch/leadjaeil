/**
 * Canonical host. The apex domain 308-redirects to www, so absolute URLs handed
 * to third parties (the Web3Forms redirect, for one) have to point at www or the
 * visitor takes an extra hop.
 */
export const SITE_URL = "https://www.leadjaeil.com";

/** Web3Forms delivers submissions to leadjaeil@gmail.com. The key is public by
 *  design — it ships inside the form markup — but it lives in an env var so it
 *  can be rotated without a code change. */
export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

/**
 * Per-page canonical and hreflang links. Every page has to call this: a
 * canonical set once in the root layout is inherited by every route below it,
 * which tells search engines the whole site is a duplicate of one page.
 *
 * Paths are relative and resolve against `metadataBase`.
 *
 * @param lang  the current locale segment
 * @param path  the route below the locale, e.g. "/books" ("" for the home page)
 */
export function alternatesFor(lang: string, path = "") {
  return {
    canonical: `/${lang}${path}`,
    languages: {
      ko: `/ko${path}`,
      en: `/en${path}`,
    },
  };
}
