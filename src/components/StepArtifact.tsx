import type { Artifact } from '@/content/content';
import { pipeline } from '@/content/content';

/**
 * The animated mini-visualisation that sits on the right of every pipeline
 * row. Pure CSS animation (no hooks, no state) so this stays a server
 * component; every keyframe name below already lives in globals.css and the
 * blanket `prefers-reduced-motion` rule there disables them all.
 *
 * Reference geometry: 630 x 142 card, 26px inner padding, 12px mono captions
 * pinned bottom-left / bottom-right.
 */

const copy = pipeline.artifactCopy;

/* ---------------------------------------------------------------- shared */

const PAD = 'px-[26px]';

function Caption({ left, right }: { left?: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-4 font-mono text-[12px] leading-none text-ink-faint">
      <span className="truncate">{left ?? ''}</span>
      <span className="shrink-0">{right ?? ''}</span>
    </div>
  );
}

/* ----------------------------------------------------------------- caret */

function Caret() {
  return (
    <div className={`flex h-full flex-col pt-[26px] ${PAD}`}>
      <p className="font-mono text-[14px] leading-[1.4] text-accent">
        <span className="break-words">{copy.caret}</span>
        <span
          aria-hidden="true"
          className="ml-[2px] inline-block h-[13px] w-[7px] translate-y-[2px] bg-accent align-baseline"
          style={{ animation: 'caretBlink 1s steps(1) infinite' }}
        />
      </p>
    </div>
  );
}

/* ------------------------------------------------------------- checklist */

function Checklist() {
  return (
    <ul className={`flex h-full flex-col justify-center gap-[14px] py-[24px] ${PAD}`}>
      {copy.checklist.map((item, i) => (
        <li
          key={item.text}
          className="flex items-center gap-[12px]"
          style={{
            animation: 'editorSeg 3s ease-in-out infinite',
            animationDelay: `${i * 420}ms`,
          }}
        >
          <span
            aria-hidden="true"
            className={`flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-[4px] ${
              item.done ? 'bg-accent-soft' : 'border border-hair-strong bg-paper-2'
            }`}
          >
            {item.done ? (
              <svg viewBox="0 0 12 12" className="h-[9px] w-[9px]" fill="none" aria-hidden="true">
                <path
                  d="M1.6 6.2 4.4 9 10.4 3"
                  stroke="var(--accent)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </span>
          <span
            className={`ui truncate text-[14px] leading-none ${
              item.done ? 'text-ink' : 'text-ink-faint'
            }`}
          >
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ wave */

/** 46 bars at the reference pitch; the first 32 are accent, the rest grey. */
const WAVE = [
  22, 38, 30, 55, 42, 68, 50, 78, 60, 88, 70, 95, 62, 80, 52, 70, 44, 64, 36, 58, 48, 72, 58, 84,
  66, 92, 74, 86, 64, 76, 54, 66, 46, 58, 38, 50, 42, 56, 34, 48, 30, 42, 26, 38, 24, 34,
];
const WAVE_ACCENT = 32;

function Wave() {
  return (
    <div className={`flex h-full flex-col justify-end gap-[14px] pb-[24px] ${PAD}`}>
      <div aria-hidden="true" className="flex h-[50px] items-end gap-[3px]">
        {WAVE.map((h, i) => (
          <span
            key={i}
            className={`min-w-0 flex-1 rounded-[1px] ${
              i < WAVE_ACCENT ? 'bg-accent' : 'bg-ink-faint/40'
            }`}
            style={{
              height: `${h}%`,
              transformOrigin: 'bottom',
              animation: 'waveBar 1.4s ease-in-out infinite',
              animationDelay: `${(i % 14) * 70}ms`,
            }}
          />
        ))}
      </div>
      <Caption left={copy.wave.left} right={copy.wave.right} />
    </div>
  );
}

/* ---------------------------------------------------------------- editor */

type Seg = { w: number; tone: 'accent-deep' | 'accent' | 'grey' | 'ink' | 'empty' };

const TRACKS: Seg[][] = [
  [
    { w: 21, tone: 'accent-deep' },
    { w: 19, tone: 'accent' },
    { w: 30, tone: 'grey' },
    { w: 30, tone: 'accent' },
  ],
  [
    { w: 80, tone: 'ink' },
    { w: 11, tone: 'empty' },
    { w: 9, tone: 'ink' },
  ],
  [{ w: 100, tone: 'grey' }],
];

const TONE: Record<Seg['tone'], string> = {
  'accent-deep': 'bg-accent-deep',
  accent: 'bg-accent',
  grey: 'bg-ink-faint/60',
  ink: 'bg-ink/85',
  empty: 'bg-transparent',
};

function Editor() {
  return (
    <div className={`flex h-full flex-col justify-between pt-[28px] pb-[24px] ${PAD}`}>
      <div aria-hidden="true" className="relative flex flex-col gap-[8px]">
        {TRACKS.map((segs, t) => (
          <div key={t} className="flex h-[14px] overflow-hidden rounded-[3px]">
            {segs.map((s, i) => (
              <span
                key={i}
                className={`h-full ${TONE[s.tone]}`}
                style={{
                  width: `${s.w}%`,
                  animation: s.tone === 'empty' ? undefined : 'editorSeg 3s ease-in-out infinite',
                  animationDelay: `${(t * 3 + i) * 260}ms`,
                }}
              />
            ))}
          </div>
        ))}

        {/* Playhead sweeping across the tracks: a small caret seated at the top
            of track 1 with a short stem through the first two tracks — as in
            the reference, not a tall arrow floating above the card. */}
        <span
          className="absolute top-0 bottom-[22px] w-[2px] bg-accent"
          style={{ animation: 'editorScrub 5.5s cubic-bezier(0.65,0.05,0.36,1) infinite' }}
        >
          <span className="absolute -top-[4px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[4px] border-b-[5px] border-x-transparent border-b-accent" />
        </span>
      </div>

      <Caption
        left={copy.editor.left}
        right={
          <span className="inline-flex items-center gap-[6px]">
            <svg
              viewBox="0 0 14 14"
              aria-hidden="true"
              className="h-[12px] w-[12px] text-accent"
              fill="none"
              style={{ animation: 'scissorsBlink 5.5s ease-in-out infinite' }}
            >
              <circle cx="3" cy="11" r="2.1" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="11" cy="11" r="2.1" stroke="currentColor" strokeWidth="1.2" />
              <path
                d="M4.3 9.6 11 1.5M9.7 9.6 3 1.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            {copy.editor.right}
          </span>
        }
      />
    </div>
  );
}

/* ------------------------------------------------------------- keyframes */

const KF = [31, 50, 34, 58, 38, 99, 74, 56, 83, 46];

function Keyframes() {
  return (
    <div className={`flex h-full flex-col justify-end gap-[15px] pb-[24px] ${PAD}`}>
      <div aria-hidden="true" className="flex h-[60px] items-end gap-[7px]">
        {KF.map((h, i) => (
          <span
            key={i}
            className="min-w-0 flex-1 rounded-[4px] bg-accent"
            style={{
              height: `${h}%`,
              transformOrigin: 'bottom',
              animation: 'moBar 2.4s ease-in-out infinite',
              animationDelay: `${i * 140}ms`,
            }}
          />
        ))}
      </div>
      <Caption left={copy.keyframes.left} right={copy.keyframes.right} />
    </div>
  );
}

/* ---------------------------------------------------------------- thumbs */

const THUMBS = [
  {
    badge: 'A',
    winner: true,
    gradient: 'linear-gradient(160deg,#1b2a52 0%,#0a1024 55%,#070c1b 100%)',
  },
  {
    badge: 'B',
    winner: false,
    gradient: 'linear-gradient(160deg,#141f3c 0%,#0b1026 60%,#070c1c 100%)',
  },
];

function Thumbs() {
  return (
    <div className={`flex h-full flex-col justify-between pt-[28px] pb-[24px] ${PAD}`}>
      <div aria-hidden="true" className="flex items-stretch gap-[12px]">
        {THUMBS.map((t) => (
          <div
            key={t.badge}
            className={`relative h-[64px] min-w-0 flex-1 overflow-hidden rounded-[8px] ${
              t.winner ? 'ring-2 ring-accent' : ''
            }`}
            style={{
              background: t.gradient,
              boxShadow: t.winner ? '0 0 10px -1px rgba(47,107,255,0.38)' : undefined,
            }}
          >
            <span
              className={`ui absolute top-[7px] text-[11px] font-medium leading-none text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.65)] ${
                t.winner ? 'right-[9px]' : 'left-[9px]'
              }`}
            >
              {t.badge}
            </span>
          </div>
        ))}
      </div>
      <Caption left="1280×720" right={copy.thumbs.right} />
    </div>
  );
}

/* ----------------------------------------------------------------- entry */

const MAP: Record<Artifact, () => React.JSX.Element> = {
  caret: Caret,
  checklist: Checklist,
  wave: Wave,
  editor: Editor,
  keyframes: Keyframes,
  thumbs: Thumbs,
};

export function StepArtifact({
  artifact,
  className = '',
}: {
  artifact: Artifact;
  className?: string;
}) {
  const View = MAP[artifact];
  return (
    <div aria-hidden="true" className={`card h-[142px] overflow-hidden ${className}`}>
      <View />
    </div>
  );
}
