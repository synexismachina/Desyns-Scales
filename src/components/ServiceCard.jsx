import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { serviceLinks } from "../data/serviceLinks";
import "./ServiceCard.css";

const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();

export default function ServiceCard({ service, delay = 0 }) {
  const Icon = Icons[service.icon] || Icons.Sparkle;
  const page =
    serviceLinks.find((s) => norm(s.name) === norm(service.category)) ||
    serviceLinks.find((s) => s.slug === service.id);

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

      <Link to={page ? page.path : "/#contact"} className="service-card__link">
        Learn more <ArrowUpRight size={14} />
      </Link>

      <div className="service-card__edge" aria-hidden="true" />
    </Reveal>
  );
}
