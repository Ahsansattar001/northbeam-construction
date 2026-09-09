# Northbeam Construction

Marketing website for Northbeam Construction, a design-and-build contractor for homes and businesses.

- **Live site:** https://ahsansattar001.github.io/northbeam-construction/
- **Source code:** https://github.com/Ahsansattar001/northbeam-construction

## Pages

Home, Services, Projects, About, FAQ, Contact, and a 404 page.

## Tech stack

- React 18
- React Router 6 (hash routing, so it works on any static host)
- Vite 5 with `vite-plugin-singlefile` (the build is a single `index.html`)
- CSS Modules

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173/.

## Build

```bash
npm run build
```

The output goes to `dist/`. Because the build uses a relative base path, the folder can be served from any static host or opened straight from disk.

## Deployment

Every push to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

## Editing content

Company details, navigation, stats, services, projects, team, FAQ, and testimonials live in `src/data/`. Change them there and every page updates.
