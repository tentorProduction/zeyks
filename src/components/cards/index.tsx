import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui";
import styles from "./cards.module.css";

export function CaseStudyCard({ category, title, description, href }: { category: string; title: string; description: string; href: string }) {
  return <Link href={href} className={styles.caseLink}><Card className={styles.case}><div className={styles.visual}><div className={styles.browser}><div className={styles.browserBar} /><div className={styles.browserBody}><span className={styles.blockBlue} /><span className={styles.block} /></div></div></div><div className={styles.caseContent}><p className={styles.caseMeta}>{category}</p><h3>{title}</h3><p>{description}</p><span className={styles.caseLinkCta}>Read case study <ArrowUpRight size={15}/></span></div></Card></Link>;
}
