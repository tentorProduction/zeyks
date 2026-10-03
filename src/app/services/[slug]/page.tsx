import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";
import { findCaseStudy } from "@/lib/work";
import { CaseStudyCard } from "@/components/cards";
import { CTA } from "@/components/CTA/CTA";
import { Reveal } from "@/components/home/Reveal";
import { findService, services, type Service } from "@/lib/services";
import styles from "./service.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  return service ? { title: service.title, description: service.tagline } : {};
}

function HeroArt({ tone }: { tone: Service["tone"] }) {
  if (tone === "web") return <div className={styles.artBrowser}><div className={styles.browserTop}><i/><i/><i/><span>yourbusiness.com</span></div><div className={styles.browserBody}><div className={styles.browserHero}/><div className={styles.browserLines}><i/><i/><i/><i/></div></div><div className={styles.browserFoot}><i/><i/></div></div>;
  if (tone === "software") return <div className={styles.artDash}><div className={styles.dashSide}><i/><i/><i/><i/><i/></div><div className={styles.dashMain}><div className={styles.dashKpis}><i/><i/><i/></div><div className={styles.dashChart}><i/><i/><i/><i/><i/><i/><i/><i/></div></div></div>;
  if (tone === "ai") return <div className={styles.artNodes}><span className={styles.nodesRing}/><span className={styles.nodeCore}>AI</span><i className={styles.n1}/><i className={styles.n2}/><i className={styles.n3}/><i className={styles.n4}/><i className={styles.n5}/><i className={styles.n6}/></div>;
  if (tone === "brand") return <div className={styles.artType}><span className={styles.typeAa}>Aa</span><div className={styles.swatches}><i/><i/><i/><i/></div><div className={styles.typeGuides}><i/><i/><i/></div></div>;
  if (tone === "media") return <div className={styles.artFilm}><span className={styles.play}><i/></span><div className={styles.wave}><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className={styles.strip}><i/><i/><i/></div></div>;
  return <div className={styles.artChart}><span className={styles.chartBadge}>+128%</span><div className={styles.bars}><i/><i/><i/><i/><i/><i/><i/></div></div>;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();
  const tone = styles[service.tone];
  return <div className={tone}>
    <section className={styles.hero}>
      <Container>
        <Link className={styles.back} href="/services"><ArrowLeft size={15}/>All services</Link>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Service {service.number} — {service.category}</p>
            <h1>{service.title}</h1>
            <p className={styles.tagline}>{service.tagline}</p>
          </div>
          <div className={styles.art}><HeroArt tone={service.tone}/></div>
        </div>
      </Container>
    </section>

    <section className={styles.section}><Container>
      <div className={styles.overview}>
        <div><p className="eyebrow">Service overview</p><h2>What this service is.</h2></div>
        <div className={styles.overviewCopy}>{service.overview.map(p => <p key={p.slice(0, 24)}>{p}</p>)}</div>
      </div>
    </Container></section>

    <section className={styles.sectionWhite}><Container>
      <SectionHeader eyebrow="Capabilities" title={`What ${service.title.toLowerCase()} covers.`} body={`Engage one capability or combine them into a complete ${service.category.toLowerCase()} program.`}/>
      <div className={styles.capGrid}>{service.capabilities.map((cap, i) => <Reveal key={cap.name} delay={i * 60}><div className={styles.cap}><span className={styles.capNumber}>{String(i + 1).padStart(2, "0")}</span><h3>{cap.name}</h3><p>{cap.blurb}</p></div></Reveal>)}</div>
    </Container></section>

    <section className="section section--dark"><Container>
      <div className={styles.build}>
        <div><p className="eyebrow">What we build</p><h2>Typical engagements.</h2></div>
        <ul className={styles.buildList}>{service.build.map((item, i) => <li key={item}><span className={styles.buildIndex}>{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
      </div>
    </Container></section>

    <section className={styles.section}><Container>
      <SectionHeader eyebrow="Our process" title="How the work runs." body="A steady, transparent sequence you can plan around—no black boxes, no surprises."/>
      <div className={styles.processGrid}>{service.process.map((step, i) => <Reveal key={step.title} delay={i * 60}><div className={styles.processStep}><span className={styles.processNumber}>{String(i + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.copy}</p></div></Reveal>)}</div>
    </Container></section>

    <section className={styles.sectionWhite}><Container>
      <SectionHeader eyebrow="Technology & approach" title="How we build it." body="The foundations we bring to every engagement in this discipline."/>
      <div className={styles.techGrid}>{service.technology.map(tech => <div className={styles.tech} key={tech.name}><span className={styles.techDot}/><div><h3>{tech.name}</h3><p>{tech.note}</p></div></div>)}</div>
    </Container></section>

    <section className={styles.section}><Container>
      <SectionHeader eyebrow="Selected work" title="Related work." body="A sample of engagements from across the family. New case studies publish as projects ship." action={{ href: "/work", label: "All work" }}/>
      <div className="grid grid--2">{service.work.map(slug => {
        const study = findCaseStudy(slug);
        return study ? <CaseStudyCard key={study.slug} category={study.category} title={study.title} description={study.summary} href={`/work/${study.slug}`}/> : null;
      })}</div>
    </Container></section>

    <section className={styles.sectionWhite}><Container narrow>
      <div className={styles.faqHead}><p className="eyebrow">FAQ</p><h2>Common questions.</h2></div>
      <div className={styles.faqList}>{service.faq.map(item => <details className={styles.faq} key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
    </Container></section>

    <CTA title={`Start your ${service.title.toLowerCase()} project.`} body="Tell us what you're working on—we'll come back with a clear point of view and practical next steps."/>
  </div>;
}
