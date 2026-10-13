# Changelog — CAT 6 Field Validation Tool

## v00.01.000 — 2026-10-12
- First version. Combines two KGS documents into one app with the same look:
  - "CAT 6 Field Validation Package — KGS" (shell, header, tabs, SOP, Tool Comparison, Spec Language)
  - "Structured Cabling Field Verification Checklist — CAT 5/5e/6/6A" (new tab ② Field Checklist, embedded unchanged as `checklist.html`)
- Tab order: ① Field SOP → ② Field Checklist → ③ Tool Comparison → ④ Spec Language. Tabs open from the URL hash (`#checklist`).
- Fonts (Barlow, Barlow Condensed, IBM Plex Mono) bundled locally so it works offline.
- PWA: `manifest.json`, `sw.js` (cache `cat6-field-validation-00-01-000`), icons. Works from a GitHub Pages sub-path and from `file://` (no service worker there).
- Windows installer via Electron + electron-builder NSIS: `CAT6.Field.Validation.Tool.Setup.00.01.000.exe`.
- In-app version note in the header meta row and footer.
