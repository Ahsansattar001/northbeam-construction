import styles from './ProjectCard.module.css';

const TYPE_LABEL = { residential: 'Home', commercial: 'Business' };

/* Line drawings used in the photo slot until real photography is added. */
const OUTLINE = {
  residential: 'M6 46V24l22-16 22 16v22H36V32H20v14z M20 46h16 M42 20V10h6v14',
  commercial: 'M10 46V8h24v38 M34 22h14v24 M16 14h4 M24 14h4 M16 22h4 M24 22h4 M16 30h4 M24 30h4 M39 28h4 M39 36h4 M20 46v-8h8v8 M4 46h48',
};

export default function ProjectCard({ project }) {
  const { name, type, location, size, duration, year, tone, summary } = project;

  return (
    <article className={styles.card}>
      <div className={`${styles.visual} ${styles[tone]}`} aria-hidden="true">
        <span className={styles.year}>{year}</span>
        <span className={styles.type}>{TYPE_LABEL[type]}</span>
        <svg className={styles.outline} viewBox="0 0 56 56">
          <path d={OUTLINE[type]} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.summary}>{summary}</p>
        <dl className={styles.facts}>
          <div><dt>Location</dt><dd>{location}</dd></div>
          <div><dt>Size</dt><dd>{size}</dd></div>
          <div><dt>On site</dt><dd>{duration}</dd></div>
        </dl>
      </div>
    </article>
  );
}
