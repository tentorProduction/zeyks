export const companies = [
  {
    slug: "zeyks-book", number: "01", code: "ZB", name: "Zeyks Book", category: "Business Software",
    description: "Business and accounting software designed for modern businesses.", action: "Visit Zeyks Book", tone: "book",
    mandate: "The flagship of the family. Zeyks Book is business and accounting software we design, build, sell, and support ourselves—invoices, expenses, records, and reports for businesses that want real financial structure without the weight of legacy accounting tools.",
    offers: ["Invoicing & quotes", "Expense tracking", "Records & reports", "Multi-role access"],
    relatedService: { href: "/services/software", label: "Software & SaaS" },
    caseStudy: { href: "/work/zeyks-book", label: "Read the Zeyks Book case study" },
  },
  {
    slug: "jeyks-digital", number: "02", code: "JD", name: "J-E-Y-K-S Digital", category: "Web & Digital",
    description: "Websites and digital experiences built for businesses.", action: "Explore", tone: "digital",
    mandate: "The build studio for the web. J-E-Y-K-S Digital designs and engineers corporate sites, e-commerce, web apps, and platforms—measured not by how they look in a portfolio, but by what they produce for the business they belong to.",
    offers: ["Corporate websites", "E-commerce", "Web applications", "Web platforms"],
    relatedService: { href: "/services/web-development", label: "Web Development" },
  },
  {
    slug: "jeyks-labs", number: "03", code: "JL", name: "J-E-Y-K-S Labs", category: "Technology & Products",
    description: "Software, SaaS products, tools and experimental technology.", action: "Explore", tone: "labs",
    mandate: "Where new ideas earn their keep. J-E-Y-K-S Labs runs applied experiments in AI, automation, and product form—prototypes that either become real products or teach the family something we use everywhere else.",
    offers: ["Product prototypes", "AI integrations", "Workflow automation", "Internal tools"],
    relatedService: { href: "/services/ai-automation", label: "AI & Automation" },
  },
  {
    slug: "jeyks-creative", number: "04", code: "JC", name: "J-E-Y-K-S Creative", category: "Design & Branding",
    description: "Brand identity, UI/UX and visual systems.", action: "Explore", tone: "creative",
    mandate: "The identity discipline. J-E-Y-K-S Creative builds brand systems, interfaces, and product design that make complex offers legible—and give companies a look and voice they can still grow into five years from now.",
    offers: ["Brand identity", "UI/UX design", "Design systems", "Product design"],
    relatedService: { href: "/services/branding", label: "Brand & Product Design" },
  },
  {
    slug: "jeyks-media", number: "05", code: "JM", name: "J-E-Y-K-S Media", category: "Media & Content",
    description: "Content, video, social media and digital media management.", action: "Explore", tone: "media",
    mandate: "The voice of the family. J-E-Y-K-S Media turns what a company does into attention it can keep—content, video, and campaigns planned, produced, and measured as one system rather than a stream of one-off posts.",
    offers: ["Content strategy", "Video production", "Social media", "Creative campaigns"],
    relatedService: { href: "/services/media", label: "Media" },
  },
] as const;
