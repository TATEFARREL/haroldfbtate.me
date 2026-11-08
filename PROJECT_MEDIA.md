# Magic Chess project media

The portfolio intentionally ships without invented project imagery. Add Harold's original
Magic Chess files at the exact paths below; the existing placeholders will replace
themselves automatically, with no React edits or manifest changes.

| File | What to add | Recommended export |
| --- | --- | --- |
| `public/project-media/magic-chess/prototype-overview.webp` | Complete board, camera, and gantry assembly | WebP, 1600 × 1000, under 500 KB |
| `public/project-media/magic-chess/vision-detection.webp` | Real detection output with board mapping and labels | WebP, 1600 × 1000, under 500 KB |
| `public/project-media/magic-chess/gantry-detail.webp` | Close-up of the Cartesian mechanism | WebP, 1600 × 1000, under 500 KB |
| `public/project-media/magic-chess/system-demo.mp4` | Short end-to-end system demonstration | MP4/H.264, 1080p, under 20 MB |

Only use media Harold owns or has permission to publish. Do not add stock chess
photography: these slots are evidence, not decoration.

For accessibility, the three image descriptions are already defined in
`src/projectMedia.ts`. If a new image's subject differs materially from the requested
shot, update its `alt` text there. Video should show captions when it contains speech.

After adding files, run:

```bash
npm run build
```

Vite copies the directory into the production build while preserving these URLs.
