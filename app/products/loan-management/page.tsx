
import ProductHero from "../../components/products/ProductHero";
import ProductOverview from "../../components/products/ProductOverview";
import ProductCapabilities from "../../components/products/ProductCapabilities";
import ProductBenefits from "../../components/products/ProductBenefits";
import ProductFAQ from "../../components/products/ProductFAQ";
import ProductCTA from "../../components/products/ProductCTA";
import "../../home.css";

export default function LoanManagementPage() {
  return (
    <main className="product-detail-page">
      <ProductHero
        eyebrow="NEXORA PRODUCTS / LOAN MANAGEMENT"
        title="Lending workflows,"
        highlight="with greater clarity."
        description="Explore a concept for organizing loan applications, lending information, and repayment workflows in a more structured experience."
        dashboard={
          <div
            className="account-dashboard"
            aria-label="Illustrative loan management dashboard"
          >
            <div className="dashboard-topbar">
              <div className="dashboard-brand">
                <span className="dashboard-brand-icon">N</span>
                <span>Nexora</span>
              </div>

              <span className="dashboard-period">
                Lending overview <span>⌄</span>
              </span>
            </div>

            <div className="dashboard-heading">
              <div>
                <p>LOAN MANAGEMENT</p>
                <h2>Lending at a glance</h2>
              </div>
              <span className="dashboard-menu">•••</span>
            </div>

            <div className="dashboard-metrics">
              <div className="dashboard-metric">
                <span>Loan applications</span>
                <strong>Application overview</strong>
                <small>Illustrative application records</small>
              </div>

              <div className="dashboard-metric">
                <span>Repayment tracking</span>
                <strong>Repayment overview</strong>
                <small>Illustrative repayment information</small>
              </div>
            </div>

            <div className="dashboard-activity">
              <div className="dashboard-activity-heading">
                <h3>Lending workflows</h3>
                <span>Illustrative view</span>
              </div>

              <div className="dashboard-activity-row">
                <span className="dashboard-activity-icon blue">A</span>
                <div className="dashboard-activity-info">
                  <strong>Loan applications</strong>
                  <span>Application review workflow</span>
                </div>
                <span className="dashboard-row-tag">Applications</span>
              </div>

              <div className="dashboard-activity-row">
                <span className="dashboard-activity-icon violet">L</span>
                <div className="dashboard-activity-info">
                  <strong>Loan records</strong>
                  <span>Lending information</span>
                </div>
                <span className="dashboard-row-tag">Loans</span>
              </div>

              <div className="dashboard-activity-row">
                <span className="dashboard-activity-icon cyan">R</span>
                <div className="dashboard-activity-info">
                  <strong>Repayment tracking</strong>
                  <span>Repayment workflow</span>
                </div>
                <span className="dashboard-row-tag">Repayments</span>
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
                <span>Lending workflows</span>
              </div>
            </div>
          </div>
        }
      />

      <ProductOverview
  heading="Bring lending operations into"
  highlight="clearer focus."
  intro="Lending involves multiple stages, from the initial application to assessment, approval, disbursement, and repayment. Nexora's loan management concept brings these stages into a more structured experience, helping financial institutions explore how lending information and workflows can work together."
  points={[
    {
      number: "01",
      title: "Organized loan applications",
      description:
        "Bring borrower information and application details into a clearer, more structured review process.",
    },
    {
      number: "02",
      title: "Structured approval workflows",
      description:
        "Present lending decisions and approval stages in an organized workflow that is easier to follow.",
    },
    {
      number: "03",
      title: "Clearer repayment visibility",
      description:
        "Organize repayment schedules, outstanding balances, and loan status information within a consistent interface.",
    },
  ]}
/>

<ProductCapabilities
  heading="Designed around the lending lifecycle."
  intro="Explore the capabilities a modern loan management platform can bring together to support structured lending operations."
  capabilities={[
    {
      number: "01",
      title: "Loan Origination",
      description:
        "Organize loan applications, capture borrower information, and provide a structured starting point for the lending process.",
    },
    {
      number: "02",
      title: "Credit Assessment",
      description:
        "Bring relevant borrower information and assessment details into a clearer review workflow to support lending decisions.",
    },
    {
      number: "03",
      title: "Loan Servicing",
      description:
        "Keep loan records, repayment schedules, and ongoing servicing activities organized throughout the lending lifecycle.",
    },
  ]}
/>

<section className="loan-workspace-section section-padding">
  <div className="container">
    <div className="loan-workspace-heading">
      <div>
        <p className="product-eyebrow">THE LENDING EXPERIENCE</p>

        <h2>
          Every stage of lending,
          <br />
          <span className="gradient-text">
            brought into clearer view.
          </span>
        </h2>
      </div>

      <p>
        Explore a conceptual workspace for organizing loan applications,
        reviewing lending records, and monitoring repayment workflows
        within one structured interface.
      </p>
    </div>

    <div className="loan-workspace">
      <aside className="loan-workspace-sidebar">
        <div className="loan-workspace-logo">
          <span>N</span>
          Nexora
        </div>

        <p className="loan-workspace-nav-label">LENDING OPERATIONS</p>

        <div className="loan-workspace-nav-item active">
          <span>▦</span>
          Overview
        </div>

        <div className="loan-workspace-nav-item">
          <span>▤</span>
          Loan applications
        </div>

        <div className="loan-workspace-nav-item">
          <span>◉</span>
          Loan records
        </div>

        <div className="loan-workspace-nav-item">
          <span>↔</span>
          Repayments
        </div>

        <div className="loan-workspace-sidebar-note">
          <span />
          Concept interface
        </div>
      </aside>

      <div className="loan-workspace-main">
        <div className="loan-workspace-topbar">
          <div>
            <p>WORKSPACE / LENDING</p>
            <h3>Lending overview</h3>
          </div>

          <span className="loan-workspace-demo-label">
            SAMPLE DATA
          </span>
        </div>

        <div className="loan-workspace-summary">
          <article className="loan-workspace-summary-card">
            <span>Loan applications</span>
            <strong>Application review</strong>
            <small>Illustrative application records</small>
          </article>

          <article className="loan-workspace-summary-card">
            <span>Loan portfolio</span>
            <strong>Loan records</strong>
            <small>Organized lending information</small>
          </article>

          <article className="loan-workspace-summary-card">
            <span>Repayments</span>
            <strong>Repayment tracking</strong>
            <small>Illustrative repayment information</small>
          </article>
        </div>

        <div className="loan-workspace-table-wrap">
          <div className="loan-workspace-table-heading">
            <h4>Application review</h4>
            <span>Example records only</span>
          </div>

          <div className="loan-workspace-table">
            <div className="loan-workspace-table-row table-header">
              <span>APPLICATION</span>
              <span>LOAN TYPE</span>
              <span>STAGE</span>
            </div>

            <div className="loan-workspace-table-row">
              <span className="loan-workspace-account-name">
                <i>LA</i>
                <span>
                  <strong>Application A</strong>
                  <small>Example record</small>
                </span>
              </span>

              <span>Personal loan</span>
              <span>
                <b className="loan-workspace-status">Under review</b>
              </span>
            </div>

            <div className="loan-workspace-table-row">
              <span className="loan-workspace-account-name">
                <i className="loan-icon-purple">LB</i>
                <span>
                  <strong>Application B</strong>
                  <small>Example record</small>
                </span>
              </span>

              <span>Business loan</span>
              <span>
                <b className="loan-workspace-status">Assessment</b>
              </span>
            </div>

            <div className="loan-workspace-table-row">
              <span className="loan-workspace-account-name">
                <i className="loan-icon-cyan">LC</i>
                <span>
                  <strong>Application C</strong>
                  <small>Example record</small>
                </span>
              </span>

              <span>Asset finance</span>
              <span>
                <b className="loan-workspace-status">Submitted</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p className="loan-workspace-disclaimer">
      Illustrative product concept. This dashboard is a visual mockup,
      not a functioning loan management system or a source of live
      borrower information.
    </p>
  </div>
</section>

{/* Lending Lifecycle */}

<section className="loan-lifecycle-section section-padding">
  <div className="container">
    <div className="loan-lifecycle-heading">
      <p className="product-eyebrow">THE LENDING LIFECYCLE</p>

      <h2>
        From application to repayment.
        <br />
        <span className="gradient-text">
          One connected journey.
        </span>
      </h2>

      <p>
        Explore how a structured lending workflow can connect each
        stage of the loan journey, from the initial application to
        ongoing repayment management.
      </p>
    </div>

    <div className="loan-lifecycle-track">
      <article className="loan-lifecycle-card">
        <div className="loan-lifecycle-card-top">
          <span className="loan-lifecycle-number">01</span>
          <span className="loan-lifecycle-icon">↗</span>
        </div>

        <div className="loan-lifecycle-line" />

        <p className="loan-lifecycle-label">STAGE ONE</p>

        <h3>Application</h3>

        <p className="loan-lifecycle-description">
          Capture borrower information and organize submitted loan
          applications for review.
        </p>
      </article>

      <article className="loan-lifecycle-card">
        <div className="loan-lifecycle-card-top">
          <span className="loan-lifecycle-number">02</span>
          <span className="loan-lifecycle-icon">◎</span>
        </div>

        <div className="loan-lifecycle-line" />

        <p className="loan-lifecycle-label">STAGE TWO</p>

        <h3>Assessment</h3>

        <p className="loan-lifecycle-description">
          Bring relevant borrower details and assessment information
          into a structured review process.
        </p>
      </article>

      <article className="loan-lifecycle-card">
        <div className="loan-lifecycle-card-top">
          <span className="loan-lifecycle-number">03</span>
          <span className="loan-lifecycle-icon">✓</span>
        </div>

        <div className="loan-lifecycle-line" />

        <p className="loan-lifecycle-label">STAGE THREE</p>

        <h3>Approval</h3>

        <p className="loan-lifecycle-description">
          Represent lending decisions and approval stages within a
          clear, organized workflow.
        </p>
      </article>

      <article className="loan-lifecycle-card">
        <div className="loan-lifecycle-card-top">
          <span className="loan-lifecycle-number">04</span>
          <span className="loan-lifecycle-icon">↗</span>
        </div>

        <div className="loan-lifecycle-line" />

        <p className="loan-lifecycle-label">STAGE FOUR</p>

        <h3>Disbursement</h3>

        <p className="loan-lifecycle-description">
          Organize the information associated with approved loans
          and their disbursement stage.
        </p>
      </article>

      <article className="loan-lifecycle-card">
        <div className="loan-lifecycle-card-top">
          <span className="loan-lifecycle-number">05</span>
          <span className="loan-lifecycle-icon">⌁</span>
        </div>

        <div className="loan-lifecycle-line" />

        <p className="loan-lifecycle-label">STAGE FIVE</p>

        <h3>Repayment</h3>

        <p className="loan-lifecycle-description">
          Present repayment schedules, outstanding balances, and
          loan servicing information in one structured view.
        </p>
      </article>
    </div>

    <div className="loan-lifecycle-note">
  <span>✳</span>

  <p>
    A conceptual workflow illustrating the stages of lending.
    Actual processes depend on each institution&apos;s policies,
    approval requirements, and product specifications.
  </p>
</div>
  </div>
</section>

<ProductBenefits
  heading="A stronger foundation for"
  highlight="lending operations."
  intro="A structured loan management experience can help financial institutions organize lending information, follow established workflows, and maintain clearer oversight throughout the loan lifecycle."
  benefits={[
    {
      number: "01 / ORGANIZATION",
      icon: "↗",
      title: "Bring lending information together",
      description:
        "Present borrower records, loan applications, and repayment information within a consistent, organized interface.",
    },
    {
      number: "02 / WORKFLOW",
      icon: "◎",
      title: "Create clearer lending processes",
      description:
        "Make application reviews, approval stages, and loan servicing workflows easier to understand and follow.",
    },
    {
      number: "03 / VISIBILITY",
      icon: "⌁",
      title: "Maintain portfolio oversight",
      description:
        "Support a clearer view of loan status, repayment schedules, and relevant portfolio information.",
    },
  ]}
/>

<ProductFAQ
  heading="Questions about"
  highlight="Loan Management."
  intro="A few starting points for understanding this lending product concept and the role it could play in a banking technology environment."
  questions={[
    {
      question: "What is Loan Management?",
      answer:
        "It represents a concept for organizing loan applications, lending workflows, loan records, and repayment information within a structured platform experience.",
    },
    {
      question: "Which stages of lending does the concept cover?",
      answer:
        "The illustrated lifecycle covers application, assessment, approval, disbursement, and repayment. Actual workflows would depend on each institution's policies and product requirements.",
    },
    {
      question: "Does this demo connect to a live banking system?",
      answer:
        "No. This website is a concept project. Its dashboard illustrations and product descriptions are not connected to live banking infrastructure or borrower records.",
    },
    {
      question: "Can the workflow be adapted to our institution?",
      answer:
        "A real implementation would require a confirmed product specification covering lending policies, approval authority, integrations, regulatory obligations, and servicing requirements.",
    },
    {
      question: "How can we discuss a real implementation?",
      answer:
        "Use the contact option below to start a conversation about business requirements, technical scope, integrations, and the capabilities a real product would need to support.",
    },
  ]}
/>

<ProductCTA
  heading="Build a clearer approach to"
  highlight="lending operations."
  description="Every financial institution has different lending requirements. Start a conversation about the workflows, visibility, and loan servicing capabilities your organization needs."
/>
    </main>
  );
}
