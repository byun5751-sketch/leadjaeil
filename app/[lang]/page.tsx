import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ExternalLink,
  Mic,
  Quote,
  Sprout,
  Target,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getData, getReviews } from "@/lib/get-data";
import { getComparison } from "@/lib/services";
import { alternatesFor } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Counter } from "@/components/Counter";

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
  const { books, activities, careers } = getData(lang as Lang);
  const featuredTalks = activities.filter((a) => a.featured);
  const services = getComparison(lang as Lang);
  const reviews = getReviews(lang as Lang);

  // Icon and destination for each starting point, in the same order as
  // t.paths.items. Copy lives in i18n; only locale-independent bits are here.
  const pathTargets = [
    { icon: Sprout, href: `/${lang}/services` },
    { icon: Target, href: `/${lang}/services/career-challenge` },
    { icon: Briefcase, href: `/${lang}/services/linkedin-workshop` },
    { icon: Mic, href: `/${lang}/speaking` },
  ];

  // Impressions are worded differently per locale — 130만 vs 1.3M — so the
  // figure and its unit are split rather than kept as one formatted string.
  const stats: {
    value: number;
    decimals?: number;
    suffix?: string;
    label: string;
  }[] = [
    { value: 30000, suffix: "+", label: t.stats.followers },
    lang === "ko"
      ? { value: 130, suffix: "만+", label: t.stats.views }
      : { value: 1.3, decimals: 1, suffix: "M+", label: t.stats.views },
    { value: 3, label: t.stats.careerMoves },
    { value: 11, label: t.stats.events },
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
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-text">
                {t.hero.brandLine}
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
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl text-text">
                <Counter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </p>
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


      {/* Who is behind this — read right before the proof of the work. */}
      <section className="border-b border-border">
        <div className="site-shell py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
                {t.intro.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-3xl text-text">{t.intro.title}</h2>
              <div className="mt-6 space-y-4">
                {t.intro.paragraphs.map((p) => (
                  <p key={p} className="max-w-xl leading-relaxed text-text-secondary">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="self-start rounded-xl border border-border bg-surface p-6">
              <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
                {t.intro.careerLabel}
              </p>
              <ul className="mt-5 space-y-4">
                {careers.map((career) => (
                  <li key={career.company}>
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-medium text-text">{career.company}</p>
                      <span className="shrink-0 text-xs text-text-tertiary">
                        {career.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-text-secondary">{career.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selected talks */}
      <section className="border-b border-border bg-surface">
        <div className="site-shell py-20">
          <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
            {t.homeTalks.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl text-text">{t.homeTalks.title}</h2>
          <p className="mt-3 max-w-xl text-sm text-text-secondary">{t.homeTalks.desc}</p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {featuredTalks.map((talk) => (
              <Link
                key={talk.slug}
                href={`/${lang}/speaking`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-bg transition-colors hover:border-accent-light"
              >
                {talk.image && (
                  <div className="relative aspect-[3/2] bg-surface-warm">
                    <Image
                      src={talk.image}
                      alt={talk.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-text-tertiary">{talk.date}</span>
                    {talk.audience && (
                      <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-medium text-accent">
                        {talk.audience}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-serif text-lg leading-snug text-text group-hover:text-accent">
                    {talk.title}
                  </h3>
                  <ul className="mt-auto space-y-1.5 pt-4">
                    {talk.highlights.slice(0, 2).map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed text-text-secondary"
                      >
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={`/${lang}/speaking`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-highlight"
            >
              {t.homeTalks.viewAll}
              <ArrowRight size={14} />
            </Link>
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


      {/* Services */}
      <section className="border-b border-border">
        <div className="site-shell py-20">
          <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
            {t.homeServices.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl text-text">{t.homeServices.title}</h2>
          <p className="mt-3 max-w-xl text-sm text-text-secondary">{t.homeServices.desc}</p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.columns.map((service) => {
              const inner = (
                <>
                  <span className="inline-block self-start rounded-full bg-accent-bg px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-accent">
                    {service.badge}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-text group-hover:text-accent">
                    {service.name}
                  </h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="text-xs text-text-tertiary">{t.homeServices.forWho}</dt>
                      <dd className="mt-0.5 leading-relaxed text-text-secondary">
                        {service.values[0]}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-text-tertiary">{t.homeServices.cost}</dt>
                      <dd className="mt-0.5 leading-relaxed text-text-secondary">
                        {service.values[3]}
                      </dd>
                    </div>
                  </dl>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent">
                    {service.cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </>
              );
              const cls =
                "group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent-light";
              return service.detail ? (
                <Link
                  key={service.key}
                  href={`/${lang}/services/${service.detail}`}
                  className={cls}
                >
                  {inner}
                </Link>
              ) : (
                <a
                  key={service.key}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {inner}
                </a>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href={`/${lang}/services`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-highlight"
            >
              {t.homeServices.viewAll}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {reviews.length > 0 && (
        <section className="border-b border-border bg-surface">
          <div className="site-shell py-20">
            <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
              {t.homeReviews.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-3xl text-text">{t.homeReviews.title}</h2>
            <p className="mt-3 max-w-xl text-sm text-text-secondary">{t.homeReviews.desc}</p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {reviews.map((review) => (
                <Link
                  key={review.slug}
                  href={`/${lang}/reviews`}
                  className="group flex flex-col rounded-xl border border-border bg-bg p-6 transition-colors hover:border-accent-light"
                >
                  <Quote size={16} className="text-accent" />
                  <p className="mt-3 text-sm leading-relaxed text-text">{review.pullQuote}</p>
                  <p className="mt-auto pt-5 text-xs text-text-tertiary">
                    {review.event} &middot; {review.date}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={`/${lang}/reviews`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-highlight"
              >
                {t.homeReviews.viewAll}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

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
