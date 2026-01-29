// Home.jsx (or App.jsx)
// Minimal dependencies. Uses your existing glass/aurora background styles.

export default function Home() {
  return (
    <main className="page">
      <Header />

      <Hero />

      <section id="work" className="section">
        <SectionTitle
          title="Selected Work"
          desc="Real deliverables. Clean, fast, built to ship."
        />
        <WorkGrid />
      </section>

      <section id="pricing" className="section">
        <SectionTitle
          title="Packages"
          desc="Clear scope. Clear delivery. No vague “custom” fog."
        />
        <Pricing />
      </section>

      <section id="process" className="section">
        <SectionTitle
          title="Process"
          desc="Simple, fast, and transparent."
        />
        <Process />
      </section>

      <section id="faq" className="section">
        <SectionTitle title="FAQ" desc="Short answers. No sales fluff." />
        <FAQ />
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header glass">
      <div className="brand">
        <div className="logoMark">AD</div>
        <div className="brandText">
          <div className="brandName">Araz Digital Studio</div>
          <div className="brandTag">Web Design • Development • Brand</div>
        </div>
      </div>

      <nav className="nav">
        <a href="#work">Work</a>
        <a href="#pricing">Pricing</a>
        <a href="#process">Process</a>
        <a href="#faq">FAQ</a>
        <a className="navLink" href="https://www.freelancer.com/u/arazdigital" target="_blank" rel="noreferrer">
          Freelancer
        </a>
        <a className="navLink" href="https://instagram.com/arazdigitalstudio" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a className="btn btnPrimary" href="#contact">
          Request Demo →
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section">
      <div className="heroInner glass">
        <div className="pill">24h Demo • Vercel Deploy • Premium UI</div>

        <h1 className="h1">
          Premium one-page websites that convert —{" "}
          <span className="grad">delivered in 48 hours.</span>
        </h1>

        <p className="lead">
          Clean UI, modern UX, and launch-ready builds for small businesses and freelancers
          who need leads — not “pretty pages”.
        </p>

        <div className="heroActions">
          <a className="btn btnPrimary" href="#contact">Request a 24h Demo →</a>
          <a className="btn btnGhost" href="#work">View Work</a>
        </div>

        <div className="proofRow">
          <div className="proof">48h delivery</div>
          <div className="proof">Mobile-first</div>
          <div className="proof">SEO basics</div>
          <div className="proof">Deployment included</div>
        </div>
      </div>
    </section>
  );
}

function WorkGrid() {
  const items = [
    {
      tag: "Print + Web Demo",
      title: "Brunch Café Menu Redesign",
      desc: "Readable from distance. Clear sections. French Toast hero upsell.",
    },
    {
      tag: "Brand System",
      title: "Fintech Identity — 360 ONE",
      desc: "Circular mark + progression logic + lime accent. Clean + clinical.",
    },
    {
      tag: "Website Redesign",
      title: "Modern Legal Site Concept",
      desc: "Trust-first layout, service clarity, and strong CTA hierarchy.",
    },
  ];

  return (
    <div className="grid3">
      {items.map((x) => (
        <article key={x.title} className="card glass">
          <div className="cardTag">{x.tag}</div>
          <h3 className="cardTitle">{x.title}</h3>
          <p className="cardDesc">{x.desc}</p>
          <div className="cardMeta">Delivered fast • Clean handoff</div>
        </article>
      ))}
    </div>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$149",
      note: "For a clean one-pager that just works.",
      items: ["1 page", "Copy polish", "Mobile-first", "Vercel deploy", "48h delivery"],
    },
    {
      name: "Pro",
      price: "$299",
      badge: "Most chosen",
      note: "Best value for lead-gen + credibility.",
      items: ["1 page (optimized sections)", "Form + analytics", "SEO basics", "1 revision", "48h delivery"],
    },
    {
      name: "Premium",
      price: "$499",
      note: "When you want a stronger brand feel + speed.",
      items: ["2 style variants", "Speed + performance pass", "Advanced polish", "Priority support", "72h delivery"],
    },
  ];

  return (
    <div className="grid3">
      {plans.map((p) => (
        <article key={p.name} className={`card glass ${p.badge ? "cardHot" : ""}`}>
          <div className="rowBetween">
            <div className="cardTitle">{p.name}</div>
            {p.badge && <div className="badge">{p.badge}</div>}
          </div>
          <div className="price">{p.price}</div>
          <p className="cardDesc">{p.note}</p>
          <ul className="list">
            {p.items.map((i) => <li key={i}>{i}</li>)}
          </ul>
          <a className="btn btnPrimary full" href="#contact">Request Demo →</a>
        </article>
      ))}
    </div>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Brief (10 min)", d: "You send niche + pages + reference." },
    { n: "02", t: "Demo in 24h", d: "You get a live preview link." },
    { n: "03", t: "Build in 48h", d: "We finalize and polish." },
    { n: "04", t: "Launch + handoff", d: "Deploy + files + support." },
  ];

  return (
    <div className="grid4">
      {steps.map((s) => (
        <div key={s.n} className="card glass">
          <div className="stepNum">{s.n}</div>
          <div className="cardTitle">{s.t}</div>
          <p className="cardDesc">{s.d}</p>
        </div>
      ))}
    </div>
  );
}

function FAQ() {
  const q = [
    {
      a: "What do you need from me?",
      b: "Your niche, the pages you need, and one reference site. That’s it.",
    },
    {
      a: "Is the 24h demo free?",
      b: "Yes — it’s a direction demo. If approved, we move into delivery.",
    },
    {
      a: "How many revisions?",
      b: "One focused revision in Pro/Premium. More can be added if needed.",
    },
    {
      a: "Do you handle deployment?",
      b: "Yes. Vercel deploy is included. Domain hookup available.",
    },
    {
      a: "What if I don’t like it?",
      b: "Then we stop after the demo. No drama, no wasted weeks.",
    },
  ];

  return (
    <div className="grid2">
      {q.map((x) => (
        <div key={x.a} className="card glass">
          <div className="cardTitle">{x.a}</div>
          <p className="cardDesc">{x.b}</p>
        </div>
      ))}
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="section" id="contact">
      <div className="final glass">
        <h2 className="h2">Want a demo by tomorrow?</h2>
        <p className="lead">
          Send 3 things: your niche, the pages you need, and a reference site. Response within 2 hours (TR time).
        </p>

        <div className="contactGrid">
          <a className="contactCard glass" href="mailto:arazdigitalstudio@gmail.com">
            <div className="contactTitle">Email</div>
            <div className="contactValue">arazdigitalstudio@gmail.com</div>
          </a>

          <a className="contactCard glass" href="https://www.freelancer.com/u/arazdigital" target="_blank" rel="noreferrer">
            <div className="contactTitle">Freelancer</div>
            <div className="contactValue">@arazdigital</div>
          </a>

          <a className="contactCard glass" href="https://instagram.com/arazdigitalstudio" target="_blank" rel="noreferrer">
            <div className="contactTitle">Instagram</div>
            <div className="contactValue">@arazdigitalstudio</div>
          </a>
        </div>

        <a className="btn btnPrimary big" href="mailto:arazdigitalstudio@gmail.com">
          Contact Now →
        </a>

        <div className="fine">Fast response • Clean work • Professional delivery</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © 2026 Araz Digital Studio • Built with React + Vite
    </footer>
  );
}

function SectionTitle({ title, desc }) {
  return (
    <div className="sectionTitle">
      <h2 className="h2">{title}</h2>
      <p className="muted">{desc}</p>
    </div>
  );
}