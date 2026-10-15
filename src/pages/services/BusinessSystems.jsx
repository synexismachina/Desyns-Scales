import ServiceLayout from "../../components/ServiceLayout";

const content = {
  slug: "business-systems",
  name: "Business Systems",
  seo: {
    title: "Business Systems, CRM & Dashboards | Desyns Scales",
    description:
      "Digital infrastructure audits, CRM systems, business dashboards and process optimisation that replace disconnected tools with one connected structure.",
  },
  eyebrow: "Business Systems",
  title: "Infrastructure designed for how the business actually grows",
  intro:
    "Desyns Scales assesses how a business runs today, then designs and connects the systems it needs: CRM, dashboards, customer management and optimised processes, replacing fragmented tools with one connected structure.",
  problem: {
    title: "Fragmented tools hide what the business is actually doing",
    text: "When leads, customers and tasks live in separate inboxes, spreadsheets and apps, nobody has a reliable picture and everything depends on manual updates. A connected structure gives one view and a solid base for automation.",
  },
  capabilities: [
    {
      id: "infrastructure-audit",
      icon: "ScanSearch",
      title: "Digital infrastructure audit",
      text: "A structured review of your systems, workflows and technology to find gaps, overlap and opportunities.",
      points: ["Business assessment", "Digital infrastructure audit", "Workflow analysis", "Technology assessment"],
    },
    {
      id: "crm-systems",
      icon: "Users",
      title: "CRM & customer management",
      text: "A CRM set up around how you actually sell and serve, with lead management and pipeline stages that stay current.",
      points: ["CRM and lead management", "Customer-management systems", "Sales pipeline", "Automatic customer records"],
    },
    {
      id: "dashboards-reporting",
      icon: "LayoutDashboard",
      title: "Dashboards & reporting",
      text: "Live views of leads, activity and performance, so decisions don't wait for someone to build a report.",
      points: ["Business dashboards", "CRM dashboards", "Analytics and reporting"],
    },
    {
      id: "process-optimisation",
      icon: "Workflow",
      title: "Process optimisation",
      text: "Redesigning how work flows so steps are simpler, faster and ready for automation.",
      points: ["Workflow analysis", "Process optimisation", "Growth opportunity analysis"],
    },
    {
      id: "strategy-roadmap",
      icon: "Compass",
      title: "Digital strategy & roadmap",
      text: "A prioritised plan for what to fix, build and automate first.",
      points: ["Digital strategy", "Technology roadmap", "Implementation priorities"],
    },
    {
      id: "portals-internal-tools",
      icon: "Layers",
      title: "Client portals & internal tools",
      text: "Portals and internal tools that give clients and staff one place to see and manage information.",
      points: ["Client portals", "Internal systems", "Digital tools and dashboards"],
    },
  ],
  steps: [
    { title: "Assess", text: "We review your current systems, workflows and data to see how the business really runs." },
    { title: "Plan the roadmap", text: "We prioritise what to fix, connect and build, and in what order." },
    { title: "Build and connect", text: "We set up the systems and link them so information moves without manual re-entry." },
    { title: "Report and refine", text: "We monitor how the systems perform and keep improving them." },
  ],
  outcomes: [
    "One connected view of customers and leads",
    "Fewer manual handoffs between tools",
    "Clearer reporting and visibility",
    "A solid foundation for automation and AI",
    "Systems that can scale with the business",
  ],
  faqs: [
    {
      q: "What is a digital infrastructure audit?",
      a: "A structured review of your current tools, workflows and data flows, producing a clear picture of the gaps and a prioritised plan for improving them.",
    },
    {
      q: "Do I have to replace my existing tools?",
      a: "Not necessarily. Where existing tools work, we connect them. We recommend changes only where they will make a real difference.",
    },
    {
      q: "Can you build dashboards and client portals?",
      a: "Yes. Business dashboards, client portals and internal systems are part of our business systems work, scoped around what your team actually needs.",
    },
    {
      q: "How does this relate to AI automation?",
      a: "Connected systems give automation clean, reliable data to work with, so this work often comes first or alongside AI and workflow automation.",
    },
  ],
};

export default function BusinessSystems() {
  return <ServiceLayout {...content} />;
}
