import { useEffect, useState } from 'react'
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { magicChessMedia, type ProjectMedia } from './projectMedia'

const External = () => <span aria-hidden="true"> ↗</span>
const Arrow = () => <span aria-hidden="true"> →</span>

const meta: Record<string, [string, string]> = {
  '/': ['Harold F. B. Tate | Python Backend & Applied AI', 'Harold Tate builds Python backends, applied AI systems, and computer-vision products.'],
  '/work': ['Selected Work | Harold F. B. Tate', 'Selected software, AI, and web projects by Harold F. B. Tate.'],
  '/work/magic-chess': ['Magic Chess Case Study | Harold F. B. Tate', 'Architecture, evidence, and engineering decisions behind the Magic Chess diploma project.'],
  '/about': ['About | Harold F. B. Tate', 'Experience, capabilities, education, and contact details for software engineer Harold Tate.'],
  '/notebook': ['Engineering Notebook | Harold F. B. Tate', 'Verified system notes and design studies from Harold Tate’s engineering work.'],
}

function RouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const [title, description] = meta[pathname] ?? ['Page not found | Harold F. B. Tate', 'The requested portfolio page could not be found.']
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
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
  const nav = [['/', 'Home'], ['/work', 'Work'], ['/about', 'About'], ['/notebook', 'Notebook']]
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Harold Tate, home">H<span>F</span>BT</Link>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
        <span>{open ? 'Close' : 'Menu'}</span><i aria-hidden="true" />
      </button>
      <nav id="site-nav" className={open ? 'is-open' : ''} aria-label="Main navigation">
        {nav.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>
        ))}
        <a className="nav-cv" href="/Harold-F-B-Tate-CV.pdf" download onClick={() => setOpen(false)}>CV ↓</a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div><Link className="wordmark" to="/">H<span>F</span>BT</Link><p>Python backend · Applied AI · Computer vision</p></div>
      <nav aria-label="Footer navigation"><Link to="/work">Work</Link><Link to="/about">About</Link><Link to="/notebook">Notebook</Link></nav>
      <div className="footer-contact"><a href="mailto:hbankwe@gmail.com">hbankwe@gmail.com</a><span>Gomel, Belarus · © 2026</span></div>
    </footer>
  )
}

function Layout() {
  return <><RouteEffects /><Header /><main id="main"><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/work" element={<Work />} />
    <Route path="/work/magic-chess" element={<MagicChess />} />
    <Route path="/about" element={<About />} />
    <Route path="/notebook" element={<Notebook />} />
    <Route path="*" element={<NotFound />} />
  </Routes></main><Footer /></>
}

function Breadcrumbs({ current }: { current: string }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li>{current === 'Magic Chess' && <li><Link to="/work">Work</Link></li>}<li aria-current="page">{current}</li></ol></nav>
}

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Harold F. B. Tate · Software engineer</p>
          <h1>Backend logic for <em>intelligent, physical</em> systems.</h1>
          <p className="lede">I build Python services, applied AI workflows, and computer-vision systems—from API contract to real-world actuation.</p>
          <p className="availability"><span /> Open to paid junior backend and applied AI roles · remote or relocation</p>
          <div className="actions"><Link className="button primary" to="/work">View selected work <Arrow /></Link><a className="button" href="/Harold-F-B-Tate-CV.pdf" download>Download CV ↓</a></div>
        </div>
        <SystemSketch />
      </section>
      <section className="home-feature section-wrap" aria-labelledby="featured-title">
        <header className="section-intro"><p className="eyebrow">Featured dossier · 01</p><h2 id="featured-title">Magic Chess</h2><p>A sensorless mechatronic chess platform joining computer vision, asynchronous Python services, persistent game state, and Cartesian motion.</p></header>
        <div className="feature-grid">
          <div className="proof-list" aria-label="Published Magic Chess results"><div><strong>94.2</strong><span>mAP50</span></div><div><strong>60 FPS</strong><span>vision</span></div><div><strong>&lt;50 ms</strong><span>logic</span></div><div><strong>±1.5 mm</strong><span>positioning</span></div></div>
          <div><p className="evidence-note">Independent diploma work · results published in the GSTU abstract</p><Link className="text-link" to="/work/magic-chess">Read the case study <Arrow /></Link></div>
        </div>
      </section>
      <section className="selected section-wrap" aria-labelledby="selected-title">
        <header className="section-intro compact"><p className="eyebrow">Selected work</p><h2 id="selected-title">Two public web projects</h2></header>
        <div className="project-row"><ProjectCard number="02" title="Afidi" type="Service marketplace · Cameroon" description="A live French-language service connecting customers with community-rated local professionals." href="https://www.afidipro.com/fr" /><ProjectCard number="03" title="Les Marinettes" type="Bilingual education · Bangangté" description="A live school site presenting programs, pedagogy, location, and contact pathways." href="http://lesmarinettes.org/" /></div>
        <p className="evidence-note">Both projects are listed on Harold’s CV; exact responsibilities are not publicly documented.</p>
      </section>
      <section className="credibility"><p>Experience across</p><ul><li>Python APIs</li><li>RAG & agents</li><li>Async pipelines</li><li>Computer vision</li><li>Cloud delivery</li></ul></section>
      <ContactBand />
    </>
  )
}

function SystemSketch() {
  return <aside className="system-sketch" aria-label="Magic Chess system preview"><div className="plate-label"><span>System plate A</span><span>signal → state → motion</span></div><div className="sketch-flow" aria-hidden="true"><span>camera</span><i>→</i><span>vision</span><i>→</i><span>logic</span><i>→</i><span>gantry</span></div><div className="board">{Array.from({ length: 64 }, (_, i) => <i key={i} />)}</div><p>Computer vision observes. Python reasons. The mechanism moves.</p></aside>
}

function ProjectCard({ number, title, type, description, href, internal = false }: { number: string; title: string; type: string; description: string; href: string; internal?: boolean }) {
  const content = <><span className="project-number">{number}</span><p className="eyebrow">{type}</p><h3>{title}</h3><p>{description}</p><span className="text-link">{internal ? 'Read case study →' : 'Visit live project ↗'}</span></>
  return <article className="project-card">{internal ? <Link to={href}>{content}</Link> : <a href={href} target="_blank" rel="noreferrer">{content}</a>}</article>
}

function PageHeader({ label, title, intro }: { label: string; title: string; intro: string }) {
  return <header className="page-header"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="lede">{intro}</p></header>
}

function Work() {
  return <div className="page-shell"><Breadcrumbs current="Work" /><PageHeader label="Index / 03 projects" title="Selected work" intro="A focused record of systems and public products. Scope labels distinguish documented authorship from projects listed on the CV." />
    <section className="work-list" aria-label="Project index">
      <article className="work-feature"><div><span className="project-number">01</span><p className="eyebrow">Independent diploma work · 2026</p><h2>Magic Chess</h2><p>A complete physical-to-digital loop: board detection, chess logic, durable state, and Arduino gantry control.</p><ul className="tags"><li>FastAPI</li><li>YOLO11n</li><li>PostgreSQL</li><li>Arduino</li></ul><Link className="button primary" to="/work/magic-chess">Open dossier <Arrow /></Link></div><SystemSketch /></article>
      <div className="project-row"><ProjectCard number="02" title="Afidi" type="Listed project · role not documented" description="French-language marketplace for finding community-rated local professionals." href="https://www.afidipro.com/fr" /><ProjectCard number="03" title="Les Marinettes" type="Listed project · role not documented" description="Public-facing bilingual school website for Les Marinettes in Bangangté." href="http://lesmarinettes.org/" /></div>
    </section>
  </div>
}

function ArchitectureDiagram() {
  const nodes = [['01', 'Camera', 'board feed'], ['02', 'Geometry', 'homography'], ['03', 'Vision', 'YOLO11n'], ['04', 'Rules', 'Stockfish'], ['05', 'State', 'FastAPI + SQL'], ['06', 'Motion', 'Arduino gantry']]
  return <div className="architecture" aria-label="Magic Chess physical-to-digital architecture">{nodes.map(([n, title, detail], i) => <div className="arch-node" key={title}><span>{n}</span><strong>{title}</strong><small>{detail}</small>{i < nodes.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>
}

function MediaSlot({ item, index }: { item: ProjectMedia; index: number }) {
  const [available, setAvailable] = useState(true)
  return <figure className="media-slot"><div className="media-frame">
    <div className="media-placeholder"><b>{item.type === 'video' ? 'VIDEO LOG' : `PLATE ${String(index + 1).padStart(2, '0')}`}</b><span>Media pending</span></div>
    {available && (item.type === 'image' ? <img src={item.src} alt={item.alt ?? item.title} loading="lazy" onError={() => setAvailable(false)} /> : <video controls preload="metadata" aria-label={item.title} onError={() => setAvailable(false)}><source src={item.src} type="video/mp4" /></video>)}
  </div><figcaption><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{item.title}</strong><p>{item.description}</p>{!available && <small role="status">Media unavailable; documentation placeholder shown.</small>}</div></figcaption></figure>
}

function MagicChess() {
  return <div className="page-shell case-study"><Breadcrumbs current="Magic Chess" />
    <header className="case-header"><div><p className="eyebrow">Dossier 01 · GSTU diploma work · 2026</p><h1>Magic Chess</h1></div><p className="lede">A Dockerized mechatronic platform that synchronizes a physical chessboard with digital game state—without sensors embedded in the board.</p></header>
    <nav className="chapter-nav" aria-label="Case study chapters"><a href="#brief">Brief</a><a href="#architecture">Architecture</a><a href="#decisions">Decisions</a><a href="#evidence">Evidence</a><a href="#lessons">Lessons</a></nav>
    <section id="brief" className="case-section">
      <div className="section-marker"><span>01</span><p>Brief & scope</p></div><div className="case-content"><h2>From board position to verified motion</h2><p>The system maps a camera feed with planar homography and YOLO11n detection, validates chess logic, stores tournament history, and translates legal moves into Cartesian gantry actuation.</p>
        <aside className="scope-card"><p className="eyebrow">Verified responsibility</p><h3>Independent diploma work</h3><p>The public abstract names Harold as author and states that the work was completed independently. Its declared scope covers design, development, testing, and deployment of the system.</p><ul><li>Computer-vision state synchronization</li><li>Asynchronous logic orchestration</li><li>Persistent tournament history</li><li>Arduino-based actuation</li></ul></aside>
        <div className="proof-list" aria-label="Verified published project results"><div><strong>94.2</strong><span>mAP50</span></div><div><strong>60 FPS</strong><span>vision throughput</span></div><div><strong>&lt;50 ms</strong><span>logic execution</span></div><div><strong>±1.5 mm</strong><span>positioning</span></div></div><p className="evidence-note">Published results from the GSTU diploma abstract—not portfolio estimates.</p>
      </div>
    </section>
    <section id="architecture" className="case-section"><div className="section-marker"><span>02</span><p>Architecture</p></div><div className="case-content"><h2>One loop, clear boundaries</h2><p>Perception, game state, persistence, and motion are separated so each boundary can be reasoned about independently.</p><ArchitectureDiagram />
      <div className="data-flow"><div><span>Input</span><strong>Mapped board state</strong><p>Vision output enters orchestration.</p></div><i>→</i><div className="core"><span>FastAPI</span><strong>Validate · resolve · coordinate</strong><p>Asynchronous game logic.</p></div><i>→</i><div><span>Outputs</span><strong>PostgreSQL + G-code</strong><p>Durable history and physical motion.</p></div></div>
      <p className="evidence-note">Architecture sequence reconstructed from the published abstract.</p></div>
    </section>
    <section id="decisions" className="case-section"><div className="section-marker"><span>03</span><p>Decisions</p></div><div className="case-content"><h2>Choices and their costs</h2><div className="decision-list">
      <details open><summary><span>01</span>Vision instead of board sensors</summary><p>The documented zero-sensor architecture simplifies the playing surface, while moving calibration, lighting, and occlusion risk into software.</p></details>
      <details><summary><span>02</span>Decoupled service boundaries</summary><p>Separation supports isolated reasoning and testing, at the cost of coordination across the physical loop.</p></details>
      <details><summary><span>03</span>ACID persistence</summary><p>PostgreSQL prioritizes consistent tournament history over ephemeral in-memory-only state.</p></details>
      <details><summary><span>04</span>Cartesian actuation</summary><p>Gantry motion makes positioning measurable, but introduces tolerance and calibration work.</p></details>
    </div><p className="evidence-note">Tradeoff implications are analysis of documented choices, not quotations from the thesis.</p>
      <h3 className="subsection-title">Documented build sequence</h3><ol className="build-log"><li><span>01</span><div><strong>Study the field</strong><p>Analyze existing automated chess systems.</p></div></li><li><span>02</span><div><strong>Separate concerns</strong><p>Define boundaries across perception, state, and actuation.</p></div></li><li><span>03</span><div><strong>Close the loop</strong><p>Connect detection, logic, persistence, and gantry control.</p></div></li><li><span>04</span><div><strong>Measure</strong><p>Report vision, latency, and positioning performance.</p></div></li></ol>
    </div></section>
    <section id="evidence" className="case-section"><div className="section-marker"><span>04</span><p>Evidence</p></div><div className="case-content"><h2>Prototype documentation</h2><p>No public project photography or video was found. Stable media slots preserve the evidence structure and degrade to labelled placeholders until original files are added.</p><div className="media-grid">{magicChessMedia.map((item, i) => <MediaSlot key={item.id} item={item} index={i} />)}</div>
      <div className="evidence-links"><a href="http://elib.gstu.by/handle/220612/51534" target="_blank" rel="noreferrer">GSTU thesis record <External /></a><a href="https://github.com/TATEFARREL/Defence-work-Chess" target="_blank" rel="noreferrer">Public repository record <External /></a></div><p className="evidence-note">The repository is currently empty; it is a public record, not code evidence.</p>
    </div></section>
    <section id="lessons" className="case-section"><div className="section-marker"><span>05</span><p>Lessons</p></div><div className="case-content"><h2>System quality crosses boundaries</h2><div className="lesson-grid"><div><h3>What this demonstrates</h3><p>Engineering across model performance, asynchronous software, durable data, and mechanical tolerance—not an isolated ML demonstration.</p></div><div><h3>Next iteration</h3><p>Document lighting and occlusion robustness, add repeatable end-to-end failure tests, and publish implementation and calibration procedures when releasable.</p></div></div><Link className="text-link" to="/notebook">Open related engineering notes <Arrow /></Link></div></section>
  </div>
}

const experience = [
  ['2026', 'Python Developer · Intern', 'Innowise', 'Backend boundaries, Pydantic/OpenAPI contracts, PostgreSQL modeling, AI workflows, async batch architecture, infrastructure, and CI/CD for an eco-footprint platform.'],
  ['2024—25', 'Junior Software Developer', 'HTP Gomel Startup Incubator', 'RAG pipelines, tool-calling workflows, hybrid search, FastAPI services, and asynchronous processing for an omnichannel retail platform.'],
  ['2018—20', 'STEM Coordinator & Instructor', 'NexGen Technology Center', 'Designed and taught STEM and programming curricula for 50+ students; mentored a FIRST Global Robotics team.'],
]

function About() {
  return <div className="page-shell"><Breadcrumbs current="About" /><PageHeader label="Profile / experience" title="Backend first. Systems always." intro="I’m Harold, a junior software engineer in Gomel, Belarus. I work where Python services, applied AI, data, and real-world systems meet." />
    <section className="about-grid"><aside><p className="eyebrow">Focused capabilities</p><dl><div><dt>Backend</dt><dd>Python · FastAPI · Django/DRF · SQLAlchemy · Pydantic · Celery</dd></div><div><dt>Applied AI</dt><dd>LangGraph · RAG · tool-calling agents · PyTorch · OpenCV</dd></div><div><dt>Data & delivery</dt><dd>PostgreSQL · Redis · Kafka · Docker · Terraform · AWS/Azure/GCP</dd></div></dl></aside><div><h2>Experience log</h2><div className="timeline">{experience.map(([date, role, org, body]) => <article key={org}><time>{date}</time><div><p>{role}</p><h3>{org}</h3><p>{body}</p></div></article>)}</div></div></section>
    <section className="fact-grid"><div><p className="eyebrow">Education</p><ul><li><strong>BSc Computer Science & Software Engineering</strong><br />GSTU · 2022—2026</li><li><strong>BSc Computer Science</strong><br />University of the People · 2025—2028</li><li><strong>MRes Commerce: Retail Chain, Technology & AI</strong><br />BTEU · 2026—2027</li></ul></div><div><p className="eyebrow">Languages</p><ul><li>French · Native</li><li>English · B2 IELTS</li><li>Russian · B1</li></ul></div><div><p className="eyebrow">Documents & profiles</p><ul><li><a href="/Harold-F-B-Tate-CV.pdf" download>Download CV ↓</a></li><li><a href="https://github.com/TATEFARREL" target="_blank" rel="noreferrer">GitHub <External /></a></li><li><a href="https://www.linkedin.com/in/harold-f-b-tate-22130920a/" target="_blank" rel="noreferrer">LinkedIn <External /></a></li></ul></div></section>
    <ContactBand />
  </div>
}

function Notebook() {
  return <div className="page-shell"><Breadcrumbs current="Notebook" /><PageHeader label="Engineering notebook" title="Notes from the system boundary" intro="A restrained index of verified design notes. These are topic studies—not a fabricated dated diary." />
    <section className="note-index" aria-label="Design notes"><article id="sensorless"><span>Note 01</span><div><p className="eyebrow">Perception</p><h2>Why a sensorless board changes the software problem</h2><p>Removing embedded board sensors keeps the playing surface simple, but makes camera geometry, lighting, occlusion, and calibration first-class system concerns.</p><Link to="/work/magic-chess#decisions">See the documented decision <Arrow /></Link></div></article><article id="boundaries"><span>Note 02</span><div><p className="eyebrow">Architecture</p><h2>Separate perception, rules, state, and motion</h2><p>Explicit boundaries make each stage easier to inspect. The cost is coordination: a physical move is only correct when every boundary agrees.</p><Link to="/work/magic-chess#architecture">Inspect the system diagram <Arrow /></Link></div></article><article id="evidence"><span>Note 03</span><div><p className="eyebrow">Documentation</p><h2>Evidence before decoration</h2><p>Prototype imagery remains absent until original, publishable files are available. Labelled slots describe the evidence needed without substituting stock photography.</p><Link to="/work/magic-chess#evidence">View media requirements <Arrow /></Link></div></article></section>
  </div>
}

function ContactBand() {
  return <section className="contact-band"><p className="eyebrow">Open channel</p><h2>Build something that has to work.</h2><p>Open to paid junior Python backend and applied AI roles—remote from Belarus or with relocation.</p><div><a className="button light" href="mailto:hbankwe@gmail.com">Email Harold <Arrow /></a><Link className="button dark" to="/about">Review experience</Link></div></section>
}

function NotFound() {
  return <div className="not-found"><p className="eyebrow">Error 404 / page not logged</p><h1>This page is outside the dossier.</h1><p>The route may have moved or never existed.</p><Link className="button primary" to="/">Return home <Arrow /></Link></div>
}

export default Layout
