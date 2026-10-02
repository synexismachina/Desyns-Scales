import { motion } from "framer-motion";
import { Zap, TrendingUp, Layers3 } from "lucide-react";
import AnimatedGoldLines from "../components/AnimatedGoldLines";
import DashboardPreview from "../components/DashboardPreview";
import Button from "../components/Button";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const stats = [
  { icon: Zap, label: "Automate", sub: "Repetitive tasks" },
  { icon: TrendingUp, label: "Generate", sub: "More leads" },
  { icon: Layers3, label: "Scale", sub: "Your business" },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__mesh" />
        <AnimatedGoldLines variant="hero" viewBox="0 0 1440 900" opacity={0.9} />
        <div className="hero__vignette" />
      </div>

      <motion.div
        className="hero__inner container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero__copy">
          <motion.p className="eyebrow" variants={item}>
            AI Automation &amp; Growth
          </motion.p>

          <motion.h1 className="hero__title" variants={item}>
            Build smarter.
            <br />
            <span className="hero__title-accent">Grow faster.</span>
          </motion.h1>

          <motion.p className="hero__subtitle" variants={item}>
            Desyns Scales helps businesses transform their digital operations with
            intelligent systems, automation and strategic digital solutions —
            built around how the business actually grows.
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <Button href="#contact">Let&apos;s Build</Button>
            <Button href="#services" variant="outline" icon={false}>
              Explore Services
            </Button>
          </motion.div>

          <motion.div className="hero__stats" variants={item}>
            {stats.map(({ icon: Icon, label, sub }) => (
              <div className="hero__stat" key={label}>
                <Icon size={17} strokeWidth={1.6} />
                <div>
                  <p className="hero__stat-label">{label}</p>
                  <p className="hero__stat-sub">{sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="hero__visual" variants={item}>
          <DashboardPreview />
        </motion.div>
      </motion.div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        Scroll
      </div>
    </section>
  );
}
