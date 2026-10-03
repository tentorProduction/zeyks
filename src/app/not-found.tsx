import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import styles from "./page.module.css";

export default function NotFound() {
  return <section className={styles.finalCta}><Container>
    <div className={styles.ctaPanel}>
      <p className="eyebrow">404</p>
      <h2>This page doesn&#39;t exist.</h2>
      <p>The link may be old or mistyped. Start from the homepage, or jump straight to what we build.</p>
      <div className={styles.ctaActions}>
        <Link href="/" className="text-link">Back to home <ArrowRight size={16} /></Link>
        <Link href="/work" className="text-link">View our work <ArrowRight size={16} /></Link>
        <Link href="/contact" className="text-link">Contact us <ArrowRight size={16} /></Link>
      </div>
    </div>
  </Container></section>;
}
