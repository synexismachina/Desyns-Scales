import { Check } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { outcomes } from "../data/services";
import "./Outcomes.css";

export default function Outcomes() {
  return (
    <section className="outcomes section">
      <div className="container">
        <SectionHeading
          eyebrow="Outcomes"
          title="What businesses can expect."
          description="Results vary by business, industry and implementation — but the direction of travel is consistent across every engagement."
          align="center"
          size="md"
        />

        <div className="outcomes__grid">
          {outcomes.map((outcome, i) => (
            <Reveal as="div" key={outcome} delay={i * 0.05} className="outcomes__chip">
              <Check size={15} strokeWidth={2} />
              <span>{outcome}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
