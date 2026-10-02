import Reveal from "./Reveal";
import "./SectionHeading.css";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left", // left | center
  size = "md", // md | lg
}) {
  return (
    <div className={`section-heading section-heading--${align} section-heading--${size}`}>
      {eyebrow && (
        <Reveal as="p" className="eyebrow">
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" className="section-heading__title" delay={0.08}>
        {title}
      </Reveal>
      {description && (
        <Reveal as="p" className="section-heading__desc" delay={0.16}>
          {description}
        </Reveal>
      )}
    </div>
  );
}
