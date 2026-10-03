import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/home/Reveal";
import { ContactForm } from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have something worth building? Tell us what you're building and let's figure out the next step.",
};

export default function ContactPage() {
  return <>
    <section className={styles.hero}><Container>
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h1>Have something worth building?</h1>
        <p className={styles.lede}>Tell us what you&#39;re building and let&#39;s figure out the next step.</p>
      </Reveal>
    </Container></section>

    <section className={styles.section}><Container>
      <div className={styles.layout}>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <p>Email</p>
            <a href="mailto:hello@jeyks.com">hello@jeyks.com</a>
          </div>
          <div className={styles.metaItem}>
            <p>Location</p>
            <span>Kathmandu, Nepal</span>
          </div>
          <div className={styles.metaItem}>
            <p>Business hours</p>
            <span>Sunday – Friday, 9:00 – 18:00 NPT</span>
          </div>
          <div className={styles.note}>
            <h2>What happens next</h2>
            <p>You send the overview. We reply with honest questions and a clear point of view—then, if it makes sense, a scoped proposal. No sales sequence, no pressure.</p>
          </div>
        </div>
        <ContactForm/>
      </div>
    </Container></section>
  </>;
}
