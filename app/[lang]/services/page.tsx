import type { Metadata } from "next";
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

const services = {
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
      url: "https://linkedin-workshop.vercel.app/",
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
      cta: "챌린지 참여하기",
      url: "https://linkedinchallengeforyou.vercel.app/",
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
      url: "https://linkedin-workshop.vercel.app/",
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
      cta: "Join the challenge",
      url: "https://linkedinchallengeforyou.vercel.app/",
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

      <div className="mt-14 grid gap-8 md:grid-cols-2">
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

            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                service.highlight
                  ? "bg-highlight text-white hover:bg-text"
                  : "border border-border bg-surface-warm text-text hover:border-accent-light hover:text-accent"
              }`}
            >
              {service.cta}
              <ArrowRight size={15} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
