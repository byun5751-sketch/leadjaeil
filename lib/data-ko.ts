import type { Book, Activity, Channel, Career } from "./data";

export const booksKo: Book[] = [
  {
    slug: "linkedin-playbook",
    title: "된다! 링크드인 활용법",
    subtitle: "평범한 직장인의 경험을 커리어로 빛나게 해 줄 링크드인",
    author: "리드제일",
    publisher: "이지스퍼블리싱",
    publishDate: "2026년 3월 24일",
    pages: 296,
    isbn: "9791163038337",
    category: "IT/인터넷 비즈니스 \xB7 마케팅/브랜드 \xB7 퍼스널 브랜딩",
    coverUrl: "https://image.yes24.com/goods/178728770/XL",
    purchaseUrl: "https://www.yes24.com/product/goods/178728770",
    description:
      "전 세계 이용자 수 10억 명. 지금 링크드인은 자신의 잠재력을 증명하고 전 세계 전문가들과 연결될 수 있는 가장 강력한 무기입니다. 이 책은 '쓸 말이 없어서' 가입조차 망설이던 평범한 대학생이 링크드인을 통해 글로벌 기업에 취업하고 2만여 명의 팔로워를 둔 인플루언서로 성장한 2년간의 기록이자 실전 매뉴얼입니다.",
    recommendFor: [
      "링크드인 가입조차 미루고 있는 대학생 및 취업 준비생",
      "전문성을 쌓고 이직 기회를 찾고 싶은 1~5년 차 주니어 직장인",
      "퍼스널 브랜딩으로 비즈니스 기회를 확장하려는 1인 기업가\xB7프리랜서",
      "글로벌 기업 취업이나 해외 진출을 꿈꾸는 도전자",
    ],
    highlights: [
      "8가지 유형별 맞춤 전략 — 학생\xB7교수\xB7구직자\xB7직장인\xB7기업가\xB7CEO\xB7작가형\xB7익명형",
      "'하면 된다!' 실습 코너 — 가입부터 프로필 사진, 배너, 직책 설명까지 스크린샷 가이드",
      "연결의 기술 — 1촌 신청 메시지, 거절당하지 않는 커피챗 요청법(저자 200회+ 경험)",
      "글쓰기 전략 — 인기 글감 6가지, 글감 100가지, 이중 언어\xB7OSMU 확산 전략",
      "생성형 AI 활용 — 챗GPT 초안, 클로드 영어 번역, 구글 AI 스튜디오 분석",
    ],
  },
  {
    slug: "still-commuting",
    title: "우리는 아직도 출근 중입니다",
    subtitle: "스타트업 시니어와 외국계 신입, 두 직장인의 티키타카 생존기",
    author: "리드제일",
    coAuthor: "이준혁",
    publisher: "좋은땅",
    publishDate: "2025년 10월 31일",
    isbn: "9791138848008",
    category: "직장생활 에세이",
    coverUrl: "https://image.yes24.com/goods/160620583/XL",
    purchaseUrl: "https://www.yes24.com/product/goods/160620583",
    description:
      "전혀 다른 환경에서 일하는 두 사람이 서로의 '출근'을 나눈 기록입니다. 한 사람은 13년간 스타트업에서 버틴 베테랑 PO, 다른 사람은 글로벌 기업의 막내 신입. 스타트업의 '자율과 무질서'와 외국계의 '체계와 질서' 사이를 오가며, 조직의 형태가 달라도 통하는 '일의 본질'을 풀어냅니다.",
    recommendFor: [],
    highlights: [],
    achievements: [
      "누적 판매량 200권 돌파",
      "예스24 경영관리/전략/경영학 33위 진입",
      "알라딘 경영 일반 주간 20위",
      "교보문고 464위 진입",
    ],
  },
];

export const activitiesKo: Activity[] = [
  {
    slug: "yonsei-greenprint",
    title: "연세대 \xD7 인도네시아 대사관 후원 'Greenprint of Progress' 강사",
    type: "speaking",
    date: "2025.06",
    summary:
      "주한 인도네시아 대사관 후원 글로벌 컨퍼런스에서 첫 단독 영어 세션을 진행했습니다. 딱딱한 회사 소개 대신 본인의 서사로 오프닝을 열고, 메인 세션 시간 부족 위기를 '더 자세한 팁은 브레이크아웃에서 공개' 티저 전략으로 전환했습니다.",
    highlights: [
      "첫 단독 영어 세션",
      "'Confident', 'Impressive' 피드백",
      "글로벌 무대 프레젠터 자질 입증",
    ],
  },
  {
    slug: "hyphencon",
    title: "하이픈콘(Hyphencon) 컨퍼런스 연사",
    type: "speaking",
    date: "2025.09",
    audience: "100명+",
    summary:
      "스타트업 성지 Maru 180에서 열린 100명+ 규모 행사. 준비 도중 주제 변경(커리어 → 세일즈)과 당일 발표 시간 단축(40분 → 30분)이라는 이중 제약이 발생했습니다. 주제 변경을 기회로 프레이밍해 'ZEISS/SAP 기반 링크드인 세일즈 전략'으로 전면 수정했습니다.",
    highlights: [
      "커리어에서 세일즈로 주제 전환",
      "40분에서 30분으로 압축",
      "'고봉밥같이 꽉 찬 강의' 평가",
    ],
  },
  {
    slug: "founders",
    title: "Founders 강사 — CEO 커뮤니티 런칭 특강",
    type: "speaking",
    date: "2025.10",
    audience: "75명",
    summary:
      "'Value on Club'의 프리미엄 모임 'Founders' 런칭 강연자로 초청. 바쁜 사업가 75명을 대상으로 링크드인의 '비효율성'을 먼저 인정한 뒤 이를 '신뢰 자본'과 'B2B 기회'로 리프레이밍해 설득했습니다.",
    highlights: [
      "바쁜 사업가 75명 대상",
      "파비콘(Favikon) 분석 툴로 데이터 시각화",
      "하이브리드 구성: 라이브 12명 + 녹화본 63명",
    ],
  },
  {
    slug: "gybm",
    title: "GYBM 강의 — D-2 긴급 섭외 대응",
    type: "speaking",
    date: "2024.11",
    summary:
      "대우세계경영연구회(GYBM)로부터 강연 2일 전 긴급 요청을 받아, 단 24시간 만에 연수생 타겟 커리큐럼을 설계\xB7제작했습니다.",
    highlights: [
      "24시간 만에 커리큐럼 설계",
      "공감 기반 스토리텔링 전략",
      "즉석 라이브 계정 시연 전환",
    ],
  },
  {
    slug: "semozone",
    title: "세모존 특강 — N잡 커뮤니티 대상 링크드인 실전 강의",
    type: "speaking",
    date: "2026.03",
    audience: "1,800명",
    summary:
      "1,800명 규모 N잡 커뮤니티에 무료 강의를 직접 제안해 슬롯을 확보. CEO 대상 마스터클래스를 N잡러/프리랜서 눈높이로 전면 재설계해 61슬라이드를 직접 제작했습니다.",
    highlights: [
      "61슬라이드 직접 제작",
      "성공사례 7건을 '프로필-게시글-전략' 3단계로 분해",
      "상세 후기 8건 확보",
    ],
  },
  {
    slug: "career-branding-101",
    title: "커리어 브랜딩 — 링크드인 101 컨퍼런스",
    type: "speaking",
    date: "2024.06",
    summary:
      "기성 전문가들 사이에서 '20대/인턴'을 핵심 타겟으로 잡아 독자적 포지셔닝을 구축. 일정 지연과 발표 시간 변경 같은 돌발 변수에 '히든 팁' 모듈을 즉시 투입해 완벽한 타임 키핑을 수행했습니다.",
    highlights: [
      "시니어 연사들 사이 독자적 포지셔닝",
      "참가자 자발적 후기 포스팅으로 2차 바이럴",
    ],
  },
  {
    slug: "myion",
    title: "마이온 '나다움' 경연대회",
    type: "speaking",
    date: "2024.03",
    summary:
      "전문가 청중을 대상으로 일방향 강연 대신 청중이 직접 이야기를 고르는 '썸전(Story Battle)' 포맷을 도입. 6명 연사 중 '가장 신선하고 혁신적인 발표 방식'이라는 평가와 청중 호응도 1위를 달성했습니다.",
    highlights: [
      "6명 연사 중 '가장 혁신적인 발표 방식'",
      "청중 호응도 1위",
    ],
  },
  {
    slug: "vim-mentoring",
    title: "VIM 멘토링 — 투자 동아리 홈커밍 데이",
    type: "mentoring",
    date: "2025.11",
    summary:
      "창립 멤버로 활동했던 동아리가 13기 규모로 성장해 멘토로 초청. 금융권 지향 후배들에게 외국계 기업의 현실(불안정한 고용\xB7낮은 초기 처우)을 가감 없이 공개하는 'Tough Love' 조언을 전했습니다.",
    highlights: [
      "3개 세션 연속 만석",
      "외국계 현실 솔직한 공개",
    ],
  },
  {
    slug: "cp-team-mentoring",
    title: "CP Team 멘토링",
    type: "mentoring",
    date: "2024",
    summary:
      "멘티를 ①초기 탐색형 ②직무 탐색형 ③비전공자 3가지 유형으로 분류해 4회 세션, 30여 명 1:1 심층 상담을 진행. 정보 접근성이 낮은 지방 대학생에게 링크드인 활용법과 글로벌 채용 트렌드를 전수했습니다.",
    highlights: [
      "30여 명 1:1 상담, 4회 세션",
      "멘티 3가지 유형별 맞춤 접근",
    ],
  },
  {
    slug: "linkedin-playbook-campaign",
    title: "『된다! 링크드인 활용법』 통합 마케팅 캠페인",
    type: "campaign",
    date: "2026.01~03",
    summary:
      "1인 체제로 출간 마케팅 전 과정을 설계\xB7실행했습니다.",
    highlights: [
      "크라우드펀딩: 달성률 168%, '오늘의 책' 선정",
      "콘텐츠 연재: 출간 과정 9탄 시리즈, 평균 조회수 2,000~3,000회",
      "유튜브: 멀티포맷(롱폼 2편 + 쇼츠 16편) 직접 기획",
      "언론 인터뷰 3건(한국독서신문\xB7인트렌드뉴스\xB7채널예스) 확보",
    ],
  },
  {
    slug: "linkedin-challenge",
    title: "'링크드인 챌린지' 총괄 기획\xB7운영",
    type: "campaign",
    date: "2024.11~2026.03",
    summary:
      "광고비 0원, 순수 콘텐츠만으로 30명 유료 전환(인당 10만 원). 프로필 최적화 → 콘텐츠 생산 → 네트워크 확장 → 성과 측정 4단계 로드맵을 구축했습니다.",
    highlights: [
      "30명 유료 전환, 광고비 0원",
      "참여자 평균 노출수 400%+ 증가",
      "최고 성과자 노출수 19,019% 성장",
    ],
  },
  {
    slug: "joint-book-talk",
    title: "합동 북토크 — '링크드인 X 스레드'",
    type: "campaign",
    date: "2026",
    summary:
      "스레드 신간 동시 출간 정보를 포착해 합동 북토크를 직접 제안\xB7성사. 두 플랫폼 독자층 교차 유입과 비용 분담을 논거로 설득했고, 약 40명 대상 Q&A\xB7사인회까지 2시간 풀 운영했습니다.",
    highlights: [
      "크로스 플랫폼 협업 직접 제안\xB7성사",
      "약 40명 대상, 2시간 풀 프로그램",
    ],
  },
  {
    slug: "ebook-reader-event",
    title: "전자책 출간 기념 독자 보은회",
    type: "campaign",
    date: "2026.05",
    summary:
      "래피드(이벤트 플랫폼) 신청 동선과 카카오톡 오픈채팅을 활용해 53슬라이드 3파트 온라인 강연을 단독 기획\xB7운영. 사전 질문 20건을 12개 주제로 재구조화해 전량 응답했습니다.",
    highlights: [
      "53슬라이드, 3파트 구성",
      "20건 질문을 12개 주제로 재구조화",
      "참석자 만족도 5.0/5.0",
    ],
  },
  {
    slug: "careerday",
    title: "Careerday — 콜드콜 기반 B2B 리드 발굴",
    type: "campaign",
    date: "2025.01~02",
    summary:
      "125개 잠재 기업 콜드콜로 75개사(60%) 담당자 연락처를 확보하고, 최종 3건의 비즈니스 미팅을 성사(전환율 12%)했습니다.",
    highlights: [
      "125개 콜드콜, 75개사 연락처 확보(60%)",
      "3건 비즈니스 미팅 성사(12%)",
      "부대 세미나에서 5,000뷰+ 콘텐츠 재가공",
    ],
  },
];

export const channelsKo: Channel[] = [
  {
    name: "링크드인",
    handle: "@brasleybyun",
    url: "https://www.linkedin.com/in/brasleybyun/",
    followers: "22,000+",
  },
  {
    name: "스레드(Threads)",
    handle: "@lead.jaeil",
    url: "https://www.threads.net/@lead.jaeil",
    followers: "6,600+",
  },
  {
    name: "네이버 블로그",
    handle: "leadjaeil",
    url: "https://blog.naver.com/leadjaeil",
    followers: "4,100+",
  },
  {
    name: "뉴스레터",
    handle: "메일리 / 서브스택",
    url: "#",
    followers: "운영 중",
  },
];

export const careersKo: Career[] = [
  {
    company: "BIGO Live",
    role: "비즈니스 개발(Business Development)",
    period: "현재",
    desc: "전 세계 150개국, 7억 명 이상이 사용하는 글로벌 1위 독립 라이브 스트리밍 플랫폼.",
  },
  {
    company: "ZEISS Vision Korea",
    role: "마케팅/세일즈 오퍼레이션",
    period: "전직",
    desc: "1846년 설립, NASA\xB7TSMC\xB7세계 안경 렌즈 시장을 지배하는 글로벌 광학 리더.",
  },
  {
    company: "SAP Korea",
    role: "STAR 프로그램 (글로벌 인턴십)",
    period: "전직",
    desc: "전 세계 거래 매출의 77%가 거치는 글로벌 1위 기업용 소프트웨어 기업.",
  },
];
