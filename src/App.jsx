import React, { useMemo, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

const EMAIL = "arazdigitalstudio@gmail.com";
const IG_URL = "https://www.instagram.com/arazdigitalstudio/";
const UPWORK_URL = "https://www.upwork.com/freelancers/~01e14df13c6a6ec131";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    budget: "Not sure yet",
    message: "",
  });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Project Inquiry — ArazDigitalStudio");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nWebsite (if any): ${form.website}\nBudget: ${form.budget}\n\nMessage:\n${form.message}\n\n---\nInstagram: ${IG_URL}\nUpwork: ${UPWORK_URL}\n`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [form]);

  const update = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="page" id="top">
      {/* Top bar */}
      <header className="topbar">
        <div className="container topbarInner">
          <a className="brand" href="#top" aria-label="ArazDigitalStudio home">
            <img className="brandLogo" src={logo} alt="ArazDigitalStudio logo" />
            <div className="brandText">
              <div className="brandName">ArazDigitalStudio</div>
              <div className="brandTag">
                Premium One-Page Websites • Logo • Brand Design
              </div>
            </div>
          </a>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#promise">Demo in 24h</a>
            <a href="#pricing">Pricing</a>

            {/* NEW: Social links */}
            <a href={IG_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={UPWORK_URL} target="_blank" rel="noreferrer">
              Upwork
            </a>

            {/* keep CTA */}
            <a href="#contact" className="navCta">
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroLeft">
              <div className="badge">
                <span className="dot" />
                High-end design that makes clients say “Let’s do it.”
              </div>
              <h1>
                We build <span className="grad">premium</span> one-page websites
                that look expensive and convert.
              </h1>
              <p className="lead">
                ArazDigitalStudio delivers clean, modern landing pages + brand
                identity (logo, colors, typography) so your business looks
                trustworthy and high-quality from the first second.
              </p>

              <div className="heroActions">
                <a className="btnPrimary" href="#contact">
                  Request Your Demo
                </a>
                <a className="btnGhost" href="#pricing">
                  See Pricing
                </a>
                {/* NEW: optional direct Upwork CTA (kept subtle as ghost) */}
                <a
                  className="btnGhost"
                  href={UPWORK_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Hire on Upwork
                </a>
              </div>

              <div className="heroMeta">
                <div className="metaItem">
                  <div className="metaNum">24h</div>
                  <div className="metaLabel">1-page demo delivery</div>
                </div>
                <div className="metaItem">
                  <div className="metaNum">Free</div>
                  <div className="metaLabel">small edits after delivery</div>
                </div>
                <div className="metaItem">
                  <div className="metaNum">Brand-Ready</div>
                  <div className="metaLabel">logo + design consistency</div>
                </div>
              </div>

              <div className="trustRow heroTrust">
                <div className="trustItem">⚡ Fast performance</div>
                <div className="trustItem">🎯 Conversion-first layout</div>
                <div className="trustItem">📱 Mobile-first design</div>
                <div className="trustItem">🧩 Brand consistency</div>
              </div>
            </div>

            <div className="heroRight" aria-hidden="true">
              <div className="glassCard">
                <div className="miniHeader">
                  <div className="miniPill">ArazDigitalStudio</div>
                  <div className="miniPill muted">Launch-Ready</div>
                </div>
                <div className="mock">
                  <div className="mockTop">
                    <div className="mockDot" />
                    <div className="mockDot" />
                    <div className="mockDot" />
                    <div className="mockBar" />
                  </div>
                  <div className="mockBody">
                    <div className="mockTitle" />
                    <div className="mockLine" />
                    <div className="mockLine short" />
                    <div className="mockCtas">
                      <div className="mockBtn" />
                      <div className="mockBtn ghost" />
                    </div>
                    <div className="mockGrid">
                      <div className="mockBlock" />
                      <div className="mockBlock" />
                      <div className="mockBlock" />
                    </div>
                  </div>
                </div>
                <div className="miniFooter">
                  <div className="miniNote">Clean • Premium • Reliable</div>
                  <div className="miniGlow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promise / 24h Demo */}
        <section id="promise" className="section alt">
          <div className="container">
            <div className="sectionHead">
              <h2>24-hour demo delivery</h2>
              <p>
                We can deliver a <b>1-page demo within 24 hours</b> so you see the
                quality before going all-in. If you love it, we finalize the
                full version and help you launch.
              </p>
            </div>
            <div className="cards3">
              <div className="card">
                <h3>What you get in 24h</h3>
                <p>
                  A polished hero + structure + CTA — designed for your business.
                </p>
                <ul className="list">
                  <li>Premium hero + headline</li>
                  <li>Sections layout (services, proof, CTA)</li>
                  <li>Mobile-first design</li>
                </ul>
              </div>
              <div className="card">
                <h3>Free small edits</h3>
                <p>
                  After delivery, we help with small adjustments at no extra
                  cost.
                </p>
                <ul className="list">
                  <li>Text tweaks</li>
                  <li>Spacing / minor UI fixes</li>
                  <li>Small section adjustments</li>
                </ul>
              </div>
              <div className="card">
                <h3>Design + brand</h3>
                <p>
                  We don’t just “code” — we design. Clean brand look included.
                </p>
                <ul className="list">
                  <li>Logo usage + spacing</li>
                  <li>Color harmony</li>
                  <li>Typography consistency</li>
                </ul>
              </div>
            </div>
            <div className="note">
              Want the demo? Send your business name + what you sell + a style
              reference (optional). We’ll handle the rest.
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Services</h2>
              <p>
                Everything you need to look premium online — simple process,
                premium result.
              </p>
            </div>
            <div className="cards3">
              <div className="card">
                <h3>One-Page Website</h3>
                <p>
                  A modern landing page built to convert visitors into clients.
                </p>
                <ul className="list">
                  <li>Hero + sections + CTA</li>
                  <li>Mobile-first & fast</li>
                  <li>SEO-ready structure</li>
                </ul>
              </div>
              <div className="card">
                <h3>Logo Design</h3>
                <p>
                  Clean, sharp logo systems that work everywhere: web, social,
                  print.
                </p>
                <ul className="list">
                  <li>Primary logo + icon</li>
                  <li>Color variants</li>
                  <li>Usage guidance</li>
                </ul>
              </div>
              <div className="card">
                <h3>Brand Identity</h3>
                <p>
                  Consistent fonts, colors and UI style so your brand looks
                  high-quality.
                </p>
                <ul className="list">
                  <li>Palette + typography</li>
                  <li>UI style system</li>
                  <li>Brand consistency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="section alt">
          <div className="container">
            <div className="sectionHead">
              <h2>Pricing</h2>
              <p>Clear packages that match real client needs.</p>
            </div>
            <div className="pricingGrid">
              <div className="priceCard">
                <div className="priceTop">
                  <div className="priceName">Demo (24h)</div>
                  <div className="priceTag">Try the quality first</div>
                </div>
                <div className="price">$0</div>
                <ul className="list">
                  <li>1-page demo within 24 hours</li>
                  <li>Premium hero + layout</li>
                  <li>Clear CTA direction</li>
                </ul>
                <a className="btnGhost full" href="#contact">
                  Request Demo
                </a>
              </div>

              <div className="priceCard featured">
                <div className="ribbon">Most Popular</div>
                <div className="priceTop">
                  <div className="priceName">One-Page Pro</div>
                  <div className="priceTag">Website that looks premium</div>
                </div>
                <div className="price">$499</div>
                <ul className="list">
                  <li>Full one-page website</li>
                  <li>Copy polish (if needed)</li>
                  <li>2 revision rounds</li>
                  <li>Free small edits</li>
                  <li>Launch support</li>
                </ul>
                <a className="btnPrimary full" href="#contact">
                  Get a Quote
                </a>
              </div>

              <div className="priceCard">
                <div className="priceTop">
                  <div className="priceName">Brand + Website</div>
                  <div className="priceTag">Logo + full identity look</div>
                </div>
                <div className="price">$799</div>
                <ul className="list">
                  <li>One-page website</li>
                  <li>Logo design + variants</li>
                  <li>Brand colors + fonts</li>
                  <li>3 revision rounds</li>
                  <li>Social assets (basic)</li>
                </ul>
                <a className="btnGhost full" href="#contact">
                  Start Brand+
                </a>
              </div>
            </div>

            <div className="smallPrint">
              Prices can vary based on scope. If your project is bigger (multi-page),
              we’ll quote it clearly.
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contactGrid">
              <div className="contactLeft">
                <h2>Let’s build something premium.</h2>
                <p className="lead">
                  Send a message and we’ll reply with a clean plan + quote.
                </p>

                <div className="contactCards">
                  {/* UPDATED: Email clickable */}
                  <a className="miniCard" href={`mailto:${EMAIL}`}>
                    <div className="miniTitle">Email</div>
                    <div className="miniValue">{EMAIL}</div>
                  </a>

                  {/* NEW: Instagram card */}
                  <a
                    className="miniCard"
                    href={IG_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="miniTitle">Instagram</div>
                    <div className="miniValue">@arazdigitalstudio</div>
                  </a>

                  {/* NEW: Upwork card */}
                  <a
                    className="miniCard"
                    href={UPWORK_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="miniTitle">Upwork</div>
                    <div className="miniValue">View profile</div>
                  </a>

                  <div className="miniCard">
                    <div className="miniTitle">Demo delivery</div>
                    <div className="miniValue">1-page demo in 24 hours</div>
                  </div>
                </div>

                <div className="note" style={{ marginTop: 14 }}>
                  Tip: If you already have a logo and text, we can deliver even
                  faster.
                </div>
              </div>

              <div className="contactRight">
                <div className="formCard">
                  <div className="formHead">
                    <div className="formTitle">Project Inquiry</div>
                    <div className="formHint">Opens your email app</div>
                  </div>

                  <div className="formGrid">
                    <label>
                      <span>Name</span>
                      <input
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Your name"
                      />
                    </label>
                    <label>
                      <span>Email</span>
                      <input
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@email.com"
                      />
                    </label>
                    <label className="full">
                      <span>Website (optional)</span>
                      <input
                        value={form.website}
                        onChange={update("website")}
                        placeholder="https://..."
                      />
                    </label>
                    <label className="full">
                      <span>Budget</span>
                      <select value={form.budget} onChange={update("budget")}>
                        <option>Not sure yet</option>
                        <option>$0 Demo (24h)</option>
                        <option>$299–$499 One-page</option>
                        <option>$500–$799 Brand + Website</option>
                        <option>$800+ Bigger project</option>
                      </select>
                    </label>
                    <label className="full">
                      <span>What do you need?</span>
                      <textarea
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell us what you do + what you need (one-page, logo, brand). Add deadline if any."
                        rows={5}
                      />
                    </label>
                  </div>

                  <a className="btnPrimary full" href={mailto}>
                    Send Message
                  </a>

                  <div className="formSmall">
                    Email: <b>{EMAIL}</b> — We usually reply quickly.
                    <br />
                    Instagram:{" "}
                    <a href={IG_URL} target="_blank" rel="noreferrer">
                      @arazdigitalstudio
                    </a>{" "}
                    • Upwork:{" "}
                    <a href={UPWORK_URL} target="_blank" rel="noreferrer">
                      profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="footer">
              <div className="container footerInner">
                <div className="footerBrand">
                  <img
                    className="footerLogo"
                    src={logo}
                    alt="ArazDigitalStudio logo"
                  />
                  <div>
                    <div className="footerName">ArazDigitalStudio</div>
                    <div className="footerTag">Premium Web & Brand Design</div>
                  </div>
                </div>

                <div className="footerLinks">
                  <a href="#services">Services</a>
                  <a href="#promise">Demo</a>
                  <a href="#pricing">Pricing</a>
                  <a href="#contact">Contact</a>
                  {/* NEW: external links in footer */}
                  <a href={IG_URL} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a href={UPWORK_URL} target="_blank" rel="noreferrer">
                    Upwork
                  </a>
                  <a href={`mailto:${EMAIL}`}>Email</a>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}