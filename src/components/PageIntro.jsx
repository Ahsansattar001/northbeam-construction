import styles from './PageIntro.module.css';

/** Teal title band at the top of every inner page. */
export default function PageIntro({ title, lead, children }) {
  return (
    <section className={styles.intro}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children}
      </div>
    </section>
  );
}
