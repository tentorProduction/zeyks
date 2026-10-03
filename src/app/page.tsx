import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Boxes, Braces, ChartNoAxesCombined, Clapperboard, CodeXml, Component, Palette } from "lucide-react";
import { Button, Card, Container, SectionHeader } from "@/components/ui";
import { CaseStudyCard } from "@/components/cards";
import { EcosystemVisual } from "@/components/home/EcosystemVisual";
import { Reveal } from "@/components/home/Reveal";
import styles from "./page.module.css";

const companies = [
  { code: "ZB", name: "Zeyks Book", category: "Digital publishing", description: "A modern reading and publishing platform designed to help ideas travel further.", href: "/companies/zeyks-book" },
  { code: "JD", name: "J-E-Y-K-S Digital", category: "Digital experiences", description: "Websites, platforms, and digital systems built for ambitious organisations.", href: "/companies/jeyks-digital" },
  { code: "JL", name: "J-E-Y-K-S Labs", category: "Products & innovation", description: "An applied innovation company exploring useful products, AI, and emerging technology.", href: "/companies/jeyks-labs" },
  { code: "JC", name: "J-E-Y-K-S Creative", category: "Brand & design", description: "Brand identities and creative systems made with clarity, character, and purpose.", href: "/companies/jeyks-creative" },
  { code: "JM", name: "J-E-Y-K-S Media", category: "Content & media", description: "Media and content that help meaningful ideas reach the right audience.", href: "/companies/jeyks-media" },
];

const capabilities = [
  { icon: CodeXml, name: "Websites", href: "/services#web-development" },
  { icon: Component, name: "Web Applications", href: "/services#software" },
  { icon: Braces, name: "Software", href: "/services#software" },
  { icon: Boxes, name: "SaaS", href: "/services#software" },
  { icon: Bot, name: "AI & Automation", href: "/services#ai-automation" },
  { icon: Palette, name: "Brand Systems", href: "/services#branding" },
  { icon: Clapperboard, name: "Media", href: "/services#media" },
  { icon: ChartNoAxesCombined, name: "Digital Growth", href: "/services#growth" },
];

const process = ["Discover", "Plan", "Design", "Build", "Launch", "Grow"];

export default function Home() {
  return <>
    <section className={styles.hero}><Container><div className={styles.heroGrid}>
      <div className={styles.heroCopy}>
        <div className={styles.heroEyebrow}><strong>J-E-Y-K-S</strong><span>Digital technology &amp; creative company</span></div>
        <h1>We build the digital businesses people remember.</h1>
        <p className={styles.heroText}>Websites, software, digital products, media and technology solutions built for ambitious businesses.</p>
        <div className={styles.heroActions}><Button href="/contact">Start a Project <ArrowRight size={17}/></Button><Button href="/companies" variant="secondary">Explore Our Companies</Button></div>
      </div>
      <EcosystemVisual />
    </div></Container></section>

    <section className={styles.ecosystemIntro}><Container><Reveal><div className={styles.introGrid}><div><p className="eyebrow">The ecosystem</p><h2>One company.<br/>Multiple capabilities.</h2></div><div className={styles.introCopy}><p>J-E-Y-K-S is the parent company behind a focused family of digital businesses. Each company goes deep in a specialist field. Together, they form one connected system for building, launching, and growing ideas.</p><div className={styles.introStats}><span><strong>5</strong>Specialist companies</span><span><strong>8</strong>Core capabilities</span><span><strong>1</strong>Shared standard</span></div></div></div></Reveal></Container></section>

    <section className="section section--white"><Container><Reveal><SectionHeader eyebrow="Our companies" title="Built as a family of specialists." body="Distinct companies with dedicated focus, connected by shared technology, creative talent, and operating standards." action={{href:"/companies",label:"Explore the ecosystem"}}/></Reveal><div className={styles.companyGrid}>{companies.map((company, index)=><Reveal key={company.name} delay={index * 70} className={index === 0 ? styles.companyFeature : ""}><Card className={styles.companyCard}><div className={styles.companyHead}><span className={styles.companyCode}>{company.code}</span><span className={styles.companyIndex}>0{index + 1}</span></div><div><p className={styles.category}>{company.category}</p><h3>{company.name}</h3><p>{company.description}</p></div><Link href={company.href} className={styles.explore}>Explore <ArrowUpRight size={16}/></Link></Card></Reveal>)}</div></Container></section>

    <section className="section"><Container><Reveal><SectionHeader eyebrow="What we build" title="Digital capability, connected end to end." body="From a first digital presence to the systems and media that power daily growth." action={{href:"/services",label:"View all services"}}/></Reveal><div className={styles.capabilityGrid}>{capabilities.map(({icon: Icon, name, href}, index)=><Reveal key={name} delay={index * 50}><Link href={href} className={styles.capability}><Icon size={21}/><span>{name}</span><ArrowUpRight size={15}/></Link></Reveal>)}</div></Container></section>

    <section className="section section--dark"><Container><Reveal><SectionHeader eyebrow="How we work" title="A clear path from ambition to impact." body="A disciplined process with room for better questions, bold ideas, and careful execution."/></Reveal><div className={styles.process}>{process.map((step,index)=><Reveal key={step} delay={index * 60}><div className={styles.step}><span>0{index + 1}</span><h3>{step}</h3><i/></div></Reveal>)}</div></Container></section>

    <section className="section section--white"><Container><Reveal><SectionHeader eyebrow="Selected work" title="What useful ambition looks like." body="Products, platforms, and systems made to create a meaningful business advantage." action={{href:"/work",label:"View selected work"}}/></Reveal><div className="grid grid--2"><Reveal><CaseStudyCard href="/work/independent-publishing" category="Digital product" title="A better home for independent publishing" description="Strategy, product design, and engineering for a modern reading platform."/></Reveal><Reveal delay={80}><CaseStudyCard href="/work/quiet-operations" category="AI & automation" title="Turning busywork into a quiet system" description="An integrated operations workflow that returns hours to a growing team."/></Reveal><Reveal><CaseStudyCard href="/work/clarity-in-motion" category="Brand & web" title="Clarity for a company in motion" description="A new identity and digital home that made a complex offer simple."/></Reveal><Reveal delay={80}><CaseStudyCard href="/work/distributed-operations" category="Custom software" title="One view of a distributed operation" description="A focused platform connecting data, workflows, and decisions."/></Reveal></div></Container></section>

    <section className={styles.finalCta}><Container><Reveal><div className={styles.ctaPanel}><p className="eyebrow">Start something</p><h2>Have something worth building?</h2><p>Bring us the idea, the challenge, or the ambition. We’ll help make it real.</p><Button href="/contact">Start a Project <ArrowRight size={17}/></Button></div></Reveal></Container></section>
  </>;
}
