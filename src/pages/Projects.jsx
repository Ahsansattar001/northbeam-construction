import { useState } from 'react';
import PageIntro from '../components/PageIntro.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { PROJECTS, PROJECT_TYPES } from '../data/projects.js';
import styles from './Projects.module.css';

export default function Projects() {
  useDocumentTitle('Projects');
  const [filter, setFilter] = useState('all');

  const shown = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <>
      <PageIntro
        title="Projects"
        lead="A selection of work completed in the last two years. Every one was delivered at the quoted price."
      />

      <section className="section" aria-label="Project list">
        <div className="container">
          <div className={styles.toolbar}>
            <div className={styles.filters} role="group" aria-label="Filter projects">
              {PROJECT_TYPES.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  className={`${styles.filter} ${filter === id ? styles.filterActive : ''}`}
                  aria-pressed={filter === id}
                  onClick={() => setFilter(id)}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className={styles.count} aria-live="polite">
              {shown.length} {shown.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          <div className={styles.grid}>
            {shown.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
