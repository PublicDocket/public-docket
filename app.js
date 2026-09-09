/* ============================================================
   THE PUBLIC DOCKET — app logic
   Plain hash-based routing so the whole site works as static
   files with no build step and no server required.
   Routes:  #/            home
            #/docket      list of all case breakdowns
            #/case/<no>   a single case breakdown
            #/about       mission + who we are
            #/standards   how we report, ethics checklist
            #/join        how to get involved
   ============================================================ */

const app = document.getElementById("app");
const navLinks = document.querySelectorAll("nav.site-nav a");

function statusClass(status) {
  const s = status.toLowerCase();
  if (s.includes("progress")) return "status-inprogress";
  if (s.includes("resolved")) return "status-resolved";
  return "status-closed";
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function findCase(docket) {
  return CASES.find((c) => c.docket === docket);
}

/* ---------- View renderers ---------- */

function renderHome() {
  const recent = CASES.slice(0, 3);
  return `
    <section class="hero wrap">
      <p class="hero-eyebrow">A student courtroom-observation project</p>
      <h1>Public trials, written up in public.</h1>
      <p class="lede">
        We sit in on open court proceedings, take careful notes, and publish
        plain-language breakdowns of what we actually saw — so that anyone
        can understand how their local courts work, not just the people
        who show up.
      </p>
      <div class="hero-actions">
        <a class="btn stamp-btn" href="#/docket">Read the docket</a>
        <a class="btn" href="#/join">Join the group</a>
      </div>
    </section>

    <section class="section wrap">
      <div class="section-head">
        <h2>Recently filed</h2>
        <a href="#/docket" style="font-family:var(--mono); font-size:0.8rem;">View all &rarr;</a>
      </div>
      <div class="docket-list">
        ${recent.map(renderDocketRow).join("")}
      </div>
    </section>

    <section class="section wrap">
      <div class="info-grid">
        <div class="info-card">
          <h4>What we do</h4>
          <p>Watch. Take notes. Write it up. Publish it.</p>
        </div>
        <div class="info-card">
          <h4>What this isn't</h4>
          <p>Legal advice, editorializing, or a verdict of our own.</p>
        </div>
        <div class="info-card">
          <h4>Who it's for</h4>
          <p>Anyone curious how the courthouse down the street actually works.</p>
        </div>
      </div>
    </section>
  `;
}

function renderDocketRow(c) {
  return `
    <a class="docket-row" href="#/case/${encodeURIComponent(c.docket)}">
      <div class="docket-no">${c.docket}</div>
      <div class="docket-main">
        <h3 class="docket-title">${c.title}</h3>
        <div class="docket-meta">
          <span>${c.court}</span>
          <span>${formatDate(c.date)}</span>
          <span>${c.type}</span>
        </div>
        <p class="docket-summary">${c.summary}</p>
      </div>
      <span class="status-tag ${statusClass(c.status)}">${c.status}</span>
    </a>
  `;
}

function renderDocket() {
  if (CASES.length === 0) {
    return `
      <section class="section wrap">
        <div class="section-head"><h2>The docket</h2></div>
        <div class="empty-state">No cases filed yet. Check back soon.</div>
      </section>
    `;
  }
  return `
    <section class="section wrap">
      <div class="section-head">
        <h2>The docket</h2>
        <span class="section-count">${CASES.length} case${CASES.length === 1 ? "" : "s"} filed</span>
      </div>
      <div class="docket-list">
        ${CASES.map(renderDocketRow).join("")}
      </div>
    </section>
  `;
}

function renderCase(docket) {
  const c = findCase(docket);
  if (!c) {
    return `
      <section class="section wrap">
        <a class="back-link" href="#/docket">&larr; Back to the docket</a>
        <div class="empty-state">No case found with docket number "${docket}".</div>
      </section>
    `;
  }
  return `
    <section class="section wrap">
      <a class="back-link" href="#/docket">&larr; Back to the docket</a>
      <article class="case-file" data-stamp="${c.status}">
        <div class="case-file-header">
          <h1>${c.title}</h1>
        </div>
        <dl class="meta-grid">
          <div><dt>Docket No.</dt><dd>${c.docket}</dd></div>
          <div><dt>Court</dt><dd>${c.court}</dd></div>
          <div><dt>Room</dt><dd>${c.room || "—"}</dd></div>
          <div><dt>Date observed</dt><dd>${formatDate(c.date)}</dd></div>
          <div><dt>Case type</dt><dd>${c.type}</dd></div>
          <div><dt>Reported by</dt><dd>${c.reporters.join(", ")}</dd></div>
        </dl>

        <div class="case-section">
          <h3>Summary</h3>
          <p>${c.summary}</p>
        </div>
        <div class="case-section">
          <h3>Background</h3>
          <p>${c.background}</p>
        </div>
        <div class="case-section">
          <h3>Who was in the room</h3>
          <p>${c.parties}</p>
        </div>
        <div class="case-section">
          <h3>What we observed</h3>
          <p>${c.observed}</p>
        </div>
        <div class="case-section">
          <h3>Legal concepts at play</h3>
          <p>${c.concepts}</p>
        </div>
        <div class="case-section">
          <h3>Outcome</h3>
          <p>${c.outcome}</p>
        </div>
        <div class="case-section reflection">
          <h3>Observer's note</h3>
          <p>${c.reflection}</p>
        </div>
      </article>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="section wrap prose">
      <h2>About the project</h2>
      <p>
        We're a group of high schoolers interested in the law. Once we
        started actually sitting in on public trials, we realized how much
        happens in courtrooms that almost nobody outside the building ever
        hears about — even though the hearings are open to anyone who
        walks in. This site is our attempt to close that gap.
      </p>
      <p>
        Every case on this site was observed in person, in an open,
        public courtroom, by a member of our group. We write up what we
        saw in plain language and publish it here so it's easy for anyone
        — a neighbor, a journalist, another student — to find.
      </p>

      <h3>What this project is not</h3>
      <p>
        We are students, not lawyers. Nothing on this site is legal
        advice, and nothing here should be read as our judgment on
        whether someone is guilty or liable. We report what was said and
        done in the courtroom and let readers draw their own conclusions.
      </p>

      <div class="callout">
        Spot a mistake in one of our write-ups? Corrections matter to us
        as much as they matter in real reporting — see the Join page for
        how to reach us.
      </div>
    </section>
  `;
}

function renderStandards() {
  return `
    <section class="section wrap prose">
      <h2>How we report</h2>
      <p>
        Courts are public, but the people in them are still people. Before
        anything gets published, every write-up goes through the same
        checklist:
      </p>
      <ul class="checklist">
        <li>Only cases and hearings that were open to the public — never anything closed, sealed, or in chambers.</li>
        <li>No names or identifying details for minors, sexual-assault complainants, or protected witnesses, even if they were said aloud in court.</li>
        <li>Facts only in the "what we observed" and "outcome" sections — no guesses about guilt, character, or motive.</li>
        <li>Direct quotes are used only when we're confident we captured them accurately; otherwise we paraphrase.</li>
        <li>A second member reads every breakdown before it's published.</li>
        <li>If a court's ruling or a case's status changes later, we update the write-up and note the correction.</li>
      </ul>

      <h3>Our standard format</h3>
      <p>Every case breakdown follows the same seven sections, so readers always know where to find something:</p>
      <ol>
        <li><strong>Summary</strong> — two or three sentences, the whole case at a glance.</li>
        <li><strong>Background</strong> — how the case got to this hearing.</li>
        <li><strong>Who was in the room</strong> — parties and roles, as stated in open court.</li>
        <li><strong>What we observed</strong> — a plain, chronological account of the hearing itself.</li>
        <li><strong>Legal concepts at play</strong> — one to three terms or ideas, explained simply.</li>
        <li><strong>Outcome</strong> — the ruling, or what's scheduled next.</li>
        <li><strong>Observer's note</strong> — a short, first-person reflection, clearly marked as opinion.</li>
      </ol>

      <h3>Courtroom etiquette</h3>
      <p>
        Before your first visit: check in with court security, dress like
        you would for a job interview, silence your phone, never record
        audio or video without asking the clerk (most courts don't allow
        it), and if a judge or bailiff asks you to step out or stop taking
        notes, do it immediately and without arguing.
      </p>
    </section>
  `;
}

function renderJoin() {
  return `
    <section class="section wrap prose">
      <h2>Join the group</h2>
      <p>
        No experience with law is required — just curiosity and a
        willingness to sit quietly and pay attention for an hour or two.
        New members usually shadow an experienced observer for their
        first visit before writing one up on their own.
      </p>
      <div class="info-grid">
        <div class="info-card">
          <h4>Meets</h4>
          <p>Edit this — day &amp; time</p>
        </div>
        <div class="info-card">
          <h4>Where</h4>
          <p>Edit this — room / location</p>
        </div>
        <div class="info-card">
          <h4>Contact</h4>
          <p>Edit this — email or form link</p>
        </div>
      </div>
      <h3>What a first visit looks like</h3>
      <ol>
        <li>Check the local courthouse's public docket for open hearings that week.</li>
        <li>Go with a partner and an experienced member if it's your first time.</li>
        <li>Take notes by hand — most courthouses don't allow laptops or recording in the gallery.</li>
        <li>Draft your write-up within a day or two, while it's fresh, using the standard format.</li>
        <li>Send it for a second read before it's published.</li>
      </ol>
      <div class="callout">
        Replace the contact card above with a real email address, or link
        to a Google Form, before you publish this site.
      </div>
    </section>
  `;
}

/* ---------- Router ---------- */

function parseRoute() {
  const hash = window.location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);
  return parts;
}

function render() {
  const parts = parseRoute();
  let html = "";
  let activeRoute = "home";

  if (parts.length === 0) {
    html = renderHome();
    activeRoute = "home";
  } else if (parts[0] === "docket") {
    html = renderDocket();
    activeRoute = "docket";
  } else if (parts[0] === "case" && parts[1]) {
    html = renderCase(decodeURIComponent(parts[1]));
    activeRoute = "docket";
  } else if (parts[0] === "about") {
    html = renderAbout();
    activeRoute = "about";
  } else if (parts[0] === "standards") {
    html = renderStandards();
    activeRoute = "standards";
  } else if (parts[0] === "join") {
    html = renderJoin();
    activeRoute = "join";
  } else {
    html = `<section class="section wrap"><div class="empty-state">Page not found.</div></section>`;
  }

  app.innerHTML = html;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.route === activeRoute);
  });
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
