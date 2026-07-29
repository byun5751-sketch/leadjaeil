import type { Metadata } from "next";
import { Mic, Users, TrendingUp, ChevronDown } from "lucide-react";
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
