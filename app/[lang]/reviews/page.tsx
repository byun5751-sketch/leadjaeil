import type { Metadata } from "next";
import { ChevronDown, Quote } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { getReviews } from "@/lib/get-data";
import { alternatesFor } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isKo = lang === "ko";
  return {
    title: isKo ? "후기" : "Reviews",
    description: isKo
      ? "리드제일의 강연과 프로그램에 참여한 분들이 남긴 후기"
      : "Reviews from people who attended a talk or programme by Lead Jaeil",
    alternates: alternatesFor(lang, "/reviews"),
  };
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getTranslations(lang as Lang);
  const reviews = getReviews(lang as Lang);

  return (
    <div className="site-shell py-16 md:py-24">
      <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
        {t.reviewsPage.eyebrow}
      </p>
      <h1 className="mt-2 font-serif text-4xl text-text">{t.reviewsPage.title}</h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">
        {t.reviewsPage.desc}
      </p>

      {reviews.length === 0 ? (
        <p className="mt-12 text-sm text-text-tertiary">{t.reviewsPage.empty}</p>
      ) : (
        <div className="mt-12 grid gap-4">
          {reviews.map((review) => (
            <details
              key={review.slug}
              className="group rounded-2xl border border-border bg-surface"
            >
              <summary className="flex cursor-pointer list-none items-start gap-4 p-6 md:p-8 [&::-webkit-details-marker]:hidden">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-medium text-accent">
                      {review.event}
                    </span>
                    <span className="text-[11px] text-text-tertiary">{review.date}</span>
                  </div>

                  <h2 className="mt-3 font-serif text-xl text-text">{review.title}</h2>

                  <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-text-secondary">
                    <Quote size={14} className="mt-1 shrink-0 text-accent" />
                    {review.pullQuote}
                  </p>
                </div>

                <ChevronDown
                  size={20}
                  className="mt-1 shrink-0 text-text-tertiary transition-transform duration-200 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-border px-6 pb-8 pt-6 md:px-8">
                {review.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-4 text-sm leading-[1.9] text-text-secondary first:mt-0"
                  >
                    {paragraph}
                  </p>
                ))}

                <p className="mt-8 text-xs text-text-tertiary">— {review.attribution}</p>
                {review.translated && (
                  <p className="mt-2 text-xs text-text-tertiary">
                    {t.reviewsPage.translatedNote}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
