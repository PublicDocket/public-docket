/*
  THE PUBLIC DOCKET — case data
  -----------------------------
  Each object below is one case breakdown. To publish a new case,
  copy an entry, change every field, and add it to the top of the
  CASES array. See README.md for the full field guide and the
  standards checklist to run through before publishing.

  The three cases here are SAMPLE / PLACEHOLDER entries so you can
  see the layout working. Delete them once you have real ones.
*/

const CASES = [
  {
    docket: "SAMPLE-003",
    title: "State v. [Defendant Name]",
    court: "Washtenaw County 22nd Circuit Court",
    room: "Courtroom 4",
    date: "2026-08-19",
    type: "Criminal — Felony",
    status: "In progress",
    reporters: ["A. Rivera", "J. Okafor"],
    summary:
      "A pretrial motions hearing over whether evidence from a traffic stop can be used at trial. We watched both sides argue the Fourth Amendment question in front of the judge.",
    background:
      "This is placeholder text. Describe, in a few sentences, how the case got here: the underlying incident in plain terms, the charges filed, and why this particular hearing was scheduled. Avoid speculation about guilt — describe only what is in the public record and what happened in the room.",
    parties:
      "Placeholder. List the parties and roles as stated in open court: defendant, prosecuting attorney, defense counsel, presiding judge. Use full names only as they were used in open court and appear on the public docket. Never name a juvenile, a confidential informant, or a victim of a sexual offense, even if you heard the name said aloud.",
    observed:
      "Placeholder. This is the heart of the breakdown — a plain, chronological account of what actually happened while you were in the room: who spoke, what arguments were made, what the judge asked, what was decided or held over. Write it the way you'd explain it to a classmate who wasn't there.",
    concepts:
      "Placeholder. Name 1–3 legal concepts that came up (e.g., 'motion to suppress,' 'probable cause,' 'chain of custody') and explain each in a sentence or two of plain language, the way a civics class would.",
    outcome:
      "Placeholder. What did the judge actually rule, or what is scheduled next? If nothing was decided yet, say that plainly and note the next date if one was given in court.",
    reflection:
      "Placeholder. One or two sentences, in the observer's own voice, on what surprised them or what they'd want a reader to understand about how this part of the courthouse actually works."
  },
  {
    docket: "SAMPLE-002",
    title: "In re: [Case Name] (Small Claims)",
    court: "Ann Arbor 15th District Court",
    room: "Courtroom 1",
    date: "2026-07-30",
    type: "Civil — Small Claims",
    status: "Resolved",
    reporters: ["M. Chen"],
    summary:
      "A landlord-tenant dispute over a security deposit, heard start to finish in about twenty minutes — a good example of how fast small claims moves.",
    background:
      "Placeholder. Small claims cases are often self-represented, so note whether each side had a lawyer and give one sentence on the dispute (e.g., dollar amount and general subject) without editorializing about who was right.",
    parties:
      "Placeholder. Plaintiff, defendant, and judge (or magistrate) as identified in open court.",
    observed:
      "Placeholder. Small claims hearings move fast and informally — describe the order of events: who presented first, what evidence was shown (receipts, photos, texts), and how the judge questioned each side.",
    concepts:
      "Placeholder. E.g., 'burden of proof in civil cases,' 'what counts as evidence without a formal discovery process.'",
    outcome:
      "Placeholder. State the judgment amount or ruling exactly as given in court.",
    reflection:
      "Placeholder note from the observer."
  },
  {
    docket: "SAMPLE-001",
    title: "People v. [Defendant Name] (Arraignment)",
    court: "Washtenaw County 22nd Circuit Court",
    room: "Courtroom 2",
    date: "2026-07-14",
    type: "Criminal — Arraignment",
    status: "Closed",
    reporters: ["A. Rivera"],
    summary:
      "Our first visit — a full morning of arraignments, showing how many cases a court handles in a single session and how brief each one is.",
    background:
      "Placeholder. Explain that an arraignment is where a defendant is formally told the charges and enters a plea — this is often the very first public hearing in a case.",
    parties:
      "Placeholder.",
    observed:
      "Placeholder. Note how many cases were called, roughly how long each took, and describe one or two in more detail as examples.",
    concepts:
      "Placeholder. E.g., 'arraignment vs. trial,' 'reading of rights,' 'bail/bond decisions.'",
    outcome:
      "Placeholder.",
    reflection:
      "Placeholder."
  }
];
