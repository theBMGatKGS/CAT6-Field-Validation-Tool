# CAT 6 Field Validation Tool

KGS CAT 6 Field Validation Package (SOP, tool comparison, spec language) plus the Structured Cabling Field Verification Checklist, in one offline app.

- Web/PWA: serve the repo root (GitHub Pages from `main` / root). Open `index.html`.
- Windows: `cd electron && npm install && npm run dist` (wine needed on Linux) → `electron/dist/CAT6.Field.Validation.Tool.Setup.<version>.exe`.
- Version lives in `index.html` ("Version xx.xx.xxx"); bump `CACHE_NAME` in `sw.js` and add a CHANGELOG entry with each release.
