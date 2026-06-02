import "./App.css";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <main className="page">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <Concepts />
      <Pricing />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Araz Digital Studio home">
        <img className="brandLogo" src={logo} alt="Araz Digital Studio" />
        <div className="brandText">
          <span className="brandName">ARAZ</span>
          <span className="brandSub">Digital Studio</span>
        </div>
      </a>

      <nav className="nav">
        <a href="#services">Services</a>
        <a href="#concepts">Concepts</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="navBtn" href="mailto:arazdigitalstudio@gmail.com">
        Let’s Talk →
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroContent">
        <div className="eyebrow">Premium Web Design Studio</div>

        <h1>
          Elegant Websites for Brands That Want to Look{" "}
          <span>Premium Online</span>
        </h1>

        <p>
          Araz Digital Studio creates modern, responsive, and conversion-focused
          websites for small businesses, startups, consultants, beauty studios,
          real estate brands, and premium service companies.
        </p>

        <div className="heroActions">
          <a className="btn btnGold" href="mailto:arazdigitalstudio@gmail.com">
            Start Your Project
          </a>
          <a className="btn btnGhost" href="#pricing">
            View Packages
          </a>
        </div>
      </div>

      <div className="heroVisual">
        <div className="orb orbOne"></div>
        <div className="orb orbTwo"></div>
        <img src={logo} alt="Araz Digital Studio premium logo" />
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    ["✦", "Premium Design", "Luxury • Modern • Unique"],
    ["◈", "Mobile Responsive", "Perfect on all devices"],
    ["⌕", "SEO-Friendly", "Built for visibility"],
    ["⚡", "Fast Delivery", "Clear timeline • Clean launch"],
  ];

  return (
    <section className="trustStrip">
      {items.map(([icon, title, desc]) => (
        <div className="trustItem" key={title}>
          <span>{icon}</span>
          <div>
            <strong>{title}</strong>
            <p>{desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: "▣",
      title: "Website Design",
      desc: "Custom, modern websites crafted to elevate your brand and build trust from the first visit.",
    },
    {
      icon: "⌁",
      title: "Landing Pages",
      desc: "High-converting landing pages designed for campaigns, launches, portfolios, and client acquisition.",
    },
    {
      icon: "✎",
      title: "Website Redesign",
      desc: "Transform outdated websites into refined, modern, mobile-friendly digital experiences.",
    },
    {
      icon: "◎",
      title: "Brand Web Presence",
      desc: "A complete online presentation that reflects your visual identity, message, and business goals.",
    },
  ];

  return (
    <section id="services" className="section">
      <SectionTitle
        label="Our Services"
        title="Premium Solutions for a Powerful Online Presence"
        desc="Every section is designed with purpose: clarity, elegance, trust, and conversion."
      />

      <div className="serviceGrid">
        {services.map((item) => (
          <article className="card serviceCard" key={item.title}>
            <div className="cardIcon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Concepts() {
  const concepts = [
    "Luxury Beauty Studio Website",
    "Real Estate Landing Page",
    "Premium Product Brand Website",
    "Consultant / Personal Brand Website",
    "Modern Business Service Website",
  ];

  return (
    <section id="concepts" className="section">
      <SectionTitle
        label="Selected Concepts"
        title="Website Directions Designed to Feel Premium"
        desc="These are concept directions, not fake client claims. They show the level of visual quality Araz Digital Studio can create."
      />

      <div className="conceptGrid">
        {concepts.map((title, index) => (
          <article className={`conceptCard concept${index + 1}`} key={title}>
            <div className="conceptOverlay">
              <span>Concept Direction</span>
              <h3>{title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter Website",
      price: "$249",
      desc: "For one-page websites, landing pages, portfolios, and early-stage brands.",
      items: [
        "One-page responsive website",
        "Premium section layout",
        "Mobile-friendly design",
        "Contact section",
        "Basic SEO-friendly setup",
        "Clear call-to-action structure",
      ],
    },
    {
      name: "Business Website",
      price: "$499",
      badge: "Most Popular",
      desc: "For small businesses that need a complete and professional digital presence.",
      items: [
        "Multi-section website",
        "Custom homepage structure",
        "Service or product sections",
        "Contact / inquiry structure",
        "Mobile and tablet optimization",
        "Stronger brand presentation",
      ],
    },
    {
      name: "Premium Brand Website",
      price: "$899",
      desc: "For brands that need high-end design, storytelling, polish, and stronger presentation.",
      items: [
        "Premium custom design direction",
        "Advanced homepage structure",
        "Brand storytelling",
        "Conversion-focused sections",
        "Detailed visual refinement",
        "Priority project attention",
      ],
    },
  ];

  return (
    <section id="pricing" className="section">
      <SectionTitle
        label="Pricing Plans"
        title="Simple Packages. Premium Results."
        desc="Final pricing depends on project scope, content, features, timeline, and revision requirements."
      />

      <div className="pricingGrid">
        {plans.map((plan) => (
          <article
            className={`card priceCard ${plan.badge ? "featured" : ""}`}
            key={plan.name}
          >
            {plan.badge && <div className="badge">{plan.badge}</div>}
            <h3>{plan.name}</h3>
            <p>{plan.desc}</p>
            <div className="price">
              <span>From</span>
              {plan.price}
            </div>

            <ul>
              {plan.items.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>

            <a className="btn btnGold full" href="mailto:arazdigitalstudio@gmail.com">
              Choose Plan →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Project Direction", "We define your goals, audience, structure, and visual direction."],
    ["02", "Design & Content Flow", "We create a clear layout with refined spacing and premium messaging."],
    ["03", "Build & Optimize", "Your website is developed to be responsive, fast, and easy to navigate."],
    ["04", "Launch", "The final website is prepared for deployment and public presentation."],
  ];

  return (
    <section className="section">
      <SectionTitle
        label="Process"
        title="A Clear Process From Idea to Launch"
        desc="A structured workflow that keeps the project clean, focused, and professional."
      />

      <div className="processGrid">
        {steps.map(([num, title, desc]) => (
          <article className="card processCard" key={num}>
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const questions = [
    [
      "Do you create websites for international clients?",
      "Yes. Araz Digital Studio creates English-language, modern, and internationally polished digital presentations.",
    ],
    [
      "Can you help if I do not have content ready?",
      "Yes. We can structure the website content and guide the messaging so your brand feels clear and professional.",
    ],
    [
      "Are the websites mobile-friendly?",
      "Yes. Every website is designed to look clean and functional across desktop, tablet, and mobile devices.",
    ],
    [
      "Can I request changes after the first version?",
      "Yes. Revisions can be included depending on the selected package and project scope.",
    ],
    [
      "How much does a website cost?",
      "Packages start from $249. Final pricing depends on pages, design complexity, features, content needs, and revision scope.",
    ],
  ];

  return (
    <section id="faq" className="section">
      <SectionTitle
        label="FAQ"
        title="Questions Before We Start"
        desc="Clear answers for clients who want a professional website without confusion."
      />

      <div className="faqGrid">
        {questions.map(([q, a]) => (
          <article className="faqItem" key={q}>
            <h3>{q}</h3>
            <p>{a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="finalCta">
      <div>
        <span>Ready to Build a Website That Feels Premium?</span>
        <h2>Let’s create a digital presence that makes your brand look refined, trustworthy, and ready for growth.</h2>
      </div>

      <a className="btn btnGold" href="mailto:arazdigitalstudio@gmail.com">
        Request a Website Quote →
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footerBrand">
        <img src={logo} alt="Araz Digital Studio" />
        <div>
          <strong>ARAZ Digital Studio</strong>
          <p>Designing elegant websites that elevate brands and drive results.</p>
        </div>
      </div>

      <div className="footerLinks">
        <a href="#services">Services</a>
        <a href="#concepts">Concepts</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="mailto:arazdigitalstudio@gmail.com">arazdigitalstudio@gmail.com</a>
      </div>
    </footer>
  );
}

function SectionTitle({ label, title, desc }) {
  return (
    <div className="sectionTitle">
      <span>{label}</span>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}