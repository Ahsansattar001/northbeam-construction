import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

/**
 * Shared page shell. On each route change it scrolls to the top, or to the
 * element named in the hash (for links like /services#lofts).
 */
export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ block: 'start' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
