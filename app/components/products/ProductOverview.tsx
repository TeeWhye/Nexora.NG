
type OverviewPoint = {
  number: string;
  title: string;
  description: string;
};

type ProductOverviewProps = {
  eyebrow?: string;
  heading: string;
  highlight: string;
  intro: string;
  points: OverviewPoint[];
};

export default function ProductOverview({
  eyebrow = "A CONNECTED APPROACH",
  heading,
  highlight,
  intro,
  points,
}: ProductOverviewProps) {
  return (
    <section className="account-overview-section section-padding">
      <div className="container account-overview-layout">
        <div className="account-overview-copy">
          <p className="product-eyebrow">{eyebrow}</p>

          <h2>
            {heading}
            <span className="gradient-text"> {highlight}</span>
          </h2>

          <p>{intro}</p>
        </div>

        <div className="account-overview-points">
          {points.map((point) => (
            <article
              className="account-overview-point"
              key={point.number}
            >
              <span className="overview-point-number">
                {point.number}
              </span>

              <div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>

              <span className="overview-point-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
