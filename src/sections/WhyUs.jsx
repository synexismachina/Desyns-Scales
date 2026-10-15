import * as Icons from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { whyUs } from "../data/services";
import "./WhyUs.css";

export default function WhyUs() {
  return (
    <section className="whyus section">
      <div className="container whyus__inner">
        <div className="whyus__intro">
          <SectionHeading
            eyebrow="Why Desyns Scales"
            title="One partner, built around the business."
            description="Growth rarely comes from one more tool. It comes from an automation agency in South Africa that treats strategy, design, technology and AI automation as one connected system."
          />
        </div>

        <ul className="whyus__list">
          {whyUs.map((item, i) => {
            const Icon = Icons[item.icon] || Icons.Sparkle;
            return (
              <Reveal as="li" key={item.title} delay={i * 0.07} className="whyus__item">
                <span className="whyus__number">{String(i + 1).padStart(2, "0")}</span>
                <Icon size={22} strokeWidth={1.4} className="whyus__icon" />
                <h3 className="whyus__title">{item.title}</h3>
                <p className="whyus__desc">{item.description}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
