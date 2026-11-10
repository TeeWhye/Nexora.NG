import ProductHero from "../../components/products/ProductHero";
import ProductOverview from "../../components/products/ProductOverview";
import ProductCapabilities from "../../components/products/ProductCapabilities";
import ProductBenefits from "../../components/products/ProductBenefits";
import ProductFAQ from "../../components/products/ProductFAQ";
import ProductCTA from "../../components/products/ProductCTA";
import "../../home.css";

export default function ReportingAnalyticsPage() {
  return (
    <main className="product-detail-page">
      {/* PRODUCT HERO */}
      <ProductHero
        eyebrow="NEXORA PRODUCTS / REPORTING & ANALYTICS"
        title="Turn banking data"
        highlight="into clearer insight."
        description="Explore a concept for bringing financial reports, operational metrics, and banking activity into a more structured analytical experience."
        dashboard={
          <div
            className="account-dashboard"
            aria-label="Illustrative reporting and analytics dashboard"
          >
            <div className="dashboard-topbar">
              <div className="dashboard-brand">
                <span className="dashboard-brand-icon">N</span>
                <span>Nexora</span>
              </div>

              <span className="dashboard-period">
                Analytics overview <span>⌄</span>
              </span>
            </div>

            <div className="dashboard-heading">
              <div>
                <p>REPORTING & ANALYTICS</p>
                <h2>Banking performance</h2>
              </div>

              <span className="dashboard-menu">•••</span>
            </div>

            <div className="dashboard-metrics">
              <div className="dashboard-metric">
                <span>Account activity</span>
                <strong>Activity report</strong>
                <small>Illustrative reporting view</small>
              </div>

              <div className="dashboard-metric">
                <span>Financial insights</span>
                <strong>Performance overview</strong>
                <small>Sample analytical information</small>
              </div>
            </div>

            <div className="dashboard-activity">
              <div className="dashboard-activity-heading">
                <h3>Reporting workspace</h3>
                <span>Illustrative view</span>
              </div>

              <div className="dashboard-activity-row">
                <span className="dashboard-activity-icon blue">R</span>

                <div className="dashboard-activity-info">
                  <strong>Financial reports</strong>
                  <span>Structured reporting overview</span>
                </div>

                <span className="dashboard-row-tag">Reports</span>
              </div>

              <div className="dashboard-activity-row">
                <span className="dashboard-activity-icon violet">A</span>

                <div className="dashboard-activity-info">
                  <strong>Account analysis</strong>
                  <span>Banking activity overview</span>
                </div>

                <span className="dashboard-row-tag">Analysis</span>
              </div>

              <div className="dashboard-activity-row">
                <span className="dashboard-activity-icon cyan">P</span>

                <div className="dashboard-activity-info">
                  <strong>Performance monitoring</strong>
                  <span>Operational reporting</span>
                </div>

                <span className="dashboard-row-tag">Insights</span>
              </div>
            </div>

            <div className="dashboard-footer">
              <span className="dashboard-footer-dot" />
              Concept interface · Sample content
            </div>

            <div className="dashboard-floating-card">
              <span className="floating-card-icon">↗</span>

              <div>
                <strong>Connected insights</strong>
                <span>Reporting & analytics</span>
              </div>
            </div>
          </div>
        }
      />

      {/* PRODUCT OVERVIEW */}
      <ProductOverview
        heading="Make banking information"
        highlight="easier to understand."
        intro="Core banking platforms generate information across accounts, transactions, lending, and operational activities. A structured reporting and analytics experience can help bring these data points into clearer views that support monitoring, analysis, and informed decision-making."
        points={[
          {
            number: "01",
            title: "Structured reporting",
            description:
              "Bring banking information into organized reports that make key records and operational activity easier to review.",
          },
          {
            number: "02",
            title: "Meaningful analysis",
            description:
              "Present financial and operational information in a way that helps teams explore patterns, trends, and performance.",
          },
          {
            number: "03",
            title: "Clearer visibility",
            description:
              "Bring relevant metrics and reporting views together to support a more consistent understanding of banking activity.",
          },
        ]}
      />

      {/* PRODUCT CAPABILITIES */}
      <ProductCapabilities
        heading="Designed around meaningful banking insights."
        intro="Explore the reporting capabilities a modern core banking platform could bring together to help teams review performance, understand activity, and organize information."
        capabilities={[
          {
            number: "01",
            title: "Financial Reporting",
            description:
              "Organize financial information into structured reports that make account activity and financial records easier to review.",
          },
          {
            number: "02",
            title: "Operational Analytics",
            description:
              "Present operational metrics and activity summaries through clear reporting views that help teams explore performance.",
          },
          {
            number: "03",
            title: "Performance Monitoring",
            description:
              "Bring selected indicators and reporting information together to support ongoing visibility into banking operations.",
          },
        ]}
      />

      {/* ANALYTICS WORKSPACE */}
      <section className="loan-workspace-section section-padding">
        <div className="container">
          <div className="loan-workspace-heading">
            <div className="loan-workspace-heading-main">
              <span className="section-eyebrow">
                ILLUSTRATIVE WORKSPACE
              </span>

              <h2>
                Banking insights,
                <br />
                <span>in one clearer view.</span>
              </h2>
            </div>

            <p>
              Explore a conceptual analytics workspace that brings reporting
              categories, illustrative performance indicators, and sample
              banking records into one organized interface.
            </p>
          </div>

          <div className="loan-workspace">
            {/* SIDEBAR */}
            <div className="loan-workspace-sidebar">
              <div className="loan-workspace-logo">
                <span className="dashboard-brand-icon">N</span>
                <span>Nexora</span>
              </div>

              <p className="loan-workspace-nav-label">
                REPORTING & ANALYTICS
              </p>

              <div className="loan-workspace-nav-item active">
                <span>▦</span>
                Analytics overview
              </div>

              <div className="loan-workspace-nav-item">
                <span>▤</span>
                Financial reports
              </div>

              <div className="loan-workspace-nav-item">
                <span>◷</span>
                Activity analysis
              </div>

              <div className="loan-workspace-nav-item">
                <span>⌁</span>
                Performance
              </div>

              <div className="loan-workspace-sidebar-note">
                <span className="loan-workspace-note-dot" />

                <div>
                  <strong>Concept interface</strong>
                  <small>Sample content only</small>
                </div>
              </div>
            </div>

            {/* MAIN DASHBOARD */}
            <div className="loan-workspace-main">
              <div className="loan-workspace-topbar">
                <div>
                  <span>WORKSPACE / ANALYTICS</span>
                  <h3>Analytics overview</h3>
                </div>

                <span className="loan-workspace-demo-label">
                  Illustrative view
                </span>
              </div>

              {/* SUMMARY CARDS */}
              <div className="loan-workspace-summary">
                <div className="loan-workspace-summary-card">
                  <span>Reporting categories</span>
                  <strong>Financial</strong>
                  <small>Illustrative report type</small>
                </div>

                <div className="loan-workspace-summary-card">
                  <span>Banking activity</span>
                  <strong>Activity analysis</strong>
                  <small>Sample analytical view</small>
                </div>

                <div className="loan-workspace-summary-card">
                  <span>Performance insights</span>
                  <strong>Operational</strong>
                  <small>Illustrative metrics</small>
                </div>
              </div>

              {/* ANALYTICS VISUAL */}
              <div className="loan-workspace-table-wrap">
                <div className="loan-workspace-table-heading">
                  <div>
                    <h4>Banking activity overview</h4>
                    <p>Illustrative activity distribution</p>
                  </div>

                  <span>Sample visualization</span>
                </div>

                <div className="reporting-chart">
                  <div className="reporting-chart-y-axis">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                  </div>

                  <div
                    className="reporting-chart-plot"
                    role="img"
                    aria-label="Illustrative bar chart comparing five sample banking activity periods. Values are conceptual and do not represent actual financial data."
                  >
                    <div className="reporting-chart-grid">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="reporting-chart-bars">
                      <div className="reporting-chart-column">
                        <span style={{ height: "42%" }} />
                        <small>Jan</small>
                      </div>

                      <div className="reporting-chart-column">
                        <span style={{ height: "62%" }} />
                        <small>Feb</small>
                      </div>

                      <div className="reporting-chart-column">
                        <span style={{ height: "51%" }} />
                        <small>Mar</small>
                      </div>

                      <div className="reporting-chart-column">
                        <span style={{ height: "78%" }} />
                        <small>Apr</small>
                      </div>

                      <div className="reporting-chart-column">
                        <span style={{ height: "68%" }} />
                        <small>May</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="reporting-chart-legend">
                  <span />
                  Illustrative banking activity
                </div>
              </div>

              {/* REPORT TABLE */}
              <div className="loan-workspace-table-wrap reporting-table">
                <div className="loan-workspace-table-heading">
                  <div>
                    <h4>Available report views</h4>
                    <p>Examples of organized reporting categories</p>
                  </div>

                  <span>Sample records</span>
                </div>

                <div className="loan-workspace-table-row table-header">
                  <span>REPORT</span>
                  <span>CATEGORY</span>
                  <span>VIEW</span>
                </div>

                <div className="loan-workspace-table-row">
                  <div className="loan-workspace-account-name">
                    <i className="loan-icon-purple">F</i>

                    <span>
                      <strong>Financial summary</strong>
                      <small>Illustrative report</small>
                    </span>
                  </div>

                  <span className="loan-workspace-reference">
                    Financial
                  </span>

                  <span className="loan-workspace-status review">
                    Available
                  </span>
                </div>

                <div className="loan-workspace-table-row">
                  <div className="loan-workspace-account-name">
                    <i className="loan-icon-cyan">A</i>

                    <span>
                      <strong>Activity report</strong>
                      <small>Illustrative report</small>
                    </span>
                  </div>

                  <span className="loan-workspace-reference">
                    Operations
                  </span>

                  <span className="loan-workspace-status progress">
                    Available
                  </span>
                </div>

                <div className="loan-workspace-table-row">
                  <div className="loan-workspace-account-name">
                    <i className="loan-icon-purple">P</i>

                    <span>
                      <strong>Performance overview</strong>
                      <small>Illustrative report</small>
                    </span>
                  </div>

                  <span className="loan-workspace-reference">
                    Analytics
                  </span>

                  <span className="loan-workspace-status completed">
                    Available
                  </span>
                </div>
              </div>

              <p className="loan-workspace-disclaimer">
                This dashboard is an illustrative product concept. It uses
                sample interface elements and does not connect to live banking
                systems or represent actual financial performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT BENEFITS */}
      <ProductBenefits
        eyebrow="THE VALUE OF STRUCTURED REPORTING"
        heading="Bring banking information"
        highlight="into clearer focus."
        intro="A structured reporting and analytics experience can help financial institutions organize information, explore operational activity, and develop a clearer view of the data available to them."
        benefits={[
          {
            number: "01",
            icon: "◎",
            title: "Information clarity",
            description:
              "Present financial and operational information in organized views that are easier to review and understand.",
          },
          {
            number: "02",
            icon: "↗",
            title: "Performance visibility",
            description:
              "Bring selected indicators and activity summaries together to support a clearer view of operational performance.",
          },
          {
            number: "03",
            icon: "⌁",
            title: "Structured analysis",
            description:
              "Arrange reporting categories and analytical information in a consistent interface that supports further exploration.",
          },
        ]}
      />

      {/* FAQ */}
      <ProductFAQ
        eyebrow="REPORTING & ANALYTICS FAQ"
        heading="Questions about"
        highlight="banking analytics."
        intro="Learn more about the Reporting & Analytics concept and how it presents banking information, reporting categories, and operational insights."
        questions={[
          {
            question: "What is Nexora Reporting & Analytics?",
            answer:
              "Nexora Reporting & Analytics is a concept for organizing banking reports, operational metrics, and analytical information within a structured core banking interface.",
          },
          {
            question: "Does this dashboard use live banking data?",
            answer:
              "No. This website demonstrates a proposed product experience using illustrative interface elements and sample content. It does not connect to live banking systems or display actual financial information.",
          },
          {
            question: "What types of reports does the concept cover?",
            answer:
              "The concept explores financial summaries, banking activity reports, operational metrics, and performance overviews. Actual reporting capabilities would depend on the design and implementation of a deployed system.",
          },
          {
            question: "How can analytics support banking operations?",
            answer:
              "Well-organized reporting can help teams review available information, explore operational activity, and understand selected performance indicators. The usefulness of those insights depends on data quality, context, and the analytical tools implemented.",
          },
          {
            question: "Can reporting integrate with other core banking functions?",
            answer:
              "In a fully implemented platform, reporting may draw on information from accounts, lending, payments, and other banking functions. The available data and integrations would depend on the system architecture and implementation.",
          },
        ]}
      />

      {/* FINAL CTA */}
      <ProductCTA
        eyebrow="THE NEXT STEP IN BANKING INSIGHTS"
        heading="Bring your banking data"
        highlight="into clearer focus."
        description="Explore how structured reporting and analytics could help organize financial information, highlight operational activity, and support a clearer view of banking performance."
        buttonText="Talk to our team →"
        backText="Back to Nexora home"
      />
    </main>
  );
}