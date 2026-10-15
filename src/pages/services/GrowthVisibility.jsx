import ServiceLayout from "../../components/ServiceLayout";

const content = {
  slug: "growth-visibility",
  name: "Growth & Visibility",
  seo: {
    title: "SEO & Content Strategy South Africa | Desyns Scales",
    description:
      "Search engine optimisation, content strategy and website optimisation for South African businesses, focused on turning visibility into qualified enquiries.",
  },
  eyebrow: "Growth & Visibility",
  title: "Search visibility and content that compounds",
  intro:
    "Desyns Scales helps South African businesses get found by the right customers through search engine optimisation, content strategy and website optimisation, supported by content systems that keep publishing consistent.",
  problem: {
    title: "Being good at what you do isn't the same as being found",
    text: "A website that isn't structured for search, content published in bursts and a social presence that depends on someone remembering to post all limit visibility. Growth and visibility work turns that into a steady system.",
  },
  capabilities: [
    {
      id: "seo",
      icon: "Search",
      title: "Search engine optimisation",
      text: "Improving how your site is structured, written and presented so search engines understand it and show it for the right searches.",
      points: ["On-page SEO improvements", "Keyword and search-intent research", "Search visibility improvement"],
    },
    {
      id: "content-strategy",
      icon: "FileText",
      title: "Content strategy",
      text: "A plan for what to publish, for whom and why, tied to the services you want to grow.",
      points: ["Topic and audience planning", "Content structure that supports search", "Alignment with your offering"],
    },
    {
      id: "website-optimisation",
      icon: "Zap",
      title: "Website optimisation",
      text: "Improvements to the pages you already have: clearer messaging, better structure and a faster path to an enquiry.",
      points: ["Page structure and messaging", "Search-friendly page elements", "Clearer calls to action"],
    },
    {
      id: "content-systems",
      icon: "Workflow",
      title: "AI-assisted content systems",
      text: "Repeatable workflows that use AI to speed up drafting and planning while a person stays in charge of quality.",
      points: ["AI-assisted content workflows", "Social media content systems", "Consistent publishing routines"],
    },
    {
      id: "visibility",
      icon: "Eye",
      title: "Ongoing visibility improvement",
      text: "A regular review of what is working and what is not, with changes made over time.",
      points: ["Performance review", "Ongoing optimisation", "Recommendations for next steps"],
    },
  ],
  steps: [
    { title: "Audit current visibility", text: "We look at how the site and content perform in search today and where the gaps are." },
    { title: "Plan the strategy", text: "We decide which searches and topics matter and how to approach them." },
    { title: "Implement the changes", text: "We improve the site, structure the content and set up the publishing system." },
    { title: "Review and refine", text: "We review what is working, adjust, and recommend what to do next." },
  ],
  outcomes: [
    "Better search visibility over time",
    "A clearer, better-structured website",
    "Consistent content and social publishing",
    "A stronger path from visitor to enquiry",
    "A repeatable system instead of ad hoc posting",
  ],
  outcomesNote:
    "Search results depend on factors outside anyone's control, including competition and search engine changes. We don't guarantee rankings or specific numbers.",
  faqs: [
    {
      q: "Can you guarantee Google rankings?",
      a: "No. Rankings depend on factors outside anyone's control, including competition and search engine changes. We focus on the work that improves visibility and are open about progress.",
    },
    {
      q: "How long does SEO take to work?",
      a: "SEO is gradual. Timelines depend on your starting point, how competitive your market is and how much is changed. We agree what to review, and when, at the outset.",
    },
    {
      q: "Do you write the content too?",
      a: "Content strategy and AI-assisted content systems are part of the service. We confirm exactly what is included in your scope before starting.",
    },
    {
      q: "Does this work with your other services?",
      a: "Yes. Search visibility pairs with AI chat and lead automation, so the enquiries you attract are captured and followed up.",
    },
  ],
};

export default function GrowthVisibility() {
  return <ServiceLayout {...content} />;
}
