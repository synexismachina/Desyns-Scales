import { useMemo } from "react";
import { Link } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import AnimatedGoldLines from "./AnimatedGoldLines";
import Button from "./Button";
import useSeo from "../hooks/useSeo";
import { SITE_URL } from "../data/about";
import { serviceLinks } from "../data/serviceLinks";
import "./ServiceLayout.css";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});

/**
 * Shared layout for the individual service pages.
 * Each service page file passes in its own content; nothing is shared between them
 * except the design.
 */
export default function ServiceLayout({
  slug,
  name,
  seo,
  eyebrow,
  title,
  intro,
  problem,
  capabilities,
  steps,
  outcomes,
  outcomesNote,
  faqs,
  extra,
}) {
  const path = `/services/${slug}`;

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${SITE_URL}${path}#service`,
          name,
          serviceType: name,
          description: seo.description,
          url: `${SITE_URL}${path}`,
          provider: { "@type": "Organization", name: "Desyns Scales", url: SITE_URL },
          areaServed: { "@type": "Country", name: "South Africa" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
            { "@type": "ListItem", position: 3, name, item: `${SITE_URL}${path}` },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
    [path, name, seo, faqs]
  );

  useSeo({ title: seo.title, description: seo.description, path, jsonLd });

  const related = serviceLinks.filter((s) => s.slug !== slug);

  return (
    <MotionConfig reducedMotion="user">
      <main className="sv">
        {/* hero */}
        <section className="sv-hero" aria-labelledby="sv-title">
          <div className="sv-hero__bg" aria-hidden="true" />
          <div className="container sv-hero__inner">
            <div className="sv-hero__copy">
              <motion.nav aria-label="Breadcrumb" className="sv-crumbs" {...rise(0)}>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/#services">Services</Link>
                  </li>
                  <li aria-current="page">{name}</li>
                </ol>
              </motion.nav>

              <motion.p className="eyebrow" {...rise(0.08)}>
                {eyebrow}
              </motion.p>
              <motion.h1 id="sv-title" className="sv-hero__title" {...rise(0.16)}>
                {title}
              </motion.h1>
              <motion.p className="sv-hero__text" {...rise(0.26)}>
                {intro}
              </motion.p>
              <motion.div className="sv-hero__actions" {...rise(0.36)}>
                <Button href={`mailto:info@desynsscales.com?subject=${encodeURIComponent(name + " enquiry")}`}>
                  Book a consultation
                </Button>
                <a className="btn btn--outline" href="#included">
                  <span>See what's included</span>
                </a>
              </motion.div>
            </div>

            <motion.aside className="sv-glance" aria-label={`${name} at a glance`} {...rise(0.3)}>
              <p className="sv-glance__label">What's included</p>
              <ul>
                {capabilities.map((c) => (
                  <li key={c.id}>
                    <Link to={`${path}#${c.id}`}>
                      <Check size={14} aria-hidden="true" />
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </section>

        {/* problem */}
        <section className="sv-section sv-section--alt" aria-labelledby="sv-problem">
          <div className="container sv-problem">
            <motion.p className="eyebrow" {...reveal()}>
              Why it matters
            </motion.p>
            <motion.h2 id="sv-problem" className="sv-h2" {...reveal(0.08)}>
              {problem.title}
            </motion.h2>
            <motion.p className="sv-lead" {...reveal(0.16)}>
              {problem.text}
            </motion.p>
          </div>
        </section>

        {/* included */}
        <section id="included" className="sv-section" aria-labelledby="sv-included">
          <div className="container">
            <div className="sv-head">
              <motion.p className="eyebrow" {...reveal()}>
                What's included
              </motion.p>
              <motion.h2 id="sv-included" className="sv-h2" {...reveal(0.08)}>
                What we do within {name}
              </motion.h2>
            </div>

            <div className="sv-grid">
              {capabilities.map((c, i) => {
                const Icon = Icons[c.icon] || Icons.Sparkles;
                return (
                  <motion.article key={c.id} id={c.id} className="sv-card" {...reveal(i * 0.05)}>
                    <span className="sv-card__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                    <ul>
                      {c.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* process */}
        <section className="sv-section sv-section--alt" aria-labelledby="sv-process">
          <div className="container">
            <div className="sv-head">
              <motion.p className="eyebrow" {...reveal()}>
                How it works
              </motion.p>
              <motion.h2 id="sv-process" className="sv-h2" {...reveal(0.08)}>
                From first conversation to working system
              </motion.h2>
            </div>

            <ol className="sv-steps">
              {steps.map((s, i) => (
                <motion.li key={s.title} {...reveal(i * 0.07)}>
                  <span className="sv-steps__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* outcomes */}
        <section className="sv-section" aria-labelledby="sv-outcomes">
          <div className="container">
            <div className="sv-head">
              <motion.p className="eyebrow" {...reveal()}>
                Outcomes
              </motion.p>
              <motion.h2 id="sv-outcomes" className="sv-h2" {...reveal(0.08)}>
                What businesses can expect
              </motion.h2>
            </div>
            <ul className="sv-chips">
              {outcomes.map((o, i) => (
                <motion.li key={o} {...reveal(i * 0.04)}>
                  <Check size={15} strokeWidth={2} aria-hidden="true" />
                  {o}
                </motion.li>
              ))}
            </ul>
            <motion.p className="sv-note" {...reveal(0.1)}>
              {outcomesNote || "Results depend on the business, its processes and the implementation. We don't promise specific numbers."}
            </motion.p>
          </div>
        </section>

        {extra}

        {/* faq */}
        <section className="sv-section sv-section--alt" aria-labelledby="sv-faq">
          <div className="container sv-faq">
            <div className="sv-faq__intro">
              <motion.p className="eyebrow" {...reveal()}>
                FAQ
              </motion.p>
              <motion.h2 id="sv-faq" className="sv-h2" {...reveal(0.08)}>
                Common questions about {name}
              </motion.h2>
            </div>
            <div className="sv-faq__list">
              {faqs.map((f, i) => (
                <motion.details key={f.q} className="sv-faq__item" {...reveal(i * 0.04)}>
                  <summary>
                    <h3>{f.q}</h3>
                    <ChevronDown size={18} aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* related */}
        <section className="sv-section" aria-labelledby="sv-related">
          <div className="container">
            <div className="sv-head">
              <motion.p className="eyebrow" {...reveal()}>
                Explore more
              </motion.p>
              <motion.h2 id="sv-related" className="sv-h2" {...reveal(0.08)}>
                Other ways we help
              </motion.h2>
            </div>
            <div className="sv-related">
              {related.map((s, i) => (
                <motion.div key={s.slug} {...reveal(i * 0.06)}>
                  <Link to={s.path} className="sv-related__card">
                    <h3>{s.name}</h3>
                    <p>{s.blurb}</p>
                    <span>
                      View service <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* cta */}
        <section className="sv-cta" aria-labelledby="sv-cta">
          <AnimatedGoldLines variant="section" opacity={0.5} />
          <div className="container sv-cta__inner">
            <motion.h2 id="sv-cta" className="sv-cta__title" {...reveal()}>
              Talk to us about <em>{name}</em>
            </motion.h2>
            <motion.p className="sv-cta__text" {...reveal(0.08)}>
              Tell us what's slowing the business down. We'll help you work out what to fix first and what a sensible
              first step looks like.
            </motion.p>
            <motion.div className="sv-cta__actions" {...reveal(0.16)}>
              <Button href={`mailto:info@desynsscales.com?subject=${encodeURIComponent(name + " enquiry")}`}>
                Book a consultation
              </Button>
              <Link className="btn btn--outline" to="/#services">
                <span>All services</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
