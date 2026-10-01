"use client";

import { FormEvent, useEffect, useState } from "react";

const Icon = ({ name }: { name: string }) => {
  const paths: Record<string, React.ReactNode> = {
    leaf: (
      <>
        <path d="M20 4C12 4 7 8 7 14c0 2 1 4 3 5 0-5 3-9 8-11-4 3-6 6-7 10" />
        <path d="M4 20c2-5 5-8 10-10" />
      </>
    ),
    cpu: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        <circle cx="12" cy="12" r="2.4" />
      </>
    ),
    home: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10.5V21h13V10.5" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.2 8.3-8 10-4.8-1.7-8-5-8-10V6l8-3Z" />
        <path d="m9.2 12 1.8 1.8 4-4" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
      </>
    ),
    water: <path d="M12 2s6 6.4 6 12a6 6 0 1 1-12 0c0-5.6 6-12 6-12Z" />,
    heart: (
      <>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    arrow: <path d="m5 12 14 0m-5-5 5 5-5 5" />,
    check: <path d="m5 12 4 4L19 6" />,
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
};

const ecosystemItems = [
  ["Generate energy", "sun"],
  ["Conserve water", "water"],
  ["Protect your family", "shield"],
  ["Improve well-being", "heart"],
  ["Lower living costs", "chart"],
  ["Grow long-term value", "home"],
];

const pillars = [
  {
    number: "01",
    eyebrow: "Sustainable by design",
    title: "Eco-Friendly & Self-Sustainable",
    icon: "leaf",
    copy:
      "A resource-conscious home that works intelligently with nature—reducing external dependency without compromising comfort.",
    features: [
      "Solar energy systems",
      "Rainwater harvesting",
      "Greywater recycling",
      "Biogas systems",
      "Organic waste conversion",
      "Passive cooling design",
    ],
    benefits: [
      "Lower utility bills",
      "Resource independence",
      "Reduced carbon footprint",
    ],
  },
  {
    number: "02",
    eyebrow: "Intelligence built in",
    title: "AI-Enabled & Fully Secure",
    icon: "cpu",
    copy:
      "Technology is integrated into everyday living—from access and automation to energy intelligence and community security.",
    features: [
      "Facial recognition access",
      "Smart home automation",
      "AI energy management",
      "Voice controls",
      "Visitor management",
      "Integrated security monitoring",
    ],
    benefits: [
      "Enhanced security",
      "Effortless convenience",
      "Greater efficiency",
    ],
  },
  {
    number: "03",
    eyebrow: "Ready from day one",
    title: "Fully Loaded Luxury",
    icon: "home",
    copy:
      "Thoughtfully equipped residences with premium essentials already in place, so your home feels complete the moment you arrive.",
    features: [
      "Smart appliances",
      "EV charging infrastructure",
      "Hydroponic kitchen gardens",
      "Water purification",
      "Smart lighting",
      "Premium fixtures & finishes",
    ],
    benefits: [
      "Immediate comfort",
      "Reduced setup costs",
      "Premium living standards",
    ],
  },
];

const advantages = [
  {
    icon: "heart",
    title: "Healthier Living",
    text: "Cleaner environments, abundant natural light and thoughtful sustainable systems designed around everyday well-being.",
  },
  {
    icon: "shield",
    title: "Peaceful Living",
    text: "AI-enabled security and carefully planned communities support a calmer, more protected lifestyle.",
  },
  {
    icon: "chart",
    title: "Lower Cost of Ownership",
    text: "Energy and water efficiency can reduce recurring dependence on household utilities over time.",
  },
  {
    icon: "cpu",
    title: "Future-Ready Technology",
    text: "An intelligent home platform conceived to stay relevant as modern lifestyles continue to evolve.",
  },
  {
    icon: "home",
    title: "Wealth Preservation",
    text: "Homes positioned around future-facing infrastructure, lifestyle quality and long-term real-estate value.",
  },
  {
    icon: "leaf",
    title: "Strong Resale Potential",
    text: "Sustainability and smart-home readiness can make properties more relevant to tomorrow's homebuyers.",
  },
];

const corridors = [
  {
    code: "OMR",
    title: "Chennai's technology corridor",
    text: "A connected address shaped by technology campuses, employment hubs and fast-evolving urban infrastructure.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1400&q=86",
  },
  {
    code: "ECR",
    title: "Luxury coastal living",
    text: "A distinctive lifestyle corridor bringing together coastal character, recreation and premium residential appeal.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=86",
  },
  {
    code: "GST",
    title: "A high-growth gateway",
    text: "An emerging urban corridor with strong connectivity and access to expanding residential and commercial ecosystems.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=86",
  },
];

export default function BuildMaxHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeAndGo = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-shell">
          <a href="#top" className="brand" aria-label="Build Max home">
            <span className="brand-mark">BM</span>
            <span className="brand-copy">
              <strong>BUILD MAX</strong>
              <small>INFRASTRUCTURE</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">Who We Are</a>
            <a href="#advantage">The Advantage</a>
            <a href="#why">Why Build Max</a>
            <a href="#locations">Locations</a>
          </nav>

          <a className="nav-cta" href="#register">
            Register Interest <Icon name="arrow" />
          </a>

          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <nav aria-label="Mobile navigation">
            <a onClick={closeAndGo} href="#about">
              Who We Are
            </a>
            <a onClick={closeAndGo} href="#advantage">
              The Advantage
            </a>
            <a onClick={closeAndGo} href="#why">
              Why Build Max
            </a>
            <a onClick={closeAndGo} href="#locations">
              Locations
            </a>
            <a onClick={closeAndGo} className="button button-primary" href="#register">
              Register Your Interest
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-bg"
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
          alt="Contemporary luxury residence with warm architectural lighting"
        />
        <div className="hero-shade" />
        <div className="hero-glow" />

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow light">
              <span />
              Chennai&apos;s next generation of premium living
            </div>

            <h1>
              Chennai&apos;s First
              <em> AI-Powered Sustainable</em>
              Luxury Homes
            </h1>

            <p className="hero-tagline">
              Live sustainable. Live intelligent. Live secure.
            </p>

            <p className="hero-description">
              A new generation of premium homes where sustainability, artificial
              intelligence, security, wellness and refined design come together
              for the way families want to live next.
            </p>

            <div className="hero-actions">
              <a href="#register" className="button button-primary">
                Register Your Interest <Icon name="arrow" />
              </a>
              <a href="#advantage" className="button button-ghost">
                Explore the Build Max Advantage
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Build Max highlights">
            <div className="hero-card-top">
              <span>Launching Soon</span>
              <span className="pulse" />
            </div>
            <h2>Designed for life beyond today.</h2>
            <div className="premium-list">
              <span>Premium Eco-Friendly</span>
              <span>AI-Enabled</span>
              <span>Self-Sustainable</span>
              <span>Fully Loaded Homes</span>
            </div>
            <div className="corridor-mini">
              <p>Prime Chennai growth corridors</p>
              <div>
                <strong>OMR</strong>
                <i />
                <strong>ECR</strong>
                <i />
                <strong>GST Road</strong>
              </div>
            </div>
          </aside>
        </div>

        <div className="scroll-cue">
          <span>Discover Build Max</span>
          <i />
        </div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="container">
          <div className="section-grid">
            <div>
              <div className="eyebrow">
                <span />
                Who we are
              </div>
              <h2 className="display-heading">
                We are not building houses.
                <em> We are engineering living ecosystems.</em>
              </h2>
            </div>

            <div className="intro-copy">
              <p className="lead">
                At Build Max, we believe a home should do far more than provide
                shelter. It should actively contribute to your family&apos;s health,
                security, efficiency and long-term prosperity.
              </p>
              <p>
                Every Build Max residence combines sustainable infrastructure,
                intelligent technology and premium comfort into one cohesive
                living experience—designed to stay relevant for decades.
              </p>
            </div>
          </div>

          <div className="ecosystem-grid">
            {ecosystemItems.map(([label, icon]) => (
              <div className="ecosystem-item" key={label}>
                <span className="icon-orb">
                  <Icon name={icon} />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="promise-strip">
            <span>Our promise</span>
            <blockquote>
              “We Don&apos;t Wait For The Future.
              <strong> We Engineer It.”</strong>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="pillars section-pad" id="advantage">
        <div className="container">
          <div className="section-head centered">
            <div className="eyebrow">
              <span />
              The Build Max Advantage
            </div>
            <h2 className="display-heading">
              Three pillars.
              <em> One extraordinary lifestyle.</em>
            </h2>
            <p>
              A complete residential philosophy built around independence,
              intelligence and uncompromising comfort.
            </p>
          </div>

          <div className="pillar-stack">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.number}>
                <div className="pillar-number">{pillar.number}</div>
                <div className="pillar-main">
                  <span className="pillar-icon">
                    <Icon name={pillar.icon} />
                  </span>
                  <p className="kicker">{pillar.eyebrow}</p>
                  <h3>{pillar.title}</h3>
                  <p className="pillar-copy">{pillar.copy}</p>
                </div>
                <div className="pillar-features">
                  <p className="list-label">Integrated features</p>
                  <ul>
                    {pillar.features.map((feature) => (
                      <li key={feature}>
                        <Icon name="check" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pillar-benefits">
                  <p className="list-label">What it unlocks</p>
                  {pillar.benefits.map((benefit) => (
                    <span key={benefit}>{benefit}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why section-pad" id="why">
        <div className="container">
          <div className="why-layout">
            <div className="why-visual">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=88"
                alt="Refined modern home interior with natural light and greenery"
              />
              <div className="visual-note">
                <span>Built around people.</span>
                <strong>Powered by better systems.</strong>
              </div>
            </div>

            <div className="why-content">
              <div className="eyebrow">
                <span />
                Why Build Max?
              </div>
              <h2 className="display-heading">
                Better living today.
                <em> Smarter value tomorrow.</em>
              </h2>

              <div className="advantage-list">
                {advantages.map((item, index) => (
                  <article key={item.title}>
                    <span className="advantage-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="advantage-icon">
                      <Icon name={item.icon} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="locations section-pad" id="locations">
        <div className="container">
          <div className="location-head">
            <div>
              <div className="eyebrow light">
                <span />
                Our development focus
              </div>
              <h2 className="display-heading light-heading">
                Chennai&apos;s growth corridors.
                <em> Carefully chosen.</em>
              </h2>
            </div>
            <p>
              Build Max is focusing on locations that combine everyday lifestyle
              advantages, connectivity and long-term appreciation potential.
            </p>
          </div>

          <div className="location-grid">
            {corridors.map((corridor) => (
              <article className="location-card" key={corridor.code}>
                <img src={corridor.image} alt={`${corridor.code} Chennai corridor`} />
                <div className="location-overlay" />
                <div className="location-copy">
                  <span className="location-pin">
                    <Icon name="map" />
                  </span>
                  <p>Chennai</p>
                  <h3>{corridor.code}</h3>
                  <strong>{corridor.title}</strong>
                  <span className="location-description">{corridor.text}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="register section-pad" id="register">
        <div className="container">
          <div className="register-shell">
            <div className="register-copy">
              <div className="eyebrow">
                <span />
                Early homeowner registration
              </div>
              <h2 className="display-heading">
                Be among
                <em> the first.</em>
              </h2>
              <p className="lead">
                Join the Build Max priority list for early access to upcoming
                residential launches across Chennai.
              </p>

              <div className="registration-perks">
                {[
                  "Project updates",
                  "Launch announcements",
                  "Early floor-plan access",
                  "Exclusive preview events",
                  "Priority booking opportunities",
                ].map((perk) => (
                  <span key={perk}>
                    <Icon name="check" />
                    {perk}
                  </span>
                ))}
              </div>
            </div>

            <div className="form-card">
              {submitted ? (
                <div className="success-state" role="status">
                  <span className="success-icon">
                    <Icon name="check" />
                  </span>
                  <p>Registration received</p>
                  <h3>Welcome to the Build Max priority list.</h3>
                  <span>
                    We&apos;ll keep you informed as new Chennai projects move toward
                    launch.
                  </span>
                  <button
                    className="text-button"
                    type="button"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegister}>
                  <div className="form-heading">
                    <span>Priority Registration</span>
                    <h3>Tell us how to reach you.</h3>
                  </div>

                  <label>
                    <span>Full name</span>
                    <input name="name" type="text" placeholder="Your name" required />
                  </label>

                  <div className="form-row">
                    <label>
                      <span>Phone number</span>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </label>
                    <label>
                      <span>Email address</span>
                      <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </label>
                  </div>

                  <label>
                    <span>Preferred corridor</span>
                    <select name="corridor" defaultValue="">
                      <option value="" disabled>
                        Select a location
                      </option>
                      <option>OMR</option>
                      <option>ECR</option>
                      <option>GST Road</option>
                      <option>Open to all locations</option>
                    </select>
                  </label>

                  <label className="consent">
                    <input type="checkbox" required />
                    <span>
                      I agree to receive Build Max project updates and launch
                      communications.
                    </span>
                  </label>

                  <button className="button button-primary full" type="submit">
                    Register Now <Icon name="arrow" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#top" className="brand brand-footer">
                <span className="brand-mark">BM</span>
                <span className="brand-copy">
                  <strong>BUILD MAX</strong>
                  <small>INFRASTRUCTURE</small>
                </span>
              </a>
              <p>
                Future-ready residential communities where sustainability,
                intelligence, security and premium living converge.
              </p>
            </div>

            <div className="footer-nav">
              <div>
                <span>Explore</span>
                <a href="#about">Who We Are</a>
                <a href="#advantage">Build Max Advantage</a>
                <a href="#why">Why Build Max</a>
              </div>
              <div>
                <span>Locations</span>
                <a href="#locations">OMR</a>
                <a href="#locations">ECR</a>
                <a href="#locations">GST Road</a>
              </div>
              <div>
                <span>Get Started</span>
                <a href="#register">Register Interest</a>
                <a href="#register">Early Homeowner Access</a>
                <a href="mailto:hello@buildmax.in">hello@buildmax.in</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Build Max Infrastructure Private Limited.</span>
            <div>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
