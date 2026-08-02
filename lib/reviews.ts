export type ReviewStat = { value: string; label: string };

export type Review = {
  slug: string;
  title: string;
  /** Where the review came from — the talk or programme attended. */
  event: string;
  date: string;
  /** How the reviewer is credited. Never a name they did not give. */
  attribution: string;
  /** Shown collapsed, so the card says something before it is opened. */
  pullQuote: string;
  /** Prose reviews. Reproduced verbatim; absent on survey entries. */
  body?: string[];
  /** Survey results, for feedback that arrived as numbers rather than prose. */
  stats?: ReviewStat[];
  /** Sample size and any caveat. Required alongside `stats` so a percentage
   *  is never shown without saying how many people it came from. */
  sampleNote?: string;
  /** Set on translations so the page can say the words were not written in
   *  this language. Slugs must match reviews-ko.ts. */
  translated?: boolean;
  /** Where the review was originally published, when it is public. */
  sourceUrl?: string;
};

export const reviews: Review[] = [
  {
    slug: "linkedin-1chon-connections",
    title: "What I did before sending a single connection request",
    event: "Reader of “It works! LinkedIn”",
    date: "2026.08",
    attribution: "JuHyun Lee — Head of Treasury | Corporate Governance & Internal Controls",
    pullQuote: "On 3 June I had 38 LinkedIn connections. Today I have 1,059.",
    translated: true,
    sourceUrl:
      "https://www.linkedin.com/pulse/%EB%A7%81%ED%81%AC%EB%93%9C%EC%9D%B8-1%EC%B4%8C-%EC%8B%A0%EC%B2%AD%EB%B3%B4%EB%8B%A4-%EB%A8%BC%EC%A0%80-%ED%95%9C-%EC%9D%BC-juhyun-lee-2tvnc/",
    body: [
      "On 3 June I had 38 LinkedIn connections. Today I have 1,059.",
      "Over those two months I was able to connect with a lot of people, but the most important part was not the connection request itself — it was giving the other person a reason to accept it.",
      "It started with “It works! LinkedIn” by Jaeil Byun, an author who is himself active on the platform. I read the line “the connection request is everything”, decided to act on it, and began by reworking my profile.",
      "I rebuilt my career and expertise the way you would a CV, and completed verification for the company I currently work at to make the profile more credible. Then I used the free premium trial to send connection requests along with a message.",
      "I also put my network in order.",
      "Headhunters → practitioners in the same field (finance and treasury) → colleagues at overseas branches and head office → decision makers",
      "Once I passed 500, connections started producing further connections, and after that I expanded the network naturally by posting content.",
      "The most memorable of them was a conversation with the Treasury Head of an automotive group in Pakistan.",
      "They were struggling to manage more than 70 accounts across several affiliates, and I shared my experience running cash pooling. They told me they had looked at the same approach, but that regulatory constraints in their country made it hard to apply.",
      "Beyond that, unexpected conversations keep coming — with treasury specialists abroad, with headhunters, with leaders across a range of industries.",
      "There is one thing this experience taught me.",
      "“The connection request is everything” was right.",
      "But the thing to do before that was to build enough trust that, when someone opened my profile, they saw a person worth connecting with.",
      "And good connections did, in the end, lead to good conversations I had not expected.",
      "The greatest value of LinkedIn for me is not the number 1,059, but what I got to learn and think about through those connections.",
    ],
  },
  {
    slug: "microsoft-ai-playground",
    title: "\"LinkedIn social branding\" attendee survey",
    event: "Microsoft AI Community, AI Playground",
    date: "2026.07",
    attribution: "Attendee survey, 5 responses",
    pullQuote: "Every respondent said they would recommend it to a friend or colleague.",
    translated: true,
    stats: [
      { value: "5.0 / 5.0", label: "Overall satisfaction" },
      { value: "4 of 5", label: "Said it exceeded expectations" },
      { value: "5 of 5", label: "Would recommend it (all promoters)" },
      { value: "5 of 5", label: "Want to write a first post or a write-up" },
      { value: "5 of 5", label: "Want to turn their experience into content" },
      { value: "3 of 5", label: "Want to rework their profile first" },
    ],
    sampleNote:
      "Five people responded. Read the numbers as an indication, not a measurement — the sample is small.",
    body: [
      "Asked what worked best, respondents picked the LinkedIn writing and branding session (4), the hands-on format and the venue and running of the event (3 each), and the speaker's own examples (2). Three of the five were attending this community's events for the first time.",
      "Nobody selected \"I am not sure what to do first\" when asked what they wanted to do next.",
    ],
  },
  {
    slug: "twojobmate-5th-lecture",
    title: "Notes on the “Endless Challenge with LinkedIn” talk",
    event: "Twojob Lab, Twojobmate fifth guest talk",
    date: "2026.07",
    attribution: "Attendee",
    pullQuote: "What stayed with me most: opportunity is made inside relationships.",
    translated: true,
    body: [
      "On 1 July at 8:30 in the evening, I attended “Endless Challenge with LinkedIn” by the LinkedIn creator Lead Jaeil, the fifth guest talk in Jouro's Twojobmate series.",
      "LinkedIn had been a platform I knew only by name. It came to mind vaguely alongside words like foreign-invested companies, jobs abroad, professional networking — but I had never thought of it as a platform close to me.",
      "Through this talk, though, LinkedIn started to feel less like a social network and more like a career record: a place that lays out, piece by piece, what you have worked on, what you are interested in, and the direction you want to grow in.",
      "The part that stayed with me was the LinkedIn writing advice, which we got to hear separately thanks to Jouro. What I liked was that you do not have to lead with grand expertise or impressive results — your first post can start with simply introducing who you are. LinkedIn had felt slightly distant to me, and that one point lowered the threshold to begin.",
      "The biggest thought I left with was that opportunity is ultimately made inside relationships. If nobody knows who you are, good opportunities are unlikely to arrive; but if you keep a steady record of what you have done and what you think, someone may one day find you through those traces. In that sense LinkedIn felt less like a social network and more like another portfolio explaining who you are.",
      "Of course I could not claim LinkedIn is essential for everyone. But for an active job seeker, or for someone who is not put off by social networks and wants to grow through connections with people, it seemed genuinely able to help in finding good relationships and a new job.",
      "Lead Jaeil is the author of “It works! LinkedIn” and has actually grown through the platform, and perhaps because of that the talk was closer to “how do you start, and how do you keep going” than to theory. So there was a lot that landed practically, even for someone encountering LinkedIn for the first time.",
      "Rather than simply urging us to use LinkedIn, the talk was time spent thinking about who I want to be seen as in the age of AI, and how to record and connect that version of myself. Writing on LinkedIn still feels a little unfamiliar, but I have come to want to make the small attempt of putting my own introduction together first.",
      "Thank you to Jouro for opening up such a good talk, and to Lead Jaeil for explaining LinkedIn in a way that made it feel like a more practical tool.",
    ],
  },
];
