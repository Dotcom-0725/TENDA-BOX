import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-start items-start";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignment} max-w-2xl`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-bold tracking-widest text-gold-soft">
        <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-gold" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base leading-relaxed text-white/60 sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}
