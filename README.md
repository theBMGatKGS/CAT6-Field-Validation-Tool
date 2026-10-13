# CAT 6 Field Validation Tool

KGS CAT 6 Field Validation Package + Structured Cabling Field Verification Checklist, in one offline web app and Windows desktop app.

- Web / PWA: open `index.html` (GitHub Pages: serve repo root). `checklist.html` is the field form, shown in tab ②.
- Desktop: `cd electron && npm install && npm run dist` → `electron/dist/CAT6.Field.Validation.Tool.Setup.<version>.exe` (needs wine on Linux).
- Version lives in `index.html` ("Version 00.01.000"); bump it, `sw.js` CACHE_NAME, and CHANGELOG.md together.
