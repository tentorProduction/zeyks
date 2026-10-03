import { ArrowRight } from "lucide-react";
import { Button, Container } from "@/components/ui";
import styles from "./cta.module.css";

export function CTA({ title = "Let’s build what’s next.", body = "Bring us the challenge. We’ll bring the strategy, design, and technology to move it forward.", label = "Start a project" }: { title?: string; body?: string; label?: string }) {
  return <section className={styles.wrap}><Container><div className={styles.panel}><div className={styles.copy}><h2>{title}</h2><p>{body}</p></div><div className={styles.actions}><Button href="/contact">{label} <ArrowRight size={17} /></Button></div></div></Container></section>;
}
