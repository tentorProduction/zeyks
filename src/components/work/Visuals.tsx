import type { CaseStudy } from "@/lib/work";
import styles from "./workVisuals.module.css";

function BookFrame({ frame }: { frame: 1 | 2 }) {
  if (frame === 2) return <div className={styles.doc}>
    <div className={styles.docHead}><span className={styles.docTitle}/><span className={styles.paid}>PAID</span></div>
    <div className={styles.docMeta}><i/><i/></div>
    <div className={styles.docRows}><em/><em/><em/><em/></div>
    <div className={styles.docTotal}><i/><strong/></div>
  </div>;
  return <div className={styles.window}>
    <div className={styles.winTop}><i/><i/><i/><span className={styles.winUrl}>zeyksbook.app</span></div>
    <div className={styles.bookApp}>
      <div className={styles.side}><i className={styles.on}/><i/><i/><i/></div>
      <div className={styles.main}>
        <div className={styles.kpis}><i/><i/><i/></div>
        <div className={styles.chart}><i/><i/><i/><i/><i/><i/><i/><i/></div>
        <div className={styles.rows}><em/><em/><em/></div>
      </div>
    </div>
  </div>;
}

function ReaderFrame({ frame }: { frame: 1 | 2 }) {
  if (frame === 2) return <div className={styles.paper}>
    <div className={styles.dropcapRow}><span className={styles.dropcap}>A</span><div className={styles.lineCol}><i/><i/><i/><i/></div></div>
    <div className={styles.quote}><i/><i/></div>
    <div className={styles.lineCol}><i/><i/><i/></div>
  </div>;
  return <div className={styles.paper}>
    <div className={styles.mast}><i/><span/></div>
    <div className={styles.headline}><i/><i/></div>
    <div className={styles.cols}><div><i/><i/><i/><i/></div><div><i/><i/><i/><i/></div></div>
  </div>;
}

function FlowFrame({ frame }: { frame: 1 | 2 }) {
  if (frame === 2) return <div className={styles.log}>
    {[0, 1, 2, 3, 4].map(i => <div className={styles.logRow} key={i}><i className={i === 2 ? styles.dotWarn : styles.dotOk}/><i className={styles.logLine} style={{ width: `${72 - i * 9}%` }}/><span className={i === 2 ? styles.tagWarn : styles.tagOk}>{i === 2 ? "review" : "ok"}</span></div>)}
  </div>;
  return <div className={styles.pipeWrap}>
    <div className={styles.pipeRow}>
      <span className={styles.pnode}>Intake</span><span className={styles.conn}/>
      <span className={styles.pnode}><b>AI</b>Classify</span><span className={styles.conn}/>
      <span className={styles.pnode}>Route</span><span className={styles.conn}/>
      <span className={styles.pnode}>Resolve</span>
    </div>
    <span className={styles.branch}/>
    <span className={styles.pnodeReview}>Human review</span>
  </div>;
}

function BrandFrame({ frame }: { frame: 1 | 2 }) {
  if (frame === 2) return <div className={styles.stationery}>
    <div className={styles.card}><span className={styles.cardMark}/><i/><i/><i/></div>
    <div className={`${styles.card} ${styles.cardTall}`}><span className={`${styles.cardMark} ${styles.cardMarkAlt}`}/><i/><i/></div>
  </div>;
  return <div className={styles.board}>
    <span className={styles.mark}/>
    <div className={styles.wordmark}><i/><i/></div>
    <div className={styles.swRow}><i/><i/><i/><i/></div>
    <div className={styles.typeRow}><b>Aa</b><div className={styles.typeLines}><i/><i/></div></div>
    <div className={styles.btnRow}><i className={styles.btnPrimary}/><i className={styles.btnGhost}/></div>
  </div>;
}

function OpsFrame({ frame }: { frame: 1 | 2 }) {
  if (frame === 2) return <div className={styles.window}>
    <div className={styles.winTop}><i/><i/><i/><span className={styles.winUrl}>operations</span></div>
    <div className={styles.trend}>
      <span className={styles.trendChip}>On track</span>
      <div className={styles.trendBars}><i/><i/><i/><i/><i/><i/><i/></div>
    </div>
  </div>;
  return <div className={styles.kanban}>
    {[3, 2, 1].map((count, col) => <div className={styles.kcol} key={col}>
      <span className={styles.khead}/>
      {[...Array(count)].map((_, i) => <span key={i} className={`${styles.kcard} ${col === 0 && i === 0 ? styles.kcardActive : ""}`}/>)}
    </div>)}
  </div>;
}

const frames = { book: BookFrame, reader: ReaderFrame, flow: FlowFrame, brand: BrandFrame, ops: OpsFrame } as const;

export function CaseVisual({ visual, frame = 1, className = "" }: { visual: CaseStudy["visual"]; frame?: 1 | 2; className?: string }) {
  const Frame = frames[visual];
  return <div className={`${styles.visual} ${styles[`v_${visual}`]} ${className}`}><Frame frame={frame}/></div>;
}
