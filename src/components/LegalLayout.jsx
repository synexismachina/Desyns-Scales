import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnimatedGoldLines from "./AnimatedGoldLines";
import useSeo from "../hooks/useSeo";
import "./LegalLayout.css";

export default function LegalLayout({ title, description, path, updated, children }) {
  useSeo({ title: `${title} | Desyns Scales`, description, path });

  return (
    <main className="legal">
      <AnimatedGoldLines variant="section" opacity={0.35} />
      <div className="container legal__inner">
        <Link to="/" className="legal__back">
          <ArrowLeft size={14} /> Back to home
        </Link>
        <p className="eyebrow">Legal</p>
        <h1 className="legal__title">{title}</h1>
        <p className="legal__updated">Last updated: {updated}</p>
        <div className="legal__body">{children}</div>
      </div>
    </main>
  );
}