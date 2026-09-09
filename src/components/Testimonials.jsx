import { TESTIMONIALS } from '../data/testimonials.js';
import SectionHeading from './SectionHeading.jsx';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className="section section--surface" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading id="testimonials-title" title="What clients say" />
        <ul className={styles.grid}>
          {TESTIMONIALS.map(({ quote, name, detail }) => (
            <li key={name} className={styles.card}>
              <blockquote>
                <p className={styles.quote}>{quote}</p>
                <footer className={styles.who}>
                  <strong>{name}</strong>
                  <span>{detail}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
