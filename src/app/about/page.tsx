import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { CTA } from "@/components/CTA/CTA";
import { Reveal } from "@/components/home/Reveal";
import { companies } from "@/lib/companies";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "J-E-Y-K-S is a technology, digital product, and creative company—the parent brand behind a family of specialist companies connected by one vision.",
};

const beliefs = [
  ["Build with purpose", "Every product, line of code, and pixel exists to do a job. If it doesn't serve the goal, it doesn't ship."],
  ["Keep things simple", "Complexity is easy. Simplicity is engineered—by removing until only the essential remains."],
  ["Design matters", "How something works and how something feels are the same discipline. We design both, deliberately."],
  ["Think long-term", "We build systems meant to be running and improving years from now, not demos that age in months."],
] as const;

const steps = [
  ["Discover", "We learn your business, audience, and constraints before we propose anything."],
  ["Plan", "Strategy becomes a concrete scope, system, and roadmap you can hold us to."],
  ["Design", "Ideas take shape as identities, interfaces, and prototypes you can react to."],
  ["Build", "Engineering turns decisions into working, tested systems—in short loops."],
  ["Launch", "We ship carefully, with measurement and monitoring in place from day one."],
  ["Grow", "After launch we measure, refine, and expand what works into what's next."],
] as const;

const capabilities = [
  ["Technology", "Software engineering, platforms, and the infrastructure that holds everything up.", "/services/web-development"],
  ["Design", "Brand, product, and experience design that makes complexity feel effortless.", "/services/branding"],
  ["Products", "Digital products and SaaS built, operated, and improved over time.", "/services/software"],
  ["Media", "Content, video, and campaigns that give brands a voice people recognize.", "/services/media"],
  ["Growth", "SEO, marketing, and analytics that turn attention into durable results.", "/services/growth"],
] as const;

export default function AboutPage() {
  return <>
    <section className={styles.hero}><Container>
      <Reveal className={styles.heroInner}>
        <Badge>About J-E-Y-K-S</Badge>
        <h1>We build the systems behind ambitious businesses.</h1>
        <p>J-E-Y-K-S is a technology, digital product, and creative company. We design, build, and run the software, brands, and content systems that ambitious businesses rely on—through a family of specialist companies connected by one vision and one standard of quality.</p>
      </Reveal>
    </Container></section>

    <section className={styles.section}><Container>
      <div className={styles.story}>
        <div><p className="eyebrow">Our story</p><h2>From products to a family.</h2></div>
        <div className={styles.storyCopy}>
          <p>J-E-Y-K-S didn't start as a family. It started the way most real companies do: with work. Individual products built, services delivered, problems solved for businesses that needed things to actually work.</p>
          <p>Over time a pattern emerged. The same engineering discipline, the same design standards, the same long-term thinking kept producing results—no matter the industry or the medium. So we stopped treating those as habits and started treating them as a foundation.</p>
          <p>That foundation became an ecosystem: independent companies with focused mandates—software, digital, technology, creative, media—sharing one backbone of technology, operations, and vision.</p>
          <p className={styles.storyPull}>Each company stands on its own. Together, they're something bigger: a partner that can take an ambitious business from idea to infrastructure.</p>
        </div>
      </div>
      <div className={styles.stats}>{[["05", "Companies in the family"], ["06", "Core disciplines"], ["01", "Shared vision"]].map(([n, l]) => <div className={styles.stat} key={n}><strong>{n}</strong><span>{l}</span></div>)}</div>
    </Container></section>

    <section className={styles.sectionWhite}><Container>
      <div className={styles.beliefHead}><p className="eyebrow">What we believe</p><h2>Four principles. No exceptions.</h2></div>
      <div className={styles.beliefs}>{beliefs.map(([title, copy], i) => <Reveal key={title} delay={i * 70}><div className={styles.belief}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div>
    </Container></section>

    <section className={styles.section}><Container>
      <div className={styles.workHead}><p className="eyebrow">How we work</p><h2>One path, six honest steps.</h2></div>
      <div className={styles.timeline}>{steps.map(([title, copy], i) => <Reveal key={title} delay={i * 60}><div className={styles.step}><span className={styles.stepDot}/><span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div>
    </Container></section>

    <section className={styles.sectionWhite}><Container>
      <div className={styles.capHead}><p className="eyebrow">Our capabilities</p><h2>Five areas, one team.</h2></div>
      <div className={styles.capRows}>{capabilities.map(([title, copy, href], i) => <Reveal key={title} delay={i * 60}><Link className={styles.capRow} href={href}><span className={styles.capIndex}>{String(i + 1).padStart(2, "0")}</span><div className={styles.capCopy}><h3>{title}</h3><p>{copy}</p></div><span className={styles.capArrow}><ArrowUpRight size={20}/></span></Link></Reveal>)}</div>
    </Container></section>

    <section className={styles.section}><Container>
      <div className={styles.ecoHead}>
        <div><p className="eyebrow">Our ecosystem</p><h2>One brand. Five companies.</h2></div>
        <p className={styles.ecoLead}>J-E-Y-K-S is the parent and the standard. Each company below runs independently, on the foundation we all share.</p>
      </div>
      <div className={styles.tree}>
        <div className={styles.treeParent}><div><h3>J-E-Y-K-S</h3><p>The family brand</p></div></div>
        <span className={styles.treeStem} aria-hidden="true"/>
        <div className={styles.treeGrid}>
          {companies.map(company => <Link className={styles.treeNode} key={company.slug} href={`/companies/${company.slug}`}>
            <span className={styles.treeMark}>{company.code}</span>
            <h4>{company.name}</h4>
            <p>{company.category}</p>
            <span className={styles.treeLink}>Visit <ArrowUpRight size={14}/></span>
          </Link>)}
        </div>
      </div>
      <div className={styles.ecoFoot}><Link className="text-link" href="/companies">Explore the full company directory <ArrowUpRight size={16}/></Link></div>
    </Container></section>

    <CTA title="Let’s build something meaningful." body="Tell us where you're going. We'll bring the systems, the craft, and the people to get you there." label="Start a Project"/>
  </>;
}
