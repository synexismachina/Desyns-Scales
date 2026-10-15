import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Four disciplines. One connected system."
          description="Rather than a single service, Desyns Scales builds AI solutions for businesses across the disciplines a growing company actually needs — grouped so automation, brand and systems don't operate in isolation."
        />

        <div className="services__grid">
          {services.map((service, i) => (
            <ServiceCard service={service} key={service.id} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
