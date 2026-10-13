/**
 * Every word on the page lives here. Edit copy without touching JSX.
 * Reel/video media is a swappable prop — see `ReelMedia` and README.md.
 */

export type ReelMedia =
  | { kind: 'gradient'; gradient: string }
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; poster?: string };

export type Reel = {
  tag: string;
  title: string;
  runtime: string;
  media: ReelMedia;
};

export const brand = {
  name: 'Faceless Reels',
  tagline:
    'The AI engine for faceless history channels. Type a sentence, get a studio-grade reel, good enough to post.',
};

export const nav = {
  links: [
    { label: 'How it works', href: '#pipeline' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  signIn: { label: 'Sign in', href: '#join' },
  cta: { label: 'Join the waitlist', href: '#join' },
};

export const hero = {
  eyebrow: 'Made with Faceless Reels',
  headlineLead: 'Turn a sentence into a ',
  headlineAccent: 'history reel',
  headlineTail: '.',
  subhead: 'Faceless. Automated. Studio-grade.',
  formNote: 'Early access · founding-member pricing · no spam',
};

/** Six sample reels for the hero marquee. Swap `media` for real thumbnails/MP4s. */
export const marqueeReels: Reel[] = [
  {
    tag: 'History',
    title: 'The town on fire since 1962',
    runtime: '0:41',
    media: { kind: 'gradient', gradient: 'linear-gradient(155deg, #3a1f14 0%, #0b1530 58%, #08101f 100%)' },
  },
  {
    tag: 'Disbelief',
    title: 'The Halifax Explosion',
    runtime: '0:44',
    media: { kind: 'gradient', gradient: 'linear-gradient(155deg, #1b3350 0%, #0b1530 55%, #070d1c 100%)' },
  },
  {
    tag: 'Dark',
    title: 'The Dancing Plague of 1518',
    runtime: '0:38',
    media: { kind: 'gradient', gradient: 'linear-gradient(155deg, #2a1838 0%, #0d1430 58%, #080e1e 100%)' },
  },
  {
    tag: 'Local',
    title: "America's lost roadside giants",
    runtime: '0:36',
    media: { kind: 'gradient', gradient: 'linear-gradient(155deg, #1d3a33 0%, #0b1530 56%, #070e1d 100%)' },
  },
  {
    tag: 'Myth vs Fact',
    title: 'The telegram that sank a presidency',
    runtime: '0:47',
    media: { kind: 'gradient', gradient: 'linear-gradient(155deg, #33281a 0%, #0c1430 57%, #080e1e 100%)' },
  },
  {
    tag: 'History',
    title: 'The island nobody can leave',
    runtime: '0:40',
    media: { kind: 'gradient', gradient: 'linear-gradient(155deg, #152f46 0%, #0b1530 55%, #070d1b 100%)' },
  },
];

export const pipeline = {
  eyebrow: 'How it works',
  heading: 'Six specialists. One finished reel.',
  subtext:
    'You give one line. A chain of AI specialists researches, writes, narrates, sources the footage, and cuts it — the way a real studio would.',
  promptLabel: 'Prompt',
  promptValue: 'the halifax explosion of 1917, 45 sec, cinematic',
  steps: [
    {
      num: '01',
      title: 'Script Writer',
      body: 'Builds the story: a hook that stops the scroll, a turn, and a payoff worth a comment.',
      chip: 'Hook · beats · payoff',
    },
    {
      num: '02',
      title: 'Fact Checker',
      body: "Every name, date and number verified against tiered historical sources before it's spoken.",
      chip: 'Cited · 75%+ sourced',
    },
    {
      num: '03',
      title: 'Voiceover',
      body: 'Reads the script with real emphasis and pauses — not flat text-to-speech.',
      chip: 'Expressive narration',
    },
    {
      num: '04',
      title: 'Archival Sourcing',
      body: 'Pulls era-correct photos from the Library of Congress, Commons and the National Archives.',
      chip: 'Real archival footage',
    },
    {
      num: '05',
      title: 'Motion Designer',
      body: 'Cut-outs, spotlights, ink annotations, dated timelines — a treatment chosen per shot.',
      chip: 'Cinematic edit',
    },
    {
      num: '06',
      title: 'Thumbnail & Caption',
      body: 'Designs the cover frame and writes the caption and hashtags, ready to post.',
      chip: '1080×1920 · ready',
    },
  ],
};

export const publishMock = {
  runtime: '0:42',
  titleLabel: 'Title',
  title: "The town that's been on fire since 1962",
  counter: '38/60',
  descriptionLabel: 'Description',
  description:
    'A reel on Centralia, Pennsylvania — the mine fire that emptied a town.',
  hashtags: ['#history', '#ushistory', '#centralia', '#didyouknow'],
  cta: 'Publish',
  media: {
    kind: 'gradient',
    gradient: 'linear-gradient(155deg, #3a1f14 0%, #0b1530 58%, #08101f 100%)',
  } satisfies ReelMedia,
};

export const showcase = {
  eyebrow: 'See it',
  heading: 'Reels made start-to-finish by the engine.',
  subtext:
    'No human touched the edit. This is the raw output — the demo and the product are the same thing.',
  reels: [
    {
      tag: 'Disbelief',
      title: 'The Halifax Explosion',
      runtime: '0:44',
      media: {
        kind: 'gradient',
        gradient: 'linear-gradient(155deg, #1b3350 0%, #0b1530 55%, #070d1c 100%)',
      },
    },
    {
      tag: 'Dark curiosity',
      title: 'The Dancing Plague of 1518',
      runtime: '0:38',
      media: {
        kind: 'gradient',
        gradient: 'linear-gradient(155deg, #2a1838 0%, #0d1430 58%, #080e1e 100%)',
      },
    },
    {
      tag: 'Local pride',
      title: 'Why Centralia Still Burns',
      runtime: '0:41',
      media: {
        kind: 'gradient',
        gradient: 'linear-gradient(155deg, #3a1f14 0%, #0b1530 58%, #08101f 100%)',
      },
    },
  ] satisfies Reel[],
};

export const stats = [
  {
    value: '~4 min',
    body: 'From one-line prompt to a finished, postable reel.',
  },
  {
    value: '10×',
    body: 'More reels a day than hand-editing, so you can test more hooks.',
  },
  {
    value: '$0',
    body: 'Editors, voice actors and footage licenses — replaced by one tool.',
  },
];

export const reasons = {
  eyebrow: 'Why Faceless Reels',
  heading: 'Six reasons people pick it over the generic tools.',
  items: [
    {
      num: '01',
      title: 'One niche, done right',
      body: 'Not a horizontal tool. History only — researched, sourced and edited better than anything general-purpose can manage.',
    },
    {
      num: '02',
      title: 'Accuracy is the moat',
      body: 'Every fact is cited. One wrong date in the comments kills a history channel — so we gate on sourcing.',
    },
    {
      num: '03',
      title: 'Volume without a team',
      body: 'Dozens of reels a day. Testing a new hook stops being a gamble when each one costs minutes.',
    },
    {
      num: '04',
      title: 'Not a slideshow',
      body: 'Cut-outs, spotlights, period frames and dated timelines — a real edit, not stock clips with music.',
    },
    {
      num: '05',
      title: 'Ready to publish',
      body: 'Caption, hashtags and a cover frame come with every reel. Download and post, or auto-schedule.',
    },
    {
      num: '06',
      title: 'The output is the ad',
      body: "Generic tools can't show off because their output is generic. Yours is the demo that sells the tool.",
    },
  ],
};

export const comparison = {
  eyebrow: 'The math',
  heading: 'Editors, footage, voice actors. Or just Faceless Reels.',
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
    footValue: '$80–200 per reel.',
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
    footValue: 'under $1 per reel.',
  },
};

export type Tier = {
  name: string;
  monthly: number;
  yearly: number;
  who: string;
  features: string[];
  popular?: boolean;
};

export const pricing = {
  eyebrow: 'Launch pricing',
  heading: 'Founding-member pricing, locked for good.',
  subtext:
    'Join the waitlist to claim these prices before they rise at launch.',
  audienceToggle: ['Individual', 'Business'] as const,
  cycleToggle: ['Monthly', 'Yearly'] as const,
  yearlyBadge: '2 months free',
  cta: 'Join waitlist',
  footLink: { label: "See what's included →", href: '#faq' },
  /**
   * Prices are per month. `yearly` already reflects ~2 months free.
   * Business currently mirrors Individual — swap in different numbers here
   * and the toggle picks them up with no component changes.
   */
  tiers: {
    Individual: [
      {
        name: 'Free',
        monthly: 0,
        yearly: 0,
        who: 'See the quality for yourself before anything else.',
        features: [
          '1 full history reel',
          'Full quality, watermarked',
          'No card required',
        ],
      },
      {
        name: 'Starter',
        monthly: 14,
        yearly: 12,
        who: 'A steady trickle of reels to warm up a new channel.',
        features: [
          'A few reels a week, no watermark',
          'Every story format',
          'Download & post yourself',
        ],
      },
      {
        name: 'Creator',
        monthly: 29,
        yearly: 24,
        who: 'Run a channel that posts every day without lifting a finger.',
        features: [
          'Daily reels, no watermark',
          'Auto-schedule to TikTok, IG & YouTube',
          'Source & accuracy report per reel',
        ],
        popular: true,
      },
      {
        name: 'Studio',
        monthly: 59,
        yearly: 49,
        who: 'For operators running a portfolio of accounts.',
        features: [
          'Everything in Creator',
          'Unlimited reels & multiple accounts',
          'Batch generation & priority rendering',
        ],
      },
    ] satisfies Tier[],
    Business: [
      {
        name: 'Free',
        monthly: 0,
        yearly: 0,
        who: 'See the quality for yourself before anything else.',
        features: [
          '1 full history reel',
          'Full quality, watermarked',
          'No card required',
        ],
      },
      {
        name: 'Starter',
        monthly: 14,
        yearly: 12,
        who: 'A steady trickle of reels to warm up a new channel.',
        features: [
          'A few reels a week, no watermark',
          'Every story format',
          'Download & post yourself',
        ],
      },
      {
        name: 'Creator',
        monthly: 29,
        yearly: 24,
        who: 'Run a channel that posts every day without lifting a finger.',
        features: [
          'Daily reels, no watermark',
          'Auto-schedule to TikTok, IG & YouTube',
          'Source & accuracy report per reel',
        ],
        popular: true,
      },
      {
        name: 'Studio',
        monthly: 59,
        yearly: 49,
        who: 'For operators running a portfolio of accounts.',
        features: [
          'Everything in Creator',
          'Unlimited reels & multiple accounts',
          'Batch generation & priority rendering',
        ],
      },
    ] satisfies Tier[],
  },
};

export const faq = {
  eyebrow: 'FAQ',
  heading: 'Questions. Short answers.',
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
  eyebrow: 'Be first in line',
  headlineLead: 'Put your history channel ',
  headlineAccent: 'on autopilot',
  headlineTail: '.',
  subtext:
    'One prompt in, a finished reel out — on a schedule. Join the waitlist and be among the first to make one.',
  formNote: 'Early access · founding-member pricing · no spam',
};

export const footer = {
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'How it works', href: '#pipeline' },
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
