/**
 * Every word on the page lives here. Edit copy without touching JSX.
 * Structure mirrors the reference layout; the words are ours.
 */

export type ReelMedia =
  | { kind: 'gradient'; gradient: string }
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; poster?: string };

export const brand = {
  name: 'Faceless Reels',
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
  headlineLead: 'Turn a sentence into',
  headlineTail: 'a history reel',
  subhead: 'Faceless. Automated. Studio-grade.',
  cta: 'Join the waitlist',
  note: 'Early access · founding-member pricing · no spam',
  eyebrow: 'Made with Faceless Reels',
};

/** Marquee row 1 — tag / title / runtime over a dark 16:9 surface. */
export const reelRowTop: {
  tag: string;
  title: string;
  runtime: string;
  media: ReelMedia;
}[] = [
  {
    tag: 'History',
    title: 'The town on fire since 1962',
    runtime: '0:41',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#1b2a52 0%,#0a1024 60%,#070c1b 100%)' },
  },
  {
    tag: 'Disbelief',
    title: 'The Halifax Explosion',
    runtime: '0:44',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#17345c 0%,#0a1024 58%,#060b18 100%)' },
  },
  {
    tag: 'Dark',
    title: 'The Dancing Plague of 1518',
    runtime: '0:38',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#232a5e 0%,#0b1026 60%,#070c1c 100%)' },
  },
  {
    tag: 'Local',
    title: "America's lost roadside giants",
    runtime: '0:36',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#143a50 0%,#0a1024 58%,#060b19 100%)' },
  },
  {
    tag: 'Myth vs Fact',
    title: 'The telegram that sank a presidency',
    runtime: '0:47',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#1d2c63 0%,#0a1024 60%,#070c1b 100%)' },
  },
  {
    tag: 'History',
    title: 'The island nobody can leave',
    runtime: '0:40',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#102f4e 0%,#0a1024 56%,#060b18 100%)' },
  },
];

/** Marquee row 2 — thumbnail style, big overlay headline. */
export const reelRowBottom: {
  overlay: string;
  media: ReelMedia;
}[] = [
  {
    overlay: 'BURNING SINCE 1962',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#2c3f7a 0%,#111a38 70%,#0a1024 100%)' },
  },
  {
    overlay: '36 FEET FROM DARK',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#1a4a6e 0%,#0e1733 70%,#090f20 100%)' },
  },
  {
    overlay: 'EXPERTS ARE STUNNED',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#324a86 0%,#121c3c 70%,#0a1126 100%)' },
  },
  {
    overlay: 'NOBODY CAME BACK',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#153a63 0%,#0d1630 70%,#080e1e 100%)' },
  },
  {
    overlay: '2,000 TONS OF TNT',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#27356d 0%,#101838 70%,#090f22 100%)' },
  },
  {
    overlay: 'THE LOST GIANTS',
    media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#1c4560 0%,#0d1730 70%,#080e1f 100%)' },
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
  runtime: '0:42',
  titleLabel: 'Title (required)',
  titleCounter: '44/100',
  title: "The town that's been on fire since 1962",
  descriptionLabel: 'Description',
  descriptionCounter: '86/5000',
  description:
    'Centralia, Pennsylvania sits on a coal seam that caught fire in 1962 and never stopped burning — the town was condemned and emptied, and the fire is still going.',
  tagsLabel: 'Tags',
  tags: ['centralia', 'us history', 'mine fire', 'did you know'],
  cta: 'Publish',
  media: {
    kind: 'gradient',
    gradient: 'linear-gradient(135deg,#2c3f7a 0%,#111a38 70%,#0a1024 100%)',
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
      title: 'The Halifax Explosion',
      runtime: '0:44',
      media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#17345c 0%,#0a1024 58%,#060b18 100%)' },
    },
    {
      tag: 'Dark curiosity',
      title: 'The Dancing Plague of 1518',
      runtime: '0:38',
      media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#232a5e 0%,#0b1026 60%,#070c1c 100%)' },
    },
    {
      tag: 'Local pride',
      title: 'Why Centralia Still Burns',
      runtime: '0:41',
      media: { kind: 'gradient', gradient: 'linear-gradient(135deg,#2c3f7a 0%,#111a38 70%,#0a1024 100%)' },
    },
  ] satisfies { tag: string; title: string; runtime: string; media: ReelMedia }[],
};

export const stats = [
  { value: '~4 min', body: 'From one-line prompt to a finished, postable reel.' },
  { value: '10×', body: 'More reels a day than hand-editing, so you can test more hooks.' },
  { value: '$0', body: 'Editors, voice actors and footage licenses — replaced by one tool.' },
];

export const reasons = {
  headingLead: 'Why Faceless Reels. ',
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
      body: 'Caption, hashtags and a cover frame with every reel. Download and post, or auto-schedule.',
    },
    {
      title: 'The output is the ad',
      body: "Generic tools can't show off because their output is generic. Yours is the demo that sells the tool.",
    },
  ],
};

export const comparison = {
  headingLead: 'Editors, footage, voice actors. ',
  headingAccent: 'Or just Faceless Reels',
  callout: '~20× cheaper',
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
    title: 'With Faceless Reels',
    items: [
      'Type one line, get a finished edit',
      'Archival footage sourced automatically',
      "Facts cited before they're ever spoken",
      'Dozens a day, about four minutes each',
      'A daily channel runs on autopilot',
    ],
    footLabel: 'Your cost:',
    footValue: 'under $1 per reel',
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
  yearlyBadge: '2 months free',
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
        allowance: '1 reel total',
        features: [
          { text: '1 full history reel' },
          { text: 'Full quality, watermarked' },
          { text: 'No card required' },
        ],
      },
      {
        name: 'Starter',
        monthly: 14,
        yearly: 12,
        who: 'A steady trickle to warm up a new channel.',
        allowance: '12 reels / mo',
        features: [
          { text: 'A few reels a week', sub: 'no watermark' },
          { text: 'Every story format' },
          { text: 'Download & post yourself' },
        ],
      },
      {
        name: 'Creator',
        monthly: 29,
        yearly: 24,
        who: 'Post every day without lifting a finger.',
        allowance: '40 reels / mo',
        features: [
          { text: 'Daily reels, no watermark' },
          { text: 'Auto-schedule to TikTok, IG & YouTube' },
          { text: 'Source & accuracy report per reel' },
        ],
        popular: true,
      },
      {
        name: 'Studio',
        monthly: 59,
        yearly: 49,
        who: 'For operators running a portfolio.',
        allowance: 'Unlimited reels',
        features: [
          { text: 'Everything in Creator' },
          { text: 'Unlimited reels & multiple accounts' },
          { text: 'Batch generation & priority rendering' },
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
      a: 'TikTok, Instagram Reels and YouTube Shorts. Reels are 1080×1920 and can be auto-scheduled, or downloaded and posted yourself.',
    },
    {
      q: 'When can I use it?',
      a: "We're opening to a small first group soon. Join the waitlist to get early access and lock in founding-member pricing before it rises at launch.",
    },
  ],
};

export const closing = {
  headingLead: 'Put your history channel ',
  headingAccent: 'on autopilot',
  subtext:
    'One prompt in, a finished reel out — on a schedule. Join the waitlist and be among the first to make one.',
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
  copyright: '© 2026 Faceless Reels · Built for creators, by creators.',
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
