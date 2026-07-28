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

type Service = {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  /** Slug of an on-site detail page under /[lang]/services/. */
  detail?: string;
  /** External destination, used when there is no detail page. */
  url?: string;
};

/**
 * Side-by-side comparison shown above the service cards. Columns run from the
 * lowest commitment to the highest so the free option reads as the entry point.
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

const services: { ko: Service[]; en: Service[] } = {
  ko: [
    {
      slug: "workshop",
      badge: "PREMIUM",
      title: "링크드인 워크숍",
      subtitle: "사실상 대행 -- 프로필부터 콘텐츠까지 함께 만듭니다",
      description:
        "혼자 하기 막막한 링크드인, 리드제일이 옆에서 직접 잡아드립니다. 프로필 최적화, 콘텐츠 전략 수립, 첫 게시글 작성까지 워크숍 형태로 함께 완성하는 프리미엄 서비스입니다.",
      features: [
        "1:1 맞춤 프로필 진단 및 최적화",
        "콘텐츠 전략 설계 및 첫 게시글 함께 작성",
        "네트워킹 전략 및 1촌 확장 가이드",
        "워크숍 후 피드백 및 후속 관리",
      ],
      cta: "워크숍 상세 보기",
      detail: "linkedin-workshop",
      highlight: true,
    },
    {
      slug: "challenge",
      badge: "CHALLENGE",
      title: "5주 외국계 취업 챌린지",
      subtitle: "링크드인으로 5주 만에 외국계 취업에 도전해요",
      description:
        "막연하게 미루던 외국계 취업, 5주 동안 단계별 미션으로 끝까지 완주해요. 링크드인 프로필 세팅부터 영문 이력서, 채용 담당자 컨택, 인터뷰 준비까지 매주 하나씩 실행하며 외국계 합격에 가까워지는 챌린지입니다.",
      features: [
        "5주 단계별 미션으로 끝까지 완주",
        "링크드인 프로필 & 영문 이력서 완성",
        "채용 담당자 컨택 및 네트워킹 실전",
        "인터뷰 준비까지 매주 피드백",
      ],
      cta: "챌린지 상세 보기",
      detail: "career-challenge",
      highlight: true,
    },
    {
      slug: "open-chat",
      badge: "FREE",
      title: "리드제일의 링크드인 공작소",
      subtitle: "무료 오픈채팅방 -- 링크드인 고민을 함께 나눠요",
      description:
        "링크드인을 시작하고 싶은데 어디서부터 해야 할지 모르겠다면, 공작소에서 먼저 물어보세요. 리드제일과 멤버들이 실시간으로 답변하고 정보를 나누는 무료 커뮤니티입니다.",
      features: [
        "링크드인 관련 질문 자유롭게",
        "프로필/게시글 피드백 교환",
        "최신 링크드인 트렌드 공유",
        "같은 목표를 가진 멤버들과 네트워킹",
      ],
      cta: "무료로 참여하기",
      url: "https://www.latpeed.com/products/wKUZY",
      highlight: false,
    },
  ],
  en: [
    {
      slug: "workshop",
      badge: "PREMIUM",
      title: "LinkedIn Workshop",
      subtitle: "Done-with-you -- from profile to content, built together",
      description:
        "Struggling with LinkedIn on your own? Lead Jaeil works alongside you. A premium service where we optimize your profile, build your content strategy, and craft your first post together in a hands-on workshop format.",
      features: [
        "1:1 personalized profile audit and optimization",
        "Content strategy design and first post co-creation",
        "Networking strategy and connection growth guide",
        "Post-workshop feedback and follow-up",
      ],
      cta: "View workshop details",
      detail: "linkedin-workshop",
      highlight: true,
    },
    {
      slug: "challenge",
      badge: "CHALLENGE",
      title: "5-Week Global Career Challenge",
      subtitle: "Land a job at a global company in 5 weeks with LinkedIn",
      description:
        "Stop putting off your global career move. Over five weeks, step-by-step missions take you all the way through. From setting up your LinkedIn profile and English resume to reaching out to recruiters and prepping for interviews, you execute one mission each week and get closer to an offer.",
      features: [
        "Step-by-step missions over 5 weeks",
        "Complete LinkedIn profile & English resume",
        "Hands-on recruiter outreach and networking",
        "Weekly feedback through interview prep",
      ],
      cta: "View challenge details",
      detail: "career-challenge",
      highlight: true,
    },
    {
      slug: "open-chat",
      badge: "FREE",
      title: "Lead Jaeil's LinkedIn Lab",
      subtitle: "Free open chat -- share your LinkedIn questions",
      description:
        "Not sure where to start with LinkedIn? Ask in the Lab first. A free community where Lead Jaeil and members answer questions and share insights in real time.",
      features: [
        "Ask LinkedIn questions freely",
        "Exchange profile and post feedback",
        "Latest LinkedIn trends shared",
        "Network with like-minded members",
      ],
      cta: "Join for free",
      url: "https://www.latpeed.com/products/wKUZY",
      highlight: false,
    },
  ],
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isKo = lang === "ko";
  const items = isKo ? services.ko : services.en;
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
            inside its own container rather than the page body. */}
        <div className="mt-8 overflow-x-auto">
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
      </section>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {items.map((service) => (
          <div
            key={service.slug}
            id={service.slug}
            className={`relative flex scroll-mt-24 flex-col rounded-2xl border p-8 ${
              service.highlight
                ? "border-accent bg-surface shadow-sm"
                : "border-border bg-surface"
            }`}
          >
            <span
              className={`inline-block self-start rounded-full px-3 py-1 text-[11px] font-bold tracking-wider ${
                service.highlight
                  ? "bg-highlight text-white"
                  : "bg-accent-bg text-accent"
              }`}
            >
              {service.badge}
            </span>

            <h2 className="mt-5 font-serif text-2xl text-text">{service.title}</h2>
            <p className="mt-1 text-sm text-accent">{service.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {service.description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {service.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-text-secondary"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-accent"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            {(() => {
              const cls = `mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                service.highlight
                  ? "bg-highlight text-white hover:bg-text"
                  : "border border-border bg-surface-warm text-text hover:border-accent-light hover:text-accent"
              }`;
              return service.detail ? (
                <Link href={`/${lang}/services/${service.detail}`} className={cls}>
                  {service.cta}
                  <ArrowRight size={15} />
                </Link>
              ) : (
                <a href={service.url} target="_blank" rel="noopener noreferrer" className={cls}>
                  {service.cta}
                  <ArrowRight size={15} />
                </a>
              );
            })()}
          </div>
        ))}
      </div>
    </div>
  );
}
