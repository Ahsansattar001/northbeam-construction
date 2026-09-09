import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ service, detailed = false }) {
  const { id, title, summary, points, icon } = service;

  return (
    <article className={styles.card} id={detailed ? id : undefined}>
      <Icon path={icon} className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.summary}>{summary}</p>
      <ul className={styles.points}>
        {points.map((p) => <li key={p}>{p}</li>)}
      </ul>
      {!detailed && <Link className={styles.link} to={`/services#${id}`}>More about {title.toLowerCase()}</Link>}
    </article>
  );
}
