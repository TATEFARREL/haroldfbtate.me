export type Note = {
  slug: string
  title: string
  category: string
  summary: string
  sourceLabel: string
  sourceHref: string
  sections: { heading: string; body: string }[]
}

export const notes: Note[] = [
  {
    slug: 'sensorless-board-tradeoffs',
    title: 'A sensorless board moves complexity into software',
    category: 'Architecture decision',
    summary: 'A design note derived from the published Magic Chess architecture—not a claim about recent reading.',
    sourceLabel: 'Magic Chess thesis record',
    sourceHref: 'http://elib.gstu.by/handle/220612/51534',
    sections: [
      { heading: 'Context', body: 'The published diploma abstract describes board-state synchronization through planar homography and YOLO11n rather than sensors embedded in the board.' },
      { heading: 'Tradeoff', body: 'A simpler physical playing surface means camera geometry, lighting, occlusion, and calibration become first-class software concerns.' },
      { heading: 'What to document next', body: 'A useful follow-up would record calibration steps, lighting boundaries, recovery behavior, and repeatable occlusion tests.' },
    ],
  },
  {
    slug: 'physical-system-boundaries',
    title: 'Separate perception, rules, state, and motion',
    category: 'System design',
    summary: 'An engineering note on the boundaries visible in the published Magic Chess abstract.',
    sourceLabel: 'Magic Chess project log',
    sourceHref: '/work/magic-chess',
    sections: [
      { heading: 'Boundary map', body: 'Camera mapping and detection establish a board state; chess logic validates it; persistence records it; Cartesian actuation changes the physical board.' },
      { heading: 'Why separation helps', body: 'Explicit boundaries make each stage easier to inspect and test independently.' },
      { heading: 'Coordination cost', body: 'A physical move is correct only when perception, rules, durable state, and actuation agree. End-to-end failure handling therefore matters as much as any single component.' },
    ],
  },
  {
    slug: 'evidence-before-decoration',
    title: 'Evidence before decoration',
    category: 'Project documentation',
    summary: 'Why this portfolio labels missing media and undocumented responsibilities instead of filling gaps.',
    sourceLabel: 'Selected work index',
    sourceHref: '/work',
    sections: [
      { heading: 'Rule', body: 'A live link, public repository, thesis record, and CV entry prove different things. Each should be described at its actual evidentiary strength.' },
      { heading: 'Unknowns stay visible', body: 'When responsibilities or media are unavailable, the project log says “documentation pending” rather than substituting a polished story.' },
      { heading: 'Next contribution', body: 'Harold can strengthen each log with responsibility boundaries, approved screenshots, dates, collaborators, and a short retrospective.' },
    ],
  },
]
