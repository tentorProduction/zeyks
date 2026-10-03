import { Bot, Braces, CloudCog, Film, Palette, Search, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  overview: string[];
  capabilities: { name: string; blurb: string }[];
  build: string[];
  process: { title: string; copy: string }[];
  technology: { name: string; note: string }[];
  work: string[];
  faq: { q: string; a: string }[];
  tone: "web" | "software" | "ai" | "brand" | "media" | "growth";
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Web Development",
    category: "Websites & Platforms",
    tagline: "Fast, durable websites and web platforms engineered around real business goals.",
    description: "High-performing websites, e-commerce, and custom web platforms built for long-term use.",
    overview: [
      "Your website is often the first real conversation with a customer. We design and build sites that start it well: fast to load, easy to navigate, and clear about what you offer and why it matters.",
      "From a focused corporate site to a full web platform, every build is engineered on a modern stack and measured against the outcomes it was created to produce.",
    ],
    capabilities: [
      { name: "Corporate websites", blurb: "A credible, well-structured digital home that communicates what you do and earns trust." },
      { name: "Landing pages", blurb: "Focused pages built around one message and one action, designed to convert." },
      { name: "E-commerce", blurb: "Online stores with clean product journeys, reliable checkout, and easy operations." },
      { name: "Web apps", blurb: "Interactive applications that run entirely in the browser, fast and responsive." },
      { name: "Web platforms", blurb: "Multi-role, multi-audience platforms that grow with your business." },
    ],
    build: [
      "Marketing sites with a CMS your team can actually run",
      "Campaign and product launch landing pages",
      "Online stores with catalog, cart, and checkout flows",
      "Customer portals and account areas",
      "Migrations, redesigns, and performance rescue projects",
    ],
    process: [
      { title: "Understand", copy: "We map your audience, goals, content, and the outcomes the site must produce." },
      { title: "Architect", copy: "Sitemap, page structures, integrations, and the technical foundation are decided before design starts." },
      { title: "Design & build", copy: "Design and development move together in short review loops, so nothing is a surprise at the end." },
      { title: "Launch & improve", copy: "We ship, measure real behavior, and keep refining speed, content, and conversion." },
    ],
    technology: [
      { name: "Next.js & React", note: "Modern, fast web foundation with clean long-term maintenance." },
      { name: "Headless CMS", note: "Structured content your team edits without a developer." },
      { name: "Performance budgets", note: "Core Web Vitals treated as requirements, not wishes." },
      { name: "Accessibility & SEO", note: "Semantic build, structured data, and search-ready foundations." },
      { name: "E-commerce tooling", note: "Proven storefront and payment stacks fitted to your catalog." },
      { name: "Analytics & testing", note: "Instrumented from day one so decisions come from data." },
    ],
    work: ["independent-publishing", "clarity-in-motion"],
    faq: [
      { q: "How long does a website project take?", a: "A focused marketing site typically runs 4–8 weeks. Larger platforms and e-commerce builds are scoped individually after discovery." },
      { q: "Can we edit the content ourselves?", a: "Yes. We build on structured CMS foundations so your team can update pages, posts, and products without touching code." },
      { q: "Do you redesign existing sites?", a: "Often. We audit what you have, keep what works, and rebuild what doesn't—with careful attention to SEO and existing traffic." },
      { q: "Who hosts and maintains the site?", a: "We set up hosting and hand over a documented, maintainable codebase, with ongoing care plans available if you want us to run it." },
    ],
    tone: "web",
    icon: Braces,
  },
  {
    slug: "software",
    number: "02",
    title: "Software & SaaS",
    category: "Custom Systems",
    tagline: "Purpose-built software that fits your workflows instead of forcing new ones.",
    description: "Custom software, dashboards, internal tools, and SaaS products that fit the way your business actually works.",
    overview: [
      "Off-the-shelf tools get you 80% of the way—then your team spends years working around the missing 20%. We build the software that closes that gap permanently.",
      "Whether it's an internal dashboard, an admin tool, or a SaaS product you sell, we ship working systems in increments, so value arrives long before the final release.",
    ],
    capabilities: [
      { name: "Custom software", blurb: "Applications designed around your exact process, data, and rules." },
      { name: "Dashboards", blurb: "One clear view of the numbers and status signals your team runs on." },
      { name: "Internal tools", blurb: "Focused utilities that remove repetitive work and manual spreadsheets." },
      { name: "SaaS", blurb: "Product-grade, multi-tenant applications you can sell or scale internally." },
      { name: "Business systems", blurb: "Systems of record that connect operations, data, and decisions." },
    ],
    build: [
      "Operational dashboards and reporting views",
      "Internal admin panels and back-office tools",
      "Multi-tenant SaaS products from MVP to scale",
      "Integrations between the tools you already use",
      "Systems that replace fragile spreadsheet workflows",
    ],
    process: [
      { title: "Diagnose", copy: "We sit with the people who use the process daily and map where time and data are lost." },
      { title: "Specify", copy: "Scope is written as concrete screens, roles, and rules—agreed before a line of code." },
      { title: "Build in loops", copy: "Working software arrives early and often, tested by the people who will use it." },
      { title: "Roll out & support", copy: "We handle migration, training, and iteration as the system becomes part of daily work." },
    ],
    technology: [
      { name: "TypeScript end to end", note: "One language across interface, API, and logic for fewer defects." },
      { name: "Relational data models", note: "Schemas designed for the real rules of your business." },
      { name: "Role-based access", note: "Permissions and audit trails designed in from the start." },
      { name: "API-first architecture", note: "Every capability usable by the UI, integrations, and future automation." },
      { name: "Cloud infrastructure", note: "Hosting, backups, and monitoring handled as part of the product." },
      { name: "Incremental delivery", note: "Shipped in usable increments, so value starts before version one is 'done'." },
    ],
    work: ["zeyks-book", "distributed-operations"],
    faq: [
      { q: "Custom software or an off-the-shelf tool?", a: "We start by honestly assessing existing products. Custom is worth it when your process is a differentiator or nothing fits without heavy compromise." },
      { q: "How do you price a software build?", a: "After a paid discovery we fix scope and price for the first release, then work in planned increments as the product proves itself." },
      { q: "Who owns the code?", a: "You do. Everything is delivered as a documented repository you fully control, with no lock-in to us." },
      { q: "Can you maintain it after launch?", a: "Yes—most clients keep a care retainer for monitoring, improvements, and new capability as the business grows." },
    ],
    tone: "software",
    icon: CloudCog,
  },
  {
    slug: "ai-automation",
    number: "03",
    title: "AI & Automation",
    category: "Intelligent Systems",
    tagline: "Practical AI and automation that improves speed, consistency, and decision-making.",
    description: "AI integrations, workflow automation, and intelligent systems that return hours to your team every week.",
    overview: [
      "Most teams don't need AI everywhere—they need it in three or four places where work is repetitive, high-volume, and rule-based. That's where automation pays for itself fastest.",
      "We design AI systems with guardrails: grounded in your data, monitored for accuracy, and built so people stay in control where it matters.",
    ],
    capabilities: [
      { name: "AI integrations", blurb: "Language, vision, and prediction capabilities added where they genuinely help." },
      { name: "Automation", blurb: "Repetitive multi-step work handed to reliable, monitored systems." },
      { name: "AI tools", blurb: "Focused assistants built around your data, tone, and rules." },
      { name: "Workflow automation", blurb: "End-to-end processes that move between people and systems without friction." },
      { name: "Intelligent business systems", blurb: "Operations that classify, route, summarize, and flag on their own." },
    ],
    build: [
      "Document intake, classification, and extraction flows",
      "AI assistants grounded in your own knowledge base",
      "Automated handoffs between CRM, email, and ops tools",
      "Quality-control and exception queues humans can trust",
      "Reporting that drafts itself and flags what matters",
    ],
    process: [
      { title: "Find the leverage", copy: "We audit workflows to find steps that are high-volume, rule-based, and costly to do by hand." },
      { title: "Prove it small", copy: "A narrow pilot with real data shows whether the approach works before wider rollout." },
      { title: "Automate with guardrails", copy: "Confidence thresholds, human review points, and monitoring are built in from the start." },
      { title: "Expand carefully", copy: "Each proven workflow becomes a template for the next, with accuracy measured continuously." },
    ],
    technology: [
      { name: "LLM integrations", note: "Modern language models wired into your product and processes." },
      { name: "Retrieval & grounding", note: "Answers based on your documents and data, not guesses." },
      { name: "Workflow orchestration", note: "Durable, observable pipelines for multi-step processes." },
      { name: "Human-in-the-loop design", note: "Review queues where confidence is low and stakes are high." },
      { name: "Evaluation & monitoring", note: "Accuracy, cost, and drift tracked with real metrics." },
      { name: "Data privacy by design", note: "Clear boundaries on what data leaves your systems and why." },
    ],
    work: ["quiet-operations", "distributed-operations"],
    faq: [
      { q: "Is AI reliable enough for real operations?", a: "With the right guardrails—grounding, confidence thresholds, and human review—the answer is yes. We automate only what we can measure." },
      { q: "Will our data be exposed?", a: "We design explicit data boundaries, use providers with strong data protections, and keep sensitive workloads inside your own infrastructure where needed." },
      { q: "How much does automation save?", a: "Every pilot starts with a baseline measurement, so savings in hours and error rates are demonstrated—not estimated." },
      { q: "Do we need our own data science team?", a: "No. We deliver working systems with documentation and can train your team or run everything as an ongoing service." },
    ],
    tone: "ai",
    icon: Bot,
  },
  {
    slug: "branding",
    number: "04",
    title: "Brand & Product Design",
    category: "Identity & Experience",
    tagline: "Distinct identities and product experiences that make complex offers feel simple.",
    description: "Brand identity, UI/UX, design systems, and product design that turn strategy into a recognizable presence.",
    overview: [
      "People decide in seconds whether they trust you. Brand and product design is how you win those seconds—consistently, across every touchpoint.",
      "We create identities and interfaces as systems, not one-off visuals: documented, reusable foundations that keep everything you ship looking and feeling intentional.",
    ],
    capabilities: [
      { name: "Brand identity", blurb: "Logo, type, color, and voice distilled into a system you can actually use." },
      { name: "UI/UX", blurb: "Interfaces shaped around real user journeys and measured against them." },
      { name: "Design systems", blurb: "Shared components and rules that keep every screen and asset consistent." },
      { name: "Product design", blurb: "End-to-end design of digital products, from flows to final detail." },
    ],
    build: [
      "Complete identity systems with practical guidelines",
      "Websites and product interfaces designed screen by screen",
      "Component libraries that engineering can build from",
      "Design refreshes for products that have outgrown their look",
      "Prototypes used to test ideas before committing code",
    ],
    process: [
      { title: "Position", copy: "We clarify who you serve, what you stand for, and what must be obvious in seconds." },
      { title: "Create", copy: "Identity and interface concepts are explored broadly, then refined with you in structured rounds." },
      { title: "Systemize", copy: "Approved work becomes documented, reusable systems—tokens, components, and guidelines." },
      { title: "Support delivery", copy: "We stay involved through build to make sure what ships matches what was designed." },
    ],
    technology: [
      { name: "Figma-native workflow", note: "Design, prototyping, and handoff in one shared source." },
      { name: "Design tokens", note: "Color, type, and spacing defined once and reused everywhere." },
      { name: "Component libraries", note: "Systems mapped directly to code components." },
      { name: "Journey mapping", note: "Flows built from real user tasks, not internal org charts." },
      { name: "Accessibility standards", note: "Contrast, focus, and interaction patterns done properly." },
      { name: "Brand guidelines", note: "Living documentation your whole team can follow." },
    ],
    work: ["clarity-in-motion", "zeyks-book"],
    faq: [
      { q: "Do you only design, or also build?", a: "Both. We can hand off production-ready systems to your engineers or build what we design ourselves." },
      { q: "We already have a logo—can you work with it?", a: "Yes. We audit what exists, keep what's valuable, and build the surrounding system your brand is probably missing." },
      { q: "What's included in a design system?", a: "Foundations, components, usage rules, and documentation—organized so designers and developers make the same product without meetings." },
      { q: "How do you handle feedback rounds?", a: "Structured rounds with clear decision points, so feedback shapes the work instead of delaying it." },
    ],
    tone: "brand",
    icon: Palette,
  },
  {
    slug: "media",
    number: "05",
    title: "Media",
    category: "Content & Campaigns",
    tagline: "Content and creative campaigns that keep your brand consistent on every channel.",
    description: "Social media, video, content, and creative campaigns that keep your brand consistent across every channel.",
    overview: [
      "Attention is earned in small, consistent deposits—a useful post, a clear video, a campaign with a real idea behind it. We build the system that makes those deposits on schedule.",
      "Strategy, production, and reporting run as one pipeline, so your presence stays active and your message stays coherent wherever your audience finds you.",
    ],
    capabilities: [
      { name: "Social media", blurb: "Channel strategy, calendars, and posts that sound like you on every platform." },
      { name: "Video", blurb: "Product, brand, and social video planned, shot, and edited end to end." },
      { name: "Content", blurb: "Articles, assets, and resources built on a real editorial strategy." },
      { name: "Creative campaigns", blurb: "Concept-led campaigns that give people a reason to pay attention." },
      { name: "Media management", blurb: "Publishing, community, and reporting handled as one operating system." },
    ],
    build: [
      "Monthly content systems with calendars and templates",
      "Launch and always-on social campaigns",
      "Short-form and product video pipelines",
      "Editorial programs that compound search and trust",
      "Clear reporting on what content actually performs",
    ],
    process: [
      { title: "Define the voice", copy: "We codify how your brand sounds and looks so content stays consistent without constant review." },
      { title: "Plan the calendar", copy: "Themes, formats, and channels are mapped a month or more ahead around business moments." },
      { title: "Produce", copy: "Batched production keeps quality high and cost predictable across channels." },
      { title: "Measure & adjust", copy: "We report on attention and outcomes monthly, then double down on what works." },
    ],
    technology: [
      { name: "Channel strategies", note: "Platform choices based on where your audience actually is." },
      { name: "Content pipelines", note: "Repeatable production from idea to published asset." },
      { name: "Asset systems", note: "Organized libraries so every asset is reusable and on-brand." },
      { name: "Performance reporting", note: "Simple dashboards that connect content to outcomes." },
      { name: "Community management", note: "Response playbooks that protect tone and speed." },
      { name: "Campaign analytics", note: "Attribution that shows which creative earns attention." },
    ],
    work: ["independent-publishing"],
    faq: [
      { q: "Which platforms should we be on?", a: "The ones your audience actually uses. We recommend a focused presence done well over a scattered one done occasionally." },
      { q: "Can you work with our in-house team?", a: "Yes—we can run strategy and creative while your team handles community, or plug in end to end." },
      { q: "How fast can we start publishing?", a: "Voice and calendar take 2–3 weeks to establish, then production runs on a steady monthly cadence." },
      { q: "How do you measure success?", a: "Agreed metrics per channel—reach, engagement quality, and downstream actions like signups and sales inquiries." },
    ],
    tone: "media",
    icon: Film,
  },
  {
    slug: "growth",
    number: "06",
    title: "Digital Growth",
    category: "Acquisition & Conversion",
    tagline: "Focused digital strategy that improves acquisition, conversion, and retention.",
    description: "SEO, digital marketing, conversion optimization, and analytics that compound into measurable growth.",
    overview: [
      "Growth rarely comes from one big lever—it comes from finding the current constraint and removing it, again and again, with evidence at every step.",
      "We combine clean measurement, search visibility, and structured experimentation into one program that compounds instead of restarting every quarter.",
    ],
    capabilities: [
      { name: "SEO", blurb: "Technical foundations and content strategy that earn durable search visibility." },
      { name: "Digital marketing", blurb: "Paid and owned channels run as one budget with one message." },
      { name: "Conversion optimization", blurb: "Structured testing that turns more of your existing traffic into customers." },
      { name: "Analytics", blurb: "Clean measurement so every decision starts from trusted numbers." },
    ],
    build: [
      "Technical SEO audits and fix programs",
      "Content strategies that target real search demand",
      "Landing page and funnel optimization programs",
      "Measurement setups that answer business questions",
      "Monthly growth reviews with clear next actions",
    ],
    process: [
      { title: "Measure", copy: "We fix analytics first—without trusted numbers, every other decision is a guess." },
      { title: "Find the constraint", copy: "Funnel analysis shows whether the bottleneck is traffic, conversion, or retention." },
      { title: "Run experiments", copy: "Prioritized changes ship on a cadence, each with a hypothesis and a measurable result." },
      { title: "Compound", copy: "Winners are kept, losers are documented, and the gains stack month over month." },
    ],
    technology: [
      { name: "Search console & audits", note: "Technical health tracked and maintained continuously." },
      { name: "Product & event analytics", note: "Funnels and cohorts that show real behavior." },
      { name: "A/B testing", note: "Controlled experiments instead of opinions." },
      { name: "Attribution models", note: "Honest views of which channels create value." },
      { name: "Dashboarding", note: "One live view of acquisition, conversion, and retention." },
      { name: "Experiment documentation", note: "A searchable history of every test and its outcome." },
    ],
    work: ["distributed-operations"],
    faq: [
      { q: "How long until SEO shows results?", a: "Technical fixes land quickly, but durable ranking gains typically build over 3–6 months. We set expectations per keyword cluster, not in general." },
      { q: "Do you run paid ads too?", a: "Yes—paid is most effective when it shares creative, landing pages, and measurement with the rest of the program." },
      { q: "What if our analytics is a mess?", a: "That's normal and it's usually step one. We rebuild measurement before spending on acquisition." },
      { q: "How do you report progress?", a: "A monthly review against agreed metrics, with every experiment documented and every next step prioritized." },
    ],
    tone: "growth",
    icon: Search,
  },
];

export const findService = (slug: string) => services.find((service) => service.slug === slug);
