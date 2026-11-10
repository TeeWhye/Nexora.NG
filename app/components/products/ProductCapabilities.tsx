
type Capability = {
  number: string;
  title: string;
  description: string;
};

type ProductCapabilitiesProps = {
  eyebrow?: string;
  heading: string;
  intro: string;
  capabilities: Capability[];
};

export default function ProductCapabilities({
  eyebrow = "CORE CAPABILITIES",
  heading,
  intro,
  capabilities,
}: ProductCapabilitiesProps) {
  return (
    <section
      className="product-detail-capabilities section-padding"
      id="capabilities"
    >
      <div className="container">
        <p className="product-eyebrow">{eyebrow}</p>

        <h2>{heading}</h2>

        <p className="product-capabilities-intro">{intro}</p>

        <div className="product-detail-grid">
          {capabilities.map((capability) => (
            <article
              className="product-detail-card"
              key={capability.number}
            >
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
