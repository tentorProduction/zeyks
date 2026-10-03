import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { CTA } from "@/components/CTA/CTA";
import { Reveal } from "@/components/home/Reveal";
import { CaseVisual } from "@/components/work/Visuals";
import { caseStudies } from "@/lib/work";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Digital products, experiences and systems we've built—selected case studies from the J-E-Y-K-S family.",
};

export default function WorkPage() {
  const featured = caseStudies.find(study => study.featured)!;
  const rest = caseStudies.filter(study => !study.featured);
  return <>
    <section className={styles.hero}><Container>
      <Reveal>
        <Badge>Case studies</Badge>
        <h1>Selected work.</h1>
        <p>Digital products, experiences and systems we&#39;ve built.</p>
      </Reveal>
    </Container></section>

    <section className={styles.feature}><Container>
      <Reveal className={styles.revealWrap}><div className={styles.revealImg}>
        <Link href={`/work/${featured.slug}`} className={styles.featureCard}>
          <div className={styles.featureCopy}>
            <p className={styles.featureMeta}><span>Featured — {featured.number}</span><span>{featured.category}</span></p>
            <h2>{featured.title}</h2>
            <p className={styles.featureSummary}>{featured.summary}</p>
            <ul className={styles.featureServices}>{featured.services.map(service => <li key={service}>{service}</li>)}</ul>
            <div className={styles.featureFoot}>
              <span className={`${styles.status} ${featured.status === "Live product" ? styles.statusLive : styles.statusWip}`}>{featured.status}</span>
              <span className={styles.featureCta}>View case study <ArrowRight size={17}/></span>
            </div>
          </div>
          <div className={styles.featureVisual}><CaseVisual visual={featured.visual} frame={1}/></div>
        </Link>
      </div></Reveal>
    </Container></section>

    <section className={styles.index}><Container>
      <div className={styles.indexHead}><span>More selected work</span><span>02—{String(caseStudies.length).padStart(2, "0")}</span></div>
      <div className={styles.rows}>{rest.map((study, index) => (
        <Reveal key={study.slug} delay={index * 60}><Link href={`/work/${study.slug}`} className={styles.row}>
          <span className={styles.rowNumber}>{study.number}</span>
          <div className={styles.rowMain}>
            <p className={styles.rowMeta}>{study.category}</p>
            <h3>{study.title}</h3>
            <p className={styles.rowSummary}>{study.summary}</p>
            <div className={styles.rowTags}>
              <span className={`${styles.status} ${study.status === "Live product" ? styles.statusLive : styles.statusWip}`}>{study.status}</span>
              {study.services.map(service => <span key={service} className={styles.rowService}>{service}</span>)}
            </div>
          </div>
          <span className={styles.rowArrow}><ArrowUpRight size={22}/></span>
        </Link></Reveal>
      ))}</div>
      <p className={styles.indexNote}>Case studies are added as projects ship. For a private walkthrough of any engagement, just ask.</p>
    </Container></section>

    <CTA title="Have work that needs this standard?" body="Tell us what you're building. We'll show you how we'd approach it."/>
  </>;
}
