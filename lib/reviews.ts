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
  body: string[];
  /** Set on translations so the page can say the words were not written in
   *  this language. Slugs must match reviews-ko.ts. */
  translated?: boolean;
};

export const reviews: Review[] = [
  {
    slug: "twojobmate-5th-lecture",
    title: "Notes on the “Endless Challenge with LinkedIn” talk",
    event: "Jouro Twojobmate, fifth guest talk",
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
