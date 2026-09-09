import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * One button for the whole site. Renders a router Link when `to` is set,
 * a plain anchor when `href` is set, otherwise a <button>.
 */
export default function Button({ to, href, variant = 'primary', size, children, ...rest }) {
  const className = [styles.button, styles[variant], size ? styles[size] : ''].join(' ').trim();

  if (to) return <Link className={className} to={to} {...rest}>{children}</Link>;
  if (href) return <a className={className} href={href} {...rest}>{children}</a>;
  return <button className={className} type="button" {...rest}>{children}</button>;
}
