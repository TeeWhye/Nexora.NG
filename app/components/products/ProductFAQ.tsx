
type FAQItem = {
  question: string;
  answer: string;
};

type ProductFAQProps = {
  eyebrow?: string;
  heading: string;
  highlight: string;
  intro: string;
  questions: FAQItem[];
};

export default function ProductFAQ({
  eyebrow = "COMMON QUESTIONS",
  heading,
  highlight,
  intro,
  questions,
}: ProductFAQProps) {
  return (
    <section className="account-faq-section section-padding">
      <div className="container account-faq-layout">
        <div className="account-faq-heading">
          <p className="product-eyebrow">{eyebrow}</p>

          <h2>
            {heading}
            <span className="gradient-text"> {highlight}</span>
          </h2>

          <p>{intro}</p>
        </div>

        <div className="account-faq-list">
          {questions.map((item) => (
            <details
              className="account-faq-item"
              key={item.question}
            >
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>

              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
