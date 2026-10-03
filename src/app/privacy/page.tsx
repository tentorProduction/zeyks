import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero/PageHero";
import { Container } from "@/components/ui";
import styles from "../info-pages.module.css";

export const metadata: Metadata = { title: "Privacy" };
export default function PrivacyPage(){return <><PageHero label="Legal" title="Privacy policy" body="How J-E-Y-K-S handles information shared through this website."/><section className="section section--white"><Container><div className={styles.content}><p className={styles.meta}>Last updated: 26 September 2026</p><h2>Information we collect</h2><p>We collect information you choose to provide when contacting us, such as your name, email address, company, and project details. We may also collect limited technical information needed to keep this website secure and reliable.</p><h2>How we use information</h2><p>We use submitted information to respond to enquiries, provide requested services, improve our website, and meet legal obligations. We do not sell personal information.</p><h2>Retention and your choices</h2><p>We retain information only for as long as it is reasonably needed. You may request access, correction, or deletion by emailing hello@jeyks.com.</p></div></Container></section></>}
