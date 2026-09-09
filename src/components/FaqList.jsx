import styles from './FaqList.module.css';

export default function FaqList({ items }) {
  return (
    <div>
      {items.map(({ q, a }) => (
        <details key={q} className={styles.item} name="faq">
          <summary className={styles.question}>{q}</summary>
          <p className={styles.answer}>{a}</p>
        </details>
      ))}
    </div>
  );
}
