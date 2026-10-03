import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { Reveal } from "@/components/home/Reveal";
import { companies } from "@/lib/companies";
import styles from "./companies.module.css";

export const metadata: Metadata = { title: "Companies", description: "Meet the independent products, companies, and creative divisions in the J-E-Y-K-S ecosystem." };

export default function CompaniesPage(){return <>
  <section className={styles.hero}><Container><Reveal className={styles.heroInner}><div><Badge>The J-E-Y-K-S family</Badge><h1>Meet the J-E-Y-K-S ecosystem.</h1></div><p>Independent products, companies and creative divisions connected by one vision.</p></Reveal></Container></section>
  <section className={styles.directory}><Container><div className={styles.directoryHead}><span>Company directory</span><span>01—05</span></div><div className={styles.grid}>{companies.map((company,index)=><Reveal key={company.slug} delay={index * 60} className={index === 0 ? styles.featureWrap : ""}><Link id={company.slug} href={`/companies/${company.slug}`} className={`${styles.card} ${styles[company.tone]} ${index === 0 ? styles.featured : ""}`}><div className={styles.top}><span className={styles.number}>Company {company.number}</span><span className={styles.mark}>{company.code}</span></div><div className={styles.content}><p className={styles.category}>{company.category}</p><h2>{company.name}</h2><p>{company.description}</p></div><span className={styles.action}>{company.action}<ArrowUpRight size={17}/></span></Link></Reveal>)}</div></Container></section>
  <section className={styles.principle}><Container><Reveal><div className={styles.principleInner}><div><p className="eyebrow">One family</p><h2>Specialist focus. Shared momentum.</h2></div><div className={styles.principleCopy}><p>Every J-E-Y-K-S company has a clear mandate and its own point of view. Behind each is a shared foundation of technology, design, operations, and long-term thinking.</p><Link className="text-link" href="/about">About J-E-Y-K-S <ArrowUpRight size={16}/></Link></div></div></Reveal></Container></section>
</>}
