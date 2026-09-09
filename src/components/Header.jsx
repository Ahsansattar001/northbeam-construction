import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, SITE } from '../data/site.js';
import Button from './Button.jsx';
import Logo from './Logo.jsx';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the drawer after navigating, and on Escape.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = ({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : styles.link);

  return (
    <>
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <ul className={styles.topbarList}>
            <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className={styles.topbarHours}>{SITE.hours}</li>
          </ul>
          <p className={styles.topbarNote}>{SITE.licence}</p>
        </div>
      </div>

      <header className={`${styles.header} ${open ? styles.headerOpen : ''}`}>
        <div className={`container ${styles.inner}`}>
          <Link className={styles.brand} to="/">
            <Logo />
            <span>{SITE.name}</span>
          </Link>

          <nav id="site-nav" className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Primary">
            <ul className={styles.list}>
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <NavLink className={linkClass} to={to}>{label}</NavLink>
                </li>
              ))}
            </ul>
            <Button to="/contact" variant="accent">Request a quote</Button>
          </nav>

          <button
            className={styles.toggle}
            type="button"
            aria-controls="site-nav"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={styles.toggleBar} />
            <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </header>
    </>
  );
}
