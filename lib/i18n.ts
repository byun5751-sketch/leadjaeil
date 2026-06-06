export type Lang = "en" | "ko";
export const locales: Lang[] = ["en", "ko"];
export const defaultLocale: Lang = "ko";

const t = {
  en: {
    nav: {
      home: "Home",
      books: "Books",
      speaking: "Speaking",
      about: "About",
      links: "SNS",
      contact: "Contact",
    },
    hero: {
      status: "Favikon-selected LinkedIn Ambassador in Korea",
      name: "Brasley Byun",
      role: "LinkedIn Strategist / Author / BD Professional",
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
    direction: {
      eyebrow: "Three Keywords",
      title: "What I Do",
      items: [
        {
          num: "01",
          title: "Information Structuring",
          desc: "Collect scattered market data, operational status, and customer references. Organize them into comparable, decision-ready formats.",
        },
        {
          num: "02",
          title: "Process Improvement",
          desc: "Identify repetitive or delayed workflows. Convert them into executable systems: checklists, trackers, templates, and manuals.",
        },
        {
          num: "03",
          title: "Stakeholder Coordination",
          desc: "Collaborate with team leads, PMs, sales reps, external vendors, and global organizations to deliver completed outcomes.",
        },
      ],
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
    aboutPage: {
      eyebrow: "Profile",
      title: "About",
      career: "Career",
      education: "Education",
      channels: "Channels",
      strengths: "Strengths (Gallup)",
      competencies: "Core Competencies",
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
      about: "프로필",
      links: "SNS",
      contact: "연락하기",
    },
    hero: {
      status: "파비콘(Favikon) 선정 국내 유일 링크드인 앨버서더",
      name: "리드제일",
      role: "링크드인 전략가 \xB7 작가 \xB7 비즈니스 개발 전문가",
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
    direction: {
      eyebrow: "세 가지 키워드",
      title: "이런 일을 합니다",
      items: [
        {
          num: "01",
          title: "정보 구조화",
          desc: "흉어진 시장 데이터\xB7운영 현황\xB7고객 레퍼런스를 수집해, 비교 가능하고 의사결정에 바로 쓸 수 있는 형태로 정리합니다.",
        },
        {
          num: "02",
          title: "프로세스 개선",
          desc: "반복되거나 지연되는 업무 흐름을 찾아내, 체크리스트\xB7트래커\xB7템플릿\xB7매뉴얼 등 실행 가능한 시스템으로 전환합니다.",
        },
        {
          num: "03",
          title: "이해관계자 조율",
          desc: "팀 리드\xB7PM\xB7세일즈\xB7외부 벤더\xB7글로벌 조직과 협업해 완결된 결과물을 만들어 냅니다.",
        },
      ],
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
    aboutPage: {
      eyebrow: "프로필",
      title: "프로필",
      career: "핵심 이력",
      education: "학력",
      channels: "운영 채널",
      strengths: "강점 (Gallup)",
      competencies: "핵심 역량",
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
