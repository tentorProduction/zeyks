import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { CTA } from "@/components/CTA/CTA";
import { Reveal } from "@/components/home/Reveal";
import { articles } from "@/lib/insights";
import styles from "./insights.module.css";

export const metadata: Metadata = {
  title: "Insights",
  description: "Ideas, technology and things we're building—writing from across the J-E-Y-K-S family.",
};

export default function InsightsPage() {
  const featured = articles.find(article => article.featured)!;
  const rest = articles.filter(article => !article.featured);
  const categories = [...new Set(articles.map(article => article.category))];
  return <>
    <section className={styles.hero}><Container>
      <Reveal>
        <Badge>Insights</Badge>
        <h1>Ideas, technology and things we&#39;re building.</h1>
        <p>Practical writing from across the J-E-Y-K-S family—on building products, businesses, and the systems behind them.</p>
        <div className={styles.categoryRow}>{categories.map(category => <span key={category}>{category}</span>)}</div>
      </Reveal>
    </Container></section>

    <section className={styles.magazine}><Container>
      <Reveal>
        <Link href={`/insights/${featured.slug}`} className={styles.feature}>
          <div className={styles.featureBody}>
            <p className={styles.meta}><span className={styles.category}>{featured.category}</span><span>{featured.date}</span><span>{featured.readingTime}</span></p>
            <h2>{featured.title}</h2>
            <p className={styles.description}>{featured.description}</p>
            <span className={styles.readLink}>Read Article <ArrowRight size={15}/></span>
          </div>
          <div className={styles.featureAside} aria-hidden="true">
            <span className={styles.asideMark}><img src="/brand/logo-mark-white.png" alt="" width="76" height="97" /></span>
          </div>
        </Link>
      </Reveal>

      <div className={styles.grid}>{rest.map((article, index) => (
        <Reveal key={article.slug} delay={index * 60}>
          <Link href={`/insights/${article.slug}`} className={styles.card}>
            <p className={styles.meta}><span className={styles.category}>{article.category}</span><span>{article.date}</span></p>
            <h3>{article.title}</h3>
            <p className={styles.description}>{article.description}</p>
            <span className={styles.readLink}>Read Article <ArrowUpRight size={15}/></span>
          </Link>
        </Reveal>
      ))}</div>
    </Container></section>

    <CTA title="Building something worth writing about?" body="We share what we learn as we build. If you'd like that building done for you, start there."/>
  </>;
}
