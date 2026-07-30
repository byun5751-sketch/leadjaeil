import type { Metadata } from "next";
import Link from "next/link";
import { Mic, Users, TrendingUp, ChevronDown, Star, ArrowRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getData } from "@/lib/get-data";
import type { Activity } from "@/lib/data";
import { alternatesFor } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const title = lang === "ko" ? "강연 \xB7 활동" : "Speaking & Activities";
  const description =
    lang === "ko"
      ? "리드제일 외부 강연, 멘토링, 마케팅 캠페인 경험"
      : "Lead Jaeil speaking events, mentoring, and marketing campaigns";
  return { title, description, alternates: alternatesFor(lang, "/speaking") };
}

function ActivityCard({
  activity,
  lang,
}: {
  activity: Activity;
  lang: Lang;
}) {
  return (
    <details className="group rounded-xl border border-border bg-surface">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6">
        <h3 className="font-semibold text-text">{activity.title}</h3>
        <span className="flex shrink-0 items-center gap-3">
          <span className="text-xs text-text-tertiary">{activity.date}</span>
          <ChevronDown
            size={16}
            className="text-text-tertiary transition-transform duration-200 group-open:rotate-180"
          />
        </span>
      </summary>
      <div className="px-6 pb-6">
        {activity.audience && (
          <p className="text-xs text-accent">
            {lang === "ko" ? "규모" : "Audience"}: {activity.audience}
          </p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{activity.summary}</p>
        {activity.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {activity.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </details>
  );
}

export default async function SpeakingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getTranslations(lang as Lang);
  const { activities } = getData(lang as Lang);

  // Sort newest first. Dates are "YYYY.MM" / "YYYY" strings, so lexicographic
  // order matches chronological order; ranges sort by their start date.
  const byDateDesc = (a: Activity, b: Activity) => b.date.localeCompare(a.date);

  const speaking = activities.filter((a) => a.type === "speaking").sort(byDateDesc);
  const mentoring = activities.filter((a) => a.type === "mentoring").sort(byDateDesc);
  const campaigns = activities.filter((a) => a.type === "campaign").sort(byDateDesc);

  // Featured talks are shown twice on purpose: once up front as a showcase,
  // and again below, because the list underneath is the full record and a
  // record with holes in it is worse than a repeated entry.
  const featured = speaking.filter((a) => a.featured);
  const b = t.speakingPage.booking;

  const sections = [
    { title: t.speakingPage.speaking, items: speaking, icon: Mic },
    { title: t.speakingPage.mentoring, items: mentoring, icon: Users },
    { title: t.speakingPage.campaign, items: campaigns, icon: TrendingUp },
  ];

  return (
    <div className="site-shell py-16 md:py-24">
      <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
        {t.speakingPage.eyebrow}
      </p>
      <h1 className="mt-2 font-serif text-4xl text-text">{t.speakingPage.title}</h1>
      <p className="mt-3 max-w-lg text-sm text-text-secondary">{t.speakingPage.desc}</p>

      {featured.length > 0 && (
        <section className="mt-14">
          <div className="flex items-center gap-2">
            <Star size={18} className="text-accent" />
            <h2 className="text-lg font-semibold text-text">
              {t.speakingPage.featured}
            </h2>
          </div>
          <p className="mt-2 max-w-lg text-sm text-text-secondary">
            {t.speakingPage.featuredDesc}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featured.map((item) => (
              <article
                key={item.slug}
                className="flex flex-col rounded-2xl border border-accent bg-surface p-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-text-tertiary">{item.date}</span>
                  {item.audience && (
                    <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-medium text-accent">
                      {item.audience}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-serif text-lg leading-snug text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {item.summary}
                </p>
                {item.highlights.length > 0 && (
                  <ul className="mt-auto space-y-2 pt-5">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Everything a booker needs before writing, and the form to write with. */}
      <section className="mt-16 rounded-2xl border border-border bg-surface p-6 md:p-10">
        <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
          {b.eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-3xl text-text">{b.title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">{b.desc}</p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-text">{b.topicsTitle}</h3>
            <ul className="mt-4 space-y-2.5">
              {b.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary"
                >
                  <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text">{b.audienceTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {b.audiences.map((a) => (
                <li
                  key={a}
                  className="rounded-full bg-accent-bg px-3 py-1.5 text-xs font-medium text-accent"
                >
                  {a}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold text-text">{b.formatTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {b.formats.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-text-secondary"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-surface-warm p-6">
            <h3 className="text-sm font-semibold text-text">{b.needTitle}</h3>
            <p className="mt-2 text-xs leading-relaxed text-text-tertiary">{b.needDesc}</p>
            <ol className="mt-4 space-y-2.5">
              {b.needs.map((need, i) => (
                <li
                  key={need}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-bg text-[10px] font-bold text-accent">
                    {i + 1}
                  </span>
                  {need}
                </li>
              ))}
            </ol>
            <Link
              href={`/${lang}/contact`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-highlight px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-text"
            >
              {b.cta}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-16 space-y-16">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-2">
              <section.icon size={18} className="text-accent" />
              <h2 className="text-lg font-semibold text-text">{section.title}</h2>
              <span className="rounded-full bg-accent-bg px-2 py-0.5 text-xs text-accent">
                {section.items.length}
              </span>
            </div>
            <div className="mt-6 grid gap-4">
              {section.items.map((item) => (
                <ActivityCard key={item.slug} activity={item} lang={lang as Lang} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
