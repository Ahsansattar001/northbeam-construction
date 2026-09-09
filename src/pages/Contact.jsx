import { useState } from 'react';
import PageIntro from '../components/PageIntro.jsx';
import Field from '../components/Field.jsx';
import Button from '../components/Button.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { SITE } from '../data/site.js';
import { SERVICES } from '../data/services.js';
import styles from './Contact.module.css';

const EMPTY = { name: '', email: '', phone: '', property: '', service: '', message: '' };

/** Returns an error message for a field, or an empty string when it is valid. */
function validate(name, value) {
  const v = value.trim();
  switch (name) {
    case 'name': return v ? '' : 'Tell us your name.';
    case 'email':
      if (!v) return 'We need an email to reply to.';
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter an email address like name@example.com.';
    case 'phone': return v && v.replace(/\D/g, '').length < 7 ? 'Enter a phone number we can call.' : '';
    case 'property': return v ? '' : 'Tell us whether this is a home or a business.';
    case 'message': return v.length >= 10 ? '' : 'Give us a sentence or two about the project.';
    default: return '';
  }
}

export default function Contact() {
  useDocumentTitle('Contact');

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const onBlur = (event) => {
    const { name, value } = event.target;
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const next = Object.fromEntries(Object.keys(EMPTY).map((k) => [k, validate(k, values[k])]));
    setErrors(next);

    const firstInvalid = Object.keys(next).find((k) => next[k]);
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid}`)?.focus();
      setStatus({ state: 'error', message: 'A few details are missing above.' });
      return;
    }

    setStatus({ state: 'sending', message: '' });
    const firstName = values.name.trim().split(' ')[0];

    // Simulated request. Replace with a fetch() to your CRM or email service.
    window.setTimeout(() => {
      setValues(EMPTY);
      setErrors({});
      setStatus({ state: 'success', message: `Thanks ${firstName}, your request is in. We will reply within one working day to arrange a site visit.` });
    }, 900);
  };

  return (
    <>
      <PageIntro
        title="Contact us"
        lead="Request a quote or ask a question. We reply within one working day."
      />

      <section className="section" aria-label="Contact form and details">
        <div className={`container ${styles.layout}`}>
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <h2 className={styles.formTitle}>Request a free quote</h2>

            <div className={styles.row}>
              <Field label="Full name" name="name" type="text" autoComplete="name" value={values.name} onChange={onChange} onBlur={onBlur} error={errors.name} required />
              <Field label="Email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} onBlur={onBlur} error={errors.email} required />
            </div>

            <div className={styles.row}>
              <Field label="Phone" hint="optional" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onChange} onBlur={onBlur} error={errors.phone} />
              <Field label="Property type" name="property" as="select" value={values.property} onChange={onChange} onBlur={onBlur} error={errors.property} required>
                <option value="">Choose one</option>
                <option value="home">Home</option>
                <option value="business">Business</option>
                <option value="landlord">Rental property</option>
              </Field>
            </div>

            <Field label="What is the project?" hint="optional" name="service" as="select" value={values.service} onChange={onChange} error={errors.service}>
              <option value="">Not sure yet</option>
              {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
            </Field>

            <Field label="Tell us about it" name="message" as="textarea" rows={5} maxLength={1000} value={values.message} onChange={onChange} onBlur={onBlur} error={errors.message} required />

            <div className={styles.actions}>
              <Button type="submit" variant="accent" size="large" disabled={status.state === 'sending'}>
                {status.state === 'sending' ? 'Sending…' : 'Send request'}
              </Button>
              <p className={`${styles.status} ${styles[status.state] ?? ''}`} role="status" aria-live="polite">
                {status.message}
              </p>
            </div>
            <p className={styles.privacy}>We use your details only to arrange the site visit and quote.</p>
          </form>

          <aside className={styles.details}>
            <h2 className={styles.detailsTitle}>Office</h2>
            <dl className={styles.list}>
              <div><dt>Address</dt><dd>{SITE.address.join(', ')}</dd></div>
              <div><dt>Phone</dt><dd><a href={SITE.phoneHref}>{SITE.phone}</a></dd></div>
              <div><dt>Email</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
              <div><dt>Hours</dt><dd>{SITE.hours}</dd></div>
            </dl>

            <h3 className={styles.detailsSub}>What happens next</h3>
            <ol className={styles.next}>
              <li>We reply within one working day.</li>
              <li>We book a free site visit at a time that suits you.</li>
              <li>You receive drawings and a fixed quote within two weeks.</li>
            </ol>
          </aside>
        </div>
      </section>
    </>
  );
}
