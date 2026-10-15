import ServiceLayout from "../../components/ServiceLayout";

const content = {
  slug: "digital-identity",
  name: "Digital Identity",
  seo: {
    title: "Brand Identity & Logo Design | Desyns Scales",
    description:
      "Brand identity, logo design, brand guidelines and visual systems for South African businesses, built to look consistent across every touchpoint.",
  },
  eyebrow: "Digital Identity",
  title: "A brand and presence built to be taken seriously",
  intro:
    "Desyns Scales develops logos, brand guidelines and visual systems that give a business a consistent, premium identity across its website, documents, social media and marketing, so every touchpoint looks like the same company.",
  problem: {
    title: "An inconsistent brand costs trust before the first conversation",
    text: "Mismatched logos, colours and fonts across a website, proposals and social media make a business look smaller and less reliable than it is. A defined identity system fixes that once, and makes every future piece of content faster to produce.",
  },
  capabilities: [
    {
      id: "logo-identity",
      icon: "Gem",
      title: "Logo & brand identity",
      text: "A distinctive logo and identity developed around the business, delivered in the versions and formats you need.",
      points: ["Digital logo design", "Primary and alternative logo versions", "PNG, SVG and PDF logo files"],
    },
    {
      id: "brand-guidelines",
      icon: "PenTool",
      title: "Brand guidelines",
      text: "A clear reference for how the brand looks, so anyone producing material for it stays consistent.",
      points: ["Colour system", "Typography", "Logo usage rules"],
    },
    {
      id: "stationery-corporate",
      icon: "FileText",
      title: "Stationery & corporate design",
      text: "Professional business documents and materials that carry the identity through.",
      points: ["Business stationery", "Corporate profile", "Merchandise design"],
    },
    {
      id: "social-marketing",
      icon: "Share2",
      title: "Social & marketing design",
      text: "Templates and collateral that make regular marketing consistent and quick to produce.",
      points: ["Social media templates", "Marketing collateral", "Marketing materials"],
    },
    {
      id: "visual-system",
      icon: "Layers",
      title: "Visual system",
      text: "A coherent set of visual rules covering colour, type, layout and imagery that works across channels.",
      points: ["Colour and typography system", "Layout and imagery direction", "Consistency across digital and print"],
    },
    {
      id: "website-direction",
      icon: "Compass",
      title: "Website visual direction",
      text: "Visual direction for your website so the online experience matches the rest of the brand.",
      points: ["Layout and styling direction", "Consistency with the brand system", "Alignment with your guidelines"],
    },
  ],
  steps: [
    { title: "Understand the business", text: "We learn what the business does, who it serves and how it wants to be seen." },
    { title: "Develop the direction", text: "We explore concepts and agree the visual direction before building it out." },
    { title: "Build the system", text: "We create the logo, colour system, typography and supporting materials." },
    { title: "Deliver and hand over", text: "You receive final files and guidelines, ready to use across every channel." },
  ],
  outcomes: [
    "A consistent, professional presence",
    "Faster, easier content and document creation",
    "Brand files ready for every channel",
    "A foundation for websites and marketing",
    "Customer-facing AI and messages that look and read like your brand",
  ],
  faqs: [
    {
      q: "What files will I receive?",
      a: "Logo files in PNG, SVG and PDF formats, including primary and alternative versions, along with your colour system and typography guidance.",
    },
    {
      q: "Can you design stationery and merchandise?",
      a: "Yes. Business stationery, corporate profile documents and merchandise design are part of our digital identity work.",
    },
    {
      q: "Can this connect to your automation services?",
      a: "Yes. A defined identity means the AI chat, emails and documents we build for you look and sound like your brand.",
    },
    {
      q: "How long does a brand identity project take?",
      a: "It depends on the scope and how quickly feedback is returned. We agree milestones for each stage up front.",
    },
  ],
};

export default function DigitalIdentity() {
  return <ServiceLayout {...content} />;
}
