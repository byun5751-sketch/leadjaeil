"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

export function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const t = getTranslations(lang);
  const koPath = pathname.replace(`/${lang}`, "/ko");
  const enPath = pathname.replace(`/${lang}`, "/en");

  const links = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/books`, label: t.nav.books },
    { href: `/${lang}/speaking`, label: t.nav.speaking },
    { href: `/${lang}/services`, label: t.nav.services },
    { href: `/${lang}/links`, label: t.nav.links },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-lg">
      <nav className="site-shell flex h-16 items-center justify-between gap-5">
        <Link href={`/${lang}`} className="font-serif text-xl text-text">
          {lang === "ko" ? "리드제일" : "Brasley Byun"}
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
          <a
            href="#contact"
            className="rounded-full bg-highlight px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-text"
          >
            {t.nav.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
