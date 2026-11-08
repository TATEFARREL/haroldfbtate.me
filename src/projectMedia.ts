export type ProjectMedia = {
  id: string
  type: 'image' | 'video'
  src: string
  title: string
  description: string
  alt?: string
}

/**
 * These paths are intentionally stable. Adding the named files under
 * public/project-media/magic-chess makes them appear without component edits.
 */
export const magicChessMedia: ProjectMedia[] = [
  {
    id: 'prototype',
    type: 'image',
    src: '/project-media/magic-chess/prototype-overview.webp',
    title: 'Prototype overview',
    description: 'A clear view of the complete board, camera, and gantry assembly.',
    alt: 'Magic Chess physical prototype showing the chessboard and gantry',
  },
  {
    id: 'vision',
    type: 'image',
    src: '/project-media/magic-chess/vision-detection.webp',
    title: 'Vision pipeline',
    description: 'A real detection frame with board mapping and piece labels visible.',
    alt: 'Magic Chess computer-vision detection output',
  },
  {
    id: 'gantry',
    type: 'image',
    src: '/project-media/magic-chess/gantry-detail.webp',
    title: 'Gantry detail',
    description: 'A close-up of the Cartesian actuation hardware and piece interface.',
    alt: 'Magic Chess Cartesian gantry mechanism',
  },
  {
    id: 'demo',
    type: 'video',
    src: '/project-media/magic-chess/system-demo.mp4',
    title: 'System demonstration',
    description: 'A short move-to-detection-to-actuation demonstration.',
  },
]
