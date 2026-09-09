import styles from './Field.module.css';

/**
 * A labelled form control with a slot for an error message. Pass `as="select"`
 * or `as="textarea"` for those controls; anything else renders an <input>.
 */
export default function Field({ label, hint, name, error, as = 'input', children, ...rest }) {
  const Control = as;
  const id = `field-${name}`;
  const errorId = `${id}-error`;

  return (
    <div className={`${styles.field} ${error ? styles.invalid : ''}`}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {hint && <span className={styles.hint}> {hint}</span>}
      </label>
      <Control
        id={id}
        name={name}
        className={styles.control}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      >
        {children}
      </Control>
      <p className={styles.error} id={errorId} aria-live="polite">{error}</p>
    </div>
  );
}
