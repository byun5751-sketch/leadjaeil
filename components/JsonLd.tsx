export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "리드제일",
    alternateName: ["Brasley Byun", "리드재일"],
    jobTitle: "비즈니스 개발 전문가 \xB7 링크드인 전략가 \xB7 작가",
    description:
      "파비콘(Favikon) 선정 국내 유일 링크드인 앰버서더. 팔로워 2만+ 링크드인 크리에이터이자 『된다! 링크드인 활용법』 저자.",
    email: "mailto:leadjaeil@gmail.com",
    url: "https://leadjaeil.vercel.app/",
    image: "https://image.yes24.com/goods/178728770/XL",
    sameAs: [
      "https://www.linkedin.com/in/brasleybyun/",
      "https://open.kakao.com/o/sypM9TBh",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "중앙대학교 (Chung-Ang University)",
    },
    knowsAbout: [
      "링크드인 퍼스널 브랜딩",
      "비즈니스 개발",
      "세일즈 오퍼레이션",
      "콘텐츠 마케팅",
      "글로벌 채용",
    ],
    worksFor: { "@type": "Organization", name: "BIGO Live" },
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
