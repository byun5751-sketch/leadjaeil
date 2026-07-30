import type { Metadata } from "next";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import { getComparison } from "@/lib/services";
import { alternatesFor } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const title = lang === "ko" ? "서비스" : "Services";
  const description =
    lang === "ko"
      ? "리드제일의 링크드인 서비스 -- 워크숍, 무료 오픈채팅방"
      : "Lead Jaeil's LinkedIn services -- workshop and free open chat";
  return { title, description, alternates: alternatesFor(lang, "/services") };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isKo = lang === "ko";
  const table = getComparison(lang as Lang);

  return (
    <div className="site-shell py-16 md:py-24">
      <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
        {isKo ? "서비스" : "Services"}
      </p>
      <h1 className="mt-2 font-serif text-4xl text-text">
        {isKo ? "링크드인, 혼자 하지 마세요" : "Don't Do LinkedIn Alone"}
      </h1>
      <p className="mt-3 max-w-lg text-sm text-text-secondary">
        {isKo
          ? "리드제일이 직접 운영하는 링크드인 서비스입니다. 유료 워크숍부터 무료 커뮤니티까지, 단계에 맞는 도움을 받아보세요."
          : "LinkedIn services run directly by Lead Jaeil. From premium workshops to a free community, get help that fits your stage."}
      </p>

      <section className="mt-16">
        <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">
          {table.eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-3xl text-text">{table.title}</h2>
        <p className="mt-3 max-w-xl text-sm text-text-secondary">{table.desc}</p>

        {/* The table is wider than the shell on small screens, so it scrolls
            inside the card rather than the page body. */}
        <div className="mt-8 rounded-2xl border border-border bg-surface p-4 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left align-top">
              <caption className="sr-only">{table.title}</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[120px] p-4" />
                  {table.columns.map((col) => (
                    <th
                      key={col.key}
                      scope="col"
                      className="border-b border-border p-4 align-bottom"
                    >
                      <span className="inline-block rounded-full bg-accent-bg px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-accent">
                        {col.badge}
                      </span>
                      <span className="mt-2 block font-serif text-lg font-normal text-text">
                        {col.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.criteria.map((criterion, row) => (
                  <tr key={criterion} className="align-top">
                    <th
                      scope="row"
                      className="border-b border-border p-4 text-xs font-medium text-text-tertiary"
                    >
                      {criterion}
                    </th>
                    {table.columns.map((col) => (
                      <td
                        key={col.key}
                        className="border-b border-border p-4 text-sm leading-relaxed text-text-secondary"
                      >
                        {col.values[row]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-4" />
                  {table.columns.map((col) => (
                    <td key={col.key} className="p-4">
                      {col.detail ? (
                        <Link
                          href={`/${lang}/services/${col.detail}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-highlight"
                        >
                          {col.cta}
                          <ArrowRight size={14} />
                        </Link>
                      ) : (
                        <a
                          href={col.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-highlight"
                        >
                          {col.cta}
                          <ArrowRight size={14} />
                        </a>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-surface-warm p-6 md:p-8">
          <h3 className="font-serif text-xl text-text">
            {isKo ? "아직 고르기 어렵다면" : "Still not sure which one?"}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
            {isKo
              ? "지금 상황을 적어 보내주시면 어떤 쪽이 맞을지, 혹은 지금은 무료 공작소로 충분한지 알려드립니다. 맞지 않는 걸 권하지는 않습니다."
              : "Send over where you are right now and you will get an honest read on which one fits — including whether the free Lab is enough for now. Nothing gets recommended that does not fit."}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-highlight px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-text"
          >
            {isKo ? "상황 알려주고 추천받기" : "Tell me your situation"}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
