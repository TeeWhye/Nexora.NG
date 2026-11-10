import ProductHero from "../../components/products/ProductHero";
import ProductCapabilities from "../../components/products/ProductCapabilities";
import ProductBenefits from "../../components/products/ProductBenefits";
import ProductFAQ from "../../components/products/ProductFAQ";
import ProductCTA from "../../components/products/ProductCTA";
import "../../home.css";

export default function PaymentsTransfersPage() {
  return (
    <main className="product-detail-page">
      <ProductHero
        eyebrow="NEXORA PRODUCTS / PAYMENTS & TRANSFERS"
        title="Move money"
        highlight="with greater clarity."
        description="Explore a concept for organizing payment operations, transfers, and transaction information in a more structured experience."
        dashboard={
          <div
            className="account-dashboard"
            aria-label="Illustrative payments and transfers dashboard"
          >
            <div className="dashboard-topbar">
              <div className="dashboard-brand">
                <span className="dashboard-brand-icon">N</span>
                <span>Nexora</span>
              </div>

              <span className="dashboard-period">
                Payments overview <span>⌄</span>
              </span>
            </div>

            <div className="dashboard-heading">
              <div>
                <p>PAYMENTS & TRANSFERS</p>
                <h2>Payment activity</h2>
              </div>
              <span className="dashboard-menu">•••</span>
            </div>

            <div className="dashboard-metrics">
              <div className="dashboard-metric">
                <span>Payment operations</span>
                <strong>Payment overview</strong>
                <small>Illustrative payment records</small>
              </div>

              <div className="dashboard-metric">
                <span>Transfer tracking</span>
                <strong>Transfer overview</strong>
                <small>Illustrative transaction information</small>
              </div>
            </div>

            <div className="dashboard-activity">
              <div className="dashboard-activity-heading">
                <h3>Payment workflows</h3>
                <span>Illustrative view</span>
              </div>

              <div className="dashboard-activity-row">
                <span className="dashboard-activity-icon blue">P</span>
                <div className="dashboard-activity-info">
                  <strong>Payment processing</strong>
                  <span>Payment workflow overview</span>
                </div>
                <span className="dashboard-row-tag">Payments</span>
              </div>

              <div className="dashboard-activity-row">
                <span className="dashboard-activity-icon violet">T</span>
                <div className="dashboard-activity-info">
                  <strong>Fund transfers</strong>
                  <span>Transfer workflow overview</span>
                </div>
                <span className="dashboard-row-tag">Transfers</span>
              </div>

              <div className="dashboard-activity-row">
                <span className="dashboard-activity-icon cyan">R</span>
                <div className="dashboard-activity-info">
                  <strong>Transaction records</strong>
                  <span>Transaction tracking</span>
                </div>
                <span className="dashboard-row-tag">Records</span>
              </div>
            </div>

            <div className="dashboard-footer">
              <span className="dashboard-footer-dot" />
              Concept interface · Sample content
            </div>

            <div className="dashboard-floating-card">
              <span className="floating-card-icon">↗</span>
              <div>
                <strong>Connected workflows</strong>
                <span>Payments & transfers</span>
              </div>
            </div>
          </div>
        }
      />

      <ProductCapabilities
  heading="Designed around modern payment operations."
  intro="Explore the capabilities a modern banking platform can bring together to support organized payment workflows, fund transfers, and transaction tracking."
  capabilities={[
    {
      number: "01",
      title: "Payment Processing",
      description:
        "Organize payment instructions and related transaction information within a structured operational workflow.",
    },
    {
      number: "02",
      title: "Fund Transfers",
      description:
        "Present transfer activities and their associated information in a consistent interface that supports clearer operational oversight.",
    },
    {
      number: "03",
      title: "Transaction Tracking",
      description:
        "Provide a clearer view of transaction records and payment statuses to help teams follow activity across the payment lifecycle.",
    },
  ]}
/>

<section className="loan-workspace-section section-padding">
  <div className="container">
    <div className="loan-workspace-heading">
  <div className="loan-workspace-heading-main">
    <span className="section-eyebrow">
      ILLUSTRATIVE WORKSPACE
    </span>

    <h2>
      Payment activity,
      <br />
      <span>in one clearer view.</span>
    </h2>
  </div>

  <p>
    Explore a conceptual workspace for organizing payment
    operations, transfer records, and transaction status
    information within a consistent interface.
  </p>
</div>

    <div className="loan-workspace">
      <div className="loan-workspace-sidebar">
       <div className="loan-workspace-logo">
          <span className="dashboard-brand-icon">N</span>
          <span>Nexora</span>
        </div>

        <p className="loan-workspace-nav-label">
          PAYMENT OPERATIONS
        </p>

        <div className="loan-workspace-nav-item active">
          <span>◫</span>
          Payment overview
        </div>

        <div className="loan-workspace-nav-item">
          <span>⇄</span>
          Transfers
        </div>

        <div className="loan-workspace-nav-item">
          <span>▤</span>
          Transactions
        </div>

        <div className="loan-workspace-nav-item">
          <span>◎</span>
          Reconciliation
        </div>

        <div className="loan-workspace-sidebar-note">
  <span className="loan-workspace-note-dot" />
  <div>
    <strong>Concept interface</strong>
    <small>Sample content only</small>
  </div>
</div>
      </div>

      <div className="loan-workspace-main">
        <div className="loan-workspace-topbar">
          <div>
            <span>WORKSPACE / PAYMENTS</span>
            <h3>Payment overview</h3>
          </div>

          <span className="loan-workspace-demo-label">
  Illustrative view
</span>
        </div>

        <div className="loan-workspace-summary">
          <div className="loan-workspace-summary-card">
            <span>Payment activity</span>
            <strong>Activity overview</strong>
            <small>Illustrative records</small>
          </div>

          <div className="loan-workspace-summary-card">
            <span>Transfer operations</span>
            <strong>Transfer overview</strong>
            <small>Sample information</small>
          </div>

          <div className="loan-workspace-summary-card">
            <span>Transaction tracking</span>
            <strong>Status overview</strong>
            <small>Illustrative statuses</small>
          </div>
        </div>

        <div className="loan-workspace-table-wrap">
          <div className="loan-workspace-table-heading">
            <div>
              <h4>Recent payment activity</h4>
              <p>An illustrative view of payment workflows</p>
            </div>

            <span>Sample records</span>
          </div>

         <div className="loan-workspace-table-row table-header">
  <span>ACTIVITY</span>
  <span>REFERENCE</span>
  <span>STATUS</span>
</div>

          <div className="loan-workspace-table-row">
            <div className="loan-workspace-account-name">
  <i className="loan-icon-purple">P</i>
  <span>
    <strong>Payment processing</strong>
    <small>Payment workflow</small>
  </span>
</div>

            <span className="loan-workspace-reference">
              PAY-001
            </span>

            <span className="loan-workspace-status review">
              In review
            </span>
          </div>

          <div className="loan-workspace-table-row">
            <div className="loan-workspace-account-name">
  <i className="loan-icon-cyan">T</i>
  <span>
    <strong>Fund transfer</strong>
    <small>Transfer workflow</small>
  </span>
</div>

            <span className="loan-workspace-reference">
              TRF-002
            </span>

            <span className="loan-workspace-status progress">
              Processing
            </span>
          </div>

          <div className="loan-workspace-table-row">
  <div className="loan-workspace-account-name">
    <i className="loan-icon-purple">R</i>
    <span>
      <strong>Transaction record</strong>
      <small>Transaction tracking</small>
    </span>
  </div>

  <span className="loan-workspace-reference">
    TXN-003
  </span>

  <span className="loan-workspace-status completed">
    Recorded
  </span>
</div>
</div>

        <p className="loan-workspace-disclaimer">
          This dashboard is an illustrative product concept.
          It does not process payments or connect to live banking
          infrastructure.
        </p>
      </div>
    </div>
  </div>
</section>

<ProductBenefits
  eyebrow="THE VALUE OF STRUCTURED PAYMENTS"
  heading="Bring greater clarity to"
  highlight="payment operations."
  intro="A structured approach to payment workflows can help financial institutions organize transaction information, follow transfer activity, and understand operational processes more clearly."
  benefits={[
    {
      number: "01",
      icon: "◎",
      title: "Operational clarity",
      description:
        "Bring payment activities, transfer records, and transaction statuses into a more organized operational view.",
    },
    {
      number: "02",
      icon: "↗",
      title: "Consistent workflows",
      description:
        "Present payment and transfer activities through a consistent interface that makes workflows easier to follow.",
    },
    {
      number: "03",
      icon: "⌁",
      title: "Transaction visibility",
      description:
        "Make transaction information easier to review with clearly presented records and status indicators.",
    },
  ]}
/>

<ProductFAQ
  eyebrow="PAYMENTS & TRANSFERS FAQ"
  heading="Questions about"
  highlight="payment operations."
  intro="Learn more about the Payments & Transfers concept and how it presents payment workflows, fund transfers, and transaction information."
  questions={[
    {
      question: "What is Nexora Payments & Transfers?",
      answer:
        "Nexora Payments & Transfers is a concept for presenting payment operations, fund transfers, and transaction information through a structured banking interface. It demonstrates how these activities could be organized within a broader core banking platform.",
    },
    {
      question: "Does this concept process real payments?",
      answer:
        "No. This website demonstrates a proposed product experience. The Payments & Transfers interface does not initiate transactions, move money, or connect to live banking infrastructure.",
    },
    {
      question: "What payment activities does the concept cover?",
      answer:
        "The concept explores payment processing, fund transfer workflows, transaction tracking, and the presentation of payment statuses and related records.",
    },
    {
      question: "How does transaction tracking fit into the experience?",
      answer:
        "Transaction tracking is presented as a way to review payment records and their statuses through a consistent interface, making transaction information easier to follow.",
    },
    {
      question: "Can Payments & Transfers work with other core banking functions?",
      answer:
        "In a fully implemented core banking platform, payment workflows may interact with account management, reporting, reconciliation, and other banking functions. The exact integrations would depend on the system's architecture and implementation.",
    },
  ]}
/>

<ProductCTA
  eyebrow="THE NEXT STEP IN PAYMENT OPERATIONS"
  heading="Explore a clearer approach to"
  highlight="modern banking."
  description="Discover how a more structured approach to payment workflows, fund transfers, and transaction visibility can support a clearer banking experience."
  buttonText="Talk to our team →"
  backText="Back to Nexora home"
/>
    </main>
  );
}