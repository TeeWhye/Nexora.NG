
import Link from "next/link";

type ProductCTAProps = {
  eyebrow?: string;
  heading: string;
  highlight: string;
  description: string;
  buttonText?: string;
  backText?: string;
};

export default function ProductCTA({
  eyebrow = "LET'S START A CONVERSATION",
  heading,
  highlight,
  description,
  buttonText = "Talk to our team →",
  backText = "Back to Nexora home",
}: ProductCTAProps) {
  return (
    <section className="account-final-cta section-padding">
      <div className="container">
        <div className="account-final-cta-panel">
          <p className="product-eyebrow">{eyebrow}</p>

          <h2>
            {heading}
            <span> {highlight}</span>
          </h2>

          <p>{description}</p>

          <div className="account-final-cta-actions">
            <Link href="/#contact" className="gradient-button">
              {buttonText}
            </Link>

            <Link href="/" className="account-final-cta-back">
              {backText}
            </Link>
          </div>

          <span
            className="account-final-cta-decoration"
            aria-hidden="true"
          >
            N
          </span>
        </div>
      </div>
    </section>
  );
}
