# AGENTS.md
## Agent Workflow Instructions

### Agent Overview (Read Me First)

- **Purpose**: UI/UX testing page and test environment for a personal site redesign project.
- **Usage**: Catalog ideas, track issues, and run live experiments before changes ship to production.
- **Status Log**: Development diary and issue tracking are maintained in the project repo.

This file defines guidelines and workflows specifically for AI agents collaborating on the live development environment. As an AI Agent, use this file as your workflow reference for:

- Understanding how to generate, track, and link ideas/tasks to relevant GitHub issues.
- When creating or updating prompts for automations, reference the live dev environment and associated issue links to keep everything coordinated.
- Maintaining a clear mapping between ideas, issue tracking, prompt templates, and the final implemented files for smoother AI-human handoff and review.

---

## Agent Sandbox Workflow

Guidelines for where and how AI agents should experiment.

- **Preferred locations**:
  - A dedicated `sandbox/` directory in the repo.
- **Allowed**:
  - Create subdirectories under `sandbox/` (for example, `sandbox/dir-name/`).
  - Create new files in these directories (HTML, CSS, JS, JSON, notes, etc.).
- **Conventions**:
  - Use short, kebab-case names for folders and files (e.g., `interaction-test-01`, `nav-layout-prototype`).
  - Add a brief top-of-file note describing the experiment and date.

### Running Scripts and Commands

- Use only project-standard commands (static site tooling or any documented `npm`/build scripts).
- Keep commands scoped to the current repo or its `sandbox` subtrees.
- Do **not** run destructive commands (e.g., `git reset --hard`, force pushes, global installs) unless explicitly requested.

### Promoting Sandbox Work

- Ensure the experiment works and is understandable.
- Summarize what changed and why before moving code from `sandbox` into production paths.

### Unknown / Nice-to-Have Sections

- Performance profiling instructions for specific layouts/interactions.
- Visual regression comparison workflow (screenshots, diff tools, etc.).
- A "ready to ship" checklist for promoting sandbox work to production.

---

## Changelog

All agents must sign changelog entries with their model name and version. Format:

```
### [Date] — [Description]
Signed: [Model Name] [Version]
```

---

### March 2026 — Grey Box layout refinement, agent workflow documentation
- Continued refinement of Grey Box layouts for interaction-first testing.
- Documented agent workflows in `AGENTS.md` for sandbox and repo operations.

Signed: Claude Sonnet 4.6

---

### January 2026 — Sandbox consolidation, Night Mode audit
- Began consolidating redesign experiments into sandbox flows.
- Audited Night Mode styles across top-level templates.

Signed: Claude Sonnet 4.6

---

### November 2025 — Theme toggle sync
- Adjusted theme dark/light modes for main navigation and landing.
- Synced theme toggles across temp pages (Sandbox, Gallery, Landing).

Signed: Claude Sonnet 4.6

---

### October 2025 — Work section expansion, tile improvements
- Added pages/directories for brand, interface, photography, writing, and all sections.
- Added image enlarge function to tile component.
- Refined footer links with title attributes.
- Navbar brand night-mode support.
- Added strings to asset array.

Signed: Claude Sonnet 4.6

---

### September 2025 — Night Mode design pass
- Night Mode designs across remaining main visual components.
- Footer links sizing and parallax componentization.
- Top-level temp pages → Sandbox, Gallery, Landing.

Signed: Claude Sonnet 4.6

---

### August 2025 — Landing page refresh
- Landing page updated to show more relevant info.
- Sandbox + App page consistency pass.

Signed: Claude Sonnet 4.6

---

### July 2025 — Initial environment setup
- Asset repo and contents added for features.
- Off-platform refresh of links.
- Environment changes via GitHub Pages.

Signed: Claude Sonnet 4.6
