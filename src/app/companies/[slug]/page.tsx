import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/home/Reveal";
import { companies } from "@/lib/companies";
import styles from "./company.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return companies.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const company = companies.find(item => item.slug === slug); return company ? { title: company.name, description: company.description } : {}; }

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = companies.find(item => item.slug === slug);
  if (!company) notFound();
  return <>
    <section className={styles.hero}><Container>
      <Reveal>
        <Link className={styles.back} href="/companies"><ArrowLeft size={15}/>All companies</Link>
        <div className={styles.identity}>
          <div><p className={styles.category}>{company.category}</p><h1>{company.name}</h1><p>{company.description}</p></div>
          <div className={styles.mark}>{company.code}</div>
        </div>
      </Reveal>
    </Container></section>

    <section className={styles.body}><Container>
      <Reveal><div className={styles.bodyGrid}>
        <div><p className="eyebrow">Company {company.number}</p><h2>The mandate.</h2></div>
        <div className={styles.copy}>
          <p>{company.mandate}</p>
          <div className={styles.facts}>
            <div className={styles.fact}><span>Focus</span><strong>{company.category}</strong></div>
            <div className={styles.fact}><span>Part of</span><strong>J-E-Y-K-S</strong></div>
            <div className={styles.fact}><span>Discipline</span><strong><Link className={styles.factLink} href={company.relatedService.href}>{company.relatedService.label} <ArrowUpRight size={13}/></Link></strong></div>
          </div>
        </div>
      </div></Reveal>
      <Reveal delay={60}><div className={styles.offers}>
        <h3>What the company does</h3>
        <ul>{company.offers.map(offer => <li key={offer}><Check size={15}/>{offer}</li>)}</ul>
      </div></Reveal>
      {"caseStudy" in company && company.caseStudy && <Reveal delay={80}><Link className={styles.caseBanner} href={company.caseStudy.href} aria-label={company.caseStudy.label}>
        <div><p className={styles.caseKicker}>Live product</p><strong>See how it&#39;s built.</strong><p>Full case study — design, engineering, and the standards behind it.</p></div>
        <span className={styles.caseArrow}>View <ArrowRight size={16}/></span>
      </Link></Reveal>}
    </Container></section>

    <section className={styles.cta}><Container><Reveal><div className={styles.ctaInner}>
      <div><h2>Build with {company.name}.</h2><p>Tell us what you are working on.</p></div>
      <Button href="/contact">Start a Project <ArrowRight size={16}/></Button>
    </div></Reveal></Container></section>
  </>;
}
