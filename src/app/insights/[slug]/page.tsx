import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";
import { CTA } from "@/components/CTA/CTA";
import { Reveal } from "@/components/home/Reveal";
import { articles, findArticle } from "@/lib/insights";
import styles from "./article.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  return article ? { title: article.title, description: article.description } : {};
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();
  const more = articles.filter(item => item.slug !== article.slug).slice(0, 3);
  return <>
    <article className={styles.article}>
      <Container narrow>
        <Link className={styles.back} href="/insights"><ArrowLeft size={15}/>All insights</Link>
        <p className={styles.meta}><span className={styles.category}>{article.category}</span><span>{article.date}</span><span>{article.readingTime}</span></p>
        <h1>{article.title}</h1>
        <p className={styles.description}>{article.description}</p>
      </Container>
      <Container narrow>
        <div className={styles.body}>
          {article.body.slice(0, 2).map(paragraph => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
          <p className={styles.pull}>{article.pull}</p>
          {article.body.slice(2).map(paragraph => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
        </div>
        <p className={styles.signature}>Written by the J-E-Y-K-S team</p>
      </Container>
    </article>

    <section className={styles.more}><Container>
      <h2>Keep reading</h2>
      <div className={styles.moreGrid}>{more.map((item, index) => <Reveal key={item.slug} delay={index * 60}><Link href={`/insights/${item.slug}`} className={styles.moreCard}>
        <p className={styles.meta}><span className={styles.category}>{item.category}</span><span>{item.readingTime}</span></p>
        <h3>{item.title}</h3>
        <span className={styles.readLink}>Read Article <ArrowUpRight size={14}/></span>
      </Link></Reveal>)}</div>
    </Container></section>

    <CTA/>
  </>;
}
