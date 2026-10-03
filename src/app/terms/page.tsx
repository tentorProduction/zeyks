import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero/PageHero";
import { Container } from "@/components/ui";
import styles from "../info-pages.module.css";

export const metadata: Metadata = { title: "Terms" };
export default function TermsPage(){return <><PageHero label="Legal" title="Terms of use" body="The terms that apply when using the J-E-Y-K-S website."/><section className="section section--white"><Container><div className={styles.content}><p className={styles.meta}>Last updated: 26 September 2026</p><h2>Website use</h2><p>You may use this website for lawful informational and business purposes. You may not interfere with its operation, attempt unauthorised access, or reuse its content in a misleading way.</p><h2>Content and intellectual property</h2><p>Unless otherwise stated, the website and its original content are owned by J-E-Y-K-S. Company and product names belonging to others remain the property of their respective owners.</p><h2>General information</h2><p>Website content is provided for general information and may change without notice. Specific project commitments are governed by the written agreement for that engagement.</p></div></Container></section></>}
