# HUMANS.md

This is the human-facing companion to `AGENTS.md`. Where that file instructs AI agents on workflow and conventions, this one captures intent — what the project is, where it lives, how to run it, and what's been built so far.

The project runs on a simple principle: **iteration and creation happen at the same time.** New ideas get collected while existing ones are being tested. Nothing waits for everything else to be ready. The redesign environment is live, the sandbox is always open, and the changelog is the roadmap.

---

## Project Structure

A personal site redesign spanning multiple workstreams: portfolio, resume, sandbox experimentation, and an asset API. The environment is structured for both human iteration and AI agent contribution.

- `redesign/` — live redesign repo and test pages
- `redesign/sandbox/` — experimental subdirectory for prototypes and interaction tests
- `resume/` — resume repo and page
- `asset/` — asset repo used as a lightweight CDN / API source
- `/site` — portable production build, ready for deployment

---

## Running the Site

### Local / Development

The redesign environment runs as a static site. Open any `.html` file directly in a browser, or serve from the repo root:

```bash
npx serve .
# or
python3 -m http.server
```

Sandbox experiments live under `redesign/sandbox/` and run the same way. Each subdirectory is self-contained.

### Production Deploy

The `/site` directory holds the portable production build — cleaned, self-contained, and ready to deploy. No build step required. Upload the contents of `/site` to the server root.

```
/site  →  deploy  →  production host
```

Keep `/site` in sync with promoted changes from the redesign repo before each deploy.

### Meta / Head Template

Standard HTML5 document with Open Graph, Twitter Card, viewport, and icon link tags. Font stack uses Inter via Google Fonts alongside Font Awesome and Material Icons for iconography.

### Charts

**Types of Work** — A radar chart visualizing the balance of project types across disciplines.

**Contribution Calendar** — A scatter chart showing contribution density over time.

---

## Version History

| Version | Date | Notes |
|---------|------|-------|
| v1.6 | March 2026 | Grey Box layout refinement, agent workflow documentation |
| v1.5 | January 2026 | Sandbox flow consolidation, Night Mode audit and fixes |
| v1.4 | November 2025 | Theme toggle sync across dark/light modes |
| v1.3 | October 2025 | Work section expanded, image enlarge on tiles, footer link refinement |
| v1.2 | September 2025 | Night Mode design pass, footer componentization, top-level temp pages |
| v1.1 | August 2025 | Landing page refresh, Sandbox + App consistency pass |
| v1.0 | July 2025 | Initial environment setup, asset repo, off-platform links |

---

## Changelog

### March 2026
- Continued refinement of Grey Box layouts for interaction-first testing.
- Documented agent workflows in `AGENTS.md` for sandbox and repo operations.

### January 2026
- Began consolidating redesign experiments into sandbox flows.
- Audited Night Mode styles across top-level templates.

### November 2025
- Adjusted theme dark/light modes for main navigation and landing.
- Synced theme toggles across temp pages (Sandbox, Gallery, Landing).

### October 2025
- Added pages/directories for brand, interface, photography, writing, and all sections.
- Added image enlarge function to tile component.
- Refined footer links with title attributes.
- Navbar brand night-mode support.
- Added strings to asset array.

### September 2025
- Night Mode designs across remaining main visual components.
- Footer links sizing and parallax componentization.
- Top-level temp pages → Sandbox, Gallery, Landing.

### August 2025
- Landing page updated to show more relevant info.
- Sandbox + App page consistency pass.

### July 2025
- Asset repo and contents added for features.
- Off-platform refresh of links.
- Environment changes via GitHub Pages.
