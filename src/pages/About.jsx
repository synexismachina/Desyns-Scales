import { useRef } from "react";
import { Link } from "react-router-dom";
import { MotionConfig, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Compass,
  LayoutDashboard,
  MessageCircle,
  Minimize2,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import AnimatedGoldLines from "../components/AnimatedGoldLines";
import Button from "../components/Button";
import useSeo from "../hooks/useSeo";
import {
  ABOUT_TITLE,
  ABOUT_DESCRIPTION,
  aboutSchema,
  heroLegend,
  problemLead,
  problems,
  problemCallout,
  storyFacts,
  philosophyIntro,
  philosophy,
  methodIntro,
  method,
  beliefs,
  capabilities,
  differences,
  environments,
  sectors,
  projects,
  proofPlaceholders,
} from "../data/about";
import "./About.css";

/* ---------- helpers ---------- */

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});

const ICONS = {
  Compass,
  Minimize2,
  ShieldCheck,
  RefreshCw,
  Users,
  BrainCircuit,
  LayoutDashboard,
  MessageCircle,
  Workflow,
  TrendingUp,
};

/** A card with a soft gold spotlight that follows the cursor. */
function SpotlightCard({ as: Tag = "div", className = "", children, ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag className={`spot ${className}`} onPointerMove={onMove} {...rest}>
      {children}
    </Tag>
  );
}

function Head({ id, eyebrow, title, children }) {
  return (
    <div className="ab-head">
      <motion.p className="eyebrow" {...reveal()}>
        {eyebrow}
      </motion.p>
      <motion.h2 id={id} className="ab-h2" {...reveal(0.08)}>
        {title}
      </motion.h2>
      {children && (
        <motion.div className="ab-lead" {...reveal(0.16)}>
          {children}
        </motion.div>
      )}
    </div>
  );
}

/* ---------- 01 hero ---------- */

const SOURCE_SYSTEMS = [
  { label: "DATA", y: 62 },
  { label: "APIs", y: 132 },
  { label: "SENSORS", y: 202 },
  { label: "APPS", y: 272 },
  { label: "PEOPLE", y: 342 },
];

const CONNECTIONS = [
  "M160 62 C232 62 254 94 334 94",
  "M160 132 C230 132 265 94 334 94",
  "M160 132 C236 132 264 214 334 214",
  "M160 202 C242 202 269 214 334 214",
  "M160 272 C234 272 270 214 334 214",
  "M160 272 C240 272 266 334 334 334",
  "M160 342 C230 342 260 334 334 334",
  "M366 94 C420 94 445 144 510 144",
  "M366 94 C425 94 445 270 510 286",
  "M366 214 C418 214 453 144 510 144",
  "M366 214 C425 214 448 286 510 286",
  "M366 334 C420 334 453 144 510 144",
  "M366 334 C430 334 454 286 510 286",
  "M540 144 C595 144 620 198 690 210",
  "M540 286 C596 286 620 222 690 210",
];

const LEGEND_DETAILS = [
  "Unify your data, people and platforms.",
  "Link what matters across your ecosystem.",
  "Turn complexity into action.",
  "Drive outcomes with real insight.",
];

function NetworkGraphic() {
  const ref = useRef(null);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5) * 2);
    ref.current.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => {
    ref.current.style.setProperty("--px", 0);
    ref.current.style.setProperty("--py", 0);
  };

  return (
    <div className="net" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
      <svg
        className="net__svg"
        viewBox="0 0 800 410"
        role="img"
        aria-label="Diagram of scattered business systems becoming connected, automated and finally intelligent"
      >
        <defs>
          <radialGradient id="netHub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--gold-light)" />
            <stop offset="65%" stopColor="var(--gold)" />
            <stop offset="100%" stopColor="var(--gold-deep)" />
          </radialGradient>
        </defs>

        <g className="net__layer">
          {CONNECTIONS.map((d, i) => (
            <g key={d}>
              <path className="net__base" d={d} />
              <path className="net__flow" d={d} style={{ animationDelay: `${-i * 0.42}s` }} />
            </g>
          ))}

          {SOURCE_SYSTEMS.map(({ label, y }) => (
            <g key={label} className="net__source">
              <rect className="net__source-card" x="18" y={y - 24} width="142" height="48" rx="6" />
              <rect className="net__source-icon" x="34" y={y - 11} width="20" height="22" rx="2" />
              <line x1="39" y1={y - 5} x2="49" y2={y - 5} />
              <line x1="39" y1={y} x2="49" y2={y} />
              <line x1="39" y1={y + 5} x2="47" y2={y + 5} />
              <text x="76" y={y + 4}>{label}</text>
              <circle className="net__source-port" cx="160" cy={y} r="7" />
            </g>
          ))}

          {[94, 214, 334].map((y) => (
            <g key={y} className="net__connection-node">
              <circle cx="350" cy={y} r="18" />
              <circle cx="350" cy={y} r="10" />
            </g>
          ))}

          {[144, 286].map((y) => (
            <rect
              key={y}
              className="net__auto"
              x="497"
              y={y - 13}
              width="26"
              height="26"
              rx="3"
              transform={`rotate(45 510 ${y})`}
            />
          ))}

          <circle className="net__ring" cx="710" cy="210" r="46" />
          <circle className="net__ring net__ring--2" cx="710" cy="210" r="66" />
          <circle className="net__hub" cx="710" cy="210" r="34" fill="url(#netHub)" />
        </g>
      </svg>

      <ol className="net__legend">
        {heroLegend.map((label, i) => (
          <li key={label}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{label}</strong>
            <small>{LEGEND_DETAILS[i]}</small>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Hero() {
  return (
    <section className="ab-hero" aria-labelledby="about-title">
      <div className="ab-hero__bg" aria-hidden="true">
        <div className="ab-hero__mesh" />
      </div>

      <div className="container ab-hero__inner">
        <div className="ab-hero__copy">
          <motion.p className="eyebrow" {...rise(0)}>
            About Desyns Scales
          </motion.p>

          <motion.h1 id="about-title" className="ab-hero__title" {...rise(0.08)}>
            We build intelligent systems that make <em>businesses work better.</em>
          </motion.h1>

          <motion.p className="ab-hero__text" {...rise(0.18)}>
            Desyns Scales is an AI automation and digital systems company based in South Africa. We help
            businesses run better by connecting disconnected tools, automating repetitive work and putting
            AI where it genuinely earns its place.
          </motion.p>

          <motion.div className="ab-hero__actions" {...rise(0.28)}>
            <Link className="btn btn--solid" to="/about#how-we-work">
              <span>See how we work</span>
              <ArrowRight size={16} strokeWidth={2} className="btn__icon" aria-hidden="true" />
            </Link>
            <Link className="btn btn--outline" to="/#contact">
              <span>Start a conversation</span>
            </Link>
          </motion.div>
        </div>

        <motion.div className="ab-hero__visual" {...rise(0.3)}>
          <NetworkGraphic />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 02 problem ---------- */

function Problem() {
  return (
    <section id="problem" className="ab-section ab-section--alt" aria-labelledby="problem-title">
      <div className="container">
        <Head
          id="problem-title"
          eyebrow="The problem"
          title={
            <>
              Businesses don't need more technology. <em>They need better systems.</em>
            </>
          }
        >
          <p>{problemLead}</p>
        </Head>

        <div className="ab-grid2">
          {problems.map((p, i) => (
            <motion.div key={p.title} className="ab-cell" {...reveal(i * 0.07)}>
              <SpotlightCard className="ab-card">
                <span className="ab-card__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.p className="ab-callout" {...reveal(0.1)}>
          {problemCallout}
        </motion.p>
      </div>
    </section>
  );
}

/* ---------- 03 story ---------- */

function Story() {
  return (
    <section id="story" className="ab-section" aria-labelledby="story-title">
      <div className="container ab-split">
        <div className="ab-split__side">
          <Head id="story-title" eyebrow="Our story" title="Why we built Desyns" />
          <motion.ul className="ab-facts" {...reveal(0.2)}>
            {storyFacts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </motion.ul>
        </div>

        <div className="ab-prose">
          <motion.p {...reveal()}>
            Desyns Scales was built on a simple belief: technology should simplify how a business runs, not
            add another layer of complexity to it.
          </motion.p>
          <motion.p {...reveal(0.06)}>
            We saw a gap between what modern AI and automation can do and what most businesses actually get
            from it. Tools are sold as products, demonstrations look impressive, and the harder part —
            fitting a system into the way a team really works — is often left to the customer.
          </motion.p>
          <motion.p {...reveal(0.06)}>
            So that's the part we focus on. We start with how a business actually operates, find the
            processes that shouldn't need a person, and build the{" "}
            <Link className="ab-link" to="/#services">
              AI agents, workflow automation and integrations
            </Link>{" "}
            that take them over. Then we stay involved, so the system keeps improving as the business
            changes.
          </motion.p>

          <motion.blockquote className="ab-quote" {...reveal(0.06)}>
            Technology is only valuable when it improves how a business actually operates.
          </motion.blockquote>

          <motion.p {...reveal(0.06)}>
            AI and automation matter because they change what a small team can handle. Done properly, they
            give South African businesses operating capacity that once required much larger teams, without
            losing the human judgement customers still value.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 philosophy ---------- */

function Philosophy() {
  return (
    <section id="philosophy" className="ab-section ab-section--alt" aria-labelledby="philosophy-title">
      <div className="container ab-split">
        <div className="ab-split__side ab-sticky">
          <Head
            id="philosophy-title"
            eyebrow="Our philosophy"
            title="Technology should work around the business — not the other way around."
          >
            <p>{philosophyIntro}</p>
          </Head>
        </div>

        <ol className="ab-steps">
          {philosophy.map((s, i) => (
            <motion.li key={s.title} className="ab-steps__item" {...reveal(i * 0.04)}>
              <span className="ab-steps__num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- 05 method ---------- */

function MethodStage({ step, index, progress }) {
  const start = index / method.length;
  const fill = useTransform(progress, [start - 0.04, start + 0.06], [0, 1]);

  return (
    <li className="ab-method__stage">
      <span className="ab-method__node" aria-hidden="true">
        <motion.span className="ab-method__node-fill" style={{ opacity: fill }} />
      </span>
      <SpotlightCard className="ab-method__card">
        <span className="ab-method__num">{step.index}</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </SpotlightCard>
    </li>
  );
}

function Method() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });

  return (
    <section id="how-we-work" className="ab-section" aria-labelledby="method-title">
      <div className="container">
        <Head id="method-title" eyebrow="How we work" title="A method for turning workflows into working systems">
          <p>{methodIntro}</p>
        </Head>

        <div className="ab-method" ref={ref}>
          <div className="ab-method__track" aria-hidden="true">
            <motion.span className="ab-method__bar ab-method__bar--h" style={{ scaleX: scrollYProgress }} />
            <motion.span className="ab-method__bar ab-method__bar--v" style={{ scaleY: scrollYProgress }} />
          </div>
          <ol className="ab-method__list">
            {method.map((step, i) => (
              <MethodStage key={step.title} step={step} index={i} progress={scrollYProgress} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- 06 beliefs ---------- */

function Beliefs() {
  return (
    <section id="beliefs" className="ab-section ab-section--alt" aria-labelledby="beliefs-title">
      <div className="container">
        <Head id="beliefs-title" eyebrow="What we believe" title="Five beliefs that shape every system we build" />
        <div className="ab-grid6">
          {beliefs.map((b, i) => {
            const Icon = ICONS[b.icon];
            return (
              <motion.div key={b.title} className="ab-cell" {...reveal(i * 0.06)}>
                <SpotlightCard className="ab-card">
                  <span className="ab-card__icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 07 capabilities ---------- */

function Capabilities() {
  return (
    <section id="capabilities" className="ab-section" aria-labelledby="capabilities-title">
      <div className="container">
        <Head id="capabilities-title" eyebrow="What Desyns does" title="The systems we build, grouped by the job they do">
          <p>
            Open any category to see what it covers. For the individual services and how they fit together,
            see our{" "}
            <Link className="ab-link" to="/#services">
              automation services
            </Link>
            .
          </p>
        </Head>

        <div className="ab-grid6 ab-grid6--start">
          {capabilities.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <motion.div key={c.title} className="ab-cell" {...reveal(i * 0.06)}>
                <SpotlightCard as="details" className="ab-cap">
                  <summary>
                    <span className="ab-cap__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <h3 className="ab-cap__title">{c.title}</h3>
                    <ChevronDown className="ab-cap__chev" size={18} aria-hidden="true" />
                    <span className="ab-cap__summary">{c.summary}</span>
                  </summary>
                  <ul className="ab-cap__more">
                    {c.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 08 difference ---------- */

function Difference() {
  return (
    <section id="difference" className="ab-section ab-section--alt" aria-labelledby="difference-title">
      <div className="container">
        <Head
          id="difference-title"
          eyebrow="What makes us different"
          title={
            <>
              Many projects start with the technology. <em>We start with the business.</em>
            </>
          }
        >
          <p>The difference shows up in what actually gets delivered.</p>
        </Head>

        <div className="ab-diff__head" aria-hidden="true">
          <span>The typical approach</span>
          <span />
          <span>The Desyns approach</span>
        </div>

        <ul className="ab-diff">
          {differences.map((d, i) => (
            <motion.li key={d.oldTitle} className="ab-diff__row" {...reveal(i * 0.05)}>
              <div className="ab-diff__old">
                <span className="visually-hidden">Typical approach: </span>
                <strong>{d.oldTitle}</strong>
                <p>{d.oldText}</p>
              </div>
              <span className="ab-diff__arrow" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
              <div className="ab-diff__new">
                <span className="visually-hidden">Desyns approach: </span>
                <strong>{d.newTitle}</strong>
                <p>{d.newText}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 09 who we work with ---------- */

function Industries() {
  return (
    <section id="industries" className="ab-section" aria-labelledby="industries-title">
      <div className="container">
        <Head
          id="industries-title"
          eyebrow="Who we work with"
          title="Built for businesses that want to operate better"
        >
          <p>
            Desyns works with South African businesses, from growing SMEs to established B2B companies, that
            carry work a well-designed system could carry instead. The sector matters less than the
            operating conditions:
          </p>
        </Head>

        <div className="ab-ind">
          <ul className="ab-ind__env">
            {environments.map((e, i) => (
              <motion.li key={e.title} {...reveal(i * 0.06)}>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </motion.li>
            ))}
          </ul>

          <motion.div className="ab-ind__sectors" {...reveal(0.1)}>
            <p className="ab-ind__label">Sectors we commonly see these in</p>
            <ul>
              {sectors.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 10 proof ---------- */

function Proof() {
  return (
    <section id="proof" className="ab-section ab-section--alt" aria-labelledby="proof-title">
      <div className="container">
        <Head id="proof-title" eyebrow="Trust & proof" title="What we've built">
          <p>
            We'd rather show real systems than make claims about them. This is where case studies, system
            walkthroughs and client outcomes will appear as engagements are completed and clients agree to
            share them. In the meantime, you can{" "}
            <Link className="ab-link" to="/#contact">
              talk to us about relevant examples
            </Link>
            , or follow our{" "}
            <Link className="ab-link" to="/insights">
              insights
            </Link>
            .
          </p>
        </Head>

        {projects.length > 0 ? (
          <div className="ab-grid3">
            {projects.map((p, i) => (
              <motion.div key={p.title} className="ab-cell" {...reveal(i * 0.06)}>
                <SpotlightCard className="ab-card">
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  {p.outcome && <p className="ab-card__outcome">{p.outcome}</p>}
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="ab-grid3">
            {proofPlaceholders.map((p, i) => (
              <motion.div key={p.label} className="ab-cell" {...reveal(i * 0.06)}>
                <div className="ab-ph">
                  <span className="ab-ph__tag">In preparation</span>
                  <h3>{p.label}</h3>
                  <p>{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- 11 vision ---------- */

function Vision() {
  return (
    <section id="vision" className="ab-section ab-vision" aria-labelledby="vision-title">
      <AnimatedGoldLines variant="section" opacity={0.5} />
      <div className="container ab-vision__inner">
        <motion.p className="eyebrow" {...reveal()}>
          Our vision
        </motion.p>
        <motion.h2 id="vision-title" className="ab-h2 ab-vision__title" {...reveal(0.08)}>
          Where we're going
        </motion.h2>
        <motion.p className="ab-vision__big" {...reveal(0.16)}>
          A future where a business of any size can run on <em>intelligent systems</em>: where repetitive work
          is handled automatically, fragmented processes are connected, and people spend their time on the
          judgement, creativity and relationships that grow a business.
        </motion.p>
        <motion.p className="ab-lead ab-vision__small" {...reveal(0.24)}>
          For South African businesses, that means closing the operational gap between ambition and capacity.
          We want automation to be something every well-run business can use — practical, understandable and
          built to last — not a luxury reserved for companies with large technology teams.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------- 12 final CTA ---------- */

function FinalCta() {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="start"
      className="ab-cta"
      aria-labelledby="cta-title"
      onPointerMove={onMove}
    >
      <AnimatedGoldLines variant="hero" viewBox="0 0 1440 900" opacity={0.6} />
      <div className="container ab-cta__inner">
        <motion.p className="eyebrow" {...reveal()}>
          Start here
        </motion.p>
        <motion.h2 id="cta-title" className="ab-cta__title" {...reveal(0.08)}>
          Let's find what your business <em>shouldn't be doing manually.</em>
        </motion.h2>
        <motion.p className="ab-cta__text" {...reveal(0.16)}>
          Tell us where your team spends its time on repetitive tasks, slow follow-ups or disconnected tools.
          We'll help you work out which processes could be automated or improved, and what a sensible first
          step looks like.
        </motion.p>
        <motion.div className="ab-cta__actions" {...reveal(0.24)}>
          <Button href="mailto:info@desynsscales.com?subject=Automation%20conversation">
            Start a conversation
          </Button>
          <Link className="btn btn--outline" to="/#services">
            <span>Explore our services</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- page ---------- */

export default function About() {
  useSeo({
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    path: "/about",
    jsonLd: aboutSchema,
  });

  return (
    <MotionConfig reducedMotion="user">
      <main className="about">
        <Hero />
        <Problem />
        <Story />
        <Philosophy />
        <Method />
        <Beliefs />
        <Capabilities />
        <Difference />
        <Industries />
        <Proof />
        <Vision />
        <FinalCta />
      </main>
    </MotionConfig>
  );
}
