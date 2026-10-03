export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  services: string[];
  status: string;
  featured?: boolean;
  visual: "book" | "reader" | "flow" | "brand" | "ops";
  intro: string[];
  challenge: string[];
  approach: { title: string; copy: string }[];
  design: string[];
  development: string[];
  technology: { name: string; note: string }[];
  shots: { caption: string; frame: 1 | 2 }[];
  results: { label: string; value: string }[];
  resultsNote: string;
  learnings: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "zeyks-book",
    number: "01",
    title: "Zeyks Book",
    category: "Business Software",
    summary: "Business and accounting software designed for modern businesses—built in-house and run as a live J-E-Y-K-S product.",
    services: ["Product Design", "UI/UX", "Development", "Technology"],
    status: "Live product",
    featured: true,
    visual: "book",
    intro: [
      "Zeyks Book is our own business and accounting software: a web application that handles the day-to-day financial work of running a company—invoices, expenses, records, and reports—without the weight of legacy accounting tools.",
      "Because we build it, sell it, and support it ourselves, every decision in the product is ours to get right. It is also our proof of standards: the same discipline we bring to client work, exercised on our own product.",
    ],
    challenge: [
      "Most small and mid-sized businesses run their finances on a choice between two bad options: spreadsheets that bend until they break, or accounting suites inherited from another era—heavy, slow, and designed around accountants rather than the people doing the work.",
      "The gap between them is where Zeyks Book lives: real accounting structure, delivered with the clarity and speed of a modern product.",
    ],
    approach: [
      { title: "Start from the daily tasks", copy: "The product is organized around what owners actually do—invoice a client, log an expense, check what's owed—not around an accountant's chart of accounts." },
      { title: "Make the numbers readable", copy: "Financial clarity is a design problem. Totals, statuses, and flows are given visual priority over configuration and chrome." },
      { title: "Ship the core first", copy: "Invoicing, expenses, and reporting came first and work completely. Everything else earns its place from there." },
    ],
    design: [
      "A calm interface where money in, money out, and what's outstanding are visible within seconds of opening the app",
      "Plain-language labels and workflows tested against real business tasks, not accounting jargon",
      "A component system shared across every screen, so new features feel native from day one",
      "Document views—invoices, quotes, records—designed to be read by clients, not just generated",
    ],
    development: [
      "Web-based architecture: nothing to install, current on every device",
      "A relational data model designed for auditability—every figure traceable to its entries",
      "Role-aware access so owners, staff, and accountants see the right slice of the business",
      "Incremental releases behind a stable core, so improvements arrive without disruption",
    ],
    technology: [
      { name: "Next.js & React", note: "Fast, maintainable front end for a data-heavy application." },
      { name: "TypeScript", note: "End-to-end type safety across interface, API, and business logic." },
      { name: "Relational data model", note: "Double-entry discipline underneath a simple surface." },
      { name: "Role-based access", note: "Permissions designed into the data layer, not bolted on." },
      { name: "Cloud infrastructure", note: "Hosting, backups, and monitoring operated by J-E-Y-K-S." },
      { name: "Automated testing", note: "Financial logic covered by tests before it ships." },
    ],
    shots: [
      { caption: "Dashboard — receivables, expenses, and cash position at a glance", frame: 1 },
      { caption: "Invoice detail — document view with totals and status", frame: 2 },
    ],
    results: [
      { label: "Status", value: "Live product" },
      { label: "Adoption", value: "—" },
      { label: "Time saved per close", value: "—" },
    ],
    resultsNote: "Public usage and efficiency metrics will be published here once verified. We don't publish numbers we can't stand behind.",
    learnings: [
      "Building your own product is the fastest way to sharpen the standards you sell to clients—every shortcut is a shortcut you take yourself.",
      "Accounting software is won on clarity, not feature count. The interface is the product.",
      "A stable core with slow, deliberate additions beats a broad feature set that never fully works.",
    ],
  },
  {
    slug: "independent-publishing",
    number: "02",
    title: "A better home for independent publishing",
    category: "Digital Product",
    summary: "A complete reading and publishing experience for original work—designed around readers, writers, and the words between them.",
    services: ["Product Design", "Development", "Technology"],
    status: "Case study in progress",
    visual: "reader",
    intro: [
      "A publishing platform for independent writing: a place to read, publish, and discover original work without the noise of a general-purpose feed.",
      "This case study is being prepared. The summary below describes the engagement; full detail will be published as it's completed.",
    ],
    challenge: [
      "Independent publishers rarely have the engineering resources of large platforms, but their readers expect the same speed, comfort, and clarity. The challenge was a product experience that feels substantial on modest infrastructure.",
    ],
    approach: [
      { title: "Typography leads", copy: "The reading experience was designed from the text outward—measure, rhythm, and hierarchy before decoration." },
      { title: "Publishing without friction", copy: "Writers go from draft to published work through the fewest possible steps." },
      { title: "Discovery with intent", copy: "Recommendation and browsing tuned for depth of reading, not time on site." },
    ],
    design: [
      "A reading view built on a strict typographic system",
      "Editor and publishing flows designed around a single uninterrupted writing session",
      "A library structure that keeps independent publications visually distinct from one another",
    ],
    development: [
      "Content-first data model with clean separation of editorial and presentation layers",
      "Performance-focused rendering for long-form reading on any connection",
      "Structured metadata to support discovery and syndication",
    ],
    technology: [
      { name: "Next.js", note: "Rendering strategy tuned for content pages." },
      { name: "Headless content model", note: "Editorial structure independent of presentation." },
      { name: "Responsive type system", note: "Consistent reading measure across devices." },
      { name: "Search & metadata", note: "Discovery built on structured, queryable content." },
    ],
    shots: [
      { caption: "Reader view — long-form article layout", frame: 1 },
      { caption: "Editorial detail — typography and pull-quote treatment", frame: 2 },
    ],
    results: [
      { label: "Status", value: "Case study in progress" },
      { label: "Reader retention", value: "—" },
      { label: "Publishing cadence", value: "—" },
    ],
    resultsNote: "Placeholder section — results will be published when verified with the client.",
    learnings: [
      "For reading products, performance and typography are the same feature: both decide whether people finish the page.",
      "Editorial tools succeed when they disappear—writers should notice the writing, not the software.",
    ],
  },
  {
    slug: "quiet-operations",
    number: "03",
    title: "Turning busywork into a quiet system",
    category: "AI & Automation",
    summary: "An integrated operations workflow that hands repetitive processing to software and returns attention to the work that needs people.",
    services: ["AI Integration", "Workflow Automation", "Development"],
    status: "Case study in progress",
    visual: "flow",
    intro: [
      "A growing service team was losing its week to process: intake, classification, routing, and follow-ups that consumed hours and produced no value beyond completion.",
      "This case study is being prepared. It will document the automation pipeline and how accuracy was measured before each step was trusted to run on its own.",
    ],
    challenge: [
      "The work wasn't hard—it was constant. Every item needed reading, sorting, and forwarding, and every exception needed a human. The cost was attention: the team's best hours spent on its lowest-value tasks.",
    ],
    approach: [
      { title: "Automate the measurable", copy: "Only steps with a clear accuracy baseline were automated, so success is a number, not an impression." },
      { title: "Keep humans at the edge cases", copy: "Low-confidence items route to a review queue instead of forcing the system to guess." },
      { title: "Improve in the open", copy: "Accuracy and volume are tracked continuously, so the system earns trust with evidence." },
    ],
    design: [
      "A review interface that shows exactly why the system made each decision",
      "Exception queues designed for fast, low-stress human decisions",
      "Status and audit views that make the pipeline legible to non-technical staff",
    ],
    development: [
      "Durable workflow orchestration for multi-step processes that can't lose state",
      "Integration layer connecting existing tools rather than replacing them",
      "Evaluation harness that measures accuracy against a labeled baseline",
    ],
    technology: [
      { name: "LLM integrations", note: "Classification and extraction with grounded prompts." },
      { name: "Workflow orchestration", note: "Observable, restartable pipelines." },
      { name: "Human-in-the-loop queues", note: "Review where confidence is low or stakes are high." },
      { name: "Evaluation metrics", note: "Accuracy, cost, and drift tracked over time." },
    ],
    shots: [
      { caption: "Pipeline view — intake through resolution", frame: 1 },
      { caption: "Run log — decisions, confidence, and hand-offs", frame: 2 },
    ],
    results: [
      { label: "Status", value: "Case study in progress" },
      { label: "Hours returned per week", value: "—" },
      { label: "Processing accuracy", value: "—" },
    ],
    resultsNote: "Placeholder section — figures will be published when verified with the client.",
    learnings: [
      "The hardest part of automation isn't the model—it's designing the moment a human takes over.",
      "Trust in automation is earned per step; measuring each one separately keeps failures small and fixable.",
    ],
  },
  {
    slug: "clarity-in-motion",
    number: "04",
    title: "Clarity for a company in motion",
    category: "Brand & Web",
    summary: "A new identity and digital home that made a complex B2B offer simple to understand in seconds.",
    services: ["Brand Identity", "Web Design", "Development"],
    status: "Case study in progress",
    visual: "brand",
    intro: [
      "A B2B company with a genuinely strong offer that took paragraphs to explain. The brand said one thing, the website another, and prospects needed a call to understand either.",
      "This case study is being prepared. It will cover the identity system, the message architecture, and the rebuild of the company's digital home.",
    ],
    challenge: [
      "The offer was complex because the business was successful—more services, more markets, more proof. The challenge was to add clarity without stripping out the substance that made the company credible.",
    ],
    approach: [
      { title: "One sentence first", copy: "Before any visual work, the offer was rewritten until it fit in a sentence everyone in the company agreed with." },
      { title: "Design the system, not the page", copy: "Identity, web, and sales materials built as one documented system." },
      { title: "Substance over decoration", copy: "Every visual decision had to make the offer clearer, not just newer." },
    ],
    design: [
      "Identity system: mark, type, color, and voice with practical guidelines",
      "Message architecture that sequences the offer from headline to detail",
      "Website designed around the questions prospects actually ask",
    ],
    development: [
      "Component-driven build so marketing can compose pages without design debt",
      "Content model structured for case studies, proof, and service pages",
      "Performance and accessibility treated as brand requirements",
    ],
    technology: [
      { name: "Next.js", note: "Marketing site foundation with fast page loads." },
      { name: "Structured CMS", note: "Proof and case studies maintained by the team." },
      { name: "Design tokens", note: "Identity decisions encoded once, reused everywhere." },
      { name: "Analytics-ready", note: "Measurement in place from launch day." },
    ],
    shots: [
      { caption: "Brand board — identity system overview", frame: 1 },
      { caption: "Application — collateral and layout system", frame: 2 },
    ],
    results: [
      { label: "Status", value: "Case study in progress" },
      { label: "Engagement lift", value: "—" },
      { label: "Sales cycle impact", value: "—" },
    ],
    resultsNote: "Placeholder section — results will be published when verified with the client.",
    learnings: [
      "Brand work is sequencing work: most 'confusing' companies aren't saying the wrong things, they're saying them in the wrong order.",
      "An identity earns its keep in the second month of daily use, not in the presentation.",
    ],
  },
  {
    slug: "distributed-operations",
    number: "05",
    title: "One view of a distributed operation",
    category: "Custom Software",
    summary: "A focused internal platform connecting data, workflows, and team decisions for a business spread across locations.",
    services: ["Software Development", "Systems Design", "Dashboards"],
    status: "Case study in progress",
    visual: "ops",
    intro: [
      "An operation running across multiple locations, with each site keeping its own version of the truth in its own spreadsheets. Decisions were made on stale copies of data.",
      "This case study is being prepared. It will document how the platform consolidated reporting and workflow without disrupting daily operations.",
    ],
    challenge: [
      "The business didn't lack data—it had too much of it, in too many places. Consolidating it meant matching the software to the company's real process, not forcing a generic tool on top.",
    ],
    approach: [
      { title: "One source of truth", copy: "Every figure in the platform traces to a single system of record." },
      { title: "Meet the process as it is", copy: "The first release mirrored how teams actually work; optimization came after adoption." },
      { title: "Roles before features", copy: "Permissions and views were designed per role before any feature list was written." },
    ],
    design: [
      "A dashboard that answers 'how are we doing today?' before any navigation",
      "Location-aware views so managers see their site and leadership sees the whole",
      "Data entry designed for speed on the floor, not comfort at a desk",
    ],
    development: [
      "Incremental rollout site by site, with parallel running until trust was established",
      "Integration with existing tools where they were working, replacement only where they weren't",
      "Audit trail across all operational changes",
    ],
    technology: [
      { name: "TypeScript", note: "Shared types across client, API, and reporting." },
      { name: "Relational schema", note: "Modeled on the real rules of the operation." },
      { name: "Role-based access", note: "Location- and role-scoped data visibility." },
      { name: "Reporting layer", note: "Live operational views with historical trends." },
    ],
    shots: [
      { caption: "Operations board — work in flight across locations", frame: 1 },
      { caption: "Reporting detail — trends and status", frame: 2 },
    ],
    results: [
      { label: "Status", value: "Case study in progress" },
      { label: "Reporting time", value: "—" },
      { label: "Decision latency", value: "—" },
    ],
    resultsNote: "Placeholder section — figures will be published when verified with the client.",
    learnings: [
      "Adoption is the real delivery milestone: software that isn't used is a liability, however good it looks.",
      "Roll out where the pain is loudest—early wins in one location fund the credibility for the rest.",
    ],
  },
];

export const findCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
