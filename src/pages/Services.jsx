import PageIntro from '../components/PageIntro.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CtaBand from '../components/CtaBand.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { SERVICES } from '../data/services.js';
import styles from './Services.module.css';

const INCLUDED = [
  { title: 'Drawings and approvals', text: 'Measured survey, design drawings, planning application and building regulations, all prepared in-house.' },
  { title: 'A fixed, itemised price', text: 'Every material and every trade listed. The number only changes if you change the job, and you approve it first.' },
  { title: 'A named site manager', text: 'One person who is on site daily, answers your questions and sends a weekly photo report.' },
  { title: 'Handover and guarantee', text: 'A snagging walk-through, certificates and warranties in one folder, and a ten-year guarantee on the work.' },
];

export default function Services() {
  useDocumentTitle('Services');

  return (
    <>
      <PageIntro
        title="Services"
        lead="Six things we do well, each delivered by our own crews under one fixed price."
      />

      <section className="section" aria-label="Services">
        <div className="container">
          <div className={styles.grid}>
            {SERVICES.map((s) => <ServiceCard key={s.id} service={s} detailed />)}
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="included-title">
        <div className="container">
          <SectionHeading id="included-title" title="Included with every project" />
          <ul className={styles.included}>
            {INCLUDED.map(({ title, text }) => (
              <li key={title} className={styles.item}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
