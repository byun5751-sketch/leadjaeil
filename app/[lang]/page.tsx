import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink, Sprout, Target, Briefcase, Mic } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getData } from "@/lib/get-data";
import { alternatesFor } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { alternates: alternatesFor(lang) };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getTranslations(lang as Lang);
  const { books } = getData(lang as Lang);

  // Icon and destination for each starting point, in the same order as
  // t.paths.items. Copy lives in i18n; only locale-independent bits are here.
  const pathTargets = [
    { icon: Sprout, href: `/${lang}/services` },
    { icon: Target, href: `/${lang}/services/career-challenge` },
    { icon: Briefcase, href: `/${lang}/services/linkedin-workshop` },
    { icon: Mic, href: `/${lang}/speaking` },
  ];

  return (
    <>
      <JsonLd />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="site-shell py-20 md:py-28">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-16">
            <div className="flex-1">
              <span className="inline-block rounded-full bg-accent-bg px-3 py-1 text-xs font-medium text-accent">
                {t.hero.status}
              </span>
              <h1 className="mt-5 font-serif text-4xl tracking-tight text-text md:text-5xl">
                {t.hero.name}
              </h1>
              <p className="mt-2 text-lg text-accent">{t.hero.role}</p>
              {/* The brand line leads; the personal story supports it. */}
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-text">
                {t.hero.brandLine}
              </p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-secondary">
                {t.hero.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/${lang}/books`}
                  className="inline-flex items-center gap-2 rounded-full bg-highlight px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-text"
                >
                  <BookOpen size={15} />
                  {t.hero.cta1}
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:bg-surface-warm"
                >
                  {t.hero.cta2}
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
            <div className="shrink-0">
              <Image
                src="/hero-book.png"
                alt="된다! 링크드인 활용법"
                width={280}
                height={400}
                priority
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-surface">
        <div className="site-shell grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {[
            { value: "30,000+", label: t.stats.followers },
            { value: lang === "ko" ? "130만+" : "1.3M+", label: t.stats.views },
            { value: "2", label: t.stats.books },
            { value: "10", label: t.stats.events },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl text-text">{stat.value}</p>
              <p className="mt-1 text-xs text-text-tertiary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Starting points */}
      <section className="border-b border-border">
        <div className="site-shell py-16 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
            {t.paths.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl text-text">{t.paths.title}</h2>
          <p className="mt-3 max-w-lg text-sm text-text-secondary">{t.paths.desc}</p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.paths.items.map((item, i) => {
              const { icon: Icon, href } = pathTargets[i];
              return (
                <Link
                  key={item.situation}
                  href={href}
                  className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent-light"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-bg text-accent">
                      <Icon size={19} />
                    </span>
                    <p className="text-sm font-medium text-accent">{item.situation}</p>
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-text group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent">
                    {item.cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="border-b border-border bg-surface-warm">
        <div className="site-shell py-20">
          <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
            {t.featuredBooks.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl text-text">{t.featuredBooks.title}</h2>
          <p className="mt-3 max-w-lg text-sm text-text-secondary">{t.featuredBooks.desc}</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {books.map((book) => (
              <a
                key={book.slug}
                href={book.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-5 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent-light"
              >
                <Image
                  src={book.coverUrl}
                  alt={book.title}
                  width={100}
                  height={140}
                  className="shrink-0 rounded-lg object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-text group-hover:text-accent">{book.title}</h3>
                  {book.subtitle && (
                    <p className="mt-1 text-xs text-text-tertiary">{book.subtitle}</p>
                  )}
                  <p className="mt-2 text-xs text-text-secondary">{book.publisher}</p>
                  <div className="mt-auto flex items-center gap-1 pt-3 text-xs text-accent">
                    <ExternalLink size={12} />
                    {t.booksPage.purchase}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={`/${lang}/books`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-highlight"
            >
              {t.featuredBooks.viewAll}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-highlight">
        <div className="site-shell py-20 text-center">
          <h2 className="font-serif text-3xl text-white">{t.cta.title}</h2>
          <p className="mt-4 text-sm text-white/70">{t.cta.desc}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:leadjaeil@gmail.com"
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {t.cta.email}
            </a>
            <a
              href="https://open.kakao.com/o/sypM9TBh"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {t.cta.kakao}
            </a>
          </div>
          <p className="mt-8 text-sm text-white/70">
            {t.cta.formLead}{" "}
            <Link
              href={`/${lang}/contact`}
              className="font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              {t.cta.formLink}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
