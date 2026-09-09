import PageIntro from '../components/PageIntro.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CtaBand from '../components/CtaBand.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { SITE, STATS } from '../data/site.js';
import { TEAM, CREDENTIALS, VALUES } from '../data/team.js';
import styles from './About.module.css';

export default function About() {
  useDocumentTitle('About');

  return (
    <>
      <PageIntro
        title={`About ${SITE.shortName}`}
        lead="A building company run by people who still work on site."
      />

      <section className="section" aria-labelledby="story-title">
        <div className={`container ${styles.story}`}>
          <div>
            <SectionHeading id="story-title" title="Started in 2011 by two carpenters who were tired of fixing other people's work" />
            <div className={styles.text}>
              <p>Daniel Brooks and his brother spent their first decade in the trade being called in to put right extensions and lofts that had been sold well and built badly. In {SITE.founded} they started {SITE.shortName} to do the job the way they thought it should be done: drawings first, one honest price, and the same crew from the first day to the last.</p>
              <p>Fourteen years on, the company employs 38 people across carpentry, bricklaying, plumbing, electrics and design. Most of the work still comes from people we have built for before, or their neighbours.</p>
            </div>
          </div>
          <ul className={styles.credentials} aria-label="Credentials">
            {CREDENTIALS.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      <section className={`section ${styles.statsBand}`} aria-label="Key figures">
        <dl className={`container ${styles.stats}`}>
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <dd>{value}</dd>
              <dt>{label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading id="values-title" title="How we work" />
          <ul className={styles.values}>
            {VALUES.map(({ title, text }) => (
              <li key={title} className={styles.value}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="team-title">
        <div className="container">
          <SectionHeading id="team-title" title="Leadership" />
          <ul className={styles.team}>
            {TEAM.map(({ name, role, text }) => (
              <li key={name} className={styles.person}>
                <span className={styles.initials} aria-hidden="true">
                  {name.split(' ').map((n) => n[0]).join('')}
                </span>
                <h3>{name}</h3>
                <p className={styles.role}>{role}</p>
                <p className={styles.bio}>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
