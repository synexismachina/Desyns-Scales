import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import "./ServiceCard.css";

export default function ServiceCard({ service, delay = 0 }) {
  const Icon = Icons[service.icon] || Icons.Sparkle;

  return (
    <Reveal delay={delay} className="service-card">
      <div className="service-card__top">
        <span className="service-card__index">{service.index}</span>
        <span className="service-card__icon">
          <Icon size={20} strokeWidth={1.5} />
        </span>
      </div>

      <p className="service-card__category">{service.category}</p>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>

      <ul className="service-card__points">
        {service.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <a href="#contact" className="service-card__link">
        Learn more <ArrowUpRight size={14} />
      </a>

      <div className="service-card__edge" aria-hidden="true" />
    </Reveal>
  );
}
