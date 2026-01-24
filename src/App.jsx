import "./App.css";
import logo from "./assets/logo.png";

const EMAIL = "arazdigitalstudio@gmail.com";
const FREELANCER_URL =
  "https://www.tr.freelancer.com/u/arazdigital?frm=arazdigital&sb=t";
const INSTAGRAM_URL =
  "https://www.instagram.com/arazdigitalstudio?igsh=MWl0YWg2a29sODUwbA==";

export default function App() {
  return (
    <div className="page">
      {/* Background layers */}
      <div className="bg">
        <div className="bgGrid" />
        <div className="aurora a1" />
        <div className="aurora a2" />
        <div className="aurora a3" />
        <div className="noise" />
      </div>

      {/* Top bar */}
      <header className="topbar">
        <div className="brand">
          <div className="logoWrap" aria-hidden="true">
            <img
              src={logo}
              alt="AD monogram logo — Araz Digital Studio"
              className="logo"
            />
          </div>
          <div className="brandText">
            <div className="brandName">Araz Digital Studio</div>
            {/* ✅ logo/kimlik ibaresi burada */}
            <div className="brandTag">
              Web Design • Development • Logo &amp; Brand Identity
            </div>
          </div>
        </div>

        <nav className="nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="actions">
          <a className="pill" href={FREELANCER_URL} target="_blank" rel="noreferrer">
            Freelancer
          </a>
          <a className="pill" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="cta" href="#contact">
            Request Demo <span className="ctaArrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="wrap">
        <section className="hero">
          <div className="heroLeft">
            <div className="badge">
              <span className="dot" aria-hidden="true" />
              24h Demo • Vercel Deployment • Premium UI
            </div>

            <h1 className="title">
              Complete &amp;<span className="titleGlow"> Elevate</span> your
              <br />
              <span className="titleAccent">Web Platform</span>.
            </h1>

            <p className="lead">
              Araz Digital Studio delivers premium, conversion-focused websites with clean UI,
              modern UX, and fast React development—elegant, responsive, and built to inspire trust.
            </p>

            <div className="heroButtons">
              <a className="btnPrimary" href={`mailto:${EMAIL}`}>
                Email Us
              </a>
              <a className="btnGhost" href={FREELANCER_URL} target="_blank" rel="noreferrer">
                View Freelancer Profile
              </a>
            </div>

            <div className="miniRow">
              <div className="miniCard">
                <div className="miniTop">Speed</div>
                <div className="miniBottom">1–3 day prototype</div>
              </div>
              <div className="miniCard">
                <div className="miniTop">Quality</div>
                <div className="miniBottom">Premium UI/UX</div>
              </div>
              <div className="miniCard">
                <div className="miniTop">Trust</div>
                <div className="miniBottom">Transparent delivery</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="showcase">
              <div className="showHead">
                <div className="chip">Araz Demo Board</div>
                <div className="spark" aria-hidden="true" />
              </div>

              <div className="showGrid">
                <div className="showCard s1">
                  <div className="kTitle">Scope</div>
                  <ul>
                    <li>Landing &amp; multi-page sites</li>
                    <li>UI/UX improvements</li>
                    <li>SEO essentials</li>
                    {/* ✅ logo/kimlik ibaresi ikinci yerde, kısa */}
                    <li>Logo &amp; brand identity</li>
                  </ul>
                </div>

                <div className="showCard s2">
                  <div className="kTitle">Timeline</div>
                  <div className="steps">
                    <div className="step"><span>01</span> Design</div>
                    <div className="step"><span>02</span> Build</div>
                    <div className="step"><span>03</span> Launch</div>
                  </div>
                </div>

                <div className="showCard s3">
                  <div className="kTitle">Stack</div>
                  <div className="tags">
                    <span>React</span>
                    <span>Vite</span>
                    <span>CSS</span>
                    <span>Vercel</span>
                  </div>
                </div>

                <div className="showCard s4">
                  <div className="kTitle">Contact</div>
                  <a className="link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  <a className="link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                    instagram / arazdigitalstudio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section" id="services">
          <div className="sectionHead">
            <div>
              <h2>Services</h2>
              <p>Clean, fast, premium design — quality over noise.</p>
            </div>
            <div className="sectionRight">
              <span className="micro">• UI/UX</span>
              <span className="micro">• React</span>
              <span className="micro">• Deployment</span>
              {/* ✅ logo/kimlik ibaresi burada */}
              <span className="micro">• Logo &amp; Brand Identity</span>
            </div>
          </div>

          <div className="cards">
            <article className="card cBlue">
              <h3>Landing Pages</h3>
              <p>Conversion-focused single-page experiences with a premium feel.</p>
              <div className="cardFoot">Fast delivery • Responsive</div>
            </article>

            <article className="card cWarm">
              <h3>Multi-Page Websites</h3>
              <p>Modern structure, clear hierarchy, and a trusted brand presence.</p>
              <div className="cardFoot">SEO essentials • Clean content</div>
            </article>

            <article className="card cLilac">
              <h3>UI/UX Refresh</h3>
              <p>Upgrade your current website with a sharper, more professional interface.</p>
              <div className="cardFoot">Better flow • Better experience</div>
            </article>
          </div>
        </section>

        {/* Portfolio */}
        <section className="section" id="portfolio">
          <div className="sectionHead">
            <div>
              <h2>Portfolio</h2>
              <p>Replace these cards anytime with real project links and case studies.</p>
            </div>
            <div className="sectionRight">
              <a className="pill" href={FREELANCER_URL} target="_blank" rel="noreferrer">
                Freelancer
              </a>
              <a className="pill" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>

          <div className="works">
            <a className="work" href="#contact">
              <div className="workTop">
                <span className="workTag">Landing</span>
                <span className="workDot" />
              </div>
              <div className="workTitle">Aurora Glass Landing</div>
              <div className="workDesc">Pastel glass UI with premium typography and spacing.</div>
            </a>

            <a className="work" href="#contact">
              <div className="workTop">
                <span className="workTag">Business</span>
                <span className="workDot" />
              </div>
              <div className="workTitle">Clean Business Site</div>
              <div className="workDesc">Services, credibility, and contact—structured for clarity.</div>
            </a>

            <a className="work" href="#contact">
              <div className="workTop">
                <span className="workTag">Brand</span>
                <span className="workDot" />
              </div>
              <div className="workTitle">AD Monogram System</div>
              <div className="workDesc">Logo usage, color rhythm, and visual consistency across the UI.</div>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="contact" id="contact">
          <div className="contactLeft">
            <h2>Let’s build your demo</h2>
            <p>
              Send 3 things: <b>your niche</b>, <b>the pages you need</b>, and <b>a reference site</b>.
              We’ll deliver a demo within 24 hours.
            </p>

            <div className="contactLinks">
              <a className="contactLink" href={`mailto:${EMAIL}`}>📩 {EMAIL}</a>
              <a className="contactLink" href={FREELANCER_URL} target="_blank" rel="noreferrer">
                🧩 Freelancer @arazdigital
              </a>
              <a className="contactLink" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                📷 Instagram arazdigitalstudio
              </a>
            </div>
          </div>

          <div className="contactRight">
            <a className="bigCta" href={`mailto:${EMAIL}`}>
              Contact Now <span aria-hidden="true">→</span>
            </a>
            <div className="finePrint">Fast response • Clean work • Professional delivery</div>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Araz Digital Studio</span>
          <span className="sep">•</span>
          <span>Built with React + Vite</span>
        </footer>
      </main>
    </div>
  );
}