import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getData } from "@/lib/get-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const title = lang === "ko" ? "저서" : "Books";
  const description =
    lang === "ko"
      ? "리드제일 저서 소개 -- 『된다! 링크드인 활용법』, 『우리는 아직도 출근 중입니다』"
      : "Books by Lead Jaeil -- It works! LinkedIn, We're Still Commuting";
  return { title, description };
}

export default async function BooksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getTranslations(lang as Lang);
  const { books } = getData(lang as Lang);

  // Destinations for t.booksNext.items, in the same order.
  const nextSteps = [
    { href: "https://www.latpeed.com/products/wKUZY", external: true },
    { href: `/${lang}/services/career-challenge`, external: false },
    { href: `/${lang}/services/linkedin-workshop`, external: false },
  ];

  return (
    <div className="site-shell py-16 md:py-24">
      <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
        {t.booksPage.eyebrow}
      </p>
      <h1 className="mt-2 font-serif text-4xl text-text">{t.booksPage.title}</h1>
      <p className="mt-3 max-w-lg text-sm text-text-secondary">{t.booksPage.desc}</p>

      <div className="mt-16 space-y-20">
        {books.map((book) => (
          <article
            key={book.slug}
            className="flex flex-col gap-8 rounded-2xl border border-border bg-surface p-8 md:flex-row md:gap-12"
          >
            <a
              href={book.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 self-start"
            >
              <Image
                src={book.coverUrl}
                alt={book.title}
                width={200}
                height={280}
                className="rounded-xl object-cover transition-opacity hover:opacity-90"
              />
            </a>
            <div className="flex-1">
              <h2 className="font-serif text-2xl text-text">{book.title}</h2>
              {book.subtitle && (
                <p className="mt-1 text-sm text-text-tertiary">{book.subtitle}</p>
              )}

              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div>
                  <span className="text-text-tertiary">
                    {lang === "ko" ? "저자" : "Author"}
                  </span>
                  <p className="text-text">
                    {book.author}
                    {book.coAuthor && `, ${book.coAuthor}`}
                  </p>
                </div>
                <div>
                  <span className="text-text-tertiary">
                    {lang === "ko" ? "출판사" : "Publisher"}
                  </span>
                  <p className="text-text">{book.publisher}</p>
                </div>
                <div>
                  <span className="text-text-tertiary">
                    {lang === "ko" ? "출간일" : "Published"}
                  </span>
                  <p className="text-text">{book.publishDate}</p>
                </div>
                <div>
                  <span className="text-text-tertiary">ISBN</span>
                  <p className="text-text">{book.isbn}</p>
                </div>
                {book.pages && (
                  <div>
                    <span className="text-text-tertiary">
                      {lang === "ko" ? "분량" : "Pages"}
                    </span>
                    <p className="text-text">{book.pages}{lang === "ko" ? "쪽" : "p"}</p>
                  </div>
                )}
                <div>
                  <span className="text-text-tertiary">
                    {lang === "ko" ? "분야" : "Category"}
                  </span>
                  <p className="text-text">{book.category}</p>
                </div>
              </div>

              {book.outcomes && book.outcomes.length > 0 && (
                <div className="mt-6 rounded-xl bg-surface-warm p-6">
                  <h3 className="text-sm font-semibold text-text">
                    {t.booksPage.outcomes}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {book.outcomes.map((o, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                      >
                        <Check size={15} className="mt-1 shrink-0 text-accent" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mt-6 text-sm leading-relaxed text-text-secondary">
                {book.description}
              </p>

              {book.recommendFor.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-text">{t.booksPage.recommend}</h3>
                  <ul className="mt-2 space-y-1.5">
                    {book.recommendFor.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {book.highlights.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-text">{t.booksPage.highlights}</h3>
                  <ul className="mt-2 space-y-1.5">
                    {book.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {book.achievements && book.achievements.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-text">{t.booksPage.achievements}</h3>
                  <ul className="mt-2 space-y-1.5">
                    {book.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href={book.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-highlight px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-text"
              >
                <ExternalLink size={14} />
                {t.booksPage.purchase}
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20">
        <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
          {t.booksNext.eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-3xl text-text">{t.booksNext.title}</h2>
        <p className="mt-3 max-w-xl text-sm text-text-secondary">{t.booksNext.desc}</p>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {t.booksNext.items.map((item, i) => {
            const { href, external } = nextSteps[i];
            const body = (
              <>
                <span className="font-serif text-2xl text-accent">{i + 1}</span>
                <h3 className="mt-3 font-semibold text-text group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent">
                  {item.cta}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </>
            );
            const cls =
              "group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent-light";
            return (
              <li key={item.title} className="flex">
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cls} w-full`}
                  >
                    {body}
                  </a>
                ) : (
                  <Link href={href} className={`${cls} w-full`}>
                    {body}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
