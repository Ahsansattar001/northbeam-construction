import Button from './Button.jsx';
import styles from './CtaBand.module.css';

/** Closing call to action used at the bottom of most pages. */
export default function CtaBand() {
  return (
    <section className={styles.band} aria-labelledby="cta-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <h2 className={styles.title} id="cta-title">Find out what your project will cost.</h2>
          <p className={styles.lead}>A free site visit takes about an hour and comes with a fixed, itemised quote.</p>
        </div>
        <div className={styles.actions}>
          <Button to="/contact" variant="accent" size="large">Book a free site visit</Button>
          <Button to="/projects" variant="ghost" size="large">See recent projects</Button>
        </div>
      </div>
    </section>
  );
}
