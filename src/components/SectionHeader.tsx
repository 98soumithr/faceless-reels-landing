export function SectionHeader({
  eyebrow,
  heading,
  subtext,
}: {
  eyebrow: string;
  heading: string;
  subtext?: string;
}) {
  return (
    <div className="mx-auto max-w-[640px] text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-[30px] leading-[1.12] sm:text-[38px] md:text-[44px]">
        {heading}
      </h2>
      {subtext ? (
        <p className="mx-auto mt-4 max-w-[560px] text-[15.5px] leading-[1.6] text-fg-soft">
          {subtext}
        </p>
      ) : null}
    </div>
  );
}
