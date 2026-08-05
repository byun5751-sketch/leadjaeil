import Link from "next/link";
import { ArrowUpRight, Share2 } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

export function Footer({ lang }: { lang: Lang }) {
  const t = getTranslations(lang);
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border bg-surface-warm">
      <div className="site-shell py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-2xl text-text">
              {lang === "ko" ? "리드제일" : "Lead Jaeil"}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {t.footer.tagline}
            </p>
            {/* Mirrors the SNS button in the top nav, for visitors who reach
                the bottom of a page instead of scrolling back up. */}
            <Link
              href={`/${lang}/links`}
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent-light hover:text-accent"
            >
              <Share2 size={15} />
              {t.footer.snsButton}
              <ArrowUpRight
                size={14}
                className="text-text-tertiary transition-colors group-hover:text-accent"
              />
            </Link>
          </div>
          <div className="flex gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
                {t.footer.navigation}
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  { href: `/${lang}/books`, label: t.nav.books },
                  { href: `/${lang}/speaking`, label: t.nav.speaking },
                  { href: `/${lang}/services`, label: t.nav.services },
                  { href: `/${lang}/reviews`, label: t.nav.reviews },
                  { href: `/${lang}/contact`, label: t.nav.contact },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-text"
                    >
                      {l.label}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
                {t.footer.contact}
              </p>
              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/brasleybyun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text"
                  >
                    LinkedIn
                  </a>
                  <p className="mt-0.5 text-xs text-text-tertiary">linkedin.com/in/brasleybyun</p>
                </li>
                <li>
                  <a
                    href="mailto:leadjaeil@gmail.com"
                    className="text-sm text-text-secondary hover:text-text"
                  >
                    Email
                  </a>
                  <p className="mt-0.5 text-xs text-text-tertiary">leadjaeil@gmail.com</p>
                </li>
                <li>
                  <a
                    href="https://open.kakao.com/o/sypM9TBh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text"
                  >
                    KakaoTalk
                  </a>
                  <p className="mt-0.5 text-xs text-text-tertiary">open.kakao.com/o/sypM9TBh</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-6">
          <p className="text-xs text-text-tertiary">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
