import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV, SITE } from '../data/site.js';
import { SERVICES } from '../data/services.js';
import Logo from './Logo.jsx';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const subscribe = (event) => {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setMessage(valid ? 'Subscribed. The next update goes out at the start of the quarter.' : 'Enter an email address like name@example.com.');
    if (valid) setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <Link className={styles.brand} to="/"><Logo />{SITE.name}</Link>
          <p>{SITE.tagline}</p>
          <ul className={styles.contact}>
            <li>{SITE.address.join(', ')}</li>
            <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Services</h3>
          <ul className={styles.list}>
            {SERVICES.map((s) => <li key={s.id}><Link to={`/services#${s.id}`}>{s.title}</Link></li>)}
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Company</h3>
          <ul className={styles.list}>
            {NAV.map(({ to, label }) => <li key={to}><Link to={to}>{label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Updates</h3>
          <p className={styles.small}>A short note each quarter on costs, regulations and recent projects. No sales calls.</p>
          <form className={styles.form} onSubmit={subscribe} noValidate>
            <label className="visually-hidden" htmlFor="footer-email">Email address</label>
            <input
              id="footer-email"
              className={styles.input}
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setMessage(''); }}
            />
            <button className={styles.submit} type="submit">Subscribe</button>
          </form>
          <p className={styles.small} role="status" aria-live="polite">{message}</p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p>{SITE.licence}</p>
      </div>
    </footer>
  );
}
