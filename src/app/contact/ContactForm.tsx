"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import styles from "./contact.module.css";

const serviceOptions = ["Web Development", "Software & SaaS", "AI & Automation", "Brand & Product Design", "Media", "Digital Growth", "Something else"];
const budgetOptions = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+", "Not sure yet"];

type Errors = Partial<Record<"name" | "email" | "details", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};
    if (!String(data.get("name")).trim()) next.name = "Please tell us your name.";
    const email = String(data.get("email")).trim();
    if (!email) next.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email address doesn't look right.";
    const details = String(data.get("details")).trim();
    if (details.length < 10) next.details = "Give us a sentence or two about the project.";

    if (Object.keys(next).length > 0) {
      setErrors(next);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      await new Promise(resolve => setTimeout(resolve, 900));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") return <div className={`${styles.panel} ${styles.successPanel}`} role="status">
    <span className={styles.successIcon}><Check size={26}/></span>
    <h2>Message received.</h2>
    <p>Thanks for reaching out—we&#39;ll reply within two business days. If it&#39;s urgent, email us directly at <a href="mailto:hello@jeyks.com">hello@jeyks.com</a>.</p>
    <button type="button" className={styles.resetButton} onClick={() => setStatus("idle")}>Send another message</button>
  </div>;

  return <form className={styles.panel} onSubmit={handleSubmit} noValidate>
    {status === "error" && Object.keys(errors).length === 0 && <p className={styles.errorBanner} role="alert">Something went wrong on our end. Please try again, or email us directly.</p>}
    {status === "error" && Object.keys(errors).length > 0 && <p className={styles.errorBanner} role="alert">Please fix the highlighted fields and try again.</p>}
    <div className={styles.fieldRow}>
      <div className={styles.field}>
        <label htmlFor="name">Name <em>*</em></label>
        <input id="name" name="name" type="text" placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={errors.name ? styles.invalid : ""}/>
        {errors.name && <p id="name-error" className={styles.fieldError}>{errors.name}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" placeholder="Company or organisation"/>
      </div>
    </div>
    <div className={styles.fieldRow}>
      <div className={styles.field}>
        <label htmlFor="email">Email <em>*</em></label>
        <input id="email" name="email" type="email" placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={errors.email ? styles.invalid : ""}/>
        {errors.email && <p id="email-error" className={styles.fieldError}>{errors.email}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" placeholder="Optional"/>
      </div>
    </div>
    <div className={styles.fieldRow}>
      <div className={styles.field}>
        <label htmlFor="service">Service</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          {serviceOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="budget">Budget</label>
        <select id="budget" name="budget" defaultValue="">
          <option value="" disabled>Select a range</option>
          {budgetOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
    </div>
    <div className={styles.field}>
      <label htmlFor="details">Project details <em>*</em></label>
      <textarea id="details" name="details" rows={5} placeholder="What are you building, what does success look like, and what's the timeline?" aria-invalid={!!errors.details} aria-describedby={errors.details ? "details-error" : undefined} className={errors.details ? styles.invalid : ""}/>
      {errors.details && <p id="details-error" className={styles.fieldError}>{errors.details}</p>}
    </div>
    <div className={styles.formFoot}>
      <button type="submit" className={styles.submit} disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Start Conversation"} <ArrowRight size={17}/></button>
      <p className={styles.formNote}>We read everything and reply within two business days.</p>
    </div>
  </form>;
}
