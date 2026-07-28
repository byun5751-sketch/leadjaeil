import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  return { title, description };
}

/**
 * The whole services page. Columns run from the lowest commitment to the
 * highest so the free option reads as the entry point.
 * `values` must stay in the same order as `criteria`.
 */
type Comparison = {
  eyebrow: string;
  title: string;
  desc: string;
  criteria: string[];
  columns: {
    key: string;
    name: string;
    badge: string;
    values: string[];
    cta: string;
    detail?: string;
    url?: string;
  }[];
};

const comparison: { ko: Comparison; en: Comparison } = {
  ko: {
    eyebrow: "선택 기준",
    title: "어떤 걸 골라야 할까요?",
    desc: "무료로 먼저 물어볼 수도 있고, 5주를 들여 완주할 수도 있고, 2시간 만에 끝낼 수도 있습니다. 다섯 가지 기준으로 비교해보세요.",
    criteria: ["대상", "난이도", "소요 기간", "비용", "결과물", "이런 경우엔 비추천"],
    columns: [
      {
        key: "open-chat",
        name: "링크드인 공작소",
        badge: "FREE",
        values: [
          "링크드인을 시작하고 싶은데 뭘 물어봐야 할지도 막막한 분",
          "입문 — 준비물 없이 바로 참여",
          "상시, 원할 때 참여",
          "무료",
          "궁금한 점에 대한 답변, 프로필·게시글 피드백, 최신 트렌드",
          "정해진 커리큘럼이나 1:1 밀착 지도를 원하는 경우",
        ],
        cta: "무료로 참여하기",
        url: "https://www.latpeed.com/products/wKUZY",
      },
      {
        key: "challenge",
        name: "5주 외국계 취업 챌린지",
        badge: "CHALLENGE",
        values: [
          "외국계·글로벌 기업 취업이 목표인 대학생~경력 직장인",
          "중급 — 주 5시간 이상 직접 실행",
          "5주 (주 1회 실시간 강의 + 매주 미션)",
          "30만원 (미션 100% 완료 시 10만원 환급)",
          "링크드인 프로필 완성본, 국·영문 이력서, 타겟 기업 3곳 + HR 담당자 리스트, 수료증",
          "국내 기업만 목표거나, 주 5시간을 내기 어려운 경우",
        ],
        cta: "챌린지 상세 보기",
        detail: "career-challenge",
      },
      {
        key: "workshop",
        name: "링크드인 워크숍",
        badge: "PREMIUM",
        values: [
          "프로필은 있지만 성과가 없는 분, 비즈니스 기회를 만들고 싶은 분",
          "밀착 1:1 — 리드제일이 옆에서 함께 작성",
          "사전 리서치 2~3시간 + 워크숍 2시간 (전략은 3개월 분량)",
          "60만원 (1회 세션, 올인원)",
          "헤드라인·About 완성본, 3개월 콘텐츠 주제 20개, 타겟 1촌 100명 리스트",
          "스스로 단계를 밟으며 배우고 싶은 경우 (챌린지가 더 맞습니다)",
        ],
        cta: "워크숍 상세 보기",
        detail: "linkedin-workshop",
      },
    ],
  },
  en: {
    eyebrow: "How to choose",
    title: "Which one should you pick?",
    desc: "Ask for free first, commit to five weeks, or finish in two hours. Compare them across five criteria.",
    criteria: [
      "Who it's for",
      "Intensity",
      "Time it takes",
      "Cost",
      "What you get",
      "Not a fit if",
    ],
    columns: [
      {
        key: "open-chat",
        name: "LinkedIn Lab",
        badge: "FREE",
        values: [
          "Anyone who wants to start on LinkedIn but is not sure what to ask first",
          "Beginner — join with nothing prepared",
          "Always open, join whenever",
          "Free",
          "Answers to your questions, profile and post feedback, current trends",
          "You want a set curriculum or hands-on 1:1 guidance",
        ],
        cta: "Join for free",
        url: "https://www.latpeed.com/products/wKUZY",
      },
      {
        key: "challenge",
        name: "5-Week Global Career Challenge",
        badge: "CHALLENGE",
        values: [
          "Students through mid-career professionals targeting a global company",
          "Intermediate — five or more hours a week, executed by you",
          "5 weeks (one live lecture and one mission per week)",
          "₩300,000 (₩100,000 refunded at 100% mission completion)",
          "A finished LinkedIn profile, Korean and English resumes, three target companies with HR contacts, certificate of completion",
          "You are only targeting domestic companies, or cannot spare five hours a week",
        ],
        cta: "View challenge details",
        detail: "career-challenge",
      },
      {
        key: "workshop",
        name: "LinkedIn Workshop",
        badge: "PREMIUM",
        values: [
          "Anyone with a profile that is not producing results, or who wants business opportunities",
          "Hands-on 1:1 — written together with Lead Jaeil",
          "2–3 hours of research plus a 2-hour session (strategy covers three months)",
          "₩600,000 (one all-in session)",
          "A finished headline and About section, 20 content topics for three months, a list of 100 target connections",
          "You would rather learn by working through the steps yourself (take the challenge instead)",
        ],
        cta: "View workshop details",
        detail: "linkedin-workshop",
      },
    ],
  },
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isKo = lang === "ko";
  const table = isKo ? comparison.ko : comparison.en;

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
      </section>
    </div>
  );
}
