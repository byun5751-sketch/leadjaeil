import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ChevronDown, Mail, MessageCircle, X } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { getServicePage, getServicePages } from "@/lib/get-data";
import type { Block } from "@/lib/service-pages";

const KAKAO_URL = "https://open.kakao.com/o/sypM9TBh";
const EMAIL_URL = "mailto:leadjaeil@gmail.com";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getServicePages(lang).map((page) => ({ lang, slug: page.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const page = getServicePage(lang as Lang, slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/${lang}/services/${slug}`,
      languages: {
        ko: `/ko/services/${slug}`,
        en: `/en/services/${slug}`,
      },
    },
  };
}

function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <>
      <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-3xl text-text">{title}</h2>
      {desc && <p className="mt-3 max-w-xl text-sm text-text-secondary">{desc}</p>}
    </>
  );
}

function ContactButtons({ label }: { label: { email: string; kakao: string } }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={EMAIL_URL}
        className="inline-flex items-center gap-2 rounded-full bg-highlight px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-text"
      >
        <Mail size={15} />
        {label.email}
      </a>
      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent-light hover:text-accent"
      >
        <MessageCircle size={15} />
        {label.kakao}
      </a>
    </div>
  );
}

/** Alternating section backgrounds keep long pages readable. */
const shades = ["bg-bg", "bg-surface", "bg-surface-warm"];

function BlockView({
  block,
  shade,
  labels,
}: {
  block: Block;
  shade: string;
  labels: { email: string; kakao: string };
}) {
  const wrap = (children: React.ReactNode, extra = "") => (
    <section className={`border-b border-border ${shade} ${extra}`}>
      <div className="site-shell py-16 md:py-20">{children}</div>
    </section>
  );

  switch (block.kind) {
    case "hero":
      return (
        <section className="border-b border-border bg-surface-warm">
          <div className="site-shell py-20 md:py-28">
            {block.badge && (
              <span className="inline-block rounded-full bg-accent-bg px-3 py-1 text-xs font-medium text-accent">
                {block.badge}
              </span>
            )}
            <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-text md:text-5xl">
              {block.headline}
              {block.headlineAccent && (
                <>
                  <br />
                  <span className="text-accent">{block.headlineAccent}</span>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary">
              {block.sub}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
              {block.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl text-text">{s.value}</p>
                  <p className="mt-1 text-xs text-text-tertiary">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <ContactButtons label={labels} />
            </div>
          </div>
        </section>
      );

    case "statement":
      return wrap(
        <>
          <SectionHead eyebrow={block.eyebrow} title={block.title} />
          <div className="mt-8 max-w-2xl space-y-2">
            {block.lines.map((line) => (
              <p key={line} className="text-lg leading-relaxed text-text-secondary">
                {line}
              </p>
            ))}
          </div>
          {block.closing && (
            <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-accent">
              {block.closing}
            </p>
          )}
        </>
      );

    case "cards":
      return wrap(
        <>
          <SectionHead eyebrow={block.eyebrow} title={block.title} desc={block.desc} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {block.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <span className="inline-flex h-10 min-w-10 items-center justify-center whitespace-nowrap rounded-full bg-accent-bg px-3 font-serif text-lg text-accent">
                  {item.mark}
                </span>
                <h3 className="mt-4 font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </>
      );

    case "stages":
      return wrap(
        <>
          <SectionHead eyebrow={block.eyebrow} title={block.title} desc={block.desc} />
          <div className="mt-10 grid gap-4">
            {block.items.map((item) => (
              <div
                key={item.tag}
                className="rounded-xl border border-border bg-surface p-6 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-accent-bg px-3 py-1 text-xs font-medium text-accent">
                    {item.tag}
                  </span>
                  {item.note && (
                    <span className="text-xs text-text-tertiary">{item.note}</span>
                  )}
                </div>
                <h3 className="mt-4 font-serif text-xl text-text">{item.title}</h3>
                <div className="mt-5 grid gap-5 md:grid-cols-3">
                  {item.groups.map((group, gi) => (
                    <div key={group.label ?? gi}>
                      {group.label && (
                        <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
                          {group.label}
                        </p>
                      )}
                      <ul className={group.label ? "mt-3 space-y-2" : "space-y-2"}>
                        {group.items.map((li) => (
                          <li
                            key={li}
                            className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary"
                          >
                            <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {block.warning && (
            <p className="mt-6 rounded-xl bg-accent-bg px-5 py-4 text-sm text-accent">
              {block.warning}
            </p>
          )}
        </>
      );

    case "results":
      return wrap(
        <>
          <SectionHead eyebrow={block.eyebrow} title={block.title} desc={block.desc} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {block.cases.map((c) => (
              <div key={c.who} className="rounded-xl border border-border bg-surface p-6">
                <p className="text-sm font-medium text-text">{c.who}</p>
                <p className="mt-1 text-xs text-text-tertiary">{c.duration}</p>
                <div className="mt-5 flex gap-6">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-serif text-2xl text-accent">{m.value}</p>
                      <p className="mt-0.5 text-xs text-text-tertiary">{m.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-text-secondary">
                  {c.quote}
                </p>
              </div>
            ))}
          </div>
        </>
      );

    case "expert":
      return wrap(
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
              {block.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-3xl text-text">{block.name}</h2>
            <p className="mt-2 text-sm text-accent">{block.role}</p>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary">
              {block.desc}
            </p>
            {block.notes?.map((note) => (
              <p key={note} className="mt-3 text-sm text-text-secondary">
                {note}
              </p>
            ))}
          </div>
          <dl className="grid gap-3 self-start">
            {block.points.map((p) => (
              <div
                key={p.label}
                className="flex items-baseline justify-between gap-4 rounded-xl border border-border bg-surface px-5 py-4"
              >
                <dt className="text-sm text-text-secondary">{p.label}</dt>
                <dd className="font-serif text-xl text-text">{p.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "pricing":
      return wrap(
        <>
          <SectionHead eyebrow={block.eyebrow} title={block.title} desc={block.desc} />
          <div className="mt-10 max-w-2xl rounded-2xl border border-accent bg-surface p-8 md:p-10">
            <h3 className="font-serif text-2xl text-text">{block.name}</h3>
            <p className="mt-5 font-serif text-4xl text-text">{block.price}</p>
            <p className="mt-2 text-sm text-text-secondary">{block.priceNote}</p>
            <ul className="mt-8 space-y-3">
              {block.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                >
                  <Check size={15} className="mt-1 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ContactButtons label={labels} />
            </div>
            {block.footnote && (
              <p className="mt-4 text-xs text-text-tertiary">{block.footnote}</p>
            )}
          </div>
        </>
      );

    case "columns":
      return wrap(
        <>
          <SectionHead eyebrow={block.eyebrow} title={block.title} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {block.groups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-border bg-surface p-6 md:p-8"
              >
                <h3 className="font-semibold text-text">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                    >
                      {group.tone === "no" ? (
                        <X size={15} className="mt-1 shrink-0 text-text-tertiary" />
                      ) : group.tone === "yes" ? (
                        <Check size={15} className="mt-1 shrink-0 text-accent" />
                      ) : (
                        <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {block.note && (
            <p className="mt-6 rounded-xl bg-accent-bg px-5 py-4 text-sm text-accent">
              {block.note}
            </p>
          )}
        </>
      );

    case "faq":
      return wrap(
        <>
          <SectionHead eyebrow={block.eyebrow} title={block.title} />
          <div className="mt-10 grid gap-3">
            {block.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border bg-surface"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-medium text-text">{item.q}</h3>
                  <ChevronDown
                    size={18}
                    className="mt-0.5 shrink-0 text-text-tertiary transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-text-secondary">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </>
      );

    case "closing":
      return (
        <section className="bg-highlight">
          <div className="site-shell py-20 text-center">
            <p className="text-[11px] font-medium uppercase tracking-widest text-white/50">
              {block.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-3xl text-white">{block.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/70">{block.desc}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={EMAIL_URL}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-highlight transition-opacity hover:opacity-90"
              >
                {labels.email}
              </a>
              <a
                href={KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                {labels.kakao}
              </a>
            </div>
          </div>
        </section>
      );
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const page = getServicePage(lang as Lang, slug);
  if (!page) notFound();

  const isKo = lang === "ko";
  const labels = {
    email: isKo ? "이메일 문의" : "Email us",
    kakao: isKo ? "카카오톡 문의" : "KakaoTalk",
  };

  // The hero carries its own background, so alternate shades from the block
  // after it.
  let shadeIndex = 0;

  return (
    <>
      {page.blocks.map((block, i) => {
        const shade = block.kind === "hero" ? "" : shades[shadeIndex++ % shades.length];
        return (
          <BlockView key={i} block={block} shade={shade} labels={labels} />
        );
      })}

      <div className="site-shell py-10">
        <Link
          href={`/${lang}/services`}
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} />
          {isKo ? "전체 서비스 보기" : "All services"}
        </Link>
      </div>
    </>
  );
}
