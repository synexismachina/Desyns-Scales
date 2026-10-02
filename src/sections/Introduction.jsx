import Reveal from "../components/Reveal";
import AnimatedGoldLines from "../components/AnimatedGoldLines";
import "./Introduction.css";

const PROBLEMS = [
  "Outdated systems",
  "Manual processes",
  "Weak digital presence",
  "Disconnected tools",
];

export default function Introduction() {
  return (
    <section id="about" className="intro section">
      <AnimatedGoldLines variant="section" opacity={0.5} />

      <div className="container intro__inner">
        <Reveal as="p" className="eyebrow">
          The Problem
        </Reveal>

        <Reveal as="h2" delay={0.08} className="intro__statement">
          Businesses don&apos;t necessarily need to work harder.
          <br />
          They need <em>better systems.</em>
        </Reveal>

        <div className="intro__grid">
          <Reveal delay={0.16} className="intro__body">
            <p>
              Most businesses aren&apos;t held back by effort. They&apos;re held back
              by outdated websites, weak branding, manual processes and
              customer-management systems that were never built to scale.
            </p>
            <p>
              Desyns Scales helps businesses identify inefficiencies, build
              better digital infrastructure, automate repetitive operations
              and create systems designed for growth — so effort finally
              compounds instead of disappearing into admin.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="intro__list" as="ul">
            {PROBLEMS.map((p) => (
              <li key={p}>
                <span />
                {p}
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
