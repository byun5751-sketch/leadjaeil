"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Share2, X } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

export function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const t = getTranslations(lang);
  const [menuOpen, setMenuOpen] = useState(false);
  const koPath = pathname.replace(`/${lang}`, "/ko");
  const enPath = pathname.replace(`/${lang}`, "/en");

  const links = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/books`, label: t.nav.books },
    { href: `/${lang}/speaking`, label: t.nav.speaking },
    { href: `/${lang}/services`, label: t.nav.services },
    { href: `/${lang}/reviews`, label: t.nav.reviews },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-lg">
      <nav className="site-shell flex h-16 items-center justify-between gap-5">
        <Link href={`/${lang}`} className="font-serif text-xl text-text">
          {lang === "ko" ? "리드제일" : "Lead Jaeil"}
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-border bg-surface px-1.5 py-1 sm:flex">
          {links.map((link) => {
            const active =
              link.href === `/${lang}`
                ? pathname === `/${lang}`
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-[13px] transition-colors ${
                    active
                      ? "bg-accent-bg text-text font-medium"
                      : "text-text-secondary hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex rounded-full border border-border bg-surface p-0.5">
            <Link
              href={koPath}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                lang === "ko"
                  ? "bg-highlight text-white"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              한국어
            </Link>
            <Link
              href={enPath}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                lang === "en"
                  ? "bg-highlight text-white"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              EN
            </Link>
          </div>
          <Link
            href={`/${lang}/links`}
            className="hidden items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] font-medium text-text-secondary transition-colors hover:border-accent-light hover:text-text sm:inline-flex"
          >
            <Share2 size={14} />
            {t.nav.links}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="hidden rounded-full bg-highlight px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-text sm:inline-block"
          >
            {t.nav.contact}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text sm:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-bg sm:hidden">
          <ul className="site-shell flex flex-col gap-1 py-3">
            {links.map((link) => {
              const active =
                link.href === `/${lang}`
                  ? pathname === `/${lang}`
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      active
                        ? "bg-accent-bg text-text font-medium"
                        : "text-text-secondary hover:text-text"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-1">
              <Link
                href={`/${lang}/links`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2.5 text-center text-sm font-medium text-text transition-colors hover:border-accent-light hover:text-accent"
              >
                <Share2 size={15} />
                {t.nav.links}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/contact`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg bg-highlight px-3 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-text"
              >
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
