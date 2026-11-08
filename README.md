# Harold F. B. Tate — Portfolio

A responsive, multi-page technical portfolio for Harold F. B. Tate, focused on Python
backend, applied AI, and cyber-physical engineering work.

## Site map

| Route | Purpose |
| --- | --- |
| `/` | Concise recruiter overview, availability, and featured work |
| `/work` | Selected project index |
| `/work/magic-chess` | Full evidence-led Magic Chess case study |
| `/about` | Experience, capabilities, education, CV, and contact |
| `/notebook` | Curated engineering design notes |

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
3. Configure the custom domain `haroldfbtate.me` at the hosting provider.

Common provider settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `22` |

No runtime environment variables or external APIs are required.

### SPA fallback

The host must rewrite requests that do not match a real static file to `/index.html`.
This allows direct visits and refreshes on routes such as `/work/magic-chess`.

- **Netlify:** add `/* /index.html 200` to `public/_redirects`.
- **Vercel:** configure a catch-all rewrite to `/index.html`.
- **Nginx:** use `try_files $uri $uri/ /index.html;`.

Vite's development and preview servers already provide this fallback.

## Content sources

- `uploads/Tate_ee71.pdf` is the preserved source CV.
- `public/Harold-F-B-Tate-CV.pdf` is the downloadable copy served by the site.
- Magic Chess facts and published results are from the [GSTU public diploma abstract](http://elib.gstu.by/handle/220612/51534).
- The public [`Defence-work-Chess` repository](https://github.com/TATEFARREL/Defence-work-Chess)
  is currently empty and is linked only as a public record, not implementation evidence.
- Afidi and Les Marinettes descriptions reflect their public websites. Harold's CV lists
  both as selected pet projects, but does not document his exact responsibilities.

## Adding Magic Chess media

The gallery is upload-ready and displays intentional placeholders while files are absent.
See [`PROJECT_MEDIA.md`](PROJECT_MEDIA.md) for exact filenames, formats, content guidance,
and rights requirements. Adding the four named files under
`public/project-media/magic-chess/` requires no component changes.
