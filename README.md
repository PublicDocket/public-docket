# The Public Docket

A website for publishing student-written breakdowns of public courtroom
trials. Plain HTML/CSS/JS — no build tools, no server, no database. Anyone
in the group can add a new case by editing one file.

## Files

| File          | What it's for                                              |
|---------------|-------------------------------------------------------------|
| `index.html`  | Page shell — header, nav, footer. Rarely needs editing.     |
| `styles.css`  | All visual styling.                                          |
| `data.js`     | **The case breakdowns live here.** Edit this to publish.     |
| `app.js`      | Renders pages from `data.js`. Don't need to touch this.      |

## Adding a new case breakdown

1. Open `data.js`.
2. Copy one of the existing entries (the whole `{ ... }` block) and paste
   it at the **top** of the `CASES` array.
3. Fill in every field — see the field guide below.
4. Save the file and refresh the site. That's it — no build step.
5. Before publishing, run the new write-up through the checklist on the
   **Standards** page of the site itself.

### Field guide

- `docket` — a unique ID for this case, e.g. `"2026-014"`. Never reuse one.
- `title` — the case name as it appears on the public docket (e.g. `"State v. Doe"`).
- `court` — the court's full name.
- `room` — courtroom number/name, if you know it.
- `date` — the date you observed, as `"YYYY-MM-DD"`.
- `type` — short case category, e.g. `"Criminal — Felony"`, `"Civil — Small Claims"`, `"Family Court"`.
- `status` — one of `"In progress"`, `"Resolved"`, or `"Closed"` (controls the colored tag).
- `reporters` — array of initials or names of whoever observed/wrote it, e.g. `["A. Rivera"]`.
- `summary` — 1–2 sentences, shown in the docket list.
- `background`, `parties`, `observed`, `concepts`, `outcome`, `reflection` — the seven-section write-up body (see the Standards page for what each section should cover).

**Before you publish a real case:** re-read the "How we report" checklist
on the Standards page — in particular, never name a minor, a
sexual-assault complainant, or a protected witness, even if the name was
said out loud in court.

## Publishing the site for free

The whole site is just static files, so any of these work and cost
nothing:

**GitHub Pages (recommended)**
1. Create a free GitHub account and a new repository.
2. Upload these four files (`index.html`, `styles.css`, `data.js`, `app.js`) to the repo.
3. Go to the repo's **Settings → Pages**, set the source to the `main` branch, root folder.
4. GitHub gives you a live URL like `https://yourgroup.github.io/repo-name/` within a minute or two.
5. To publish a new case later: edit `data.js` in the browser on GitHub (pencil icon) and commit — the live site updates automatically.

**Netlify Drop**
1. Go to Netlify's drag-and-drop deploy page.
2. Drag the folder containing all four files onto the page.
3. You get a live URL instantly. Free account lets you redeploy by dragging the folder again after edits.

**Your school's own web space**, if it has one — just upload the four files via FTP or whatever tool the school uses; no special server configuration is needed.

## Customizing

- **Name/branding:** change the text in the `.wordmark` link in `index.html` and the footer text.
- **Colors:** all colors are CSS variables at the top of `styles.css` (the `:root` block) — change them there and they update everywhere.
- **Contact info / meeting details:** edit the `renderJoin()` function in `app.js`, or just edit the placeholder text there directly.
