# CAT 6 Field Validation Tool

KGS CAT 6 Field Validation Package (SOP, tool comparison, spec language) plus the Structured Cabling Field Verification Checklist, in one offline app.


Version **v00.01.000** (2026-10-12). Full history: [`CHANGELOG.md`](CHANGELOG.md) and Help → Revision log in the app.

- **Web app:** https://thebmgatkgs.github.io/CAT6-Field-Validation-Tool/ (GitHub Pages from `CAT6_Field_Validation_Tool`, root).
- **Windows installer:** [`CAT6.Field.Validation.Tool.Setup.00.01.000.exe`](https://github.com/theBMGatKGS/CAT6-Field-Validation-Tool/releases/download/v00.01.000/CAT6.Field.Validation.Tool.Setup.00.01.000.exe) from the [v00.01.000 release](https://github.com/theBMGatKGS/CAT6-Field-Validation-Tool/releases/tag/v00.01.000).

## Install and offline use
- The tool runs entirely in the browser; nothing is uploaded.
- After the first visit it works offline.
- To install it as an app:
  - Chrome or Edge: click the install icon in the address bar.
  - iPhone or iPad: Share → Add to Home Screen.

## Build
- Web/PWA: GitHub Pages serves the repo root. Open `index.html`.
- Windows: `cd electron && npm install && npm run dist` (wine needed on Linux) → `electron/dist/CAT6.Field.Validation.Tool.Setup.<version>.exe`.
- Version lives in `index.html` ("Version xx.xx.xxx"); bump `CACHE_NAME` in `sw.js` and add a CHANGELOG entry with each release.
