import styles from './SectionHeading.module.css';

export default function SectionHeading({ title, lead, id, center = false, action }) {
  return (
    <div className={`${styles.heading} ${center ? styles.center : ''}`}>
      <div>
        <h2 className={styles.title} id={id}>{title}</h2>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
