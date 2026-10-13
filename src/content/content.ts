/**
 * Every word on the page lives here. Edit copy without touching JSX.
 * Structure mirrors the reference layout; the words are ours.
 */

export type ReelMedia =
  | { kind: 'gradient'; gradient: string }
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; poster?: string };

export const brand = {
  name: 'Reelfly',
  tagline:
    'The AI engine for faceless history channels. Type a sentence, get a studio-grade reel, good enough to post.',
};

export const nav = {
  links: [
    { label: 'How it works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  signIn: { label: 'Sign in', href: '#join' },
  cta: { label: 'Join the waitlist', href: '#join' },
};

export const hero = {
  // The headline reads "Turn a sentence into / a <word> reel", where <word>
  // cycles through the niches the engine covers. `niches[0]` is the word
  // shown before JS hydrates and under prefers-reduced-motion.
  topEyebrow: 'The AI reel engine',
  topHeadlineLead: 'One sentence in, a finished reel out.',
  topHeadlineAccent: 'Post 10× faster.',
  topSubhead:
    'Reelfly writes it, fact-checks it, narrates it, sources real footage and cuts it — a studio-grade short, captioned and ready to post.',
  headlineLine1: 'Turn a sentence into',
  headlineBeforeWord: 'a',
  niches: [
    'history',
    'science',
    'engineering',
    'heist',
    'mythology',
    'folklore',
    'geography',
    'mystery',
    'disaster',
  ],
  headlineAfterWord: 'reel',
  subhead: 'Faceless. Automated. Studio-grade.',
  cta: 'Join the waitlist',
  note: 'Early access · founding-member pricing · no spam',
  eyebrow: 'Made with Reelfly',
};

/**
 * The looping hero demo: a sentence types in, "Create" is clicked, and a
 * finished reel is revealed — our take on the Opus-style input→output hero.
 */
export const createDemo = {
  promptLabel: 'Your sentence',
  prompt: 'london bridge, shipped to the arizona desert',
  cta: 'Create',
  building: 'Generating your reel',
  steps: ['Script', 'Fact-check', 'Voiceover', 'Footage', 'Edit', 'Caption'],
  output: {
    tag: 'History',
    title: 'London Bridge in Arizona',
    runtime: '0:56',
    media: {
      kind: 'image' as const,
      src: '/reels/demo-reel.jpg',
      alt: 'Finished vertical reel: London Bridge in Arizona',
    },
  },
};

/** Marquee row 1 — tag / title / runtime over a dark 16:9 surface. */
export const reelRowTop: {
  tag: string;
  title: string;
  runtime: string;
  media: ReelMedia;
}[] = [
  {
    tag: 'Disbelief',
    title: 'London Bridge in Arizona',
    runtime: '0:56',
    media: { kind: 'image', src: '/reels/bridge-aerial.jpg', alt: 'London Bridge rebuilt over a channel in the Arizona desert' },
  },
  {
    tag: 'Dark',
    title: "Boston's deadly molasses flood",
    runtime: '0:56',
    media: { kind: 'image', src: '/reels/flood-wreck.jpg', alt: 'Wreckage after the 1919 Boston molasses flood' },
  },
  {
    tag: 'Local',
    title: 'The bridge shipped to the desert',
    runtime: '0:56',
    media: { kind: 'image', src: '/reels/bridge-canal.jpg', alt: 'Aerial of the London Bridge channel in Lake Havasu City' },
  },
  {
    tag: 'History',
    title: '21 dead in a wave of molasses',
    runtime: '0:56',
    media: { kind: 'image', src: '/reels/flood-street.jpg', alt: 'Boston North End street after the molasses flood' },
  },
  {
    tag: 'Myth vs Fact',
    title: 'How London Bridge reached Arizona',
    runtime: '0:56',
    media: { kind: 'image', src: '/reels/bridge-river.jpg', alt: 'Aerial river bend beside the relocated London Bridge' },
  },
  {
    tag: 'History',
    title: 'The flood that smelled sweet for decades',
    runtime: '0:56',
    media: { kind: 'image', src: '/reels/flood-rail.jpg', alt: 'Railway and buildings damaged in the molasses flood' },
  },
];

/** Marquee row 2 — thumbnail style, big overlay headline. */
export const reelRowBottom: {
  overlay: string;
  media: ReelMedia;
}[] = [
  {
    overlay: 'SHIPPED STONE BY STONE',
    media: { kind: 'image', src: '/reels/th-bridge-arch.jpg', alt: 'Stone arch of the relocated London Bridge' },
  },
  {
    overlay: '21 DEAD IN MINUTES',
    media: { kind: 'image', src: '/reels/th-flood-wide.jpg', alt: 'Aftermath of the Boston molasses flood' },
  },
  {
    overlay: 'REBUILT IN THE DESERT',
    media: { kind: 'image', src: '/reels/th-bridge-river.jpg', alt: 'Channel built for London Bridge in Arizona' },
  },
  {
    overlay: 'A WAVE OF MOLASSES',
    media: { kind: 'image', src: '/reels/th-flood-crowd.jpg', alt: 'Crowd and wreckage after the molasses flood' },
  },
  {
    overlay: 'THE WRONG BRIDGE?',
    media: { kind: 'image', src: '/reels/th-bridge-house.jpg', alt: 'Stone bridge beside a desert home' },
  },
  {
    overlay: '15 MILES AN HOUR',
    media: { kind: 'image', src: '/reels/th-flood-trap.jpg', alt: 'Figures amid the molasses flood wreckage' },
  },
];

/**
 * Pipeline steps. `artifact` selects which animated mini-visual renders
 * on the right-hand side of the row (see StepArtifact).
 */
export type Artifact = 'caret' | 'checklist' | 'wave' | 'editor' | 'keyframes' | 'thumbs';

export const pipeline = {
  heading: 'How it works',
  promptLabelLeft: 'Your prompt',
  promptLabelRight: 'Your idea',
  promptValue: 'the halifax explosion of 1917, 45 sec, cinematic',
  steps: [
    { num: '01', title: 'Script Writer', does: 'writes the story', artifact: 'caret' as Artifact },
    { num: '02', title: 'Fact Checker', does: 'verifies every claim', artifact: 'checklist' as Artifact },
    { num: '03', title: 'Voiceover', does: 'reads it out loud', artifact: 'wave' as Artifact },
    { num: '04', title: 'Archival Sourcing', does: 'finds era-correct footage', artifact: 'editor' as Artifact },
    { num: '05', title: 'Motion Designer', does: 'adds graphics', artifact: 'keyframes' as Artifact },
    { num: '06', title: 'Thumbnail & Caption', does: 'designs the cover frame', artifact: 'thumbs' as Artifact },
  ],
  /** Text shown inside each step's artifact. */
  artifactCopy: {
    caret: '[hook 0:00] the town that has burned for',
    checklist: [
      { done: false, text: 'Centralia fire: 1962' },
      { done: true, text: 'Mine shaft ignited' },
      { done: true, text: '62 years burning' },
    ],
    wave: { left: '00:00:41', right: 'en · clone · 1' },
    editor: { left: 'v · a · m', right: '38 cuts' },
    keyframes: { left: 'kf · 10/10', right: 'ease.inout' },
    thumbs: { right: 'A/B · 3' },
  },
  publishHeadingLead: 'Ready to ',
  publishHeadingAccent: 'publish',
};

export const publishMock = {
  panelTitle: 'Reel details',
  runtime: '0:56',
  titleLabel: 'Title (required)',
  titleCounter: '48/100',
  title: 'How London Bridge ended up in the Arizona desert',
  descriptionLabel: 'Description',
  descriptionCounter: '132/5000',
  description:
    'In 1968 a developer bought the old London Bridge and shipped it across the Atlantic stone by stone, rebuilding it in Lake Havasu City, Arizona — where it still stands today.',
  tagsLabel: 'Tags',
  tags: ['london bridge', 'arizona', '1968', 'did you know'],
  cta: 'Publish',
  media: {
    kind: 'image',
    src: '/reels/bridge-river.jpg',
    alt: 'Aerial of the London Bridge channel in Arizona',
  } satisfies ReelMedia,
};

export const showcase = {
  headingLead: 'Reels made ',
  headingAccent: 'start to finish',
  headingTail: ' by the engine',
  subtext:
    'No human touched the edit. This is the raw output — the demo and the product are the same thing.',
  reels: [
    {
      tag: 'Disbelief',
      title: 'London Bridge in Arizona',
      runtime: '0:56',
      media: { kind: 'image', src: '/reels/bridge-aerial.jpg', alt: 'London Bridge rebuilt over a channel in the Arizona desert' },
    },
    {
      tag: 'Dark curiosity',
      title: "Boston's Deadly Molasses Flood",
      runtime: '0:56',
      media: { kind: 'image', src: '/reels/flood-wide.jpg', alt: 'Aftermath of the 1919 Boston molasses flood' },
    },
    {
      tag: 'Local pride',
      title: 'The bridge shipped to the desert',
      runtime: '0:56',
      media: { kind: 'image', src: '/reels/bridge-arch.jpg', alt: 'Stone arch of the relocated London Bridge' },
    },
  ] satisfies { tag: string; title: string; runtime: string; media: ReelMedia }[],
};

export const stats = [
  { value: '~4 min', body: 'From one-line prompt to a finished, postable reel.' },
  { value: '10×', body: 'More reels a day than hand-editing, so you can test more hooks.' },
  { value: '$0', body: 'Editors, voice actors and footage licenses — replaced by one tool.' },
];

export const reasons = {
  headingLead: 'Why Reelfly. ',
  headingAccent: 'Six reasons people pick it',
  /** The first reason is rendered as the large feature card. */
  lead: {
    title: 'Replaces a whole stack of tools',
    body: 'Editor, researcher, voice actor, footage licence and thumbnail designer — one prompt replaces all of them, and the output is good enough to post without a pass.',
  },
  items: [
    {
      title: 'One niche, done right',
      body: 'History only — researched, sourced and edited better than anything general-purpose manages.',
    },
    {
      title: 'Accuracy is the moat',
      body: 'Every fact cited. One wrong date in the comments kills a history channel, so we gate on sourcing.',
    },
    {
      title: 'Volume without a team',
      body: 'Dozens of reels a day. Testing a hook stops being a gamble when each one costs minutes.',
    },
    {
      title: 'Not a slideshow',
      body: 'Cut-outs, spotlights, period frames and dated timelines — a real edit, not stock clips with music.',
    },
    {
      title: 'Ready to publish',
      body: 'Caption, hashtags and a cover frame with every reel. Download and post it yourself.',
    },
    {
      title: 'The output is the ad',
      body: "Generic tools can't show off because their output is generic. Yours is the demo that sells the tool.",
    },
  ],
};

export const comparison = {
  headingLead: 'Editors, footage, voice actors. ',
  headingAccent: 'Or just Reelfly',
  callout: '~50× cheaper',
  old: {
    title: 'The old way',
    items: [
      'Hire an editor, or learn to cut it yourself',
      'Source and license archival footage by hand',
      'Fact-check every claim yourself',
      'One reel at a time, days of turnaround',
      'Posting a daily channel becomes a full-time job',
    ],
    footLabel: 'Typical cost:',
    footValue: '$80–200 per reel',
  },
  ours: {
    title: 'With Reelfly',
    items: [
      'Type one line, get a finished edit',
      'Archival footage sourced automatically',
      "Facts cited before they're ever spoken",
      'Dozens a day, about four minutes each',
      'A finished reel ready to post',
    ],
    footLabel: 'Your cost:',
    footValue: 'about $1.30 per reel',
  },
};

export type Tier = {
  name: string;
  monthly: number;
  yearly: number;
  who: string;
  /** Line shown in the "credits" slot of the reference card. */
  allowance: string;
  features: { text: string; sub?: string }[];
  popular?: boolean;
};

export const pricing = {
  headingLead: 'Founding-member pricing, ',
  headingAccent: 'locked for good',
  yearlyBadge: '',
  audienceToggle: ['Individual', 'Business'] as const,
  cycleToggle: ['Monthly', 'Yearly'] as const,
  cta: 'Join waitlist',
  footLink: { label: 'See full plan comparison', href: '#faq' },
  billedYearly: 'billed yearly',
  tiers: {
    Individual: [
      {
        name: 'Free',
        monthly: 0,
        yearly: 0,
        who: 'See the quality for yourself first.',
        allowance: '1 reel',
        features: [
          { text: '1 history reel' },
          { text: '1 series' },
          { text: 'Watermarked · no card required' },
        ],
      },
      {
        name: 'Starter',
        monthly: 19,
        yearly: 19,
        who: 'A steady trickle to warm up a new channel.',
        allowance: '3 reels / week',
        features: [
          { text: '3 reels a week' },
          { text: '1 series' },
          { text: '27 motion credits' },
          { text: 'Download & post yourself' },
        ],
      },
      {
        name: 'Daily',
        monthly: 39,
        yearly: 39,
        who: 'A reel every day, ready to post.',
        allowance: '1 reel / day',
        features: [
          { text: '1 reel a day', sub: 'no watermark' },
          { text: '1 series' },
          { text: '62 motion credits' },
          { text: 'HD & background music' },
        ],
        popular: true,
      },
      {
        name: 'Hardcore',
        monthly: 69,
        yearly: 69,
        who: 'Twice-daily posting for serious channels.',
        allowance: '2 reels / day',
        features: [
          { text: '2 reels a day', sub: 'no watermark' },
          { text: '1 series' },
          { text: '124 motion credits' },
          { text: 'Priority rendering' },
        ],
      },
    ] satisfies Tier[],
    get Business() {
      return pricing.tiers.Individual;
    },
  } as { Individual: Tier[]; Business: Tier[] },
};

export const faq = {
  headingLead: 'Questions. ',
  headingAccent: 'Short answers',
  items: [
    {
      q: 'What do I get?',
      a: 'A finished vertical history reel: a hook-driven script, fact-checked and cited, expressive narration, real archival footage, a cinematic edit, plus a cover frame, caption and hashtags — ready to post at 1080×1920.',
    },
    {
      q: "Why doesn't it look like typical AI video?",
      a: 'Real archival photos, cut-outs, spotlights, period frames and dated timelines — a treatment chosen for what each line means. Not stock clips stitched end to end under music.',
    },
    {
      q: 'How accurate is it, really?',
      a: 'Every name, date and number is checked against tiered historical sources before narration. Each reel comes with a source report, because one wrong fact in the comments is what kills a history channel.',
    },
    {
      q: 'What kind of content can I make?',
      a: 'History, specifically — US and world. Formats include weird-but-true single stories, myth-vs-fact, and state-by-state series. More niches come after history is rock-solid.',
    },
    {
      q: 'Which platforms is it built for?',
      a: 'TikTok, Instagram Reels and YouTube Shorts. Reels are 1080×1920 — download them and post whenever you like.',
    },
    {
      q: 'When can I use it?',
      a: "We're opening to a small first group soon. Join the waitlist to get early access and lock in founding-member pricing before it rises at launch.",
    },
  ],
};

export const closing = {
  // "Put your <niche> channel on autopilot", niche rotating like the hero.
  headlineBefore: 'Put your',
  headlineAfter: 'channel on autopilot',
  subtext:
    'One prompt in, a finished reel out. Join the waitlist and be among the first to make one.',
  note: 'Early access · founding-member pricing · no spam',
};

export const footer = {
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'How it works', href: '#how' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Waitlist', href: '#join' },
        { label: 'Contact', href: '#join' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Cookies', href: '#' },
      ],
    },
  ],
  copyright: '© 2026 Reelfly · Built for creators, by creators.',
  region: 'United States',
};

export const waitlist = {
  placeholder: 'you@email.com',
  cta: 'Join the waitlist',
  label: 'Email address',
  invalid: 'Enter a valid email address.',
  failed: "That didn't go through. Try again in a moment.",
  unconfigured: "Waitlist isn't connected yet.",
  success: "You're on the list — we'll email you the moment early access opens.",
};
