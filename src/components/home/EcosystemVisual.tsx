"use client";

import Link from "next/link";
import { CSSProperties, PointerEvent, useRef } from "react";
import styles from "./ecosystem.module.css";

const companies = [
  { code: "ZB", label: "Book", href: "/companies/zeyks-book", position: styles.one },
  { code: "JD", label: "Digital", href: "/companies/jeyks-digital", position: styles.two },
  { code: "JL", label: "Labs", href: "/companies/jeyks-labs", position: styles.three },
  { code: "JC", label: "Creative", href: "/companies/jeyks-creative", position: styles.four },
  { code: "JM", label: "Media", href: "/companies/jeyks-media", position: styles.five },
];

export function EcosystemVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - .5) * 2;
    ref.current?.style.setProperty("--tilt-x", `${y * -1.2}deg`);
    ref.current?.style.setProperty("--tilt-y", `${x * 1.2}deg`);
  };
  const reset = () => {
    ref.current?.style.setProperty("--tilt-x", "0deg");
    ref.current?.style.setProperty("--tilt-y", "0deg");
  };

  return <div className={styles.frame} onPointerMove={handleMove} onPointerLeave={reset} aria-label="The J-E-Y-K-S company ecosystem">
    <div ref={ref} className={styles.network} style={{ "--tilt-x": "0deg", "--tilt-y": "0deg" } as CSSProperties}>
      <svg className={styles.lines} viewBox="0 0 520 410" aria-hidden="true"><path d="M260 205 L105 88 M260 205 L406 86 M260 205 L452 258 M260 205 L267 354 M260 205 L74 282" /></svg>
      <div className={styles.core}><img src="/brand/logo-mark-white.png" alt="" className={styles.coreMark} width="27" height="35" /><strong>J-E-Y-K-S</strong><small>Parent company</small></div>
      {companies.map(company => <Link href={company.href} className={`${styles.node} ${company.position}`} key={company.code}><strong>{company.code}</strong><span>{company.label}</span></Link>)}
    </div>
    <p className={styles.hint}>Explore the ecosystem</p>
  </div>;
}
