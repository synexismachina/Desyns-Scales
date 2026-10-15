import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import AnimatedGoldLines from "../components/AnimatedGoldLines";
import { faqs } from "../data/faq";
import "./FAQ.css";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="faq section">
      <AnimatedGoldLines variant="section" opacity={0.45} />

      <div className="container faq__inner">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions businesses usually ask."
          description="Straight answers on AI automation, workflow systems and how we work with companies across South Africa."
          align="center"
          size="md"
        />

        <div className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} delay={i * 0.05} className={`faq__item ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="faq__index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="faq__question-text">{item.question}</span>
                  {isOpen ? (
                    <Minus size={18} strokeWidth={1.5} className="faq__icon" />
                  ) : (
                    <Plus size={18} strokeWidth={1.5} className="faq__icon" />
                  )}
                </button>
                <div className="faq__answer">
                  <div className="faq__answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
