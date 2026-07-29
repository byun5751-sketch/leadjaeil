export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  coAuthor?: string;
  publisher: string;
  publishDate: string;
  pages?: number;
  isbn: string;
  category: string;
  coverUrl: string;
  purchaseUrl: string;
  /** What the reader can do after finishing it. The only body copy the books
   *  page renders — everything below is kept for reference but not shown. */
  outcomes?: string[];
  /** Publisher blurb. */
  description: string;
  /** Who the book is aimed at. */
  recommendFor: string[];
  /** What the book covers — its structure. */
  highlights: string[];
  /** Sales and chart placements. */
  achievements?: string[];
};

export type Activity = {
  slug: string;
  title: string;
  type: "speaking" | "mentoring" | "campaign";
  date: string;
  audience?: string;
  summary: string;
  highlights: string[];
};

export type Channel = {
  name: string;
  handle: string;
  url: string;
  followers: string;
};

export type Career = {
  company: string;
  role: string;
  period: string;
  desc: string;
};

export const books: Book[] = [
  {
    slug: "linkedin-playbook",
    title: "It works! LinkedIn",
    subtitle: "Make your ordinary career shine on LinkedIn",
    author: "Lead Jaeil",
    publisher: "Easys Publishing",
    publishDate: "2026-03-24",
    pages: 296,
    isbn: "9791163038337",
    category: "IT/Internet Business, Marketing/Branding, Personal Branding",
    coverUrl: "https://image.yes24.com/goods/178728770/XL",
    purchaseUrl: "https://www.yes24.com/product/goods/178728770",
    description:
      "With 1 billion users worldwide, LinkedIn is the most powerful tool to prove your potential and connect with professionals globally. This book is both a record and a practical manual from 2 years of growing from an ordinary college student into a global company employee and influencer with 20K+ followers.",
    recommendFor: [
      "College students or job seekers who have been putting off signing up for LinkedIn",
      "Junior professionals (1-5 years) looking to build expertise and find new opportunities",
      "Solopreneurs and freelancers who want to expand business through personal branding",
      "Anyone dreaming of working at a global company or expanding internationally",
    ],
    highlights: [
      "8 user-type strategies: student, professor, job seeker, employee, solopreneur, CEO, writer, anonymous",
      "'Just Do It!' hands-on sections with screenshot guides from signup to profile optimization",
      "Connection techniques: 1st-degree request messages, coffee chat request methods (200+ personal experience)",
      "Writing strategy: 6 popular topic types, 100 topic ideas, bilingual and OSMU distribution",
      "AI tools: ChatGPT drafts, Claude translations, Google AI Studio analysis",
    ],
    outcomes: [
      "Finish your profile end to end — photo, banner, headline, and role descriptions — by following the screenshots",
      "Pick the strategy that matches your situation from eight reader types: student, job seeker, employee, solopreneur, and more",
      "Use connection requests and coffee chat messages that do not get ignored, copied straight from the book",
      "Keep 100 post ideas on hand for the days you have no idea what to write",
      "Cut the time a post takes by drafting with ChatGPT and translating with Claude",
    ],
  },
  {
    slug: "still-commuting",
    title: "We're Still Commuting",
    subtitle: "A survival story of two professionals at a startup and a global company",
    author: "Lead Jaeil",
    coAuthor: "Junhyeok Lee",
    publisher: "Joeunttang",
    publishDate: "2025-10-31",
    isbn: "9791138848008",
    category: "Career Essay",
    coverUrl: "https://image.yes24.com/goods/160620583/XL",
    purchaseUrl: "https://www.yes24.com/product/goods/160620583",
    description:
      "Two people working in completely different environments share their 'commutes.' One is a veteran PO who survived 13 years at startups, the other a junior at a global company. Between startup 'freedom and chaos' and global company 'structure and order,' they unpack the essence of work that transcends organizational form.",
    recommendFor: [],
    highlights: [],
    outcomes: [
      "Compare two opposite organizations in one book: startup autonomy and global-company structure",
      "See how a 13-year startup PO and a first-year employee at a global company read the same problem differently",
      "Work out what stays constant about the job no matter what shape the organization takes",
      "Get a sense of what changes and what does not before moving between the two",
    ],
    achievements: [
      "200+ cumulative copies sold",
      "Yes24 Management/Strategy #33",
      "Aladin Management weekly #20",
      "Kyobo Books #464",
    ],
  },
];

export const activities: Activity[] = [
  {
    slug: "yonsei-greenprint",
    title: "Yonsei x Indonesian Embassy 'Greenprint of Progress' Lecturer",
    type: "speaking",
    date: "2025.06",
    summary:
      "Delivered the first solo English session at a global conference sponsored by the Indonesian Embassy. Opened with a personal narrative instead of a corporate intro, and pivoted to a teaser strategy when the main session ran short on time.",
    highlights: [
      "First solo English session",
      "Received 'Confident' and 'Impressive' feedback",
      "Proved global stage presentation skills",
    ],
  },
  {
    slug: "hyphencon",
    title: "Hyphencon Conference Speaker",
    type: "speaking",
    date: "2025.09",
    audience: "100+",
    summary:
      "Spoke at Maru 180 startup hub. Faced a topic change (career to sales) and a time cut (40 to 30 min). Reframed the constraint as an opportunity with a 'LinkedIn Sales Strategy from ZEISS/SAP' angle.",
    highlights: [
      "Topic pivot from career to sales",
      "Compressed from 40 to 30 minutes",
      "Praised as 'packed like a full bowl of rice'",
    ],
  },
  {
    slug: "founders",
    title: "Founders Community Launch Lecture",
    type: "speaking",
    date: "2025.10",
    audience: "75",
    summary:
      "Invited as the launch speaker for 'Founders,' a premium CEO community. Acknowledged LinkedIn's inefficiency upfront, then reframed it as 'trust capital' and 'B2B opportunity.'",
    highlights: [
      "75 busy entrepreneurs as audience",
      "Data visualization with Favikon analytics",
      "Hybrid format: 12 live + 63 recorded",
    ],
  },
  {
    slug: "gybm",
    title: "GYBM Lecture (D-2 Emergency Request)",
    type: "speaking",
    date: "2024.11",
    summary:
      "Received an urgent request 2 days before the event. Designed and built a full curriculum for trainees in just 24 hours. Switched from static slides to a live LinkedIn account demo on the spot.",
    highlights: [
      "24-hour curriculum design",
      "Empathy-based storytelling strategy",
      "Live account demo pivot",
    ],
  },
  {
    slug: "semozone",
    title: "Semozone Lecture for N-Jobbers Community",
    type: "speaking",
    date: "2026.03",
    audience: "1,800",
    summary:
      "Proactively pitched a free lecture to a 1,800-member side-hustle community. Redesigned a CEO masterclass for freelancers, creating 61 slides. Used the free lecture as a top-of-funnel for book and coaching conversions.",
    highlights: [
      "61 custom slides",
      "7 success cases broken into Profile-Post-Strategy framework",
      "8 detailed review testimonials",
    ],
  },
  {
    slug: "career-branding-101",
    title: "Career Branding: LinkedIn 101 Conference",
    type: "speaking",
    date: "2024.06",
    summary:
      "Positioned uniquely among established experts by targeting '20s/interns.' Handled a 2-week delay and +5 min presentation change with a 'hidden tips' module for perfect timekeeping.",
    highlights: [
      "Unique positioning among senior speakers",
      "Attendees' voluntary review posts created secondary viral effect",
    ],
  },
  {
    slug: "myion",
    title: "Myion 'Authenticity' Pitch Competition",
    type: "speaking",
    date: "2024.03",
    summary:
      "Introduced a 'Story Battle' format where the audience picks stories, replacing one-way lectures. Ranked #1 in audience engagement among 6 speakers.",
    highlights: [
      "'Most innovative presentation format' among 6 speakers",
      "#1 audience engagement",
    ],
  },
  {
    slug: "vim-mentoring",
    title: "VIM Mentoring: Homecoming Day",
    type: "mentoring",
    date: "2025.11",
    summary:
      "Returned as a mentor to the investment club I co-founded (now in its 13th cohort). Delivered 'Tough Love' advice about global company realities to finance-oriented juniors.",
    highlights: [
      "3 consecutive sold-out sessions",
      "Candid disclosure of global company realities",
    ],
  },
  {
    slug: "cp-team-mentoring",
    title: "CP Team Mentoring",
    type: "mentoring",
    date: "2024",
    summary:
      "Categorized mentees into 3 types (early explorer, role seeker, non-major) and conducted 4 sessions with 30+ one-on-one consultations. Focused on students from regional universities with limited information access.",
    highlights: [
      "30+ 1:1 consultations across 4 sessions",
      "Tailored approach for 3 mentee types",
    ],
  },
  {
    slug: "linkedin-playbook-campaign",
    title: "It works! LinkedIn Integrated Marketing Campaign",
    type: "campaign",
    date: "2026.01-03",
    summary:
      "Planned and executed the entire launch marketing as a one-person operation. Crowdfunding hit 168% of target, earned 'Book of the Day' on Yes24, and maintained top-20 in Internet Business for 10 weeks.",
    highlights: [
      "Crowdfunding: 168% achievement, 'Book of the Day'",
      "Content series: 9-part publication journey, avg 2-3K views per post",
      "YouTube: 2 long-form + 16 Shorts",
      "3 press interviews (Korea Reading Newspaper, InTrend News, Channel Yes)",
    ],
  },
  {
    slug: "linkedin-challenge",
    title: "LinkedIn Challenge Program",
    type: "campaign",
    date: "2024.11-2026.03",
    summary:
      "Zero ad spend, pure content-driven program converting 30 paid participants (100K KRW each). Built a 4-stage roadmap: Profile Optimization, Content Production, Network Expansion, Performance Measurement.",
    highlights: [
      "30 paid conversions, 0 ad spend",
      "Average participant impressions +400%",
      "Top performer: +19,019% impressions growth",
    ],
  },
  {
    slug: "joint-book-talk",
    title: "Joint Book Talk: LinkedIn x Threads",
    type: "speaking",
    date: "2026",
    summary:
      "Spotted a simultaneous Threads book release and proposed a joint book talk. Leveraged cross-audience synergy and cost-sharing as key arguments. Ran a 2-hour event with Q&A and signing for ~40 attendees.",
    highlights: [
      "Self-initiated cross-platform collaboration",
      "~40 attendees, 2-hour full program",
    ],
  },
  {
    slug: "ebook-reader-event",
    title: "E-book Launch Reader Appreciation Event",
    type: "speaking",
    date: "2026.05",
    summary:
      "Planned and ran a solo online lecture (53 slides, 3 parts) using Rapid event platform and KakaoTalk open chat. Reorganized 20 pre-submitted questions into 12 themes and answered all of them.",
    highlights: [
      "53 slides, 3-part structure",
      "20 questions reorganized into 12 themes",
      "Attendee satisfaction: 5.0/5.0",
    ],
  },
  {
    slug: "student-branding-cohort",
    title: "Student Career Branding 4-Week Cohort Challenge",
    type: "campaign",
    date: "2026.05-06",
    summary:
      "Designed the first LinkedIn personal-branding 4-week cohort model for university students, leveraging my published book as a curriculum asset and defining a collaboration governance with external partners (e.g. Sangmyung Univ. club Momentum). Pivoted the entire curriculum amid overlapping holidays, festivals, and exam periods, and drove the decision to proceed offline to validate qualitative value despite cancellation risk.",
    highlights: [
      "First book-asset-based cohort model for students; optimized partnership governance",
      "Sourced a venue near Gyodae Station directly, cutting rental costs ~30%",
      "Ran a 3-part clinic (profile, resume linkage, content roadmap) for high-engagement participants",
      "Turned the whole run into a post-mortem report, building a student-target VOC database",
    ],
  },
];

export const channels: Channel[] = [
  {
    name: "LinkedIn",
    handle: "@brasleybyun",
    url: "https://www.linkedin.com/in/brasleybyun/",
    followers: "22,000+",
  },
  {
    name: "Threads",
    handle: "@lead.jaeil",
    url: "https://www.threads.net/@lead.jaeil",
    followers: "6,600+",
  },
  {
    name: "Naver Blog",
    handle: "leadjaeil",
    url: "https://blog.naver.com/leadjaeil",
    followers: "4,100+",
  },
  {
    name: "Newsletter",
    handle: "Maily / Substack",
    url: "#",
    followers: "Active",
  },
];

export const careers: Career[] = [
  {
    company: "BIGO Live",
    role: "Business Development",
    period: "Current",
    desc: "The world's #1 independent live-streaming platform, used by over 700 million people across 150+ countries.",
  },
  {
    company: "ZEISS Vision Korea",
    role: "Marketing / Sales Operations",
    period: "Former",
    desc: "Founded in 1846, a global optics leader dominating NASA, TSMC, and the global eyeglass lens market.",
  },
  {
    company: "SAP Korea",
    role: "STAR Program (Global Internship)",
    period: "Former",
    desc: "The world's #1 enterprise software company, processing 77% of global transaction revenue.",
  },
];
