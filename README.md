# Harold F. B. Tate — evidence-led portfolio

A responsive, multi-page portfolio for a junior Python backend and applied-AI engineer.
The information architecture separates shipped/public evidence, academic work, incomplete
archives, and planned demonstrations.

## Site map

| Route | Purpose |
| --- | --- |
| `/` | 30-second recruiter overview, selected evidence, Demo Lab, and Notes previews |
| `/work` | Selected work, Demo Lab roadmap, and restrained archive |
| `/work/:slug` | Data-driven project log with role, croquis, log, decisions, evidence, media, and next steps |
| `/about` | Precise experience, overlapping education timeline, languages, CV, and contact |
| `/notes` | Engineering-note index and honest reading-note empty state |
| `/notes/:slug` | Dedicated sourced note |
| `/notebook` | Compatibility alias for `/notes` |

Unknown paths render an in-app 404 page.

## Local development

Requires Node.js 22+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Quality checks

```bash
npm run lint
npm test
npm run build
```

The production output is written to `dist/`.

## Deploy

This is a Vite single-page application and can be deployed to any static host.

1. Run `npm run build`.
2. Publish the `dist/` directory.
Common provider settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `22` |

No runtime environment variables or external APIs are required.

### SPA fallback

The host must rewrite requests that do not match a real static file to `/index.html`.
This allows direct visits and refreshes on routes such as `/work/afidi`.

- **Netlify:** add `/* /index.html 200` to `public/_redirects`.
- **Vercel:** configure a catch-all rewrite to `/index.html`.
- **Nginx:** use `try_files $uri $uri/ /index.html;`.

Vite's development and preview servers already provide this fallback.

## Content sources

- `uploads/Tate_ee71.pdf` is the preserved source CV.
- `public/Harold-F-B-Tate-CV.pdf` is the downloadable copy served by the site.
- Magic Chess facts and published results are from the [GSTU public diploma record](http://elib.gstu.by/handle/220612/51534).
- The public [`Defence-work-Chess` repository](https://github.com/TATEFARREL/Defence-work-Chess)
  is currently empty and is linked only as a public record, not implementation evidence.
- Afidi and Les Marinettes descriptions reflect their resolving public websites. Harold's
  CV lists both as selected pet projects, but does not document his exact responsibilities.
- The current Les Marinettes repository publicly documents a FastAPI/PostgreSQL/React
  application. The site does not infer Harold's personal scope from repository ownership.
- The distributed SLAE solver is labelled archived/coursework because its public snapshot
  contains implementation code alongside empty setup, test, benchmark, and README files.
- Corporate experience is sourced only from the CV. No corporate implementation is implied
  to be public.

## GitHub inventory policy

All 17 public repositories visible on 8 November 2026 were checked by metadata, tree,
README/code where present, primary language, and last push.
See [`GITHUB_INVENTORY.md`](GITHUB_INVENTORY.md) for the repository-by-repository record.

- **Selected:** `les-marinettes` (current shipped school platform) and
  `slae_distributed_solver` (honestly labelled academic/incomplete).
- **Archive:** `LesMarinettes`, `Hello-Python`, `Coding-dojo-py`, `learnflutter`,
  `CS1103_Unit6_Submission_uopeople`, and the superseded `portfolio`.
- **Profile/config:** `TATEFARREL`.
- **Stub:** `lesmarinettes-user-management` contains only a Dockerfile and requirements.
- **Empty/default-branch contents unavailable:** `Database-Web-Application-for-a-travel-agency`,
  `WPF-application-for-organizing-the-work-of-a-travel-agency`, `Defence-work-Chess`,
  `GSTUengbot`, `Multiplayer-network-Application-for-distributed-solution-of-SLAE-using-Jordan-Gauss-method`,
  `LesMarinettesEcole`, and `user-management`.

Empty, stub, profile, and weak learning repositories are omitted from selected work.

## Adding a note

Notes live in `src/notes.ts`.

1. Add a unique URL-safe `slug`.
2. Use a factual category, title, and summary.
3. Add short sections and a real source trail.
4. Do not date or characterize reading activity unless Harold supplies it.
5. Add/update route tests in `src/App.test.tsx`.

The entry automatically appears at `/notes` and resolves at `/notes/:slug`.

## Adding Magic Chess media

The gallery is upload-ready and displays intentional placeholders while files are absent.
See [`PROJECT_MEDIA.md`](PROJECT_MEDIA.md) for exact filenames, formats, content guidance,
and rights requirements. Adding the four named files under
`public/project-media/magic-chess/` requires no component changes.
