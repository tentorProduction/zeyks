import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero/PageHero";
import { Container } from "@/components/ui";
import { CTA } from "@/components/CTA/CTA";
import { Reveal } from "@/components/home/Reveal";
import { services } from "@/lib/services";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, software & SaaS, AI & automation, brand & product design, media, and digital growth—everything your digital business needs.",
};

export default function ServicesPage() {
  return <>
    <PageHero label="Services" title="Everything your digital business needs." body="Six connected disciplines, one team. Engage a single capability or bring us the whole journey from strategy to shipped product."/>
    <section className={styles.directory}><Container>
      <div className={styles.directoryHead}><span>Service directory</span><span>01—06</span></div>
      <div className={styles.grid}>{services.map((service, index) => (
        <Reveal key={service.slug} delay={index * 70} className="anchor-section" >
          <Link id={service.slug} href={`/services/${service.slug}`} className={`${styles.card} ${styles[service.tone]}`}>
            <div className={styles.top}>
              <span className={styles.number}>{service.number}</span>
              <span className={styles.mark}><service.icon size={21}/></span>
            </div>
            <div className={styles.body}>
              <p className={styles.category}>{service.category}</p>
              <h2>{service.title}</h2>
              <p className={styles.copy}>{service.description}</p>
              <ul className={styles.caps}>{service.capabilities.map(cap => <li key={cap.name}>{cap.name}</li>)}</ul>
            </div>
            <span className={styles.action}>Explore<ArrowUpRight size={17}/></span>
          </Link>
        </Reveal>
      ))}</div>
    </Container></section>
    <section className="section section--white"><Container>
      <div className={styles.approach}>
        <div><p className="eyebrow">Our approach</p><h2>Clear thinking at every step.</h2></div>
        <div className={styles.steps}>{[["01","Understand","We learn the business, audience, constraints, and real definition of success."],["02","Shape","We turn complexity into a focused strategy, system, and delivery plan."],["03","Build","Small, collaborative loops keep quality high and surprises low."],["04","Improve","After launch, we measure, learn, and make the work stronger over time."]].map(([n, t, c]) => <div className={styles.step} key={n}><span className={styles.stepNumber}>{n}</span><div><h3>{t}</h3><p>{c}</p></div></div>)}</div>
      </div>
    </Container></section>
    <CTA/>
  </>;
}
