import { useMemo } from "react";
import { Link } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Compass,
  FileText,
  Globe2,
  Layers3,
  Palette,
  RefreshCw,
  Shapes,
  Sparkles,
  Target,
} from "lucide-react";
import AnimatedGoldLines from "../../components/AnimatedGoldLines";
import Button from "../../components/Button";
import useSeo from "../../hooks/useSeo";
import { SITE_URL } from "../../data/about";
import "./DigitalIdentity.css";

const SEO = {
  title: "Brand Identity & Logo Design in South Africa | Desyns Scales",
  description:
    "Brand strategy, logo design, brand guidelines and corporate identity for South African businesses. Based in Pretoria, Desyns Scales builds consistent brands.",
};

const mailto =
  "mailto:info@desynsscales.com?subject=Brand%20Identity%20Consultation";

const NAV = [
  ["why-identity", "Why identity matters"],
  ["capabilities", "What we create"],
  ["identity-system", "The brand system"],
  ["process", "Our process"],
  ["touchpoints", "Where it is used"],
  ["faq", "FAQs"],
];

const OFFERINGS = [
  {
    id: "brand-strategy",
    number: "01",
    icon: Target,
    title: "Brand strategy and positioning",
    intro:
      "Get clear on who the business serves, what it stands for and why a customer should remember it.",
    items: [
      "Brand discovery and direction",
      "Audience and value proposition clarity",
      "Market positioning and differentiation",
      "Key messages and tone-of-voice direction",
    ],
    tag: "Start with clarity",
  },
  {
    id: "logo-design",
    number: "02",
    icon: Shapes,
    title: "Logo design and visual identity",
    intro:
      "Create a recognisable visual mark and a supporting identity that can grow with the business.",
    items: [
      "Primary and alternative logo versions",
      "Colour palette and typography",
      "Supporting graphic elements",
      "Practical digital-ready logo files",
    ],
    tag: "Make it recognisable",
  },
  {
    id: "brand-guidelines",
    number: "03",
    icon: BadgeCheck,
    title: "Brand guidelines and consistency",
    intro:
      "Give everyone who works on the brand a clear reference for how it should look and sound.",
    items: [
      "Logo spacing and usage rules",
      "Colour and typography specifications",
      "Layout, imagery and graphic direction",
      "Examples of correct and incorrect usage",
    ],
    tag: "Keep it consistent",
  },
  {
    id: "corporate-identity",
    number: "04",
    icon: BriefcaseBusiness,
    title: "Corporate identity and business collateral",
    intro:
      "Carry the same professional identity through the documents and materials customers use to assess your business.",
    items: [
      "Business cards and stationery direction",
      "Corporate profiles and presentation layouts",
      "Proposal, quotation and document templates",
      "Email signature and document styling",
    ],
    tag: "Show up professionally",
  },
  {
    id: "digital-touchpoints",
    number: "05",
    icon: Globe2,
    title: "Digital and social media design",
    intro:
      "Make the website, social channels and marketing materials feel like one coherent business, not separate projects.",
    items: [
      "Social media templates and profile assets",
      "Website visual direction and page elements",
      "Digital campaign and marketing collateral",
      "Consistent imagery and content styling",
    ],
    tag: "Connect every touchpoint",
  },
  {
    id: "brand-refresh",
    number: "06",
    icon: RefreshCw,
    title: "Brand refresh and rebranding support",
    intro:
      "Refine an existing identity when the business has changed, the current brand feels dated or inconsistency has crept in.",
    items: [
      "Review of current brand assets",
      "Identify what should stay and what should change",
      "Updated visual direction and applications",
      "A practical rollout plan for key materials",
    ],
    tag: "Evolve with purpose",
  },
];

const STEPS = [
  {
    title: "Discover",
    text: "We discuss your business, audience, offer, goals and current materials before jumping into design.",
  },
  {
    title: "Define the direction",
    text: "We align on the positioning, personality and visual direction that the identity needs to communicate.",
  },
  {
    title: "Design the identity",
    text: "We develop the agreed logo and identity elements, then shape the practical rules that keep them consistent.",
  },
  {
    title: "Apply and hand over",
    text: "We prepare the agreed collateral and final files, with guidance on how to use the identity across your channels.",
  },
];

const FAQS = [
  [
    "What is included in a brand identity design project?",
    "Scope can include brand direction, logo design, colour and typography, brand guidelines, corporate identity materials and selected digital or social media assets. The deliverables are agreed before work starts, so you know which files and applications are included.",
  ],
  [
    "Do you only design logos?",
    "No. A logo is one part of an identity. We can help define the visual system around it, including colours, typography, brand rules and how the identity appears across documents, social media, marketing materials and website touchpoints.",
  ],
  [
    "Can you help with brand strategy and positioning?",
    "Yes. The project can begin with discovery and positioning: who you serve, what makes your offer different, how you want to be perceived and what the brand needs to communicate. The scope depends on the questions your business needs to answer before design begins.",
  ],
  [
    "Do you work with businesses in Pretoria and across South Africa?",
    "Desyns Scales is based in Pretoria, Gauteng, and works with businesses across South Africa. Initial discovery and feedback can be handled remotely, with the working approach agreed around the project and people involved.",
  ],
  [
    "How much does branding cost in South Africa?",
    "Branding costs depend on whether you need a focused logo and visual identity, a full brand system, strategy work, or several business applications. The number of concepts, deliverables, existing assets and review stages also affect scope. We recommend discussing your needs first so the quotation reflects the actual work rather than an unsuitable one-size-fits-all package.",
  ],
  [
    "Can you refresh an existing brand instead of starting again?",
    "Yes. A brand refresh can preserve the parts that customers already recognise while improving areas that no longer fit. We review the existing identity, identify gaps and agree what needs to change before creating updated assets or guidelines.",
  ],
  [
    "Will the identity work on both digital and print materials?",
    "That is one of the goals of a useful identity system. We plan the agreed assets for their intended uses and provide suitable file formats where included in the scope. Print suppliers, specialist production files or additional applications may need to be scoped separately.",
  ],
  [
    "How long does a brand identity project take?",
    "Timing depends on the agreed scope, the amount of existing strategy and material, stakeholder availability and how quickly feedback is consolidated. We set expectations and review points when the scope is confirmed rather than promising one timeline for every project.",
  ],
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.68, delay, ease: [0.16, 1, 0.3, 1] },
});

function SectionHead({ eyebrow, title, id, children }) {
  return (
    <div className="di-section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {children ? <div className="di-section-head__lead">{children}</div> : null}
    </div>
  );
}

function IdentitySpecimen() {
  return (
    <div
      className="di-specimen"
      role="img"
      aria-label="Illustrative brand identity board showing a monogram, colour palette, typography and example business applications"
    >
      <div className="di-specimen__topline">
        <span>IDENTITY SYSTEM / 01</span>
        <span>ILLUSTRATIVE</span>
      </div>
      <div className="di-specimen__brand">
        <div className="di-specimen__monogram">DS</div>
        <div>
          <span className="di-specimen__kicker">A considered identity</span>
          <strong>Built with purpose.</strong>
          <small>Distinctive. Consistent. Useful.</small>
        </div>
      </div>
      <div className="di-specimen__rule" />
      <div className="di-specimen__bottom">
        <div className="di-specimen__palette">
          <span>COLOUR SYSTEM</span>
          <div className="di-swatch-row">
            <i className="di-swatch di-swatch--ink" />
            <i className="di-swatch di-swatch--gold" />
            <i className="di-swatch di-swatch--paper" />
            <i className="di-swatch di-swatch--stone" />
          </div>
          <small>Palette with purpose</small>
        </div>
        <div className="di-specimen__type">
          <span>TYPE &amp; APPLICATION</span>
          <strong>Aa</strong>
          <small>Heading · Body · UI</small>
        </div>
      </div>
      <p className="di-specimen__disclaimer">Concept illustration, not a client project.</p>
    </div>
  );
}

function OfferCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.article
      className="di-offer-card"
      id={item.id}
      {...reveal(index * 0.045)}
    >
      <div className="di-offer-card__top">
        <span className="di-offer-card__number">{item.number}</span>
        <span className="di-offer-card__icon"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /></span>
      </div>
      <p className="di-offer-card__tag">{item.tag}</p>
      <h3>{item.title}</h3>
      <p className="di-offer-card__intro">{item.intro}</p>
      <ul>
        {item.items.map((entry) => <li key={entry}><Check size={14} aria-hidden="true" />{entry}</li>)}
      </ul>
    </motion.article>
  );
}

export default function DigitalIdentity() {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services/digital-identity#service`,
        name: "Brand Identity and Digital Identity Design",
        serviceType: [
          "Brand strategy",
          "Brand identity design",
          "Logo design",
          "Corporate identity design",
          "Brand guidelines",
          "Digital and social media design",
        ],
        description: SEO.description,
        url: `${SITE_URL}/services/digital-identity`,
        provider: { "@type": "Organization", name: "Desyns Scales", url: SITE_URL },
        areaServed: [
          { "@type": "City", name: "Pretoria" },
          { "@type": "AdministrativeArea", name: "Gauteng" },
          { "@type": "Country", name: "South Africa" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Brand identity and design services",
          itemListElement: OFFERINGS.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item.title, description: item.intro },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
          { "@type": "ListItem", position: 3, name: "Digital Identity", item: `${SITE_URL}/services/digital-identity` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  }), []);

  useSeo({ ...SEO, path: "/services/digital-identity", jsonLd });

  return (
    <MotionConfig reducedMotion="user">
      <main className="di">
        <section className="di-hero" aria-labelledby="di-title">
          <AnimatedGoldLines variant="hero" opacity={0.28} />
          <div className="container di-hero__grid">
            <div className="di-hero__copy">
              <nav className="di-crumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link><span>/</span><Link to="/#services">Services</Link><span>/</span><span aria-current="page">Digital Identity</span>
              </nav>
              <p className="eyebrow">Brand strategy · Visual identity · Digital design</p>
              <h1 id="di-title">Brand identity and logo design for <em>South African businesses.</em></h1>
              <p className="di-hero__intro">
                Build a recognisable brand with a clear point of view. Desyns Scales brings strategy, logo design,
                brand guidelines and practical digital assets together so your business looks and sounds consistent
                wherever customers meet it.
              </p>
              <div className="di-hero__actions">
                <Button href={mailto}>Discuss your brand identity</Button>
                <a className="btn btn--outline" href="#capabilities"><span>Explore what we create</span></a>
              </div>
              <div className="di-hero__facts" aria-label="Service details">
                <span><Check size={14} /> Strategy before decoration</span>
                <span><Check size={14} /> Designed for digital and print</span>
                <span><Check size={14} /> Based in Pretoria, serving South Africa</span>
              </div>
            </div>
            <IdentitySpecimen />
          </div>
        </section>

        <nav className="di-toc" aria-label="On this page">
          <div className="container di-toc__inner"><span>On this page</span><div>{NAV.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</div></div>
        </nav>

        <section id="why-identity" className="di-section di-section--alt" aria-labelledby="di-why-title">
          <div className="container di-two-col">
            <SectionHead eyebrow="A business asset, not just a logo" title="Your brand is experienced long before the sales conversation." id="di-why-title">
              <p>A prospective customer may meet your business through a Google result, a social post, a website, an email signature or a proposal. When these touchpoints feel unrelated, the business can appear less established than it really is.</p>
            </SectionHead>
            <div className="di-friction-list">
              {[
                ["01", "A logo without a system", "Every new post, document or campaign starts from scratch because there are no agreed rules to follow."],
                ["02", "A different brand on every channel", "Colours, fonts, tone and imagery drift between the website, social media and customer-facing documents."],
                ["03", "A message customers cannot repeat", "The business looks the part but has not clarified who it helps, what it offers or why it is different."],
                ["04", "An identity that has not kept up", "The company has grown, but its branding still reflects an earlier stage of the business."],
              ].map(([num, title, text], index) => <motion.article key={num} {...reveal(index * 0.055)}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></motion.article>)}
            </div>
          </div>
        </section>

        <section id="capabilities" className="di-section" aria-labelledby="di-capabilities-title">
          <div className="container">
            <SectionHead eyebrow="Branding and design services" title="Everything that helps your identity work in the real world." id="di-capabilities-title">
              <p>Choose a focused deliverable or build a wider identity system. We agree the objectives, applications and files required for your project before design work begins.</p>
            </SectionHead>
            <div className="di-offer-grid">{OFFERINGS.map((item, index) => <OfferCard key={item.id} item={item} index={index} />)}</div>
          </div>
        </section>

        <section id="identity-system" className="di-section di-section--alt" aria-labelledby="di-system-title">
          <div className="container di-system-grid">
            <div>
              <SectionHead eyebrow="What makes it a system" title="A complete identity gives every future asset a starting point." id="di-system-title">
                <p>Effective corporate identity design gives the business more than a collection of attractive files. It creates usable rules and components, so new material can be made without reinventing the brand each time.</p>
              </SectionHead>
              <p className="di-body-copy">A visual identity system may include the logo suite, colour values, type hierarchy, graphic motifs, imagery direction, document layouts and examples showing how these pieces work together. The exact system depends on your audience, channels and the level of support your team needs.</p>
            </div>
            <div className="di-check-panel">
              <p className="di-check-panel__eyebrow">Identity system checklist</p>
              {[
                "Primary and alternate logo versions",
                "Readable colours and typography rules",
                "Consistent layouts and visual elements",
                "Guidance for digital and print usage",
                "Templates for frequently used materials",
                "Clear handover and usage guidance",
              ].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p><Check size={15} aria-hidden="true" /></div>)}
              <p className="di-check-panel__note">Included deliverables are defined in the agreed project scope.</p>
            </div>
          </div>
        </section>

        <section id="process" className="di-section" aria-labelledby="di-process-title">
          <div className="container">
            <SectionHead eyebrow="How the work moves forward" title="A clear path from business understanding to brand assets." id="di-process-title">
              <p>Good design depends on a clear brief, useful feedback and decisions that are made in the right order. The process is adapted to the scope rather than forcing every business into the same package.</p>
            </SectionHead>
            <ol className="di-process">{STEPS.map((step, index) => <motion.li key={step.title} {...reveal(index * 0.05)}><span className="di-process__num">{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></motion.li>)}</ol>
            <div className="di-process-note"><Sparkles size={19} aria-hidden="true" /><p><strong>Good input improves the outcome.</strong> Bring your current logo and materials, examples you like or dislike, the audience you want to reach, and any deadlines or production requirements already known.</p></div>
          </div>
        </section>

        <section id="touchpoints" className="di-section di-section--alt" aria-labelledby="di-touchpoints-title">
          <div className="container">
            <SectionHead eyebrow="One brand, many moments" title="Make the experience recognisable wherever customers find you." id="di-touchpoints-title">
              <p>A practical digital identity should transfer across the channels your business actually uses. The purpose is consistency, not making every layout identical.</p>
            </SectionHead>
            <div className="di-touchpoints">
              {[
                [Palette, "Website and landing pages", "Visual direction that aligns navigation, page layouts, colour and typography with the wider identity."],
                [FileText, "Profiles, proposals and documents", "Business collateral that helps clients understand your offer and recognise the same organisation across formal materials."],
                [Globe2, "Social media and campaigns", "Reusable templates and creative direction that support a more coherent presence across your active channels."],
                [Layers3, "Email and customer communication", "A consistent look across email signatures and other approved customer-facing materials, including digital systems where scoped."],
              ].map(([Icon, title, text], index) => <motion.article key={title} {...reveal(index * 0.05)}><span><Icon size={19} strokeWidth={1.5} aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div></motion.article>)}
            </div>
          </div>
        </section>

        <section id="local-branding" className="di-section" aria-labelledby="di-local-title">
          <div className="container di-local-grid">
            <div>
              <SectionHead eyebrow="Pretoria · Gauteng · South Africa" title="Looking for branding companies near you? Start with fit, not just a logo." id="di-local-title">
                <p>When comparing branding companies near me, look for a partner that can explain the thinking behind the design, define what will be delivered and show how the identity will be used after launch.</p>
              </SectionHead>
            </div>
            <div className="di-local-copy">
              <p>Desyns Scales is based in Pretoria and works with businesses across South Africa. We approach brand identity as part of the wider digital presence: the visual system should support your website, marketing and customer communication rather than sit separately from them.</p>
              <ul>
                <li><Check size={15} />Clear scope and agreed deliverables</li>
                <li><Check size={15} />Brand decisions linked to your audience and business goals</li>
                <li><Check size={15} />Assets planned for the channels you use</li>
                <li><Check size={15} />A defined handover, not just a final image</li>
              </ul>
              <p className="di-local-copy__note">We do not claim to be the right fit for every brief. The initial conversation helps define whether the required strategy, design and rollout support match the work we offer.</p>
            </div>
          </div>
        </section>

        <section className="di-section di-section--alt" aria-labelledby="di-complement-title">
          <div className="container di-complement">
            <SectionHead eyebrow="The wider digital picture" title="Identity works best when the rest of the experience agrees." id="di-complement-title">
              <p>Branding helps customers recognise you. The pages they find, the systems they use and the responses they receive all contribute to the experience.</p>
            </SectionHead>
            <div className="di-complement__links">
              <Link to="/services/growth-visibility"><span><Compass size={19} /></span><div><h3>Growth &amp; Visibility</h3><p>Connect your brand presentation with search visibility, website content and discoverability.</p><b>Explore growth and visibility <ArrowRight size={14} /></b></div></Link>
              <Link to="/services/ai-automation"><span><Sparkles size={19} /></span><div><h3>AI &amp; Automation</h3><p>Bring a consistent brand voice into supported customer conversations and business workflows.</p><b>Explore AI and automation <ArrowRight size={14} /></b></div></Link>
            </div>
          </div>
        </section>

        <section id="faq" className="di-section" aria-labelledby="di-faq-title">
          <div className="container di-faq-grid">
            <SectionHead eyebrow="Frequently asked questions" title="Planning a brand identity project?" id="di-faq-title">
              <p>These are common questions to clarify before choosing a branding and design partner.</p>
            </SectionHead>
            <div className="di-faq-list">{FAQS.map(([question, answer], index) => <motion.details className="di-faq-item" key={question} {...reveal(index * 0.025)}><summary><span>{question}</span><b aria-hidden="true">+</b></summary><p>{answer}</p></motion.details>)}</div>
          </div>
        </section>

        <section className="di-final" aria-labelledby="di-final-title">
          <AnimatedGoldLines variant="section" opacity={0.42} />
          <div className="container di-final__inner">
            <p className="eyebrow">Make the brand match the business</p>
            <h2 id="di-final-title">Build an identity your business can <em>grow into.</em></h2>
            <p>Tell us where your brand is today, what needs to change and which touchpoints matter most. We can help define a practical next step for your brand identity.</p>
            <div className="di-final__actions"><Button href={mailto}>Book a brand identity consultation</Button><a href="mailto:info@desynsscales.com" className="di-email">info@desynsscales.com</a></div>
            <p className="di-final__related">Need customers to find the brand too? Explore <Link to="/services/growth-visibility">Growth &amp; Visibility</Link>.</p>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
