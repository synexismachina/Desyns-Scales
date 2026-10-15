import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import useSeo from "../hooks/useSeo";
import "../components/LegalLayout.css";

export default function Insights() {
  useSeo({
    title: "Insights | Desyns Scales",
    description: "Articles on AI automation, workflow automation and business systems from Desyns Scales.",
    path: "/insights",
    noindex: true,
  });

  return (
    <main className="legal">
      <div className="container legal__inner">
        <Link to="/" className="legal__back">
          <ArrowLeft size={14} /> Back to home
        </Link>
        <p className="eyebrow">Insights</p>
        <h1 className="legal__title">Insights are on the way</h1>
        <div className="legal__body">
          <p>
            We're preparing practical articles on AI automation, workflow automation and business systems.
            In the meantime, read <Link to="/about">about how we work</Link> or{" "}
            <Link to="/#contact">get in touch</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
