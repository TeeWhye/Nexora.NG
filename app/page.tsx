import "./home.css";
import Reveal from "./Reveal";


const products = [
  {
    number: "01",
    title: "Accounts & Deposits",
    slug: "accounts-deposits",
    description:
      "Manage customer accounts, deposits, and everyday banking operations.",
  },
  {
    number: "02",
    title: "Loan Management",
    slug: "loan-management",
    description:
      "Organize lending workflows, loan records, and repayment tracking.",
  },
  {
    number: "03",
    title: "Payments & Transfers",
    slug: "payments-transfers",
    description:
      "Bring payment operations and transaction visibility into one experience.",
  },
  {
    number: "04",
    title: "Reporting & Analytics",
    slug: "reporting-analytics",
    description:
      "Turn operational data into clearer reports and actionable insights.",
  },
];


function DashboardPreview() {
  return (
    <div className="dashboard">
      <div className="dashboard-topbar">
        <div className="dashboard-brand">
          <span className="dashboard-brand-icon">N</span>
          <span>Nexora <span className="dashboard-muted">/ Console</span></span>
        </div>
        <div className="dashboard-avatar">AD</div>
      </div>

      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <span className="sidebar-label">WORKSPACE</span>
          <div className="sidebar-item active">Overview</div>
          <div className="sidebar-item">Accounts</div>
          <div className="sidebar-item">Transactions</div>
          <div className="sidebar-item">Lending</div>
          <div className="sidebar-item">Reports</div>
          <div className="sidebar-item">Settings</div>
        </aside>

        <div className="dashboard-content">
          <div className="dashboard-heading">
            <div>
              <p className="dashboard-eyebrow">MONDAY, 12 OCTOBER</p>
              <h3>Good morning, Admin</h3>
              <p className="dashboard-muted">
                Here&apos;s an overview of your workspace.
              </p>
            </div>
            <span className="dashboard-status">
              <span className="status-dot" /> System overview
            </span>
          </div>

          <div className="metric-grid">
            <div className="metric-card">
              <span>Total accounts</span>
              <strong>24,680</strong>
              <small>Illustrative data</small>
            </div>
            <div className="metric-card">
              <span>Transactions</span>
              <strong>8,429</strong>
              <small>Illustrative data</small>
            </div>
            <div className="metric-card">
              <span>Loan portfolio</span>
              <strong>₦48.2M</strong>
              <small>Illustrative data</small>
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-heading">
              <div>
                <strong>Transaction activity</strong>
                <p className="dashboard-muted">Sample weekly overview</p>
              </div>
              <span className="chart-period">This week⌄</span>
            </div>

            <div className="chart">
              {[36, 54, 43, 72, 51, 86, 64, 94, 59, 76, 47, 83].map(
                (height, index) => (
                  <div className="chart-column" key={index}>
                    <div
                      className={`chart-bar ${index === 7 ? "chart-bar-highlight" : ""}`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ),
              )}
            </div>

            <div className="chart-labels">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-disclaimer">
        Illustrative interface · Not a live banking system
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#" aria-label="Nexora home">
          <span className="brand-symbol">N</span>
          <span>Nexora<span className="brand-period">.</span></span>
        </a>

        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#solutions">Solutions</a>
          <a href="#technology">Technology</a>
          <a href="#about">About</a>
        </div>

        <a className="nav-cta" href="#contact">
          Request a demo <span>↗</span>
        </a>
      </nav>

      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              BANKING INFRASTRUCTURE, REIMAGINED
            </div>

            <h1>
              Powering the
              <br />
              next era of
              <br />
              <span className="gradient-text">African finance.</span>
            </h1>

            <p className="hero-description">
              Connected banking technology designed to help financial
              institutions manage accounts, lending, payments, and everyday
              operations with greater clarity.
            </p>

            <div className="hero-actions">
              <a className="gradient-button" href="#platform">
                Explore our platform <span>→</span>
              </a>
              <a className="hero-secondary" href="#contact">
                Request a demo <span>↗</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-dot" />
              Built around the evolving needs of African finance
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-label label-top">
              <span className="label-dot" /> CONNECTED OPERATIONS
            </div>
            <DashboardPreview />
            <div className="floating-chip chip-top">
              <span className="chip-icon">↗</span>
              <span>
                <strong>One connected platform</strong>
                <small>Designed for clarity</small>
              </span>
            </div>
            <div className="floating-chip chip-bottom">
              <span className="chip-icon chip-icon-purple">◇</span>
              <span>
                <strong>Modular by design</strong>
                <small>Explore the capabilities</small>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>DESIGNED FOR FINANCIAL INSTITUTIONS</span>
          <span className="bottom-divider" />
          <span>CONNECTED TECHNOLOGY</span>
          <span className="bottom-divider" />
          <span>A PAN-AFRICAN VISION</span>
        </div>
      </section>

      <section className="platform-section section-padding" id="platform">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">THE NEXORA PLATFORM</span>
            <h2>
              The building blocks of
              <br />
              <span className="gradient-text">modern banking.</span>
            </h2>
            <p>
              Explore the capabilities that can bring core banking operations
              together in one connected environment.
            </p>
          </div>

          

<div className="product-grid">
  {products.map((product, index) => (
    <Reveal key={product.number} delay={index * 0.12}>
      <article className="product-card">
        <div className="product-card-top">
          <span className="product-number">{product.number}</span>
          <span className="product-arrow">↗</span>
        </div>

        <h3>{product.title}</h3>
        <p>{product.description}</p>

        <a
          href={`/products/${product.slug}`}
          className="product-link"
        >
          Explore capability <span>→</span>
        </a>
      </article>
    </Reveal>
  ))}
</div>

        </div>
      </section>

      <section className="solutions-section section-padding" id="solutions">
  <Reveal>
        <div className="container solutions-layout">
          <div>
            <span className="section-eyebrow">FLEXIBLE BY DESIGN</span>
            <h2>
              Technology that meets
              <br />
              you where you are.
            </h2>
            <p className="solutions-description">
              Different financial institutions have different operating
              needs. The right technology starts with understanding them.
            </p>
          </div>

          <div className="solution-list">
            {[
              "Commercial banks",
              "Microfinance institutions",
              "Cooperative financial institutions",
              "Digital lenders & fintechs",
            ].map((solution, index) => (
              <div className="solution-item" key={solution}>
                <span className="solution-index">0{index + 1}</span>
                <span>{solution}</span>
                <span className="solution-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
</section>

     <section className="technology-section section-padding" id="technology">
  <Reveal>
        <div className="container technology-panel">
          <div className="technology-copy">
            <span className="section-eyebrow">A CONNECTED FOUNDATION</span>
            <h2>
              Built for a more
              <br />
              connected future.
            </h2>
            <p>
              Banking technology should make complex operations easier to
              understand. Explore an approach centered on modular capabilities,
              integration, and useful operational visibility.
            </p>
            <a className="gradient-button" href="#contact">
              Discuss your needs <span>→</span>
            </a>
          </div>
          <div className="technology-graphic" aria-label="Illustration of connected technology modules">
            <div className="tech-ring ring-outer" />
            <div className="tech-ring ring-middle" />
            <div className="tech-core">N</div>
            <span className="tech-node node-one">Accounts</span>
            <span className="tech-node node-two">Lending</span>
            <span className="tech-node node-three">Payments</span>
            <span className="tech-node node-four">Insights</span>
          </div>
        </div>
        </Reveal>
</section>

      <section className="contact-section section-padding" id="contact">
        <div className="container contact-panel">
          <span className="section-eyebrow">START A CONVERSATION</span>
          <h2>
            Let&apos;s shape the
            <br />
            future of finance.
          </h2>
          <p>
            Have questions about banking technology or looking to explore a
            potential solution? Let&apos;s talk.
          </p>
          <a className="gradient-button" href="mailto:hello@example.com">
            Get in touch <span>↗</span>
          </a>
          <small>Demo contact details are placeholders for this practice project.</small>
        </div>
      </section>

      <footer className="footer" id="about">
        <div className="container footer-inner">
          <a className="brand" href="#" aria-label="Nexora home">
            <span className="brand-symbol">N</span>
            <span>Nexora<span className="brand-period">.</span></span>
          </a>
          <p>Powering the next era of African finance.</p>
          <span className="footer-copy">
  © 2026 Nexora · Concept website
</span>
        </div>
      </footer>
    </main>
  );
}
