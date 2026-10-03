import Link from "next/link";
import { Container } from "@/components/ui";
import styles from "./footer.module.css";

export function Footer() {
  return <footer className={styles.footer}>
    <Container>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}><img src="/brand/logo-mark-white.png" alt="" className={styles.logoMark} width="25" height="32" /><span>J-E-Y-K-S</span></Link>
          <p>Digital technology, products and creative solutions for ambitious businesses.</p>
          <a className={styles.email} href="mailto:hello@jeyks.com">hello@jeyks.com</a>
        </div>
        <div className={styles.links}>
          <div className={styles.group}><h3>Company</h3><Link href="/about">About</Link><Link href="/work">Work</Link><Link href="/insights">Insights</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>
          <div className={styles.group}><h3>Capabilities</h3><Link href="/services#web-development">Web Development</Link><Link href="/services#software">Software</Link><Link href="/services#ai-automation">AI &amp; Automation</Link><Link href="/services#branding">Branding</Link><Link href="/services#media">Media</Link><Link href="/services#growth">Growth</Link></div>
          <div className={styles.group}><h3>Companies</h3><Link href="/companies#zeyks-book">Zeyks Book</Link><Link href="/companies#jeyks-digital">J-E-Y-K-S Digital</Link><Link href="/companies#jeyks-labs">J-E-Y-K-S Labs</Link><Link href="/companies#jeyks-creative">J-E-Y-K-S Creative</Link><Link href="/companies#jeyks-media">J-E-Y-K-S Media</Link></div>
          <div className={styles.group}><h3>Legal</h3><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
      </div>
      <div className={styles.bottom}><span>© 2026 J-E-Y-K-S. All rights reserved.</span><span className={styles.location}><i />Nepal</span></div>
    </Container>
  </footer>;
}
