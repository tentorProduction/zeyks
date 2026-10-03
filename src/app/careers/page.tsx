import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import { CTA } from "@/components/CTA/CTA";
import { Reveal } from "@/components/home/Reveal";
import styles from "./careers.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build what comes next—join the J-E-Y-K-S family in Nepal and beyond.",
};

const why = [
  ["Real ownership", "You own outcomes, not tickets. Work is scoped to people, not committees, and your name ends up on things that ship."],
  ["Range of work", "Product, client, and platform work across five companies—you'll touch software, design, media, and AI without leaving the building."],
  ["High standards", "Everything we ship is reviewed against one bar. You'll be trained on the bar, then trusted to hold it."],
  ["Long-term building", "We build products meant to run for a decade. Careers here compound the same way—no project churn, no restart every quarter."],
] as const;

const how = [
  ["Write it down", "Decisions, context, and progress live in writing. Meetings exist to decide, not to inform."],
  ["Small loops", "Work ships in days-sized pieces with review in between. Nobody disappears for a month."],
  ["Demos, not status reports", "Working software presented directly—by the person who built it."],
  ["Craft reviews", "Every project ends with a look back at the work itself. What held the bar, what didn't, what we change."],
] as const;

const culture = [
  ["Useful over impressive", "We'd rather ship the unglamorous thing that works than the clever thing that doesn't."],
  ["Direct, not harsh", "Feedback is specific, timely, and about the work. Kindness and honesty are the same habit here."],
  ["Ownership of craft", "Everyone is trusted to set the quality bar in their discipline—and expected to defend it."],
  ["Build in the open", "We share what we learn, teach what we know, and hire people who make the team smarter."],
] as const;

const roles = [
  { role: "Senior Full-Stack Engineer", location: "Kathmandu, Nepal", type: "Full-time", description: "Build products across the family—from Zeyks Book features to client platforms—with TypeScript end to end." },
  { role: "Product Designer", location: "Kathmandu / Remote", type: "Full-time", description: "Own interfaces and design systems for our products and client work, from flows to final detail." },
  { role: "AI & Automation Engineer", location: "Remote (Nepal)", type: "Full-time", description: "Design grounded AI integrations and durable workflow automation with real evaluation metrics." },
  { role: "Content & Media Producer", location: "Kathmandu, Nepal", type: "Full-time", description: "Video, social, and editorial content for J-E-Y-K-S and the brands we build." },
  { role: "Growth Strategist", location: "Kathmandu / Remote", type: "Contract", description: "Run SEO, analytics, and conversion programs across the family's products and clients." },
] as const;

export default function CareersPage() {
  return <>
    <section className={styles.hero}><Container>
      <Reveal>
        <p className="eyebrow">Careers at J-E-Y-K-S</p>
        <h1>Build what comes next.</h1>
        <p className={styles.lede}>We're a family of companies building software, brands, and media from Nepal—for clients and for ourselves. If you want your work to matter and to last, you'll fit here.</p>
      </Reveal>
    </Container></section>

    <section className={styles.sectionWhite}><Container>
      <div className={styles.sectionHead}><p className="eyebrow">Why J-E-Y-K-S</p><h2>What you get here.</h2></div>
      <div className={styles.pointGrid}>{why.map(([title, copy], i) => <Reveal key={title} delay={i * 60}><div className={styles.point}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div>
    </Container></section>

    <section className={styles.section}><Container>
      <div className={styles.sectionHead}><p className="eyebrow">How we work</p><h2>No mystery, no theater.</h2></div>
      <div className={styles.howList}>{how.map(([title, copy], i) => <div className={styles.howItem} key={title}>
        <span className={styles.howIndex}>{String(i + 1).padStart(2, "0")}</span>
        <div><h3>{title}</h3><p>{copy}</p></div>
      </div>)}</div>
    </Container></section>

    <section className={styles.sectionWhite}><Container>
      <div className={styles.sectionHead}><p className="eyebrow">Culture</p><h2>How it feels to work here.</h2></div>
      <div className={styles.cultureGrid}>{culture.map(([title, copy], i) => <Reveal key={title} delay={i * 60}><div className={styles.culture}><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div>
    </Container></section>

    <section className={styles.section}><Container>
      <div className={styles.sectionHead}><p className="eyebrow">Open positions</p><h2>Roles we're hiring for.</h2></div>
      <div className={styles.roles}>{roles.map(({ role, location, type, description }) => <div className={styles.roleCard} key={role}>
        <div className={styles.roleTop}><h3>{role}</h3><span className={styles.typeChip}>{type}</span></div>
        <p className={styles.location}>{location}</p>
        <p className={styles.roleCopy}>{description}</p>
        <a className={styles.apply} href={`mailto:careers@jeyks.com?subject=${encodeURIComponent(`Application — ${role}`)}`}>Apply <ArrowRight size={15}/></a>
      </div>)}</div>
      <p className={styles.rolesNote}>Nothing that fits? Introduce yourself anyway—<a href="mailto:careers@jeyks.com?subject=Open%20application">careers@jeyks.com</a>. We hire for the bar, not the vacancy.</p>
    </Container></section>

    <CTA title="Want to build with us?" body="Apply for a role or introduce yourself. We read everything and reply to every serious note."/>
  </>;
}
