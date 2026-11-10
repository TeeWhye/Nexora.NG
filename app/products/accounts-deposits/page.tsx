
import ProductHero from "../../components/products/ProductHero";
import ProductCapabilities from "../../components/products/ProductCapabilities";
import ProductBenefits from "../../components/products/ProductBenefits";
import ProductCTA from "../../components/products/ProductCTA";
import ProductFAQ from "../../components/products/ProductFAQ";
import ProductOverview from "../../components/products/ProductOverview";
import "../../home.css";

export default function AccountsDepositsPage() {
  return (
    <main className="product-detail-page">
<ProductHero
  eyebrow="NEXORA PRODUCTS / ACCOUNTS & DEPOSITS"
  title="Banking relationships,"
  highlight="built on a stronger foundation."
  description="Bring customer accounts, deposit products, and everyday banking operations into a clearer, more organized experience."
  dashboard={
    <div
      className="account-dashboard"
      aria-label="Illustrative banking dashboard"
    >
      <div className="dashboard-topbar">
        <div className="dashboard-brand">
          <span className="dashboard-brand-icon">N</span>
          <span>Nexora</span>
        </div>
        <span className="dashboard-period">
          Overview <span>⌄</span>
        </span>
      </div>

      <div className="dashboard-heading">
        <div>
          <p>ACCOUNT OVERVIEW</p>
          <h2>Banking at a glance</h2>
        </div>
        <span className="dashboard-menu">•••</span>
      </div>

      <div className="dashboard-metrics">
        <div className="dashboard-metric">
          <span>Customer accounts</span>
          <strong>Overview</strong>
          <small>Account information</small>
        </div>
        <div className="dashboard-metric">
          <span>Deposit products</span>
          <strong>Portfolio</strong>
          <small>Product visibility</small>
        </div>
      </div>

      <div className="dashboard-activity">
        <div className="dashboard-activity-heading">
          <h3>Account activity</h3>
          <span>Illustrative view</span>
        </div>

        <div className="dashboard-activity-row">
          <span className="dashboard-activity-icon blue">A</span>
          <div className="dashboard-activity-info">
            <strong>Customer accounts</strong>
            <span>Account management</span>
          </div>
          <span className="dashboard-row-tag">Accounts</span>
        </div>

        <div className="dashboard-activity-row">
          <span className="dashboard-activity-icon violet">D</span>
          <div className="dashboard-activity-info">
            <strong>Deposit products</strong>
            <span>Product management</span>
          </div>
          <span className="dashboard-row-tag">Deposits</span>
        </div>

        <div className="dashboard-activity-row">
          <span className="dashboard-activity-icon cyan">O</span>
          <div className="dashboard-activity-info">
            <strong>Account operations</strong>
            <span>Operational workflows</span>
          </div>
          <span className="dashboard-row-tag">Operations</span>
        </div>
      </div>

      <div className="dashboard-footer">
        <span className="dashboard-footer-dot" />
        Concept interface · Sample content
      </div>

      <div className="dashboard-floating-card">
        <span className="floating-card-icon">↗</span>
        <div>
          <strong>One clearer view</strong>
          <span>Accounts &amp; deposits</span>
        </div>
      </div>
    </div>
  }
/>

      

<ProductOverview
  heading="Bring everyday banking into"
  highlight="clearer focus."
  intro="Account and deposit operations are central to the banking experience. Nexora's concept platform brings these areas into one organized view, helping teams explore customer accounts, deposit products, and operational workflows."
  points={[
    {
      number: "01",
      title: "A clearer account view",
      description:
        "Keep customer account information organized and easier to navigate.",
    },
    {
      number: "02",
      title: "Structured deposit products",
      description:
        "Present deposit offerings and their related information in a consistent format.",
    },
    {
      number: "03",
      title: "Organized operations",
      description:
        "Give common account servicing workflows a clearer structure.",
    },
  ]}
/>


      
<ProductCapabilities
  heading="Designed around everyday banking operations."
  intro="Explore the core areas a modern account and deposit platform can bring together."
  capabilities={[
    {
      number: "01",
      title: "Customer Accounts",
      description:
        "Organize customer account information and support day-to-day account management workflows.",
    },
    {
      number: "02",
      title: "Deposit Products",
      description:
        "Present deposit offerings and their associated account information in a clear, structured experience.",
    },
    {
      number: "03",
      title: "Account Operations",
      description:
        "Bring common account servicing activities into a more organized operational workflow.",
    },
  ]}
/>

      
<section className="account-showcase-section section-padding">
  <div className="container">
    <div className="account-showcase-heading">
      <div>
        <p className="product-eyebrow">THE ACCOUNT EXPERIENCE</p>
        <h2>
          Account information,
          <br />
          organized around your workflow.
        </h2>
      </div>

      <p>
        Explore a conceptual interface for viewing customer accounts,
        account types, and operational status in one structured workspace.
      </p>
    </div>

    <div className="account-workspace">
      <div className="workspace-sidebar">
        <div className="workspace-logo">
          <span>N</span> Nexora
        </div>

        <p className="workspace-nav-label">WORKSPACE</p>

        <div className="workspace-nav-item active">
          <span>▦</span> Overview
        </div>
        <div className="workspace-nav-item">
          <span>◉</span> Customer accounts
        </div>
        <div className="workspace-nav-item">
          <span>▤</span> Deposit products
        </div>
        <div className="workspace-nav-item">
          <span>↔</span> Account operations
        </div>

        <div className="workspace-sidebar-note">
          <span className="workspace-status-dot" />
          Concept interface
        </div>
      </div>

      <div className="workspace-main">
        <div className="workspace-topbar">
          <div>
            <p>WORKSPACE / ACCOUNTS</p>
            <h3>Customer accounts</h3>
          </div>
          <span className="workspace-demo-label">SAMPLE DATA</span>
        </div>

        <div className="workspace-summary-grid">
          <div className="workspace-summary-card">
            <span>Account directory</span>
            <strong>Customer records</strong>
            <small>Organized account information</small>
          </div>
          <div className="workspace-summary-card">
            <span>Deposit products</span>
            <strong>Product directory</strong>
            <small>Product information at a glance</small>
          </div>
          <div className="workspace-summary-card">
            <span>Account servicing</span>
            <strong>Operational workflow</strong>
            <small>Common servicing activities</small>
          </div>
        </div>

        <div className="workspace-table-wrap">
          <div className="workspace-table-heading">
            <h4>Illustrative account directory</h4>
            <span>Example records only</span>
          </div>

          <div className="workspace-table">
            <div className="workspace-table-row table-header">
              <span>ACCOUNT</span>
              <span>TYPE</span>
              <span>STATUS</span>
            </div>

            <div className="workspace-table-row">
              <span className="workspace-account-name">
                <i>AC</i>
                <span>
                  <strong>Customer account A</strong>
                  <small>Example record</small>
                </span>
              </span>
              <span>Personal</span>
              <span><b className="workspace-status">Illustrative</b></span>
            </div>

            <div className="workspace-table-row">
              <span className="workspace-account-name">
                <i className="account-icon-purple">BD</i>
                <span>
                  <strong>Customer account B</strong>
                  <small>Example record</small>
                </span>
              </span>
              <span>Business</span>
              <span><b className="workspace-status">Illustrative</b></span>
            </div>

            <div className="workspace-table-row">
              <span className="workspace-account-name">
                <i className="account-icon-cyan">CE</i>
                <span>
                  <strong>Customer account C</strong>
                  <small>Example record</small>
                </span>
              </span>
              <span>Personal</span>
              <span><b className="workspace-status">Illustrative</b></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p className="workspace-disclaimer">
      Illustrative product concept. This is a visual mockup, not a
      functioning banking system or live customer account directory.
    </p>
  </div>
</section>


<section className="deposit-products-section section-padding">
  <div className="container">
    <div className="deposit-products-heading">
      <div>
        <p className="product-eyebrow">DEPOSIT PRODUCTS</p>
        <h2>
          Different products.
          <br />
          <span className="gradient-text">
            One clearer overview.
          </span>
        </h2>
      </div>

      <p>
        Explore how a banking platform could organize different
        deposit offerings and make their key characteristics
        easier for teams to review.
      </p>
    </div>

    <div className="deposit-products-grid">
      <article className="deposit-product-card">
        <div className="deposit-product-icon savings-icon">
          <span>01</span>
        </div>

        <p className="deposit-product-label">EVERYDAY BANKING</p>
        <h3>Savings Accounts</h3>
        <p className="deposit-product-description">
          A conceptual view of savings products, their terms,
          and the account information associated with them.
        </p>

        <div className="deposit-product-footer">
          <span>Product category</span>
          <span className="deposit-product-arrow">↗</span>
        </div>
      </article>

      <article className="deposit-product-card featured">
        <div className="deposit-product-icon term-icon">
          <span>02</span>
        </div>

        <p className="deposit-product-label">PLANNED SAVINGS</p>
        <h3>Term Deposits</h3>
        <p className="deposit-product-description">
          A structured way to present deposit terms, maturity
          information, and related product details.
        </p>

        <div className="deposit-product-footer">
          <span>Product category</span>
          <span className="deposit-product-arrow">↗</span>
        </div>
      </article>

      <article className="deposit-product-card">
        <div className="deposit-product-icon business-icon">
          <span>03</span>
        </div>

        <p className="deposit-product-label">BUSINESS BANKING</p>
        <h3>Business Deposits</h3>
        <p className="deposit-product-description">
          An illustrative category for organizing deposit
          offerings designed for business customers.
        </p>

        <div className="deposit-product-footer">
          <span>Product category</span>
          <span className="deposit-product-arrow">↗</span>
        </div>
      </article>
    </div>

    <p className="deposit-products-note">
      Illustrative product categories for the Nexora concept website.
      Actual product availability and functionality would depend on
      a confirmed product specification.
    </p>
  </div>
</section>



<ProductBenefits
  heading="A clearer foundation for"
  highlight="everyday banking."
  intro="A well-structured account and deposit experience can help teams navigate information, understand product structures, and approach routine operations with greater clarity."
  benefits={[
    {
      number: "01 / CLARITY",
      icon: "↗",
      title: "Bring information into focus",
      description:
        "Present account and deposit information in a consistent, organized interface that is easier to navigate.",
    },
    {
      number: "02 / STRUCTURE",
      icon: "◎",
      title: "Connect related workflows",
      description:
        "Give account information, deposit products, and servicing activities a clearer place within the wider workflow.",
    },
    {
      number: "03 / VISIBILITY",
      icon: "⌁",
      title: "Support informed decisions",
      description:
        "Create a structured view of relevant information to help teams review their work and understand operational context.",
    },
  ]}
/>




<ProductFAQ
  heading="Questions about"
  highlight="Accounts & Deposits."
  intro="A few starting points for understanding this product concept and the role it could play in a banking technology environment."
  questions={[
    {
      question: "What is Accounts & Deposits?",
      answer:
        "It represents a concept for organizing customer account information, deposit product details, and related banking operations within a structured platform experience.",
    },
    {
      question: "Who is this product designed for?",
      answer:
        "The concept is intended for exploring the needs of banks and financial institutions that manage customer accounts and deposit products. The actual target market would be confirmed through a real product brief.",
    },
    {
      question: "Does this demo connect to a live banking system?",
      answer:
        "No. This website is a concept project. Its dashboard illustrations and product descriptions are not connected to live banking infrastructure or customer records.",
    },
    {
      question: "How can we discuss a real implementation?",
      answer:
        "Use the contact option below to start a conversation about business requirements, technical scope, integrations, and the capabilities a real product would need to support.",
    },
  ]}
/>


<ProductCTA
  heading="Let's explore a clearer approach to"
  highlight="everyday banking."
  description="Every financial institution has different needs. Start a conversation about the account and deposit workflows your organization wants to support."
/>
    </main>
  );
}
