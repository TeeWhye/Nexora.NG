
import Link from "next/link";
import type { ReactNode } from "react";

type ProductHeroProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  dashboard: ReactNode;
};

export default function ProductHero({
  eyebrow,
  title,
  highlight,
  description,
  dashboard,
}: ProductHeroProps) {
  return (
    <section className="product-detail-hero">
      <div className="container">
        <Link href="/" className="product-back-link">
          ← Back to home
        </Link>

        <div className="product-hero-layout">
          <div className="product-hero-copy">
            <p className="product-eyebrow">{eyebrow}</p>

            <h1>
              {title}
              <br />
              <span className="gradient-text">{highlight}</span>
            </h1>

            <p className="product-detail-description">
              {description}
            </p>

            <div className="product-detail-actions">
              <Link href="/#contact" className="gradient-button">
                Request a Demo →
              </Link>

              <a
                href="#capabilities"
                className="product-secondary-link"
              >
                Explore Capabilities ↓
              </a>
            </div>

            <div className="product-hero-note">
              <span className="product-status-dot" />
              Explore a clearer approach to banking technology
            </div>
          </div>

          <div className="product-hero-dashboard">
            {dashboard}
          </div>
        </div>
      </div>
    </section>
  );
}
