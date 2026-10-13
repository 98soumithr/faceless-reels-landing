export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="grid h-[30px] w-[30px] place-items-center rounded-[7px] bg-blue"
      >
        <svg width="11" height="12" viewBox="0 0 11 12" fill="none">
          <path d="M10 5.13397c.6667.38490.6667 1.34712 0 1.73202L1.75 11.6212c-.66667.3849-1.5-.0962-1.5-.866V1.24472c0-.769804.83333-1.250954 1.5-.866007L10 5.13397Z" fill="#fff" />
        </svg>
      </span>
      <span className="font-display text-[17px] font-extrabold tracking-[-0.03em] text-fg">
        Faceless Reels
      </span>
    </span>
  );
}
