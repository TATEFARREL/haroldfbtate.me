export type ProjectStatus = 'Shipped' | 'Published thesis' | 'In progress' | 'Planned' | 'Archived/coursework'

export type Project = {
  slug: string
  title: string
  type: string
  status: ProjectStatus
  purpose: string
  stack: string[]
  brief: string
  role: string
  responsibilities: string[]
  architecture: string[]
  buildLog: { title: string; body: string }[]
  decisions: { title: string; body: string }[]
  evidence: { label: string; href: string; note: string }[]
  nextSteps: string[]
  selected?: boolean
  planned?: boolean
}

export const projects: Project[] = [
  {
    slug: 'magic-chess',
    title: 'Magic Chess',
    type: 'Independent diploma · mechatronics',
    status: 'Published thesis',
    purpose: 'Synchronize a physical chessboard with digital game state without sensors embedded in the board.',
    stack: ['FastAPI', 'YOLO11n', 'PostgreSQL', 'Arduino'],
    brief: 'A hardware–software system for training and conducting chess tournaments, joining camera-based perception, chess logic, durable state, and Cartesian actuation.',
    role: 'The GSTU abstract names Harold as author and says the diploma work was completed independently.',
    responsibilities: ['System design and development', 'Computer-vision synchronization', 'Asynchronous game logic', 'Persistent tournament history', 'Arduino gantry control'],
    architecture: ['Camera feed', 'Homography', 'YOLO11n detection', 'Chess rules', 'FastAPI + PostgreSQL', 'Arduino gantry'],
    buildLog: [
      { title: 'Study the field', body: 'Analyze existing automated chess systems.' },
      { title: 'Separate concerns', body: 'Define boundaries across perception, state, and actuation.' },
      { title: 'Close the loop', body: 'Connect detection, logic, persistence, and gantry control.' },
      { title: 'Measure', body: 'The public abstract reports 94.2 mAP50, 60 FPS, logic under 50 ms, and ±1.5 mm positioning.' },
    ],
    decisions: [
      { title: 'Vision instead of board sensors', body: 'The documented sensorless architecture simplifies the board surface while making lighting, occlusion, and calibration software concerns.' },
      { title: 'Separated service boundaries', body: 'Perception, state, rules, and actuation can be reasoned about independently, with coordination as the tradeoff.' },
      { title: 'Durable state', body: 'PostgreSQL is documented as the store for tournament history.' },
    ],
    evidence: [
      { label: 'GSTU public thesis record', href: 'http://elib.gstu.by/handle/220612/51534', note: 'Author, year, title, abstract, and reported results.' },
      { label: 'GitHub repository record', href: 'https://github.com/TATEFARREL/Defence-work-Chess', note: 'Empty repository; record only, not implementation evidence.' },
    ],
    nextSteps: ['Publish approved implementation and calibration documentation.', 'Add repeatable lighting, occlusion, and end-to-end failure tests.', 'Add original prototype media.'],
    selected: true,
  },
  {
    slug: 'les-marinettes',
    title: 'Les Marinettes',
    type: 'Bilingual school platform',
    status: 'Shipped',
    purpose: 'Present a bilingual school’s programs and contact path, with an administrative content workflow.',
    stack: ['FastAPI', 'PostgreSQL', 'React', 'TypeScript'],
    brief: 'The live French-language school site presents pedagogy, location, and enquiry details. A public repository documents a FastAPI API, PostgreSQL-backed content, and a React admin.',
    role: 'Listed on Harold’s CV and hosted in his public GitHub account. Exact personal responsibilities and collaborators are not documented.',
    responsibilities: ['Documentation pending — Harold should identify his scope, collaborators, and delivery responsibilities.'],
    architecture: ['Public site', 'FastAPI application', 'PostgreSQL content', 'React admin', 'Media storage'],
    buildLog: [
      { title: 'Earlier static prototype', body: 'A separate public HTML/CSS repository records an earlier school-site iteration.' },
      { title: 'Current application', body: 'The current repository documents FastAPI, an async SQLAlchemy/Alembic data layer, and a React/Vite admin.' },
      { title: 'Public delivery', body: 'The live domain currently serves the school’s public content and contact path.' },
    ],
    decisions: [
      { title: 'Content managed separately', body: 'The repository README describes public JSON content and an authenticated role-based admin.' },
      { title: 'Evidence boundary', body: 'Repository architecture is public; Harold’s precise contribution is not, so no ownership claim is made.' },
    ],
    evidence: [
      { label: 'Live school site', href: 'https://lesmarinettes.org/', note: 'Public, resolving site.' },
      { label: 'Current public repository', href: 'https://github.com/TATEFARREL/les-marinettes', note: 'README, source, tests, and CI are visible publicly.' },
      { label: 'Earlier static repository', href: 'https://github.com/TATEFARREL/LesMarinettes', note: 'Archived HTML/CSS/JavaScript iteration.' },
    ],
    nextSteps: ['Document Harold’s responsibilities and collaborators.', 'Add approved screenshots and delivery context.'],
    selected: true,
  },
  {
    slug: 'afidi',
    title: 'Afidi',
    type: 'Cameroon service marketplace',
    status: 'Shipped',
    purpose: 'Help people in Cameroon find verified, community-rated local professionals.',
    stack: ['Public web product', 'French-language UX'],
    brief: 'A live marketplace covering categories such as mechanics, carpentry, construction, retail, and painting, with verification and reviews presented as trust signals.',
    role: 'Afidi is listed as a selected pet project on Harold’s CV. No public source found documents his exact responsibilities or implementation stack.',
    responsibilities: ['Documentation pending — Harold should identify his role, technical scope, collaborators, and dates.'],
    architecture: ['Public marketplace', 'Professional discovery', 'Verification signals', 'Customer reviews'],
    buildLog: [{ title: 'Public release', body: 'The French-language product is currently accessible at afidipro.com.' }],
    decisions: [{ title: 'Evidence boundary', body: 'Only the live product and CV listing are used. No unverified implementation details are inferred.' }],
    evidence: [{ label: 'Live Afidi product', href: 'https://www.afidipro.com/fr', note: 'Resolving public website; listed on Harold’s CV.' }],
    nextSteps: ['Document Harold’s responsibilities, dates, and stack.', 'Add approved product media and a delivery retrospective.'],
    selected: true,
  },
  {
    slug: 'distributed-slae-solver',
    title: 'Distributed SLAE Solver',
    type: 'Academic experiment',
    status: 'Archived/coursework',
    purpose: 'Explore parallel Jordan–Gauss solving through a Python service and small React interface.',
    stack: ['Python', 'NumPy', 'FastAPI', 'React'],
    brief: 'A public academic experiment containing Gaussian and Jordan–Gauss routines, multiprocessing coordinator/worker code, a FastAPI surface, and an incomplete React interface.',
    role: 'Public repository under Harold’s account. Coursework context and exact authorship details are not documented.',
    responsibilities: ['Documentation pending — repository facts only.'],
    architecture: ['Matrix input', 'FastAPI route', 'Multiprocessing coordinator', 'Worker blocks', 'Result view'],
    buildLog: [{ title: 'Prototype snapshot', body: 'Code was last pushed 27 February 2026. Several setup, test, and benchmark files are empty.' }],
    decisions: [{ title: 'Archive honestly', body: 'The repository demonstrates an approach, but missing packaging, tests, and documentation prevent a production-ready claim.' }],
    evidence: [{ label: 'Public experiment repository', href: 'https://github.com/TATEFARREL/slae_distributed_solver', note: 'Source snapshot; incomplete documentation and scaffolding.' }],
    nextSteps: ['Add a runnable package and tests.', 'Explain the partitioning model and benchmark against a serial baseline.', 'Document whether this was coursework or independent study.'],
    selected: true,
  },
  {
    slug: 'catalog-retrieval-evaluation-lab',
    title: 'Catalog Retrieval Evaluation Lab',
    type: 'Demo Lab · applied AI',
    status: 'Planned',
    purpose: 'Demonstrate measurable hybrid catalog search and RAG evaluation without implying a finished system.',
    stack: ['FastAPI', 'PostgreSQL/pgvector', 'Evaluation harness'],
    brief: 'A planned, reproducible lab for comparing lexical, vector, and hybrid retrieval over a synthetic product catalog.',
    role: 'Roadmap item. No implementation, repository, or results exist yet.',
    responsibilities: ['Define a safe synthetic fixture set.', 'Implement retrieval baselines.', 'Measure relevance and citation quality.'],
    architecture: ['Synthetic catalog', 'Ingestion', 'Lexical + vector retrieval', 'Re-ranking', 'Evaluation report'],
    buildLog: [{ title: 'Planned', body: 'Architecture and acceptance criteria are defined; build work has not been published.' }],
    decisions: [{ title: 'Evaluation before claims', body: 'The demo will report a fixed dataset, baseline, metrics, and failure examples before any quality claim.' }],
    evidence: [],
    nextSteps: ['Acceptance: one-command local run.', 'Acceptance: fixed relevance judgments and baseline comparison.', 'Acceptance: inspectable citations and failure cases.'],
    selected: true,
    planned: true,
  },
  {
    slug: 'async-carbon-batch-api',
    title: 'Async Carbon Batch API',
    type: 'Demo Lab · backend systems',
    status: 'Planned',
    purpose: 'Demonstrate reliable asynchronous CO₂ calculation jobs and operational API boundaries.',
    stack: ['FastAPI', 'PostgreSQL', 'Kafka', 'Docker'],
    brief: 'A planned backend demo separating synchronous job control from idempotent batch calculation workers using synthetic activity data.',
    role: 'Roadmap item based on a generic problem domain; it will not expose or reproduce corporate source.',
    responsibilities: ['Design contracts and idempotency.', 'Model job state.', 'Implement retries, observability, and deterministic calculations.'],
    architecture: ['Job API', 'Outbox/event stream', 'Batch worker', 'Calculation rules', 'Status + result store'],
    buildLog: [{ title: 'Planned', body: 'No public implementation, repository, or outcome exists yet.' }],
    decisions: [{ title: 'Clean-room demo', body: 'Use synthetic inputs and independently written code; do not imply access to employer code.' }],
    evidence: [],
    nextSteps: ['Acceptance: idempotent retries and dead-letter behavior.', 'Acceptance: deterministic test fixtures.', 'Acceptance: traceable job status and local Docker setup.'],
    selected: true,
    planned: true,
  },
]

export const archive = [
  { name: 'LesMarinettes', note: 'Earlier static HTML/CSS school-site iteration; pushed February 2026.', href: 'https://github.com/TATEFARREL/LesMarinettes' },
  { name: 'Hello-Python', note: 'Tiny learning repository with two introductory scripts and a learning checklist.', href: 'https://github.com/TATEFARREL/Hello-Python' },
  { name: 'Coding-dojo-py', note: 'Small Python practice snapshot; two scripts and minimal README.', href: 'https://github.com/TATEFARREL/Coding-dojo-py' },
  { name: 'learnflutter', note: 'Small Dart syntax-learning experiment.', href: 'https://github.com/TATEFARREL/learnflutter' },
  { name: 'CS1103 Unit 6 submission', note: 'Coursework repository containing only a short README.', href: 'https://github.com/TATEFARREL/CS1103_Unit6_Submission_uopeople' },
  { name: 'portfolio', note: 'Older HTML portfolio; superseded by this site.', href: 'https://github.com/TATEFARREL/portfolio' },
]

export const omittedRepos = [
  'Database-Web-Application-for-a-travel-agency',
  'WPF-application-for-organizing-the-work-of-a-travel-agency',
  'Defence-work-Chess',
  'GSTUengbot',
  'Multiplayer-network-Application-for-distributed-solution-of-SLAE-using-Jordan-Gauss-method',
  'LesMarinettesEcole',
  'user-management',
]
