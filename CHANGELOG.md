# Changelog — CAT 6 Field Validation Tool

## v00.01.000 — 2026-10-12
- First build. Combines two KGS source documents into one offline web app (PWA) and a Windows installer.
  - `index.html`: "CAT 6 Field Validation Package — KGS" (Rev 1.0, May 2026), UI unchanged.
  - `checklist.html`: "Structured Cabling Field Verification Checklist — CAT 5/5e/6/6A", UI and form logic unchanged, shown as tab ② inside the package and also usable on its own.
- Tab order: ① Field SOP · ② Field Checklist · ③ Tool Comparison · ④ Spec Language. Tabs open from the URL hash (e.g. `index.html#checklist`).
- Google Fonts (Barlow, Barlow Condensed, IBM Plex Mono) bundled locally in `fonts/` so the app looks the same offline.
- Service worker caches the whole app for offline use from a GitHub Pages path; opening `index.html` from disk works without it.
- Electron wrapper in `electron/`; `npm run dist` builds `CAT6.Field.Validation.Tool.Setup.00.01.000.exe` (NSIS).
- App version shown in the header ("App: Version 00.01.000") and footer.
- Help panel (Quick Start, per-tab help, FAQs, Install & privacy, Disclaimer) and Revision log, modeled on PipeCAD Project Merge.
