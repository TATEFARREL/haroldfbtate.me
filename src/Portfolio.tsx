import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { notes } from './notes'
import { archive, projects, type Project, type ProjectStatus } from './projects'
import { magicChessMedia, type ProjectMedia } from './projectMedia'

const External = () => <span aria-hidden="true"> ↗</span>
const Arrow = () => <span aria-hidden="true"> →</span>

function RouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const project = pathname.startsWith('/work/') ? projects.find((item) => pathname === `/work/${item.slug}`) : undefined
    const note = pathname.startsWith('/notes/') ? notes.find((item) => pathname === `/notes/${item.slug}`) : undefined
    const page = pathname === '/' ? ['Harold F. B. Tate | Junior Python Backend & Applied AI Engineer', 'Junior Python backend and applied-AI engineer in Gomel, open to remote work and relocation.']
      : pathname === '/work' ? ['Work & Demo Lab | Harold F. B. Tate', 'Shipped, academic, archived, and planned engineering work with clear evidence labels.']
      : pathname === '/about' ? ['About & Experience | Harold F. B. Tate', 'Education, experience, languages, availability, and contact details for Harold Tate.']
      : pathname === '/notes' || pathname === '/notebook' ? ['Engineering Notes | Harold F. B. Tate', 'Architecture decisions and project retrospectives grounded in public evidence.']
      : project ? [`${project.title} Project Log | Harold F. B. Tate`, project.purpose]
      : note ? [`${note.title} | Harold F. B. Tate`, note.summary]
      : ['Page not found | Harold F. B. Tate', 'The requested portfolio page could not be found.']
    document.title = page[0]
    document.querySelector('meta[name="description"]')?.setAttribute('content', page[1])
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  return <header className="site-header">
    <Link className="wordmark" to="/" aria-label="Harold Tate, home">H<span>F</span>BT</Link>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span>{open ? 'Close' : 'Menu'}</span></button>
    <nav id="site-nav" className={open ? 'is-open' : ''} aria-label="Main navigation">
      {[['/', 'Home'], ['/work', 'Work'], ['/about', 'About'], ['/notes', 'Notes']].map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
      <a className="nav-cv" href="/Harold-F-B-Tate-CV.pdf" download onClick={() => setOpen(false)}>CV ↓</a>
    </nav>
  </header>
}

function Footer() {
  return <footer className="site-footer">
    <div><Link className="wordmark" to="/">H<span>F</span>BT</Link><p>Junior Python backend · Applied AI</p></div>
    <nav aria-label="Footer navigation"><Link to="/work">Work</Link><Link to="/about">About</Link><Link to="/notes">Notes</Link></nav>
    <div className="footer-contact"><a href="mailto:hbankwe@gmail.com">hbankwe@gmail.com</a><span>Gomel, Belarus · remote or relocation · © 2026</span></div>
  </footer>
}

function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li>{items.map((item) => <li key={item.label} aria-current={item.to ? undefined : 'page'}>{item.to ? <Link to={item.to}>{item.label}</Link> : item.label}</li>)}</ol></nav>
}

function StatusChip({ status }: { status: ProjectStatus }) {
  return <span className={`status status-${status.toLowerCase().replace(/[^a-z]+/g, '-')}`}>{status}</span>
}

function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card project-card-data"><Link to={`/work/${project.slug}`}>
    <div className="card-top"><p className="eyebrow">{project.type}</p><StatusChip status={project.status} /></div>
    <h3>{project.title}</h3><p>{project.purpose}</p>
    <ul className="tags">{project.stack.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
    <span className="evidence-note">{project.evidence.length ? `${project.evidence.length} public evidence link${project.evidence.length > 1 ? 's' : ''}` : 'No repository or live result yet'}</span>
    <span className="text-link">Open project log <Arrow /></span>
  </Link></article>
}

function PageHeader({ label, title, intro }: { label: string; title: string; intro: string }) {
  return <header className="page-header"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="lede">{intro}</p></header>
}

function Home() {
  const shipped = projects.filter((item) => item.selected && !item.planned).slice(0, 3)
  const planned = projects.filter((item) => item.planned)
  return <>
    <section className="home-hero recruiter-hero">
      <div className="hero-copy">
        <p className="eyebrow">Harold F. B. Tate · Gomel, Belarus</p>
        <h1>Junior Python backend & <em>applied-AI</em> engineer.</h1>
        <p className="lede">I build APIs, asynchronous data workflows, retrieval systems, and computer-vision integrations with explicit contracts and measurable behavior.</p>
        <p className="availability"><span /> Open to paid roles · remote from Belarus or relocation · full-time availability</p>
        <div className="actions"><Link className="button primary" to="/work">Review work <Arrow /></Link><Link className="button" to="/about">Experience & education</Link><a className="button" href="mailto:hbankwe@gmail.com">Contact</a><a className="button" href="/Harold-F-B-Tate-CV.pdf" download>CV ↓</a></div>
      </div>
      <aside className="skill-brief" aria-label="Focused skills">
        <p className="eyebrow">Working set / 2026</p>
        <dl><div><dt>Backend</dt><dd>Python · FastAPI · Django/DRF · SQLAlchemy · Pydantic · Celery</dd></div><div><dt>Applied AI</dt><dd>RAG · LangGraph · tool calling · evaluation · OpenCV</dd></div><div><dt>Data & delivery</dt><dd>PostgreSQL · Redis · Kafka · Docker · CI/CD · cloud services</dd></div></dl>
        <p className="evidence-note">Commercial source code is not presented as public work.</p>
      </aside>
    </section>
    <section className="section-wrap home-section" aria-labelledby="selected-title">
      <header className="section-heading"><div><p className="eyebrow">Selected evidence</p><h2 id="selected-title">Shipped & published</h2></div><Link className="text-link" to="/work">All work <Arrow /></Link></header>
      <div className="project-grid">{shipped.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </section>
    <section className="section-wrap home-section demo-preview" aria-labelledby="demo-title">
      <header className="section-heading"><div><p className="eyebrow">Demo Lab · roadmap</p><h2 id="demo-title">Builds planned to prove the backend focus</h2><p>These are specifications, not outcomes. They have no fake repository or live links.</p></div></header>
      <div className="compact-grid">{planned.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </section>
    <section className="section-wrap notes-preview" aria-labelledby="notes-title">
      <header className="section-heading"><div><p className="eyebrow">Engineering notes</p><h2 id="notes-title">Decisions, not a fabricated reading feed</h2></div><Link className="text-link" to="/notes">All notes <Arrow /></Link></header>
      <div className="note-preview-grid">{notes.slice(0, 2).map((note) => <article key={note.slug}><p className="eyebrow">{note.category}</p><h3><Link to={`/notes/${note.slug}`}>{note.title}</Link></h3><p>{note.summary}</p></article>)}</div>
      <p className="empty-state">Latest personal reading note: none published yet.</p>
    </section>
    <ContactBand />
  </>
}

function Work() {
  const delivered = projects.filter((item) => !item.planned)
  const lab = projects.filter((item) => item.planned)
  return <div className="page-shell"><Breadcrumbs items={[{ label: 'Work' }]} />
    <PageHeader label="Evidence-led index" title="Work & Demo Lab" intro="Public evidence, incomplete experiments, and planned demos are separated so a recruiter can assess what exists now." />
    <section className="work-group" aria-labelledby="delivered"><header><p className="eyebrow">Selected work</p><h2 id="delivered">Shipped, thesis & academic work</h2></header><div className="project-grid">{delivered.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
    <section className="work-group planned-group" aria-labelledby="lab"><header><p className="eyebrow">Roadmap · no outcomes claimed</p><h2 id="lab">Demo Lab</h2></header><div className="project-grid">{lab.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
    <section className="archive" aria-labelledby="archive"><header><p className="eyebrow">Restrained archive</p><h2 id="archive">Small public snapshots</h2><p>Useful as history, not presented as production-ready work.</p></header><div>{archive.map((item) => <article key={item.name}><h3>{item.name}</h3><p>{item.note}</p><a href={item.href} target="_blank" rel="noreferrer">Repository <External /></a></article>)}</div></section>
  </div>
}

function Architecture({ nodes }: { nodes: string[] }) {
  return <div className="architecture architecture-flex" aria-label="Architecture sketch">{nodes.map((node, index) => <div className="arch-node" key={node}><span>{String(index + 1).padStart(2, '0')}</span><strong>{node}</strong>{index < nodes.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>
}

function MediaSlot({ item, index }: { item: ProjectMedia; index: number }) {
  const [available, setAvailable] = useState(true)
  return <figure className="media-slot"><div className="media-frame"><div className="media-placeholder"><b>{item.type === 'video' ? 'VIDEO LOG' : `PLATE ${String(index + 1).padStart(2, '0')}`}</b><span>Media pending</span></div>
    {available && (item.type === 'image' ? <img src={item.src} alt={item.alt ?? item.title} loading="lazy" onError={() => setAvailable(false)} /> : <video controls preload="metadata" aria-label={item.title} onError={() => setAvailable(false)}><source src={item.src} type="video/mp4" /></video>)}
  </div><figcaption><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{item.title}</strong><p>{item.description}</p>{!available && <small role="status">Media unavailable; documentation placeholder shown.</small>}</div></figcaption></figure>
}

function ProjectLog() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <NotFound />
  const isMagic = project.slug === 'magic-chess'
  return <div className="page-shell case-study">
    <Breadcrumbs items={[{ label: 'Work', to: '/work' }, { label: project.title }]} />
    <header className="case-header"><div><p className="eyebrow">{project.type}</p><h1>{project.title}</h1><div className="case-status"><StatusChip status={project.status} />{project.planned && <span>No implementation or results yet</span>}</div></div><p className="lede">{project.brief}</p></header>
    <nav className="chapter-nav" aria-label="Project log chapters"><a href="#brief">Brief</a><a href="#architecture">Croquis</a><a href="#build-log">Build log</a><a href="#decisions">Decisions</a><a href="#evidence">Evidence</a><a href="#next">Next</a></nav>
    <section id="brief" className="case-section"><div className="section-marker"><span>01</span><p>Brief & role</p></div><div className="case-content"><h2>{project.purpose}</h2><aside className="scope-card"><p className="eyebrow">{project.planned ? 'Roadmap status' : 'Responsibility boundary'}</p><h3>{project.role}</h3><ul>{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></aside>
      {isMagic && <><div className="proof-list" aria-label="Verified published project results"><div><strong>94.2</strong><span>mAP50</span></div><div><strong>60 FPS</strong><span>vision</span></div><div><strong>&lt;50 ms</strong><span>logic</span></div><div><strong>±1.5 mm</strong><span>positioning</span></div></div><p className="evidence-note">Published in the GSTU abstract; not portfolio estimates.</p></>}
    </div></section>
    <section id="architecture" className="case-section"><div className="section-marker"><span>02</span><p>Architecture / croquis</p></div><div className="case-content"><h2>{project.planned ? 'Proposed system boundary' : 'Documented system boundary'}</h2><Architecture nodes={project.architecture} /><p className="evidence-note">{project.planned ? 'Architecture sketch; subject to implementation.' : 'Diagram limited to facts visible in public sources.'}</p></div></section>
    <section id="build-log" className="case-section"><div className="section-marker"><span>03</span><p>Build log</p></div><div className="case-content"><h2>{project.planned ? 'Current roadmap state' : 'Publicly supportable sequence'}</h2><ol className="build-log">{project.buildLog.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{item.title}</strong><p>{item.body}</p></div></li>)}</ol></div></section>
    <section id="decisions" className="case-section"><div className="section-marker"><span>04</span><p>Decisions</p></div><div className="case-content"><h2>Choices & evidence limits</h2><div className="decision-list">{project.decisions.map((item, index) => <details open={index === 0} key={item.title}><summary><span>{String(index + 1).padStart(2, '0')}</span>{item.title}</summary><p>{item.body}</p></details>)}</div></div></section>
    <section id="evidence" className="case-section"><div className="section-marker"><span>05</span><p>Links & media</p></div><div className="case-content"><h2>Evidence, not implication</h2>
      {project.evidence.length ? <div className="evidence-list">{project.evidence.map((item) => <article key={item.href}><a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{item.label}<External /></a><p>{item.note}</p></article>)}</div> : <p className="empty-state">No public repository, live demo, or measured result exists for this planned project.</p>}
      {isMagic && <div className="media-grid">{magicChessMedia.map((item, index) => <MediaSlot key={item.id} item={item} index={index} />)}</div>}
      {!isMagic && <div className="project-media-empty"><p className="eyebrow">Media log</p><p>Approved project media has not been supplied. Documentation pending.</p></div>}
    </div></section>
    <section id="next" className="case-section"><div className="section-marker"><span>06</span><p>{project.planned ? 'Acceptance criteria' : 'Next steps'}</p></div><div className="case-content"><h2>{project.planned ? 'What “finished” must mean' : 'What would strengthen the record'}</h2><ul className="next-list">{project.nextSteps.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
  </div>
}

const experience = [
  { period: 'Jan–Oct 2026', role: 'Python Developer · Intern', org: 'Innowise', body: 'CV-listed internship on an ecological CO₂-footprint calculation and analytics platform: backend boundaries and contracts, AI workflows, PostgreSQL/Alembic modeling, infrastructure, and CI/CD. Corporate source is not public.' },
  { period: 'Jan 2024–Oct 2025', role: 'Junior Software Developer', org: 'HTP Gomel Startup Incubator', body: 'CV-listed role on an omnichannel retail platform: RAG workflows, hybrid search, FastAPI services, and async processing. The CV reports a 93% reliability improvement; this portfolio does not independently attribute or inflate that metric.' },
  { period: 'Jun 2018–Aug 2020', role: 'STEM Bootcamp Coordinator & Instructor', org: 'NexGen Technology Center', body: 'Designed and taught foundational STEM, web, and programming curricula; the CV reports 50+ students and an 85% completion rate, plus mentoring a FIRST Global Robotics team.' },
]

function About() {
  return <div className="page-shell"><Breadcrumbs items={[{ label: 'About' }]} /><PageHeader label="Profile / verified CV record" title="Backend first. Systems aware." intro="I’m Harold, a junior Python backend and applied-AI engineer in Gomel, Belarus, open to full-time remote work or relocation." />
    <section className="about-grid"><aside><p className="eyebrow">Focused capabilities</p><dl><div><dt>Backend</dt><dd>Python · FastAPI · Django/DRF · SQLAlchemy · Pydantic · Celery</dd></div><div><dt>Applied AI</dt><dd>RAG · LangGraph · tool-calling agents · evaluation · PyTorch · OpenCV</dd></div><div><dt>Data & delivery</dt><dd>PostgreSQL · Redis · Kafka · Docker · Terraform · AWS/Azure/GCP exposure</dd></div></dl></aside><div><h2>Experience log</h2><div className="timeline">{experience.map((item) => <article key={item.org}><time>{item.period}</time><div><p>{item.role}</p><h3>{item.org}</h3><p>{item.body}</p></div></article>)}</div></div></section>
    <section className="education" aria-labelledby="education"><header><p className="eyebrow">Education timeline</p><h2 id="education">Overlapping by design</h2><p>GSTU was completed first. The remaining programs continue online or part-time and do not reduce full-time work availability.</p></header><div className="education-grid">
      <article><time>Sep 2022–Jun 2026</time><span className="status status-completed">Completed</span><h3>BSc Computer Science & Software Engineering</h3><p>GSTU, Gomel · completed</p></article>
      <article><time>Jan 2025–Jan 2028</time><StatusChip status="In progress" /><h3>BSc Computer Science</h3><p>University of the People · online, part-time · in progress</p></article>
      <article><time>Sep 2026–Jun 2027</time><StatusChip status="In progress" /><h3>MRes / Master research in Commerce</h3><p>BTEU, Gomel · “Retail Chain, Technology, and AI” · part-time · in progress</p></article>
    </div></section>
    <section className="fact-grid"><div><p className="eyebrow">Availability</p><ul><li>Full-time roles</li><li>Remote from Belarus</li><li>Open to relocation</li></ul></div><div><p className="eyebrow">Languages</p><ul><li>French · Native</li><li>English · B2 IELTS</li><li>Russian · B1</li></ul></div><div><p className="eyebrow">Documents & profiles</p><ul><li><a href="/Harold-F-B-Tate-CV.pdf" download>Download CV ↓</a></li><li><a href="https://github.com/TATEFARREL" target="_blank" rel="noreferrer">GitHub <External /></a></li><li><a href="https://www.linkedin.com/in/harold-f-b-tate-22130920a/" target="_blank" rel="noreferrer">LinkedIn <External /></a></li></ul></div></section>
    <ContactBand />
  </div>
}

function Notes() {
  return <div className="page-shell"><Breadcrumbs items={[{ label: 'Notes' }]} /><PageHeader label="Engineering notes" title="Build notes with a source trail" intro="Architecture decisions and documentation retrospectives grounded in existing work. No claim is made about what Harold has recently read." />
    <section className="note-index" aria-label="Engineering notes">{notes.map((note, index) => <article key={note.slug}><span>Note {String(index + 1).padStart(2, '0')}</span><div><p className="eyebrow">{note.category}</p><h2>{note.title}</h2><p>{note.summary}</p><Link to={`/notes/${note.slug}`}>Read note <Arrow /></Link></div></article>)}</section>
    <p className="empty-state notes-empty">No personal reading note has been published yet. The framework is ready for Harold’s first entry.</p>
  </div>
}

function NoteDetail() {
  const { slug } = useParams()
  const note = notes.find((item) => item.slug === slug)
  if (!note) return <NotFound />
  const external = note.sourceHref.startsWith('http')
  return <div className="page-shell note-detail"><Breadcrumbs items={[{ label: 'Notes', to: '/notes' }, { label: note.title }]} /><PageHeader label={note.category} title={note.title} intro={note.summary} />
    <article className="note-body">{note.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<aside><p className="eyebrow">Source trail</p>{external ? <a href={note.sourceHref} target="_blank" rel="noreferrer">{note.sourceLabel}<External /></a> : <Link to={note.sourceHref}>{note.sourceLabel}<Arrow /></Link>}</aside></article>
  </div>
}

function ContactBand() {
  return <section className="contact-band"><p className="eyebrow">Contact</p><h2>Need a junior engineer who documents the boundary?</h2><p>Open to paid Python backend and applied-AI roles—remote from Belarus or with relocation.</p><div><a className="button light" href="mailto:hbankwe@gmail.com">Email Harold <Arrow /></a><a className="button dark" href="/Harold-F-B-Tate-CV.pdf" download>Download CV ↓</a></div></section>
}

function NotFound() {
  return <div className="not-found"><p className="eyebrow">Error 404 / page not logged</p><h1>This page is outside the dossier.</h1><p>The route may have moved or never existed.</p><Link className="button primary" to="/">Return home <Arrow /></Link></div>
}

export default function Portfolio() {
  return <><RouteEffects /><Header /><main id="main"><Routes>
    <Route path="/" element={<Home />} /><Route path="/work" element={<Work />} /><Route path="/work/:slug" element={<ProjectLog />} />
    <Route path="/about" element={<About />} /><Route path="/notes" element={<Notes />} /><Route path="/notes/:slug" element={<NoteDetail />} />
    <Route path="/notebook" element={<Notes />} /><Route path="*" element={<NotFound />} />
  </Routes></main><Footer /></>
}
