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
};

export const reviews: Review[] = [
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
