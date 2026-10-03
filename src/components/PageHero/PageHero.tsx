import { Badge, Container } from "@/components/ui";
import { Reveal } from "@/components/home/Reveal";
import styles from "./pageHero.module.css";

export function PageHero({ label, title, body }: { label: string; title: string; body: string }) {
  return <section className={styles.hero}><Container><Reveal className={styles.inner}><Badge>{label}</Badge><h1>{title}</h1><p>{body}</p></Reveal></Container></section>;
}
