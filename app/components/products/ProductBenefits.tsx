
type Benefit = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

type ProductBenefitsProps = {
  eyebrow?: string;
  heading: string;
  highlight: string;
  intro: string;
  benefits: Benefit[];
  note?: string;
};

export default function ProductBenefits({
  eyebrow = "THE INTENDED VALUE",
  heading,
  highlight,
  intro,
  benefits,
  note = "These are intended design benefits, not measured performance claims or guarantees about a deployed banking system.",
}: ProductBenefitsProps) {
  return (
    <section className="account-benefits-section section-padding">
      <div className="container">
        <div className="account-benefits-heading">
          <p className="product-eyebrow">{eyebrow}</p>

          <h2>
            {heading}
            <span> {highlight}</span>
          </h2>

          <p>{intro}</p>
        </div>

        <div className="account-benefits-grid">
          {benefits.map((benefit) => (
            <article className="account-benefit" key={benefit.number}>
              <span className="account-benefit-number">
                {benefit.number}
              </span>

              <div className="account-benefit-icon">
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>

        {note && (
          <p className="account-benefits-note">{note}</p>
        )}
      </div>
    </section>
  );
}
