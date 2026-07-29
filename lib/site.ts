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
