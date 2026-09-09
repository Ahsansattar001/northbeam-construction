import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, MemoryRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';

/**
 * HashRouter keeps every route working on plain static hosting with no
 * server rewrite rules. It needs a real page address, though: inside a
 * preview frame (about:srcdoc) or a blob: URL, the browser cannot build
 * URLs and React Router throws "Failed to construct 'URL'". In that case
 * fall back to MemoryRouter, which navigates without touching the address.
 */
function hasUsableUrl() {
  try {
    new URL('/', window.location.href);
    return true;
  } catch {
    return false;
  }
}

const Router = hasUsableUrl() ? HashRouter : MemoryRouter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
