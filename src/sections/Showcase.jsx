import { FileText, GitBranch, Workflow, BrainCircuit, Rocket } from "lucide-react";
import Reveal from "../components/Reveal";
import AnimatedGoldLines from "../components/AnimatedGoldLines";
import "./Showcase.css";

const STAGES = [
  { icon: FileText, label: "Manual", desc: "Spreadsheets & inboxes" },
  { icon: GitBranch, label: "Fragmented", desc: "Disconnected tools" },
  { icon: Workflow, label: "Automated", desc: "Connected workflows" },
  { icon: BrainCircuit, label: "Intelligent", desc: "AI-assisted operations" },
  { icon: Rocket, label: "Scalable", desc: "Systems built to grow" },
];

export default function Showcase() {
  return (
    <section id="work" className="showcase section">
      <AnimatedGoldLines variant="section" opacity={0.45} />

      <div className="container showcase__inner">
        <Reveal as="p" className="eyebrow">
          What Changes
        </Reveal>
        <Reveal as="h2" delay={0.08} className="showcase__title">
          From manual
          <br />
          to <em>intelligent.</em>
        </Reveal>
        <Reveal as="p" delay={0.16} className="showcase__desc">
          Every engagement moves a business along the same line — away from
          manual, disconnected work and toward systems that run themselves
          and compound over time.
        </Reveal>

        <div className="showcase__stages">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            const isLast = i === STAGES.length - 1;
            return (
              <Reveal
                key={stage.label}
                delay={i * 0.1}
                className={`showcase__stage ${isLast ? "is-final" : ""}`}
              >
                <div className="showcase__stage-icon">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <p className="showcase__stage-label">{stage.label}</p>
                <p className="showcase__stage-desc">{stage.desc}</p>
                {!isLast && <span className="showcase__connector" aria-hidden="true" />}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
