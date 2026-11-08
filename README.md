# Harold F. B. Tate — Portfolio

A responsive personal portfolio for Harold F. B. Tate, focused on junior Python backend and applied AI opportunities.

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

This is a static Vite site and can be deployed to any static host.

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

## Content sources

- `uploads/Tate_ee71.pdf` is the preserved source CV.
- `public/Harold-F-B-Tate-CV.pdf` is the downloadable copy served by the site.
- Magic Chess facts and published results are from the [GSTU public diploma abstract](http://elib.gstu.by/handle/220612/51534).
- Afidi and Les Marinettes descriptions reflect their public websites.
