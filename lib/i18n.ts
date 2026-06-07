export type Lang = "en" | "ko";
export const locales: Lang[] = ["en", "ko"];
export const defaultLocale: Lang = "ko";

const t = {
  en: {
    nav: {
      home: "Home",
      books: "Books",
      speaking: "Speaking",
      services: "Services",
      links: "SNS",
      contact: "Contact",
    },
    hero: {
      status: "Favikon-selected LinkedIn Ambassador in Korea",
      name: "Lead Jaeil",
      role: "LinkedIn Creator / Author",
      tagline:
        "From an ordinary college student to a global company employee, LinkedIn creator with 20K+ followers, and author of two books. This is the record of that journey.",
      cta1: "View Books",
      cta2: "Get in Touch",
    },
    stats: {
      followers: "Followers",
      views: "Impressions",
      books: "Books Published",
      events: "Speaking Events",
    },
    featuredBooks: {
      eyebrow: "Published Works",
      title: "Books",
      desc: "Practical guides and essays born from real LinkedIn and career experience.",
      viewAll: "View all books",
    },
    cta: {
      title: "Let's Connect",
      desc: "For speaking, coaching, collaboration, or interview inquiries, feel free to reach out.",
      email: "Send an Email",
      linkedin: "LinkedIn",
      kakao: "KakaoTalk",
    },
    booksPage: {
      eyebrow: "Published Works",
      title: "Books",
      desc: "Two books that transform ordinary professional experience into career assets.",
      details: "Details",
      recommend: "Recommended for",
      highlights: "Key Highlights",
      achievements: "Achievements",
      purchase: "Purchase on Yes24",
    },
    speakingPage: {
      eyebrow: "Speaking & Activities",
      title: "Speaking & Activities",
      desc: "Conferences, lectures, mentoring, marketing campaigns, and community work since graduation.",
      speaking: "Speaking & Lectures",
      mentoring: "Mentoring",
      campaign: "Campaigns & Publishing",
    },
    footer: {
      tagline:
        "Structuring information, improving processes, and coordinating stakeholders to deliver actionable results.",
      navigation: "Navigation",
      contact: "Contact",
      builtWith: "Built with Next.js and the Linear design system.",
    },
  },
  ko: {
    nav: {
      home: "홈",
      books: "저서",
      speaking: "강연",
      services: "서비스",
      links: "SNS",
      contact: "연락하기",
    },
    hero: {
      status: "파비콘(Favikon) 선정 국내 유일 링크드인 앨버서더",
      name: "리드제일",
      role: "링크드인 크리에이터 \xB7 작가",
      tagline:
        "평범한 대학생에서 시작해 링크드인 하나로 글로벌 기업 3곳에 취업하고, 2만여 명의 팔로워를 둔 크리에이터이자 두 권의 책을 낸 작가가 되기까지의 기록입니다.",
      cta1: "저서 보기",
      cta2: "연락하기",
    },
    stats: {
      followers: "팔로워",
      views: "누적 조회수",
      books: "출간 도서",
      events: "강연 횟수",
    },
    featuredBooks: {
      eyebrow: "출간 도서",
      title: "저서",
      desc: "실전 링크드인과 커리어 경험에서 태어난 실용서와 에세이.",
      viewAll: "저서 전체 보기",
    },
    cta: {
      title: "연락 주세요",
      desc: "강연\xB7코칭\xB7협업\xB7인터뷰 문의를 환영합니다.",
      email: "이메일 보내기",
      linkedin: "LinkedIn",
      kakao: "카카오톡",
    },
    booksPage: {
      eyebrow: "출간 도서",
      title: "저서",
      desc: "평범한 직장인의 경험을 커리어 자산으로 전환하는 두 권의 책.",
      details: "상세 정보",
      recommend: "추천 대상",
      highlights: "핵심 구성",
      achievements: "성과 \xB7 기록",
      purchase: "예스24에서 보기",
    },
    speakingPage: {
      eyebrow: "외부 활동",
      title: "강연 \xB7 활동",
      desc: "졸업 이후 진행한 강연\xB7강의\xB7멘토링\xB7마케팅 캠페인\xB7커뮤니티 운영 경험.",
      speaking: "강연 \xB7 강의",
      mentoring: "멘토링",
      campaign: "캠페인 \xB7 출판 \xB7 커뮤니티",
    },
    footer: {
      tagline:
        "흉어진 정보를 구조화하고, 프로세스를 개선하며, 이해관계자를 조율해 실행 가능한 결과를 만듭니다.",
      navigation: "페이지",
      contact: "연락처",
      builtWith: "Next.js와 Linear 디자인 시스템으로 제작되었습니다.",
    },
  },
};

export type Translations = (typeof t)["en"];

export function getTranslations(lang: Lang): Translations {
  return t[lang] ?? t.en;
}
