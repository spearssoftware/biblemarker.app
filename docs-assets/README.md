# docs-assets

## seed-backup.json

A restore-ready BibleMarker backup containing a realistic "study in progress" of the
Gospel of John, chapter 1 (with a small spillover into chapter 3). Restore it before a
documentation/screenshot capture session so the app shows real-looking data instead of
an empty state.

**Backup format:** matches `BackupData` in `src/lib/backup.ts` of the app repo.
Authored against app version **3.2.1** (`version` field). The app validates structure,
not version equality, so it should restore on any 3.x build with the same schema.
Translation-anchored records reference the bundled ASV module (`moduleId: "sword-ASV"`).

### How to restore

1. Open BibleMarker.
2. Settings → Backup & Sync → **Restore from Backup**.
3. Pick `seed-backup.json`. Review the preview counts and confirm.
   (Restore **replaces all existing data** — the app makes a safety auto-backup first,
   but don't run this on a device with real study data you care about.)
4. Navigate to John 1 in the ASV translation.

### What's inside

| Data | Contents |
|---|---|
| Study | "Gospel of John", scoped to John. **Not active** (see note below). |
| Key word **light** | Gold highlight + sun symbol, scoped to John. Variant `lighteth` (added-as-a-match; it genuinely appears in ASV John 1:9). Auto-matches across John 1:4–9. |
| Key word **believe** | Green underline, global. Variants: believed / believes / believeth / believing — auto-matches John 1:7, 12 and John 3:15–18. |
| Key word **Word** | Blue highlight + book symbol, **case-sensitive** (capital W), scoped to John. Matches John 1:1 (x3) and 1:14. |
| Apply Key Word | The pronoun "it" in John 1:5 ("the darkness apprehended **it** not") carries a persisted highlight + symbol pair linked to the *light* key word — exactly what the app's **Apply Key Word** action creates. |
| People | John the Baptist (1:6), Jesus (1:29), Moses (1:17), Nicodemus (3:1). |
| Places | Bethany beyond the Jordan (1:28), Galilee (1:43) — with coordinates. |
| Time | "In the beginning" (1:1) and the repeated "On the morrow" (1:29, 35, 43), in chronological order. ASV wording; other translations say "The next day". |
| Observation list | "Names of Jesus in John 1" (linked to the *Word* key word): the Word, the Lamb of God, the Son of God, Rabbi, King of Israel. |
| Note | Verse note on John 1:14 (Markdown). |
| Chapter titles | John 1 "The Word Became Flesh", John 3 "You Must Be Born Again". |
| Section heading | "The Witness of John" before 1:19 (covers through 1:34). |
| Preferences | ASV, John 1, dark theme, sensible marking defaults. |

### Screenshot note: no active study

The seeded study exists but `isActive` is `false` on purpose. The keyword form's
**Study** field should read **"All Studies"** in tutorial screenshots
(per `docs/tutorials/04-marking-keywords.md`). If you activate the study while
capturing other screens, deactivate it again before shooting the keyword form.

### How the data anchors to text

Keyword matches are **not stored** — the app computes them live from each preset's
`word` + `variants` (see `src/lib/keywordMatching.ts`), so they render correctly in any
translation. The only text-anchored records are the two "Apply Key Word" annotations on
"it" in John 1:5: `startOffset: 68`, `endOffset: 70`, `wordIndex: 11`, derived from the
actual bundled ASV text (`And the light shineth in the darkness; and the darkness
apprehended it not.`). They render only in the ASV (`moduleId: "sword-ASV"`).

### Regenerating / editing

The file is plain JSON and safe to hand-edit; keep these rules:

- Every record needs a unique `id` (UUID) and ISO-string `createdAt`/`updatedAt`.
- Colors must be keys of `HIGHLIGHT_COLORS`, symbols keys of `SYMBOLS`
  (both in app repo `src/types/annotation.ts`). Books use OSIS ids (`John`, `Rom`).
- Presets need `variants` (array), `autoSuggest` (bool), `usageCount` (number ≥ 0),
  and at least one of `symbol` / `highlight`.
- If you add another Apply-Key-Word annotation, compute its character offsets against
  the ASV verse text. Extract it from the bundled module: unzip
  `src-tauri/resources/sword-ASV.zip` and read it with the logic in
  `src/lib/bible-api/sword-ztext.ts` + `stripOsis` from `src/lib/bible-api/sword.ts`
  (offsets are relative to the stripped plain verse text).
- Sanity-check the result by tracing app `src/lib/backup.ts#validateBackup`: it requires
  `version`, `timestamp`, and `data` with `preferences` (object) plus these arrays —
  `annotations`, `sectionHeadings`, `chapterTitles`, `notes`, `markingPresets`,
  `studies`, `multiTranslationViews`, `observationLists`, `applications`.
  Invalid individual records are silently skipped on restore, so a typo shows up as
  missing data, not an error.
