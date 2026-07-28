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
        "From an ordinary college student to a global company employee, creator with 30K+ followers, and author of two books. This is the record of that journey.",
      cta1: "View Books",
      cta2: "Get in Touch",
    },
    stats: {
      followers: "Followers",
      views: "Impressions",
      books: "Books Published",
      events: "Speaking Events",
    },
    paths: {
      eyebrow: "Start Here",
      title: "Your LinkedIn starting point",
      desc: "Four paths, depending on where you are right now. Pick the one that sounds like you.",
      items: [
        {
          situation: "If you're just getting started",
          title: "LinkedIn Lab (free)",
          desc: "A free open chat where you can ask anything before spending a won. Pairs well with the book if you want a structured walkthrough.",
          cta: "Join the free community",
        },
        {
          situation: "If you're aiming for a global company",
          title: "5-Week Global Career Challenge",
          desc: "Profile, English resume, recruiter outreach, interview prep. One mission a week until you get there.",
          cta: "See the challenge",
        },
        {
          situation: "If you want business opportunities",
          title: "LinkedIn Workshop",
          desc: "Done-with-you sessions covering profile optimization, content strategy, and your first posts, built together.",
          cta: "See the workshop",
        },
        {
          situation: "If you're looking for a speaker",
          title: "Speaking & Lectures",
          desc: "Conference talks, company lectures, and university sessions. Browse past events, then send an inquiry.",
          cta: "See speaking history",
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
      outcomes: "What you get from this book",
      achievements: "Achievements",
      purchase: "Purchase on Yes24",
    },
    booksNext: {
      eyebrow: "Next step",
      title: "After the book",
      desc: "The book gets you started on your own. When you want someone looking over your shoulder, here is where to go next.",
      items: [
        {
          title: "Ask in the LinkedIn Lab",
          desc: "Stuck on something the book did not cover? Ask in the free open chat. Nothing to pay, nothing to prepare.",
          cta: "Join for free",
        },
        {
          title: "Run it as a 5-week challenge",
          desc: "This book is the course text for the challenge. Weekly missions and feedback take you from profile to recruiter outreach.",
          cta: "See the challenge",
        },
        {
          title: "Have it written with you",
          desc: "If reading and doing it yourself is not moving fast enough, we write your headline and About section together in one session.",
          cta: "See the workshop",
        },
      ],
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
        "평범한 대학생에서 시작해 링크드인 하나로 글로벌 기업 3곳에 취업하고, 3만여 명의 팔로워를 둔 크리에이터이자 두 권의 책을 낸 작가가 되기까지의 기록입니다.",
      cta1: "저서 보기",
      cta2: "연락하기",
    },
    stats: {
      followers: "팔로워",
      views: "누적 조회수",
      books: "출간 도서",
      events: "강연 횟수",
    },
    paths: {
      eyebrow: "시작점 찾기",
      title: "내 상황에 맞는 링크드인 시작점",
      desc: "지금 어디쯤 계신지에 따라 네 갈래로 나눴습니다. 가장 가까운 쪽을 골라보세요.",
      items: [
        {
          situation: "처음 시작한다면",
          title: "링크드인 공작소 (무료)",
          desc: "돈 쓰기 전에 먼저 물어보는 무료 오픈채팅방입니다. 순서대로 배우고 싶다면 저서와 함께 보시면 좋습니다.",
          cta: "무료로 참여하기",
        },
        {
          situation: "외국계 취업을 준비한다면",
          title: "5주 외국계 취업 챌린지",
          desc: "프로필, 영문 이력서, 채용 담당자 컨택, 인터뷰 준비까지. 매주 미션 하나씩 실행합니다.",
          cta: "챌린지 살펴보기",
        },
        {
          situation: "비즈니스 기회를 만들고 싶다면",
          title: "링크드인 워크숍",
          desc: "프로필 최적화부터 콘텐츠 전략, 첫 게시글까지 옆에서 함께 만드는 프리미엄 워크숍입니다.",
          cta: "워크숍 살펴보기",
        },
        {
          situation: "강연자를 찾는다면",
          title: "강연 \xB7 강의",
          desc: "컨퍼런스, 사내 강연, 대학 특강 경험이 있습니다. 지난 강연을 확인하고 문의를 남겨주세요.",
          cta: "강연 이력 보기",
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
      outcomes: "이 책으로 얻을 수 있는 것",
      achievements: "성과 \xB7 기록",
      purchase: "예스24에서 보기",
    },
    booksNext: {
      eyebrow: "다음 단계",
      title: "책을 읽은 다음은",
      desc: "책은 혼자 시작하는 데까지를 도와드립니다. 옆에서 봐줄 사람이 필요해지는 지점부터는 이렇게 이어집니다.",
      items: [
        {
          title: "공작소에서 물어보기",
          desc: "책에 없던 부분이 막힌다면 무료 오픈채팅방에서 물어보세요. 비용도, 준비물도 없습니다.",
          cta: "무료로 참여하기",
        },
        {
          title: "5주 챌린지로 완주하기",
          desc: "이 책이 챌린지의 교재입니다. 매주 미션과 피드백으로 프로필부터 채용 담당자 컨택까지 밀고 나갑니다.",
          cta: "챌린지 보기",
        },
        {
          title: "옆에서 같이 써보기",
          desc: "읽고 혼자 하는 속도가 답답하다면, 한 번의 세션에서 헤드라인과 About을 함께 완성합니다.",
          cta: "워크숍 보기",
        },
      ],
    },
    speakingPage: {
      eyebrow: "외부 활동",
      title: "강연 \xB7 활동",
      desc: "강연\xB7강의\xB7멘토링\xB7마케팅 캠페인\xB7커뮤니티 운영 경험.",
      speaking: "강연 \xB7 강의",
      mentoring: "멘토링",
      campaign: "캠페인 \xB7 출판 \xB7 커뮤니티",
    },
    footer: {
      tagline:
        "흩어진 정보를 구조화하고, 프로세스를 개선하며, 이해관계자를 조율해 실행 가능한 결과를 만듭니다.",
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
