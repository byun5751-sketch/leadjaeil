import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getTranslations(lang as Lang).contactSent;
  // Nothing to find here in a search result — it only makes sense right after
  // submitting the form.
  return { title: t.title, robots: { index: false, follow: true } };
}

export default async function ContactSentPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getTranslations(lang as Lang).contactSent;

  return (
    <div className="site-shell py-24 md:py-32">
      <div className="max-w-lg">
        <CheckCircle2 size={36} className="text-accent" />
        <h1 className="mt-6 font-serif text-4xl text-text">{t.title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">{t.desc}</p>
        <Link
          href={`/${lang}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-highlight px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-text"
        >
          {t.back}
        </Link>
      </div>
    </div>
  );
}
