import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import AnimatedGoldLines from "../components/AnimatedGoldLines";
import { approach } from "../data/services";
import "./HowWeWork.css";

export default function HowWeWork() {
  return (
    <section className="how section">
      <AnimatedGoldLines variant="section" opacity={0.4} />

      <div className="container how__inner">
        <SectionHeading
          eyebrow="How We Work"
          title="A single path from audit to scale."
          align="center"
          size="lg"
        />

        <div className="how__timeline">
          <div className="how__track" aria-hidden="true" />
          {approach.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.09} className="how__step">
              <span className="how__step-index">{step.index}</span>
              <span className="how__step-dot" aria-hidden="true" />
              <h3 className="how__step-title">{step.title}</h3>
              <p className="how__step-desc">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
