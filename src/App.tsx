import { magicChessMedia, type ProjectMedia } from './projectMedia'

const Arrow = ({ direction = 'right' }: { direction?: 'right' | 'down' }) => (
  <span className={`arrow arrow-${direction}`} aria-hidden="true">→</span>
)

const External = () => <span aria-hidden="true">↗</span>

const FlowArrow = () => <span className="flow-arrow" aria-hidden="true">→</span>

const skillGroups = [
  ['Backend systems', 'Python', 'FastAPI', 'Django / DRF', 'SQLAlchemy', 'Pydantic', 'Celery'],
  ['Applied intelligence', 'LangGraph', 'RAG', 'Tool-calling agents', 'PyTorch', 'OpenCV', 'YOLO11'],
  ['Data & delivery', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Terraform', 'AWS / Azure / GCP'],
]

function MediaSlot({ item, index }: { item: ProjectMedia; index: number }) {
  return (
    <figure className={`media-slot media-${item.type}`}>
      <div className="media-frame">
        <div className="media-placeholder">
          <span className="crosshair" aria-hidden="true" />
          <b>{item.type === 'video' ? 'VIDEO LOG' : `PLATE ${String(index + 1).padStart(2, '0')}`}</b>
          <small>Awaiting field documentation</small>
        </div>
        {item.type === 'image' ? (
          <img
            src={item.src}
            alt={item.alt ?? item.title}
            loading="lazy"
            onError={(event) => { event.currentTarget.style.display = 'none' }}
          />
        ) : (
          <video
            controls
            preload="metadata"
            aria-label={item.title}
            onError={(event) => { event.currentTarget.style.display = 'none' }}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        )}
      </div>
      <figcaption>
        <span>{String(index + 1).padStart(2, '0')}</span>
        <div><strong>{item.title}</strong><p>{item.description}</p></div>
      </figcaption>
    </figure>
  )
}

function ArchitectureDiagram() {
  const nodes = [
    ['01', 'Camera', 'Physical board feed'],
    ['02', 'Geometry', 'Detection + homography'],
    ['03', 'Vision', 'YOLO11n pieces'],
    ['04', 'Game state', 'Rules + Stockfish'],
    ['05', 'Backend', 'FastAPI + PostgreSQL'],
    ['06', 'Motion', 'G-code → Arduino gantry'],
  ]
  return (
    <div className="architecture-diagram" aria-label="Magic Chess physical system architecture">
      {nodes.map(([number, title, detail], index) => (
        <div className="flow-item" key={title}>
          <div className="flow-node"><span>{number}</span><strong>{title}</strong><small>{detail}</small></div>
          {index < nodes.length - 1 && <FlowArrow />}
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Harold Tate, back to top">H<span>F</span>BT</a>
        <nav aria-label="Main navigation">
          <a href="#magic-chess">Dossier 01</a>
          <a href="#field-notes">Field notes</a>
          <a href="#experience">Logbook</a>
        </nav>
        <a className="header-link" href="/Harold-F-B-Tate-CV.pdf" download>CV <Arrow direction="down" /></a>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="overline">Engineering log · Gomel, Belarus · 2026</p>
            <h1 id="hero-title">I build the logic<br />between <em>signal</em><br />and <em>system.</em></h1>
            <p className="hero-intro">
              Harold F. B. Tate is a junior software engineer working across Python backends,
              applied AI, computer vision, and the physical systems they control.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#magic-chess">Open project dossier <Arrow /></a>
              <a className="button secondary" href="/Harold-F-B-Tate-CV.pdf" download>Download CV ↓</a>
            </div>
          </div>
          <aside className="hero-plate" aria-label="Magic Chess technical preview">
            <div className="plate-label"><span>Fig. 01</span><span>System study</span></div>
            <div className="gantry-sketch" aria-hidden="true">
              <div className="rail rail-x"><i /></div>
              <div className="rail rail-y"><i /></div>
              <div className="sketch-board">{Array.from({ length: 64 }, (_, i) => <span key={i} />)}</div>
              <div className="camera-cone" />
              <b className="sketch-note note-camera">camera / CV</b>
              <b className="sketch-note note-motion">x–y actuation</b>
            </div>
            <p>Computer vision observes. Python reasons. The mechanism moves.</p>
          </aside>
          <div className="hero-folio" aria-hidden="true">Folio № 01</div>
        </section>

        <div className="ticker" aria-label="Core disciplines">
          <span>Backend architecture</span><i>×</i><span>Applied AI</span><i>×</i>
          <span>Computer vision</span><i>×</i><span>Cyber-physical systems</span>
        </div>

        <section className="dossier" id="magic-chess" aria-labelledby="magic-title">
          <div className="section-tab">Dossier 01 / Diploma work</div>
          <header className="dossier-header">
            <div>
              <p className="overline">GSTU named after P.O. Sukhoi · 2026</p>
              <h2 id="magic-title">Magic Chess</h2>
            </div>
            <p className="dossier-deck">
              A functional, Dockerized mechatronic platform that synchronizes a physical chessboard
              with digital game state—without sensors embedded in the board.
            </p>
          </header>

          <div className="proof-strip" aria-label="Verified published project results">
            <div><strong>94.2</strong><span>mAP50 vision pipeline</span></div>
            <div><strong>60<small> FPS</small></strong><span>vision throughput</span></div>
            <div><strong>&lt;50<small> ms</small></strong><span>async logic execution</span></div>
            <div><strong>±1.5<small> mm</small></strong><span>positioning accuracy</span></div>
          </div>
          <p className="source-note">Published results from the GSTU diploma abstract—not portfolio estimates.</p>

          <div className="brief-grid">
            <article className="ruled-card">
              <p className="card-index">01 — Project brief</p>
              <h3>From board position to verified motion</h3>
              <p>
                The system extracts board state with planar homography and YOLO11n object detection,
                validates chess logic, persists tournament history, and translates a legal move into
                Cartesian gantry actuation.
              </p>
            </article>
            <article className="responsibility-card">
              <div className="stamp">Independent<br />diploma work</div>
              <p className="card-index">02 — Verified authorship</p>
              <h3>Harold’s documented scope</h3>
              <p>
                The public abstract names Harold as author and states the diploma work was completed
                independently. Its declared purpose covers design, development, testing, and deployment
                of the complete system.
              </p>
              <ul>
                <li>Computer-vision state synchronization</li>
                <li>Asynchronous logic orchestration</li>
                <li>Persistent tournament history</li>
                <li>Arduino-based physical actuation</li>
              </ul>
            </article>
          </div>

          <section className="diagram-section" aria-labelledby="physical-title">
            <div className="subhead">
              <p className="overline">System plate A</p>
              <h3 id="physical-title">Physical-to-digital architecture</h3>
              <p>One loop, six boundaries, with perception kept separate from chess logic and motion.</p>
            </div>
            <ArchitectureDiagram />
            <div className="diagram-key">
              <span><i className="key-red" /> Physical I/O</span>
              <span><i className="key-blue" /> Computation & state</span>
              <span>Sequence reconstructed from the published abstract</span>
            </div>
          </section>

          <section className="backend-section" aria-labelledby="backend-title">
            <div className="subhead">
              <p className="overline">System plate B</p>
              <h3 id="backend-title">Backend & data flow</h3>
            </div>
            <div className="backend-map">
              <div className="map-column">
                <span className="map-label">Input</span>
                <b>Mapped board state</b>
                <p>Vision output enters the orchestration boundary.</p>
              </div>
              <FlowArrow />
              <div className="map-core">
                <span className="map-label">FastAPI · async orchestration</span>
                <div><b>Validate rules</b><b>Resolve game state</b><b>Coordinate move</b></div>
              </div>
              <FlowArrow />
              <div className="map-column split">
                <div><span className="map-label">Durable record</span><b>PostgreSQL</b><p>ACID-compliant tournament history.</p></div>
                <div><span className="map-label">Physical output</span><b>G-code / Arduino</b><p>Cartesian positioning commands.</p></div>
              </div>
            </div>
          </section>

          <section className="log-section" aria-labelledby="log-title">
            <div className="subhead">
              <p className="overline">Build log</p>
              <h3 id="log-title">The documented engineering sequence</h3>
              <p>Phase order reflects the method described in the abstract; no unsupported dates are assigned.</p>
            </div>
            <ol className="build-log">
              <li><span>01</span><div><b>Study the field</b><p>Systematic analysis of existing automated chess systems.</p></div></li>
              <li><span>02</span><div><b>Separate the concerns</b><p>Decoupled, microservice-inspired architecture across perception, state, and actuation.</p></div></li>
              <li><span>03</span><div><b>Close the loop</b><p>YOLO11n and homography feed asynchronous game logic, persistence, and gantry control.</p></div></li>
              <li><span>04</span><div><b>Measure the result</b><p>Vision, latency, and positioning performance reported in the final diploma abstract.</p></div></li>
            </ol>
          </section>

          <section className="decision-section" aria-labelledby="decision-title">
            <div className="subhead">
              <p className="overline">Margin notes</p>
              <h3 id="decision-title">Design decisions & tradeoffs</h3>
            </div>
            <div className="decision-grid">
              <article><span>01</span><h4>Vision over board sensors</h4><p>Documented choice: a zero-sensor architecture. It simplifies the playing surface, while making calibration, lighting, and occlusion part of the software problem.</p></article>
              <article><span>02</span><h4>Decoupled boundaries</h4><p>Documented choice: microservice-inspired separation. It supports independent reasoning and testing, with coordination overhead across the loop.</p></article>
              <article><span>03</span><h4>ACID persistence</h4><p>Documented choice: PostgreSQL for tournament history. Consistency is prioritized over an ephemeral in-memory-only state.</p></article>
              <article><span>04</span><h4>Cartesian actuation</h4><p>Documented choice: Arduino gantry control. Deterministic positioning is measurable, but introduces mechanical tolerance and calibration work.</p></article>
            </div>
            <p className="inference-note">Tradeoff implications are engineering analysis based on the documented choices, not direct quotations from the thesis.</p>
          </section>

          <section className="gallery-section" aria-labelledby="gallery-title">
            <div className="subhead gallery-head">
              <div><p className="overline">Evidence plates</p><h3 id="gallery-title">Prototype gallery</h3></div>
              <p>No public Magic Chess photos or video were found. These slots use stable filenames and replace themselves when Harold adds his files.</p>
            </div>
            <div className="media-grid">
              {magicChessMedia.map((item, index) => <MediaSlot key={item.id} item={item} index={index} />)}
            </div>
          </section>

          <section className="lessons-section" aria-labelledby="lessons-title">
            <div>
              <p className="overline">Recruiter’s reading</p>
              <h3 id="lessons-title">What this work demonstrates</h3>
              <p>System thinking across model performance, asynchronous software, durable data, and mechanical tolerance—not an isolated ML demo.</p>
            </div>
            <div>
              <p className="overline">Next revision</p>
              <h3>What I would improve</h3>
              <p>Document robustness across lighting and occlusion conditions, add repeatable end-to-end failure tests, and publish the implementation and calibration procedure when the work can be released.</p>
            </div>
          </section>

          <footer className="dossier-footer">
            <ul className="tag-list" aria-label="Magic Chess technologies">
              {['YOLO11n', 'FastAPI', 'PostgreSQL', 'Stockfish', 'Docker', 'Arduino', 'Raspberry Pi', 'G-code'].map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            <div className="evidence-links">
              <a href="http://elib.gstu.by/handle/220612/51534" target="_blank" rel="noreferrer">GSTU thesis record <External /></a>
              <a href="https://github.com/TATEFARREL/Defence-work-Chess" target="_blank" rel="noreferrer">Public repo record <External /></a>
            </div>
            <p>The repository is currently empty; it is linked as a public record, not code evidence.</p>
          </footer>
        </section>

        <section className="field-notes" id="field-notes" aria-labelledby="field-title">
          <header className="section-heading">
            <p className="overline">Other field notes</p>
            <h2 id="field-title">Selected web projects</h2>
            <p>Both appear on Harold’s CV as selected pet projects. Public evidence does not specify his exact responsibilities, so no ownership claim is made here.</p>
          </header>
          <div className="case-grid">
            <article>
              <div className="case-number">02</div>
              <p className="case-type">Service marketplace · Cameroon</p>
              <h3>Afidi</h3>
              <p>A live French-language service connecting people with community-rated and verified local professionals.</p>
              <span className="caution-label">Listed project · role not publicly documented</span>
              <a href="https://www.afidipro.com/fr" target="_blank" rel="noreferrer">Inspect live project <External /></a>
            </article>
            <article>
              <div className="case-number">03</div>
              <p className="case-type">Bilingual education · Bangangté</p>
              <h3>Les Marinettes</h3>
              <p>A live school site presenting bilingual programs, pedagogy, location, and contact pathways.</p>
              <span className="caution-label">Listed project · public repos verified</span>
              <a href="http://lesmarinettes.org/" target="_blank" rel="noreferrer">Inspect live project <External /></a>
            </article>
          </div>
        </section>

        <section className="experience" id="experience" aria-labelledby="experience-title">
          <header className="section-heading">
            <p className="overline">Sailor’s log / experience</p>
            <h2 id="experience-title">Backend first.<br />Systems always.</h2>
          </header>
          <div className="experience-grid">
            <aside>
              <p>Working set</p>
              {skillGroups.map(([title, ...skills], index) => (
                <div className="skill-set" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{skills.join(' · ')}</p></div>
              ))}
            </aside>
            <div className="entries">
              <article><time>2026</time><div><p>Python Developer · Internship</p><h3>Innowise</h3><p>Backend boundaries, Pydantic/OpenAPI contracts, PostgreSQL modeling, AI workflows, async batch architecture, infrastructure, and CI/CD for an eco-footprint analytics platform.</p></div></article>
              <article><time>2024—25</time><div><p>Junior Software Developer</p><h3>HTP Gomel Startup Incubator</h3><p>RAG pipelines, tool-calling workflows, hybrid search, FastAPI services, and asynchronous processing for an omnichannel retail platform.</p></div></article>
              <article><time>2018—20</time><div><p>STEM Coordinator & Instructor</p><h3>NexGen Technology Center</h3><p>Designed and taught STEM and programming curricula for 50+ students; mentored a team participating in FIRST Global Robotics.</p></div></article>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="overline">Open channel</p>
          <h2 id="contact-title">Let’s build something<br />that has to work.</h2>
          <p>Open to paid junior Python backend and applied AI roles—remote from Belarus or with relocation.</p>
          <div className="contact-links">
            <a href="mailto:hbankwe@gmail.com">hbankwe@gmail.com <Arrow /></a>
            <a href="https://www.linkedin.com/in/harold-f-b-tate-22130920a/" target="_blank" rel="noreferrer">LinkedIn <External /></a>
            <a href="https://github.com/TATEFARREL" target="_blank" rel="noreferrer">GitHub <External /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#top" aria-label="Back to top">H<span>F</span>BT</a>
        <p>Harold F. B. Tate · Software engineer · © 2026</p>
        <a href="#top">Return to first page ↑</a>
      </footer>
    </>
  )
}

export default App
