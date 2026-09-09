import { useEffect } from 'react';
import { SITE } from '../data/site.js';

/** Sets the browser tab title for a page. */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE.name}` : SITE.name;
  }, [title]);
}
