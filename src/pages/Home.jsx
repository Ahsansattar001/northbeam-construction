import Button from '../components/Button.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CtaBand from '../components/CtaBand.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { SITE, STATS, TRUST } from '../data/site.js';
import { SERVICES } from '../data/services.js';
import { PROJECTS } from '../data/projects.js';
import { PROCESS } from '../data/process.js';
import styles from './Home.module.css';

export default function Home() {
  useDocumentTitle('Design and build, fixed price');

  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`container ${styles.heroInner}`}>
          <div>
            <h1 className={styles.heroTitle} id="hero-title">
              Extensions, lofts and renovations, built to one fixed price.
            </h1>
            <p className={styles.heroLead}>
              {SITE.shortName} designs and builds home and commercial projects with its own crews.
              You get drawings, one itemised price, a named site manager and a ten-year guarantee.
            </p>
            <div className={styles.heroActions}>
              <Button to="/contact" variant="accent" size="large">Request a free quote</Button>
              <Button to="/projects" variant="ghost" size="large">See recent projects</Button>
            </div>
            <ul className={styles.trust}>
              {TRUST.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <dl className={styles.stats}>
            {STATS.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <dd>{value}</dd>
                <dt>{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            id="services-title"
            title="What we build"
            lead="From the first drawing to the final inspection, one team is responsible for the whole job."
            action={<Button to="/services" variant="secondary">All services</Button>}
          />
          <div className={styles.services}>
            {SERVICES.slice(0, 6).map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="process-title">
        <div className="container">
          <SectionHeading
            id="process-title"
            title="How a project runs"
            lead="Four stages, one point of contact, and no change to the price after you sign."
          />
          <ol className={styles.process}>
            {PROCESS.map(({ title, text }, i) => (
              <li key={title} className={styles.step}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <div className="container">
          <SectionHeading
            id="projects-title"
            title="Recent projects"
            lead="Three from the last twelve months."
            action={<Button to="/projects" variant="secondary">All projects</Button>}
          />
          <div className={styles.projects}>
            {PROJECTS.slice(0, 3).map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
