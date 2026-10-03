"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Button, Container } from "@/components/ui";
import styles from "./navbar.module.css";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const handleKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return <>
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)} aria-label="JEYKS home">
          <img src="/brand/logo-mark.png" alt="" className={styles.logoMark} width="23" height="30" />
          <span>J-E-Y-K-S</span>
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {site.nav.map(item => <Link key={item.href} href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}>{item.label}</Link>)}
        </nav>
        <div className={styles.actions}><Button href="/contact" variant="primary">Start a project</Button></div>
        <button className={styles.menu} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </Container>
    </header>
    <div className={`${styles.mobileLayer} ${open ? styles.mobileLayerOpen : ""}`} aria-hidden={!open}>
      <button className={styles.backdrop} aria-label="Close navigation" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} />
      <nav id="mobile-nav" className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`} aria-label="Mobile navigation">
        <div className={styles.mobileLinks}>{site.nav.map(item => <Link key={item.href} href={item.href} className={isActive(item.href) ? styles.mobileActive : ""} onClick={() => setOpen(false)}>{item.label}</Link>)}</div>
        <Link className={styles.mobileCta} href="/contact" onClick={() => setOpen(false)}>Start a project</Link>
      </nav>
    </div>
  </>;
}
