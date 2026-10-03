import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import styles from "./ui.module.css";

export function Container({ children, narrow = false, className = "" }: { children: ReactNode; narrow?: boolean; className?: string }) {
  return <div className={`${styles.container} ${narrow ? styles.narrow : ""} ${className}`}>{children}</div>;
}

type ButtonProps = { href?: string; variant?: "primary" | "secondary" | "ghost"; children: ReactNode; className?: string } & ButtonHTMLAttributes<HTMLButtonElement>;
export function Button({ href, variant = "primary", children, className = "", ...props }: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`;
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className={styles.badge}><span className={styles.badgeDot} />{children}</span>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}

export function SectionHeader({ eyebrow, title, body, action }: { eyebrow?: string; title: string; body?: string; action?: { href: string; label: string } }) {
  return <div className={styles.sectionHeader}>
    <div className={styles.sectionHeaderCopy}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
    {action && <Link className="text-link" href={action.href}>{action.label}<ArrowRight size={16} /></Link>}
  </div>;
}

type FieldProps = { label: string; multiline?: boolean } & InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>;
export function Input({ label, multiline, ...props }: FieldProps) {
  return <label className={styles.inputWrap}>
    <span className={styles.label}>{label}</span>
    {multiline ? <textarea className={styles.input} {...props} /> : <input className={styles.input} {...props} />}
  </label>;
}
