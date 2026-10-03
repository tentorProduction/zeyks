import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import { CTA } from "@/components/CTA/CTA";
import { Reveal } from "@/components/home/Reveal";
import { CaseVisual } from "@/components/work/Visuals";
import { caseStudies, findCaseStudy } from "@/lib/work";
import styles from "./case.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = findCaseStudy(slug);
  return study ? { title: `${study.title} — Case Study`, description: study.summary } : {};
}

function Chapter({ n, label, children }: { n: string; label: string; children: ReactNode }) {
  return <section className={styles.chapter}><Container>
    <div className={styles.chapterGrid}>
      <div className={styles.rail}><span>{n}</span><h2>{label}</h2></div>
      <div className={styles.body}>{children}</div>
    </div>
  </Container></section>;
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = findCaseStudy(slug);
  if (!study) notFound();
  const shotTag = study.status === "Live product" ? "Interface preview" : "Placeholder visual";
  return <>
    <section className={styles.hero}><Container>
      <Link className={styles.back} href="/work"><ArrowLeft size={15}/>All work</Link>
      <p className={styles.kicker}>Case study {study.number} — {study.category}</p>
      <h1>{study.title}</h1>
      <p className={styles.summary}>{study.summary}</p>
      <div className={styles.meta}>
        {study.services.map(service => <span key={service} className={styles.service}>{service}</span>)}
        <span className={`${styles.status} ${study.status === "Live product" ? styles.statusLive : styles.statusWip}`}>{study.status}</span>
      </div>
      <Reveal className={styles.heroVisualReveal}><div className={styles.revealImg}><CaseVisual visual={study.visual} frame={1} className={styles.heroVisual}/></div></Reveal>
    </Container></section>

    <Chapter n="01" label="Project introduction">
      {study.intro.map(paragraph => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
    </Chapter>

    <Chapter n="02" label="The challenge">
      {study.challenge.map(paragraph => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
    </Chapter>

    <Chapter n="03" label="Our approach">
      <div className={styles.approachList}>{study.approach.map((item, i) => <div className={styles.approachItem} key={item.title}>
        <span className={styles.approachIndex}>{String(i + 1).padStart(2, "0")}</span>
        <div><h3>{item.title}</h3><p>{item.copy}</p></div>
      </div>)}</div>
    </Chapter>

    <Chapter n="04" label="Design">
      {study.design.map((item, i) => <p className={styles.leadItem} key={item.slice(0, 24)}><span>{String(i + 1).padStart(2, "0")}</span>{item}</p>)}
    </Chapter>

    <Chapter n="05" label="Development">
      {study.development.map((item, i) => <p className={styles.leadItem} key={item.slice(0, 24)}><span>{String(i + 1).padStart(2, "0")}</span>{item}</p>)}
    </Chapter>

    <Chapter n="06" label="Technology">
      <div className={styles.techGrid}>{study.technology.map(tech => <div className={styles.tech} key={tech.name}>
        <span className={styles.techDot}/>
        <div><h3>{tech.name}</h3><p>{tech.note}</p></div>
      </div>)}</div>
    </Chapter>

    <Chapter n="07" label="Screenshots">
      <p className={styles.shotIntro}>Rendered previews of the interface. {study.status === "Live product" ? "Live product screenshots are published with each release." : "Final screenshots will replace these previews as the project is published."}</p>
      {study.shots.map(shot => <Reveal key={shot.caption} className={styles.shotReveal}>
        <div className={styles.revealImg}><CaseVisual visual={study.visual} frame={shot.frame} className={styles.shotVisual}/></div>
        <div className={styles.shotCaption}><p>{shot.caption}</p><span>{shotTag}</span></div>
      </Reveal>)}
    </Chapter>

    <Chapter n="08" label="Results">
      <div className={styles.metricGrid}>{study.results.map(metric => <div className={styles.metric} key={metric.label}>
        <strong>{metric.value}</strong>
        <span>{metric.label}</span>
      </div>)}</div>
      <p className={styles.resultsNote}>{study.resultsNote}</p>
    </Chapter>

    <Chapter n="09" label="Key learnings">
      <div className={styles.learnings}>{study.learnings.map((learning, i) => <div className={styles.learning} key={learning.slice(0, 24)}>
        <span>{String(i + 1).padStart(2, "0")}</span>
        <p>{learning}</p>
      </div>)}</div>
    </Chapter>

    <CTA title="Let's build your next system." body="Tell us what you're working on—we'll show you how we'd approach it." label="Start a Project"/>
  </>;
}
