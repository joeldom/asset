<a href="http://joeldom.github.io/redesign/sandbox/" target="_blank">
  <img class="aligncenter" alt="Joel Dombek Design 2022" src="https://raw.githubusercontent.com/joeldom/asset/main/twitter-header.png" width="847" height="120" />
</a>

# TODO.md

> The project inbox. Everything lands here first.
> Maintained by Joel and any assigned agent.
> Items get migrated into `HUMANS.md`, `AGENTS.md`, or `CLAUDE.md` during review sessions.
> When in doubt, add it here.

---

# Site To-Do List

## 🐛 Fixes

- [ ] Fix social icons in the footer of pages
- [ ] **Footer third-party link icons not rendering**: Some Font Awesome (or Material) icons for external/social links in the footer are broken — likely a version mismatch (FA5 vs FA6 class names differ) or wrong CDN source pulling a partial icon set. Audit which icons are broken and confirm a single consistent library version is sourced
- [ ] **Mobile nav — hover color bug**: In light mode, blue link text turns white on hover, making it unreadable against the white background
- [ ] **Mobile nav — hamburger animation**: Animate the stylized triangles that form the hamburger-style menu toggle (similar to a hamburger bar but more stylized)
- [ ] **Footer SVG — back to top chevron**: Rogue color-cycling animation on the upward chevron SVG in certain edge case scenarios — likely a known issue with the animation state


## ⚙️ Build & Asset Pipeline

- [ ] Set up **Gulp + npm scripts** for CSS and JS minification
  - Gulp watch task runs during dev — auto-minifies on file change, keeps source files separate
  - Manual force-regenerate available via npm script (e.g. `npm run minify` or `npm run build`) for cases like version bumps with no file changes
  - Only commit minified output when it's confirmed correct — source and minified files tracked separately
  - Tasks to cover: JS minification, CSS minification, optional concatenation
  - Keep config lightweight — this is a static site, not a full app bundle

- [ ] Define **two build paths** — user build and agent build
  - **User build**: Gulp watch runs locally during dev, minified output verified before commit, GitHub Action on push acts as a safety net / final stamp
  - **Agent build**: Agent only commits source file changes — GitHub Action is the primary build step, handles minification and deployment. Agent never commits minified files directly, keeping its commits clean and auditable
  - Consider separate workflow files (`user-build.yml` / `agent-build.yml`) or branch conventions to differentiate the two paths
  - Agent commits could target a staging branch that runs its own Action before merging to main

- [ ] Set up **two GitHub Actions workflow files**
  - `user-build.yml` — triggers on push to `main`, runs Gulp/npm minify as a safety net stamp
  - `agent-build.yml` — triggers on push to `agent` branch, runs full minify build, then merges back to `main` via PR
  - Fallback: if a commit to `main` includes `[agent]` in the message, `user-build.yml` defers to agent build logic
  - `agent` branch is created from `main`, agent works there, PR back to `main` on completion

## 🔧 Improvements

- [ ] Unify the mega menu nav to reference a template/component as the single source of truth

## 📣 Social Preview System

- [ ] Create a repeatable social preview pipeline for pages, projects, and posts
  - Agent converses to understand the post at a high level (new page, project, file drop, etc.)
  - Generates a clean, abstract short-form description or headline to overlay on the image
  - Uses a set of pre-made abstract background images as templates
  - Lays text over background to produce the preview graphic (1200×630px)

- [ ] Document what the agent will need for auto-posting
  - **Twitter/X**: Developer app with OAuth 2.0, site account credentials, media upload + post endpoints
  - **Discord**: Bot token or webhook URL for the target server/channel, rich embed support
  - Both platforms need: generated preview image, short caption, and a URL

- [ ] Source / generate a small set of abstract background images for the preview templates

## 📸 Photography Section

- [ ] Finalize the layout for the Photography albums page
  - Top section: **Tile Splash** — 9×9 grid element
  - Below: scrollable pane with album cards ("white keys"), each representing an album
  - Each album contains its own gallery of at least 9×9 photos

- [ ] Build out the **Tile Splash viewer** to support **Sets**
  - Each Set has a **cover image** — displayed on the tile in the Tile Splash
  - Cover is not included in the Set's scroll/gallery view
  - Viewer supports scrolling through multiple photos within a Set (gallery-style)
  - Tile Splash should be able to display multiple Sets

## 🧠 Agent Memory & claude.md

- [ ] Scaffold a universal agent project file (currently `claude.md`) — portable across Claude, GPT, local models, or any future agent
  - When existing `claude.md` is available, merge and reconcile both into one master brief
  - Any agent should be able to read it cold and immediately understand the project
  - Reference to this to-do list
  - Site terminology and naming conventions (Tile Splash, Sets, White Keys, etc.)
  - Site map progress — pages built, pages planned
  - Post log / catalog (see below)

- [ ] Build out a **Post Log** inside `claude.md` — updated after every post/announcement
  - Fields per entry: date, platform(s), post type (page / project / photo set / other), caption or headline used, URL shared
  - Gives the agent memory of what's been said, when, and how — avoiding repetition
  - Also feeds the site's public-facing timeline feature

## 🔄 Ongoing — Agent File Maintenance

- [ ] Merge this to-do and site context into the existing `claude.md` once available
- [ ] Keep the agent file updated as a living document — not a one-time setup
  - Add new to-do items here AND reflect them in the agent file
  - Log completed work into the agent file so future sessions know what's done
  - Update post log after every announcement or social post
  - Update site map section as new pages/sections go live
  - Update naming conventions if terminology evolves (e.g. Sets, Tile Splash, White Keys)
- [ ] Ensure the agent file stays portable — clean enough for any agent to read cold

## 🤖 Agent Integration — Research & Setup

> Research phase: adding Claude Code as an active agent in the project workflow.
> Two distinct paths — local CLI for active dev, cloud via GitHub Actions for issue-driven work.

---

### Path 1 — Local (Claude Code CLI)
- [ ] Install Claude Code CLI globally
  - Requires Node.js 18+ (Node 22 LTS recommended)
  - Install: follow setup at https://claude.ai/code
  - Authenticate via OAuth flow linking your Anthropic account, or set `ANTHROPIC_API_KEY` env var
- [ ] Run `claude` in the project directory during active dev sessions
  - Has full access to local files, git, and terminal tools
  - Use `--dangerously-skip-permissions` / Auto mode for longer unattended runs
  - Background agents can run tasks while you stay focused: `& npm run dev` style
- [ ] Keep `CLAUDE.md` in the project root — CLI reads it on every session for context

---

### Path 2 — Cloud via GitHub Issues & Actions
> Agent runs on GitHub's infrastructure. No local CLI required. Triggered by issue assignment or `@claude` mentions.

#### One-time setup steps:
- [ ] **Install the Claude GitHub App** on your repository
  - Visit https://github.com/apps/claude and install to your repo
- [ ] **Add API key to GitHub Secrets**
  - Go to repo Settings → Secrets → Actions → New secret
  - Name: `ANTHROPIC_API_KEY`, value: your Anthropic API key
  - Never commit the key directly to the repo
- [ ] **Add the workflow file** — create `.github/workflows/claude.yml` in your repo
  - This defines what triggers the agent and what it's allowed to do
  - Minimum permissions needed:
    - `contents: write` — read files, create/push branches
    - `pull-requests: write` — open and update PRs
    - `issues: write` — read issues, post comments
  - Uses `anthropics/claude-code-action@v1` as the Action

#### How it works once set up:
- Assign an issue to Claude or comment `@claude fix X` on any issue or PR
- Agent reads the issue, checks out the repo, reads `CLAUDE.md` for your project conventions
- Creates a branch, makes the changes, runs any configured checks
- Opens a PR back to your repo for your review — you decide what merges

#### Agent identity:
- Runs as `claude[bot]` — no separate GitHub account needed
- You own the API key and control all permissions via the workflow file
- `CLAUDE.md` is the agent's briefing document — keep it current

---

### Notes on both paths:
- [ ] Decide which model tier to use per path
  - Local/interactive: Sonnet is the workhorse, Opus for complex reasoning tasks
  - GitHub Actions: defaults to Sonnet — switch to Opus in workflow config for harder tasks
- [ ] `CLAUDE.md` serves both paths — one file, keep it the single source of truth
- [ ] Agent branch (`agent`) + GitHub Action = cloud path's build pipeline (ties into the two build paths already defined above)

---

### 🔍 Agent Self-Diagnostic Block (for CLAUDE.md)
> The following should be folded into `CLAUDE.md` verbatim or adapted.
> It gives the agent the context to check its own access and surface clear errors.

---

**AGENT: On every session start, verify the following before taking any action:**

#### API & Authentication
- Confirm `ANTHROPIC_API_KEY` is present and valid — if missing or rejected, halt and report:
  > "ANTHROPIC_API_KEY is missing or invalid. No actions can be taken. The repository owner needs to add or rotate the key under Settings → Secrets → Actions."
- If running via GitHub Actions, confirm the workflow has the correct permissions block:
  - `contents: write` — required to read files and push branch changes
  - `pull-requests: write` — required to open and update PRs
  - `issues: write` — required to read issues and post comments
  - If any permission is missing, report which one and what it blocks

#### GitHub App Access
- Confirm the Claude GitHub App is installed on this repository
- If issues or PRs are not readable, report:
  > "Claude GitHub App may not be installed or may lack access to this repository. Visit https://github.com/apps/claude to check installation."

#### Branch Access
- Confirm the `agent` branch exists and is accessible
- If pushing to `agent` branch fails, report the error and do not attempt to push to `main` directly
- All agent work goes to the `agent` branch — never commit directly to `main`

#### CLAUDE.md / Project Context
- Confirm `CLAUDE.md` is present in the project root and was loaded
- If missing, report:
  > "CLAUDE.md not found. Proceeding without project context — results may not follow site conventions. Please restore CLAUDE.md to the project root."

#### General Fallback
- If any check above fails, do not silently proceed
- Surface a clear, specific error message describing what is missing and what the repository owner needs to do to fix it
- Do not guess or work around missing access — report and halt

---

## 👤 Joel vs 🤖 Agent — Touch Point Responsibility Matrix

> Ongoing. Every process, account, workflow step, or code interaction needs to be tagged.
> Joel's touch points are hard blockers — the agent cannot proceed past them without Joel's action.
> This section grows as new workflows are added. When in doubt, default to Joel as the blocker.

---

### Legend
- 👤 **Joel** — must be done by Joel personally (login, approval, account creation, merge, release)
- 🤖 **Agent** — agent handles autonomously
- 🔀 **Handoff** — agent prepares, Joel approves before anything moves forward

---

### Accounts & Access Setup *(one-time, but Joel-only)*
- 👤 Create and own the Anthropic account and API key
- 👤 Add `ANTHROPIC_API_KEY` to GitHub repository secrets
- 👤 Install the Claude GitHub App on the repository (https://github.com/apps/claude)
- 👤 Create and own the Twitter/X developer app and OAuth credentials
- 👤 Add Twitter/X API credentials to GitHub secrets for the social post pipeline
- 👤 Create and own the Discord bot token or webhook URL
- 👤 Add Discord credentials to GitHub secrets
- 👤 Create the `agent` branch from `main` initially
- 👤 Set branch protection rules on `main` — no direct pushes, PRs required

---

### Day-to-Day Development
- 🤖 Agent works on the `agent` branch only — never touches `main` directly
- 🤖 Agent creates branches, edits files, runs build tasks, opens PRs
- 🤖 Agent reads `CLAUDE.md` for context and conventions at session start
- 🤖 Agent self-diagnoses missing access and reports to Joel before proceeding
- 👤 Joel assigns issues to the agent or triggers it via `@claude` mention
- 👤 Joel reviews every PR the agent opens before anything merges
- 🔀 Agent opens PR → Joel reviews, requests changes if needed, then approves
- 👤 Joel merges approved PRs into `main` — agent never merges
- 👤 Joel resolves any merge conflicts on `main`

---

### Build Pipeline
- 🤖 Agent build: agent pushes to `agent` branch → `agent-build.yml` Action fires automatically
- 👤 User build: Joel pushes to `main` → `user-build.yml` Action fires as safety net
- 👤 Joel verifies minified output locally before committing in user build path
- 🔀 Agent-generated minified files are produced by GitHub Action — Joel reviews in PR before merge

---

### Deployments & Go-Live
- 👤 Joel is the final gate before anything goes to GitHub Pages / live site
- 👤 Joel approves the merge that triggers the live deployment
- 🤖 Agent may prepare the deployment-ready branch but cannot deploy independently
- [ ] **TODO**: Define and document the exact deployment trigger — is it the merge to `main` that deploys, or a separate step Joel kicks off manually?

---

### Social Posting Pipeline
- 🤖 Agent drafts the social preview image and caption
- 🔀 Agent presents the draft → Joel reviews and approves before posting
- 👤 Joel owns the Twitter/X and Discord accounts — agent posts on Joel's behalf only after approval
- 🤖 Agent logs the post to `CLAUDE.md` post log after Joel confirms it went out
- [ ] **TODO**: Decide if Joel wants a manual confirm step before every post, or a review window (e.g. 30 min to cancel) before auto-post

---

### Ongoing Maintenance
- [ ] As new workflows are added, tag every step as 👤 Joel, 🤖 Agent, or 🔀 Handoff
- [ ] Fold this matrix into `CLAUDE.md` so the agent always knows its lane
- [ ] Revisit and tighten permissions over time as trust in the agent workflow grows

---

## 💬 Agent Communication & Flagging System

> Research and build phase. Defines how the agent asks questions, sends alerts, and gets answers back.
> This section gets ported into both `humans.md` (Joel's reference) and `CLAUDE.md` (agent's instructions).

---

### Proposed Communication Flow
- 🤖 Agent hits a blocker, needs clarification, or has a high-token/complex task decision
- 🤖 Agent **bundles all pending questions** into a single comment on the relevant GitHub issue (saves tokens vs asking one at a time)
- 🤖 Agent sends a **Discord ping** to Joel via webhook: short message, links directly to the GitHub issue comment
- 👤 Joel sees the Discord ping, goes to the GitHub issue, replies in the thread
- 🤖 Agent reads Joel's reply from the GitHub issue comment on next run and continues

---

### Research Items
- [ ] **Discord webhook setup** — outbound only, no bot account needed for sending pings
  - Agent makes an HTTP POST to the webhook URL with the alert message
  - Webhook URL stored as a GitHub secret — never hardcoded
  - Message should include: issue number, brief summary of blocker, direct link to the GitHub comment
- [ ] **GitHub issue comment as Q&A thread** — agent posts bundled questions, Joel replies in thread
  - Agent reads the reply on next invocation via GitHub API (already available in the Action context)
  - No additional polling infrastructure needed
- [ ] **Decide on Discord target** — DM to Joel or a private channel in Joel's server
  - Private channel recommended: keeps a searchable log of all agent alerts
- [ ] **Bundling logic** — agent should collect all questions before pinging, not ping per question
  - Exception: if a single blocker is hard-stopping all progress, ping immediately
  - Otherwise batch and send together to minimize interruptions and token overhead
- [ ] **Flagging system for high-token or complex tasks**
  - If a task exceeds a token threshold or requires a judgment call, agent flags before proceeding
  - Agent describes what it *would* do, asks for confirm before taking action
  - Joel replies on GitHub issue: "proceed", "stop", or revised instructions

---

### Files to Create / Update
- [ ] **Create `humans.md`** — Joel's reference guide
  - Where the agent will ping you (Discord channel or DM)
  - What the ping will look like and what to do when you get one
  - Where to reply (GitHub issue thread on the relevant issue)
  - How to tell the agent to proceed, stop, or change course
  - How to reply to bundled questions (can answer inline, numbered, or in one block)
- [ ] **Update `CLAUDE.md`** — agent's communication instructions
  - When to send a Discord ping (blockers, bundled questions, high-token flags)
  - How to format the GitHub issue comment with questions (numbered list, clear and concise)
  - How to read Joel's replies from the issue thread
  - Never proceed past a hard blocker without a reply — report and wait
  - Bundle questions before pinging unless a single issue is fully blocking all progress

---

## 📏 Task Sizing & Complexity Rating

> T-shirt sizing system used by both Joel and the agent to scope, rate, and communicate task complexity before work begins.
> Agent should assess and declare its sizing estimate before starting any task, and flag if a task grows beyond its initial size mid-work.

---

### Size Definitions

**S — Small**
- Single language, single concern
- May touch multiple files but each change is straightforward and easy to trace
- Low risk of unintended side effects
- Examples: fix a CSS hover color, update a copy string, swap an icon, fix a broken link

**M — Medium**
- 2 or fewer languages involved
- 2–3+ files changed or affected
- Requires understanding how pieces connect but scope is still contained
- Examples: update a nav component that affects HTML structure and CSS, add a new footer icon with JS interaction, fix a bug that spans a template and a stylesheet

**L — Large**
- Near full-stack in scope — touches HTML, JavaScript, CSS, and/or a platform or third-party API
- High number of files affected or significant logic changes
- Higher risk of side effects across the codebase
- Examples: building the Tile Splash viewer with Sets, wiring up the social preview pipeline, setting up the GitHub Actions agent workflow

**XL — Extra Large** *(implicit escalation tier)*
- Anything that spans multiple L-sized concerns, requires architectural decisions, or touches deployment/infrastructure
- Agent should not begin XL tasks without explicit Joel approval and a written plan first
- Examples: full build pipeline setup, agent communication system end-to-end, new section of the site from scratch

---

### Agent Sizing Protocol
- [ ] Before starting any task, agent declares its size estimate and a one-line reason
  - Example: `"Sizing this as M — touching 2 files (HTML + CSS), single language concern"`
- [ ] If a task grows beyond its initial size mid-work, agent stops and flags Joel before continuing
  - Example: `"This started as S but I've found it affects 4 files across JS and CSS — re-sizing to M, flagging before I proceed"`
- [ ] XL tasks always require a written plan posted to the GitHub issue for Joel to approve before any code is touched
- [ ] Size estimates get logged alongside the task in the post log / change log over time — builds a calibration record

---

### Files to Update
- [ ] Add sizing definitions to `CLAUDE.md` so agent always has the rubric
- [ ] Add sizing legend to `humans.md` so Joel can read and challenge the agent's estimates
- [ ] Tag existing to-do items with a size estimate as part of the migration pass into humans/claude files

---

## 📁 File System & Agent Hierarchy Clarification

> Four files, four audiences. Everything in the to-do migrates into one or more of these.

---

### The Four Files

**`todo.md`** — The inbox
- Everything lands here first with full detail
- Gets migrated out into the other files during review sessions
- Not an agent instruction file — it's the staging area

**`humans.md`** — Joel's reference
- Process documentation written for a human
- Version and change log
- Where and how to respond to agent alerts
- Task sizing legend from Joel's perspective
- Constantly updated as processes evolve

**`agents.md`** — Universal agent boilerplate *(new file to create)*
- Broad project context any agent needs to get up and running
- Platform-agnostic — written for Claude, GPT, Gemini, local models, or anything else
- Covers: project overview, naming conventions, file structure, sizing system, communication expectations, branch conventions
- Goal: minimal setup friction, any agent reads this and can function on the project
- Does NOT include Claude-specific syntax or tool references

**`CLAUDE.md`** — Claude's operating manual
- Inherits everything from `agents.md` and goes deeper
- Claude-specific instructions, tool usage, MCP config, GitHub Action behavior
- Lead agent protocols: XL task questioning, bundled Q&A, Discord ping format, self-diagnostics
- Purpose-driven — Claude is the lead agent, this file reflects that responsibility

---

### XL Task Protocol Update
- [ ] XL tasks require the agent to run a **line of questioning pass first**
  - Before writing a plan, agent surfaces all unknowns, assumptions, and possible oversights as a bundled question set to Joel
  - Joel answers, agent then writes the plan incorporating those answers
  - Plan gets posted to the GitHub issue for Joel's approval before any code is touched
  - Only after plan approval does the agent begin work
  - This two-step (questions → plan → approval → work) prevents large efforts going sideways from unaddressed unknowns

---

### Migration To-Do
- [ ] Create `agents.md` as the universal boilerplate agent file
- [ ] Audit existing `CLAUDE.md` and fold in what we've built here
- [ ] Migrate all relevant to-do sections into their target files:
  - Sizing system → `agents.md` + `humans.md`
  - Communication/flagging protocol → `agents.md` + `CLAUDE.md` + `humans.md`
  - Joel vs Agent touch point matrix → `humans.md` + `CLAUDE.md`
  - Self-diagnostic block → `CLAUDE.md`
  - Agent setup steps → `humans.md`
  - XL task protocol → `agents.md` + `CLAUDE.md` + `humans.md`
- [ ] Add a header to `todo.md` explaining its role as the inbox and the four-file system