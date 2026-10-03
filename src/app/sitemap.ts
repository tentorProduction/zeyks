import type { MetadataRoute } from "next";
import { companies } from "@/lib/companies";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/work";
import { articles } from "@/lib/insights";

const base = "https://jeyks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const statics = ["", "/about", "/companies", "/services", "/work", "/insights", "/careers", "/contact", "/privacy", "/terms"];
  return [
    ...statics.map(path => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...services.map(service => ({ url: `${base}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...companies.map(company => ({ url: `${base}/companies/${company.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...caseStudies.map(study => ({ url: `${base}/work/${study.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...articles.map(article => ({ url: `${base}/insights/${article.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
