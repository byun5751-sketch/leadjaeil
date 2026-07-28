// Detail pages for individual services, rendered at /[lang]/services/[slug].
//
// A page is a list of blocks. The renderer switches on `kind`, so a new page
// can reuse existing blocks without touching the route. Korean copy for the
// same slugs lives in service-pages-ko.ts and must use identical slugs.

export type Stat = { value: string; label: string };

export type HeroBlock = {
  kind: "hero";
  badge?: string;
  headline: string;
  headlineAccent?: string;
  sub: string;
  stats: Stat[];
};

export type StatementBlock = {
  kind: "statement";
  eyebrow: string;
  title: string;
  lines: string[];
  closing?: string;
};

export type CardsBlock = {
  kind: "cards";
  eyebrow: string;
  title: string;
  desc?: string;
  items: { mark: string; title: string; desc: string }[];
};

/** Ordered phases: workshop process steps, challenge weekly curriculum. */
export type StagesBlock = {
  kind: "stages";
  eyebrow: string;
  title: string;
  desc?: string;
  items: {
    tag: string;
    title: string;
    groups: { label?: string; items: string[] }[];
    note?: string;
  }[];
  warning?: string;
};

export type ResultsBlock = {
  kind: "results";
  eyebrow: string;
  title: string;
  desc?: string;
  cases: {
    who: string;
    duration: string;
    metrics: Stat[];
    quote: string;
  }[];
};

export type ExpertBlock = {
  kind: "expert";
  eyebrow: string;
  name: string;
  role: string;
  points: { label: string; value: string }[];
  desc: string;
  notes?: string[];
};

export type PricingBlock = {
  kind: "pricing";
  eyebrow: string;
  title: string;
  desc?: string;
  name: string;
  price: string;
  priceNote: string;
  includes: string[];
  footnote?: string;
};

/** Two-column lists: fit/not-fit, how it runs / what makes it different. */
export type ColumnsBlock = {
  kind: "columns";
  eyebrow: string;
  title: string;
  groups: { title: string; tone: "yes" | "no" | "neutral"; items: string[] }[];
  note?: string;
};

export type FaqBlock = {
  kind: "faq";
  eyebrow: string;
  title: string;
  items: { q: string; a: string }[];
};

export type ClosingBlock = {
  kind: "closing";
  eyebrow: string;
  title: string;
  desc: string;
};

export type Block =
  | HeroBlock
  | StatementBlock
  | CardsBlock
  | StagesBlock
  | ResultsBlock
  | ExpertBlock
  | PricingBlock
  | ColumnsBlock
  | FaqBlock
  | ClosingBlock;

export type ServicePage = {
  slug: string;
  navTitle: string;
  metaTitle: string;
  metaDescription: string;
  blocks: Block[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "linkedin-workshop",
    navTitle: "LinkedIn Workshop",
    metaTitle: "1:1 LinkedIn Profile Workshop",
    metaDescription:
      "Lead Jaeil rewrites your LinkedIn headline and About section with you. Pre-workshop research, a two-hour session, and a three-month content strategy.",
    blocks: [
      {
        kind: "hero",
        badge: "1:1 LinkedIn Profile Workshop",
        headline: "Your experience is enough.",
        headlineAccent: "Your profile is the problem.",
        sub: "Ranked 7th among Korean LinkedIn creators by Favikon, Lead Jaeil sits down with you and rewrites your headline and About section.",
        stats: [
          { value: "22,000+", label: "LinkedIn followers" },
          { value: "Top 7", label: "Favikon Korea ranking" },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Problem",
        title: "Is your best work going unseen?",
        desc: "Your skills are there. But if your LinkedIn profile does not show them, the opportunity goes to someone else.",
        items: [
          {
            mark: "01",
            title: "You are still using the default headline",
            desc: "A headline like “Marketing Manager at Company” is identical to thousands of others. It does not surface in recruiter searches, and it does not stop anyone in the feed.",
          },
          {
            mark: "02",
            title: "Your About section is empty or pasted from a resume",
            desc: "About is where your career story lives. Leaving it blank, or dropping in your resume verbatim, works against you.",
          },
          {
            mark: "03",
            title: "You have no idea what to post",
            desc: "You want to write, but you do not know what about, or who you are writing for. Activity without a strategy is wasted time.",
          },
        ],
      },
      {
        kind: "stages",
        eyebrow: "How it works",
        title: "How the workshop runs",
        desc: "From pre-session research to a delivered strategy. Not feedback — finished work you can use.",
        items: [
          {
            tag: "Before the workshop",
            title: "Research",
            groups: [
              {
                items: [
                  "Deep review of your profile and career history",
                  "Industry keyword and trend research",
                  "Identifying your core strengths and differentiators",
                ],
              },
            ],
            note: "Takes 2–3 hours",
          },
          {
            tag: "Workshop day",
            title: "1:1 session",
            groups: [
              {
                items: [
                  "Your headline, rewritten live",
                  "A full renewal of your About section",
                  "Direction for optimizing the rest of your profile",
                ],
              },
            ],
            note: "Takes 2 hours",
          },
          {
            tag: "After the workshop",
            title: "Strategy delivery",
            groups: [
              {
                items: [
                  "A pool of 20 content topics for the next three months",
                  "A list of 100 target connections",
                  "Delivered as a Notion page or PDF",
                  "An executable roadmap, not a summary",
                ],
              },
            ],
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "What you get",
        title: "What you take home",
        desc: "Instead of hours spent guessing on your own, you leave with finished work.",
        items: [
          {
            mark: "H",
            title: "A tailored headline",
            desc: "A finished, industry-keyword-driven headline that works for search visibility and for the reader at the same time.",
          },
          {
            mark: "A",
            title: "A finished About section",
            desc: "Career storytelling that keeps a recruiter reading to the last line.",
          },
          {
            mark: "20",
            title: "20 content topics for three months",
            desc: "Ready-to-write ideas that demonstrate your expertise.",
          },
          {
            mark: "100",
            title: "100 target connections",
            desc: "A tailored networking list of key people in your industry, recruiters, and decision-makers.",
          },
        ],
      },
      {
        kind: "expert",
        eyebrow: "Your expert",
        name: "Lead Jaeil",
        role: "LinkedIn Creator",
        points: [
          { label: "LinkedIn followers", value: "22,000+" },
          { label: "Favikon Korea ranking", value: "Top 7" },
          { label: "Career moves via LinkedIn", value: "3 global companies" },
        ],
        desc: "Ranked 7th among Korean LinkedIn creators by Favikon. Moved to three global companies — a German optics group, a German software group, and a Singapore platform — through LinkedIn, and wrote the book on how.",
        notes: ["Author of “It works! LinkedIn”"],
      },
      {
        kind: "results",
        eyebrow: "Results",
        title: "What participants changed",
        desc: "Data from participants in the 4–5 week programs. Profile optimization alone moves these numbers.",
        cases: [
          {
            who: "Early-career professional",
            duration: "4 weeks",
            metrics: [
              { value: "+155%", label: "impressions" },
              { value: "+32%", label: "followers" },
            ],
            quote:
              "Systematic profile optimization and a content strategy led to an offer from a target company.",
          },
          {
            who: "Career changer",
            duration: "5 weeks",
            metrics: [
              { value: "+494%", label: "impressions" },
              { value: "+200%", label: "followers" },
            ],
            quote:
              "Content demonstrating expertise in the new field built industry credibility quickly.",
          },
          {
            who: "Graduate student",
            duration: "5 weeks",
            metrics: [
              { value: "+1000%", label: "impressions" },
              { value: "+203%", label: "followers" },
            ],
            quote:
              "Combining academic insight with practical experience drew attention from the global community.",
          },
        ],
      },
      {
        kind: "pricing",
        eyebrow: "Pricing",
        title: "Investment",
        desc: "From research to delivered strategy, one all-in package.",
        name: "1:1 LinkedIn Profile Workshop",
        price: "₩600,000",
        priceNote: "One session (research + workshop + strategy delivery)",
        includes: [
          "Pre-session research on your profile, career, and strengths (2–3 hours)",
          "1:1 workshop, in person or online (2 hours)",
          "Headline and About section rewritten during the session",
          "A pool of 20 content topics for three months",
          "A list of 100 target connections",
          "Delivered as a Notion page or PDF",
        ],
        footnote:
          "Reach out by email or KakaoTalk and we will find a time together.",
      },
      {
        kind: "faq",
        eyebrow: "FAQ",
        title: "Frequently asked questions",
        items: [
          {
            q: "Who is this for?",
            a: "Anyone targeting a job or a move at a foreign-invested or global company, anyone starting personal branding on LinkedIn, and anyone who has a profile but is seeing no results. Suitable from entry level through senior.",
          },
          {
            q: "Can it be done online?",
            a: "Yes. The workshop runs over Zoom or a similar video call with the same deliverables. We work together in real time through screen sharing.",
          },
          {
            q: "What should I prepare beforehand?",
            a: "Share your current LinkedIn profile URL and your latest resume, in Korean or English. If you do not have one, a summary of your career so far or even just the direction you want to take is enough. The rest is covered in the research stage.",
          },
          {
            q: "Is there support after the workshop?",
            a: "The content topic pool and target list delivered after the session act as your execution guide for the following three months. Email any follow-up questions.",
          },
          {
            q: "Is it English profiles only?",
            a: "Both English and Korean profiles are supported. An English profile is recommended if you are targeting global companies, but a Korean profile works well for foreign-invested companies hiring in Korea.",
          },
        ],
      },
      {
        kind: "closing",
        eyebrow: "Get started",
        title: "One profile changes which opportunities reach you",
        desc: "Two hours of work, and a complete LinkedIn strategy you can run for the next three months.",
      },
    ],
  },
  {
    slug: "career-challenge",
    navTitle: "5-Week Global Career Challenge",
    metaTitle: "5-Week Global Career Challenge",
    metaDescription:
      "A five-week sprint to a job at a global company. Weekly missions and live feedback covering your LinkedIn profile, English resume, recruiter outreach, and interviews.",
    blocks: [
      {
        kind: "hero",
        badge: "5-Week Global Career Sprint",
        headline: "Open the door to a global career",
        headlineAccent: "in five weeks",
        sub: "A job-search sprint run alongside a LinkedIn expert.",
        stats: [
          { value: "22,000+", label: "LinkedIn followers" },
          { value: "1000%", label: "best impression growth" },
          { value: "5 weeks", label: "focused program" },
        ],
      },
      {
        kind: "statement",
        eyebrow: "Problem",
        title: "What is standing between you and the job you want?",
        lines: [
          "A profile that does not stand out among thousands of resumes.",
          "The anxiety of not knowing where to start.",
          "From here on, you are not doing it alone.",
        ],
        closing:
          "Work with Lead Jaeil, ranked 7th among Korean LinkedIn creators by Favikon, and turn your LinkedIn into a hiring weapon.",
      },
      {
        kind: "stages",
        eyebrow: "Curriculum",
        title: "Five weeks, five focused missions",
        desc: "An executable mission every week, with live feedback.",
        items: [
          {
            tag: "Week 1 · Diagnosis",
            title: "Resume review and target setting",
            groups: [
              {
                label: "Lectures",
                items: [
                  "What a foreign-invested company actually is, and how hiring works there",
                  "How to write a resume and cover letter",
                  "How to find the right recruiters",
                ],
              },
              {
                label: "Missions",
                items: [
                  "Send 15 or more connection requests",
                  "Submit your Korean and English resume for review",
                ],
              },
              {
                label: "Kick",
                items: [
                  "After the resume review, a personalized list of three target companies and their HR contacts",
                  "Resume and cover letter tooling",
                ],
              },
            ],
          },
          {
            tag: "Week 2 · Setup",
            title: "Profile optimization for your target",
            groups: [
              {
                label: "Lectures",
                items: [
                  "Updating your photo",
                  "Updating your headline",
                  "Optimizing your education section",
                  "Commenting effectively",
                ],
              },
              {
                label: "Missions (5, reviewed after submission)",
                items: [
                  "Optimize your photo",
                  "Optimize your headline",
                  "Update your education section",
                  "Leave five or more comments during the week",
                  "Send 15 or more connection requests",
                ],
              },
              {
                label: "Kick",
                items: [
                  "A tool for drafting comments",
                  "A tool for filling in your education section quickly",
                  "A tool for writing your headline quickly",
                ],
              },
            ],
          },
          {
            tag: "Week 3 · Setup (2)",
            title: "Profile optimization, part two",
            groups: [
              {
                label: "Lectures",
                items: [
                  "How to write your Work Experience section",
                  "How to write your About section",
                  "Updating your skills",
                  "Reaching out for coffee chats",
                ],
              },
              {
                label: "Missions (reviewed after submission)",
                items: [
                  "Write your Work Experience section",
                  "Write your About section",
                  "Fill in your skills",
                  "Send 15 or more connection requests",
                  "Leave three or more comments",
                  "Message three people for a coffee chat",
                ],
              },
              {
                label: "Kick",
                items: [
                  "A tool for writing Work Experience",
                  "A tool for writing your About section",
                  "A tool for finding the right skills quickly",
                ],
              },
            ],
          },
          {
            tag: "Week 4 · Exposure",
            title: "Writing that proves you, and a jump in reach",
            groups: [
              {
                label: "Lectures",
                items: [
                  "Structuring an introduction post",
                  "Writing one post about your career journey, or outlining it",
                  "Planning a series you can run for four weeks or more",
                ],
              },
              {
                label: "Missions (3, reviewed, plus prep for the share session)",
                items: [
                  "Structure your introduction post",
                  "Write or outline one career-journey post",
                  "Write the plan for a four-week series",
                  "Send 10 or more connection requests",
                  "Leave three or more comments",
                ],
              },
              {
                label: "Kick",
                items: [
                  "Every participant's content gets reposted, so your writing lands directly in the feeds of the people you are targeting",
                ],
              },
            ],
          },
          {
            tag: "Week 5 · Results",
            title: "LinkedIn share session",
            groups: [
              {
                label: "Activities",
                items: [
                  "Share five weeks of data: impressions, inbound offers, DM reply rate",
                  "Set up a sustainable one-comment-a-day routine for after the challenge",
                  "Networking",
                ],
              },
            ],
          },
        ],
        warning:
          "Participants who miss week 5 do not receive a certificate of completion.",
      },
      {
        kind: "results",
        eyebrow: "Results",
        title: "What participants changed",
        desc: "Results from participants in the 4–5 week focused programs.",
        cases: [
          {
            who: "Case 1: Early-career professional",
            duration: "4 weeks",
            metrics: [
              { value: "+155.1%", label: "impressions" },
              { value: "+32%", label: "followers" },
            ],
            quote:
              "Systematic profile optimization and consistent posting led to an offer from a target company.",
          },
          {
            who: "Case 2: Career changer",
            duration: "5 weeks",
            metrics: [
              { value: "+494.4%", label: "impressions" },
              { value: "+200%", label: "followers" },
            ],
            quote:
              "Content demonstrating expertise in the new field built industry credibility quickly.",
          },
          {
            who: "Case 3: Graduate student",
            duration: "5 weeks",
            metrics: [
              { value: "+1000%", label: "impressions" },
              { value: "+203.4%", label: "followers" },
            ],
            quote:
              "Combining academic insight with practical experience drew attention from the global community.",
          },
        ],
      },
      {
        kind: "columns",
        eyebrow: "Program",
        title: "How the program runs",
        groups: [
          {
            title: "How it runs",
            tone: "neutral",
            items: [
              "One live lecture per week",
              "Q&A support through the KakaoTalk community and the Naver cafe",
              "Weekly group sessions",
              "Mission feedback: finish your assignment and upload it to the Naver cafe by midnight the night before class, then post a note in the KakaoTalk room",
            ],
          },
          {
            title: "What makes it different",
            tone: "neutral",
            items: [
              "Proven strategies from a working LinkedIn creator",
              "Tailored feedback and immediate course correction",
              "Access to a network of global recruiters",
              "Certificate of completion, issued at 100% mission completion; attending via the recording also counts",
              "Lifetime access to the alumni community",
            ],
          },
        ],
      },
      {
        kind: "expert",
        eyebrow: "Your instructor",
        name: "Lead Jaeil (Brasley Byun)",
        role: "LinkedIn Creator & career strategy consultant",
        points: [
          { label: "LinkedIn followers", value: "22,000" },
          { label: "Favikon Korea ranking", value: "Top 7" },
          { label: "Annual content impressions", value: "1M+" },
        ],
        desc: "Sharing practical strategy on job searching, career transitions, and personal branding on LinkedIn since 2020.",
      },
      {
        kind: "columns",
        eyebrow: "Requirements",
        title: "Who this is for, and what to prepare",
        groups: [
          {
            title: "This is for you if",
            tone: "yes",
            items: [
              "You are targeting a foreign-invested or global company",
              "You are a university student, graduate student, or an entry-level to mid-career professional",
              "You can invest five or more hours a week for five weeks",
              "You take feedback and act on it right away",
              "You can communicate in English",
            ],
          },
          {
            title: "This is not for you if",
            tone: "no",
            items: [
              "You are only targeting domestic companies",
              "You do not have a LinkedIn account and do not intend to create one",
              "You do not have enough time",
              "You are uncomfortable writing content",
              "You want fast results (this takes at least three months)",
            ],
          },
        ],
        note: "Communication happens in the KakaoTalk room, and missions are uploaded to the Naver cafe for feedback.",
      },
      {
        kind: "faq",
        eyebrow: "FAQ",
        title: "Frequently asked questions",
        items: [
          {
            q: "Can I start without a LinkedIn account?",
            a: "Yes, that is fine. Week 1 covers creating your account and setting up the basics together. You do need basic English, since the profile is written in English.",
          },
          {
            q: "Can I take part while working full time?",
            a: "Many participants do. The format is flexible: if you miss a live lecture you can watch the recording, and you can work through the missions at your own pace.",
          },
          {
            q: "How much does the program cost?",
            a: "The program costs ₩300,000. If you complete every mission, ₩100,000 is refunded.",
          },
          {
            q: "Is there a textbook?",
            a: "“It works! LinkedIn” is required, and you need to purchase it separately to follow the curriculum comfortably.",
          },
        ],
      },
      {
        kind: "closing",
        eyebrow: "Get started",
        title: "Start now",
        desc: "In five weeks, your LinkedIn becomes the best job-search tool you have.",
      },
    ],
  },
];
