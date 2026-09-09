import PageIntro from '../components/PageIntro.jsx';
import FaqList from '../components/FaqList.jsx';
import Button from '../components/Button.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { FAQ } from '../data/faq.js';
import { SITE } from '../data/site.js';
import styles from './Faq.module.css';

export default function Faq() {
  useDocumentTitle('FAQ');

  return (
    <>
      <PageIntro
        title="Frequently asked questions"
        lead="Straight answers on cost, timing, planning and what happens on site."
      />

      <section className="section" aria-label="Questions and answers">
        <div className="container container--narrow">
          <FaqList items={FAQ} />
          <div className={styles.more}>
            <h2 className={styles.moreTitle}>Something we haven't covered?</h2>
            <p>Call {SITE.phone} during office hours, or send a message and we will reply within one working day.</p>
            <Button to="/contact" variant="primary">Ask a question</Button>
          </div>
        </div>
      </section>
    </>
  );
}
