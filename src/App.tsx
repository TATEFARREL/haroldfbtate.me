const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
)

const External = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20">
    <path d="M7 13 15 5M9 5h6v6M15 12v3H5V5h3" />
  </svg>
)

const Download = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20">
    <path d="M10 3v10m-4-4 4 4 4-4M4 16h12" />
  </svg>
)

const skillGroups = [
  {
    number: '01',
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'Django / DRF', 'Flask', 'REST & GraphQL', 'SQLAlchemy', 'Pydantic', 'Celery'],
  },
  {
    number: '02',
    title: 'Applied AI',
    skills: ['LangChain', 'LangGraph', 'RAG', 'Tool-calling agents', 'PyTorch', 'OpenCV', 'YOLO11', 'Vector search'],
  },
  {
    number: '03',
    title: 'Data & delivery',
    skills: ['PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Docker', 'GitHub Actions', 'Terraform', 'AWS / Azure / GCP'],
  },
]

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Harold Tate, back to top">
          H<span>/</span>T
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="header-cta" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Available for junior roles
            </div>
            <h1 id="hero-title">
              Python backends.
              <br />
              Applied AI.
              <br />
              <em>Built to work.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m <strong>Harold F. B. Tate</strong>, a junior software developer who turns AI ideas into
              dependable APIs, workflows, and real-world systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <Arrow />
              </a>
              <a className="button button-ghost" href="/Harold-F-B-Tate-CV.pdf" download>
                Download CV <Download />
              </a>
            </div>
          </div>

          <div className="hero-aside">
            <div className="code-window" aria-label="A summary of Harold's focus">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <p>focus.py</p>
              </div>
              <pre>
                <code>
                  <span className="code-muted">01</span> <span className="code-pink">class</span>{' '}
                  <span className="code-gold">Developer</span>:{'\n'}
                  <span className="code-muted">02</span> {'    '}location = <span className="code-green">&quot;Gomel, Belarus&quot;</span>
                  {'\n'}
                  <span className="code-muted">03</span> {'    '}focus = [{'\n'}
                  <span className="code-muted">04</span> {'        '}
                  <span className="code-green">&quot;Python backend&quot;</span>,{'\n'}
                  <span className="code-muted">05</span> {'        '}
                  <span className="code-green">&quot;Applied AI&quot;</span>,{'\n'}
                  <span className="code-muted">06</span> {'        '}
                  <span className="code-green">&quot;Computer vision&quot;</span>
                  {'\n'}
                  <span className="code-muted">07</span> {'    '}]{'\n'}
                  <span className="code-muted">08</span> {'    '}open_to = <span className="code-green">&quot;remote / relocate&quot;</span>
                </code>
              </pre>
            </div>
            <p className="hero-note">
              <span>Based in Belarus</span>
              <span>Remote worldwide</span>
              <span>Open to relocation</span>
            </p>
          </div>
        </section>

        <section className="marquee" aria-label="Core technologies">
          <div>
            <span>Python</span><i>✦</i><span>FastAPI</span><i>✦</i><span>PostgreSQL</span><i>✦</i>
            <span>Applied AI</span><i>✦</i><span>Computer Vision</span><i>✦</i><span>Docker</span>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-kicker">Selected work</p>
            <h2 id="work-title">From model output<br />to physical movement.</h2>
            <p>Projects where software has to do more than look convincing—it has to behave reliably.</p>
          </div>

          <article className="featured-project">
            <div className="project-visual">
              <div className="project-index">01 / 03</div>
              <div className="chess-scene" aria-hidden="true">
                <div className="scanner" />
                <div className="board">
                  {Array.from({ length: 64 }, (_, index) => <span key={index} />)}
                  <b className="piece piece-knight">♞</b>
                  <b className="piece piece-queen">♛</b>
                  <b className="piece piece-pawn">♟</b>
                </div>
                <span className="detection detection-one">KNIGHT · 98%</span>
                <span className="detection detection-two">BOARD SYNC</span>
              </div>
              <div className="visual-caption">
                <span>VISION / LOGIC / MOTION</span>
                <span>2026</span>
              </div>
            </div>

            <div className="project-copy">
              <p className="project-label">Diploma project · GSTU</p>
              <h3>Magic Chess</h3>
              <p className="project-lead">
                A cyber-physical chess platform that keeps a physical board and digital game state in sync using computer
                vision—then moves pieces with an Arduino-controlled gantry.
              </p>
              <div className="metrics" aria-label="Published project results">
                <div><strong>94.2</strong><span>mAP50 vision accuracy</span></div>
                <div><strong>&lt;50<small>ms</small></strong><span>async logic execution</span></div>
                <div><strong>±1.5<small>mm</small></strong><span>actuation accuracy</span></div>
              </div>
              <ul className="tag-list" aria-label="Magic Chess technologies">
                <li>YOLO11</li><li>FastAPI</li><li>PostgreSQL</li><li>Docker</li>
                <li>Arduino</li><li>Raspberry Pi</li>
              </ul>
              <a
                className="text-link"
                href="http://elib.gstu.by/handle/220612/51534"
                target="_blank"
                rel="noreferrer"
              >
                Read the public abstract <External />
              </a>
            </div>
          </article>

          <div className="supporting-projects">
            <article className="project-card afidi-card">
              <div className="card-top">
                <span>02</span>
                <a href="https://www.afidipro.com/fr" target="_blank" rel="noreferrer" aria-label="Visit Afidi">
                  <External />
                </a>
              </div>
              <div className="afidi-mark" aria-hidden="true">
                <span>A</span>
                <div><i /><i /><i /><i /></div>
              </div>
              <div className="card-copy">
                <p className="project-label">Selected project · Marketplace</p>
                <h3>Afidi</h3>
                <p>A French-language platform connecting people in Cameroon with community-reviewed local professionals.</p>
                <a className="text-link" href="https://www.afidipro.com/fr" target="_blank" rel="noreferrer">
                  Visit live site <External />
                </a>
              </div>
            </article>

            <article className="project-card marinettes-card">
              <div className="card-top">
                <span>03</span>
                <a href="http://lesmarinettes.org/" target="_blank" rel="noreferrer" aria-label="Visit Les Marinettes">
                  <External />
                </a>
              </div>
              <div className="school-illustration" aria-hidden="true">
                <div className="sun" />
                <div className="school">
                  <span /><span /><span />
                </div>
              </div>
              <div className="card-copy">
                <p className="project-label">Selected project · Education</p>
                <h3>Les Marinettes</h3>
                <p>A public-facing website for a bilingual school in Bangangté, Cameroon, presenting its programs and contact details.</p>
                <a className="text-link" href="http://lesmarinettes.org/" target="_blank" rel="noreferrer">
                  Visit live site <External />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading compact">
            <p className="section-kicker">Experience</p>
            <h2 id="experience-title">Learning by shipping.</h2>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-date">JAN — OCT 2026</div>
              <div>
                <p className="timeline-type">Internship</p>
                <h3>Python Developer <span>@ Innowise</span></h3>
                <p>
                  Worked on a CO₂-footprint calculation and analytics platform: backend service boundaries, Pydantic/OpenAPI
                  contracts, PostgreSQL modeling, AI workflows, and asynchronous batch architecture.
                </p>
                <ul><li>FastAPI</li><li>PostgreSQL</li><li>Kafka</li><li>LangGraph</li><li>Terraform</li></ul>
              </div>
            </article>
            <article>
              <div className="timeline-date">JAN 2024 — OCT 2025</div>
              <div>
                <p className="timeline-type">Junior role</p>
                <h3>Junior Software Developer <span>@ HTP Gomel Startup Incubator</span></h3>
                <p>
                  Contributed to an omnichannel AI retail platform through RAG pipelines, tool-calling workflows, hybrid vector
                  search, FastAPI services, and asynchronous processing.
                </p>
                <ul><li>Python</li><li>FastAPI</li><li>Azure AI Search</li><li>pgvector</li><li>Redis</li></ul>
              </div>
            </article>
            <article>
              <div className="timeline-date">JUN 2018 — AUG 2020</div>
              <div>
                <p className="timeline-type">Education</p>
                <h3>STEM Bootcamp Coordinator & Instructor <span>@ NexGen Technology Center</span></h3>
                <p>
                  Designed and taught foundational STEM, web, and programming curricula for 50+ students, and mentored a team
                  participating in the FIRST Global Robotics Competition.
                </p>
                <ul><li>Python</li><li>Web fundamentals</li><li>Arduino</li><li>Raspberry Pi</li><li>Robotics</li></ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading skills-heading">
            <div>
              <p className="section-kicker">Toolkit</p>
              <h2 id="skills-title">Practical tools for<br />end-to-end delivery.</h2>
            </div>
            <p>
              Backend foundations first, with the AI, data, and infrastructure skills needed to take a feature from prototype
              to a working service.
            </p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <span>{group.number}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="language-note"><span>Languages</span> French (native) · English (B2 IELTS) · Russian (B1)</p>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-orbit" aria-hidden="true"><span>HT</span></div>
          <p className="section-kicker">Start a conversation</p>
          <h2 id="contact-title">Need a backend developer<br />who can work with AI?</h2>
          <p>
            I&apos;m open to paid junior Python backend and applied AI roles—remote from Belarus or with relocation.
          </p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:hbankwe@gmail.com">
              hbankwe@gmail.com <Arrow />
            </a>
            <a
              className="button button-outline"
              href="https://www.linkedin.com/in/harold-f-b-tate-22130920a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <External />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#top" aria-label="Back to top">H<span>/</span>T</a>
        <p>© 2026 Harold F. B. Tate</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
