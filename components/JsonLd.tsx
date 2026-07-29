import { SITE_URL } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "리드제일",
    alternateName: ["Lead Jaeil", "Brasley Byun", "리드재일"],
    jobTitle: "링크드인 크리에이터 \xB7 작가",
    description:
      "파비콘(Favikon) 선정 국내 유일 링크드인 앰버서더. 링크드인 팔로워 2만+, 전체 채널 3만+ 크리에이터이자 『된다! 링크드인 활용법』 저자.",
    email: "mailto:leadjaeil@gmail.com",
    url: `${SITE_URL}/`,
    image: "https://image.yes24.com/goods/178728770/XL",
    sameAs: [
      "https://www.linkedin.com/in/brasleybyun/",
      "https://blog.naver.com/lifesightseeing",
      "https://www.threads.com/@lifesightseeing",
      "https://maily.so/leadjaeil",
      "https://leadjaeil.substack.com/",
      "https://www.youtube.com/@user-leadjaeil",
      "https://app.favikon.com/profile/65f5b2516a10e4b0787d4588/content/",
      "https://litt.ly/leadjaeil",
      "https://open.kakao.com/o/sypM9TBh",
    ],
    knowsAbout: [
      "링크드인 퍼스널 브랜딩",
      "링크드인 전략",
      "콘텐츠 마케팅",
      "LinkedIn personal branding",
    ],
    author: [
      {
        "@type": "Book",
        name: "된다! 링크드인 활용법",
        isbn: "9791163038337",
        datePublished: "2026-03-24",
        publisher: { "@type": "Organization", name: "이지스퍼블리싱" },
        author: { "@type": "Person", name: "리드제일" },
        url: "https://www.yes24.com/product/goods/178728770",
        numberOfPages: 296,
        inLanguage: "ko",
      },
      {
        "@type": "Book",
        name: "우리는 아직도 출근 중입니다",
        isbn: "9791138848008",
        datePublished: "2025-10-31",
        publisher: { "@type": "Organization", name: "좋은땅" },
        author: [
          { "@type": "Person", name: "이준혁" },
          { "@type": "Person", name: "리드제일" },
        ],
        url: "https://www.yes24.com/product/goods/160620583",
        inLanguage: "ko",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "business",
      email: "leadjaeil@gmail.com",
      url: "https://open.kakao.com/o/sypM9TBh",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
