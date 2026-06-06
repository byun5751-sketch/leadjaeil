import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
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
              {lang === "ko" ? "리드제일" : "Brasley Byun"}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="mailto:leadjaeil@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/brasleybyun/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://open.kakao.com/me/JaeilByun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.72 1.8 5.108 4.516 6.458-.197.735-.714 2.666-.818 3.08-.128.512.188.504.395.367.163-.108 2.592-1.76 3.643-2.478.734.105 1.49.16 2.264.16 5.523 0 10-3.463 10-7.691S17.523 3 12 3z" />
                </svg>
              </a>
            </div>
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
                  { href: `/${lang}/about`, label: t.nav.about },
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
                  <a href="mailto:leadjaeil@gmail.com" className="text-sm text-text-secondary hover:text-text">
                    Email
                  </a>
                  <p className="mt-0.5 text-xs text-text-tertiary">leadjaeil@gmail.com</p>
                </li>
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
                    href="https://open.kakao.com/me/JaeilByun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text"
                  >
                    KakaoTalk
                  </a>
                  <p className="mt-0.5 text-xs text-text-tertiary">open.kakao.com/me/JaeilByun</p>
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
