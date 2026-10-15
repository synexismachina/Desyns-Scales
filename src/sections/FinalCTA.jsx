import { Mail } from "lucide-react";
import Reveal from "../components/Reveal";
import AnimatedGoldLines from "../components/AnimatedGoldLines";
import Button from "../components/Button";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section id="contact" className="finalcta section">
      <div className="finalcta__backdrop" aria-hidden="true">
        <AnimatedGoldLines variant="hero" viewBox="0 0 1440 900" opacity={0.7} />
      </div>

      <div className="container finalcta__inner">
        <Reveal as="p" className="eyebrow">
          Get Started
        </Reveal>

        <Reveal as="h2" delay={0.08} className="finalcta__title">
          Your business.
          <br />
          Better systems.
          <br />
          <em>Bigger possibility.</em>
        </Reveal>

        <Reveal as="p" delay={0.16} className="finalcta__desc">
          Desyns Scales is an automation agency in South Africa helping businesses
          move from inefficient, manual operations to structured, scalable digital
          systems — strategy first, technology second.
        </Reveal>

        <Reveal delay={0.24} className="finalcta__actions">
          <Button href="mailto:info@desynsscales.com">Get Started</Button>
          <Button href="mailto:info@desynsscales.com?subject=Book%20a%20Consultation" variant="outline" icon={false}>
            Book a Consultation
          </Button>
        </Reveal>

        <Reveal delay={0.32} className="finalcta__contact">
          <Mail size={15} />
          <a href="mailto:info@desynsscales.com">info@desynsscales.com</a>
        </Reveal>
      </div>
    </section>
  );
}
