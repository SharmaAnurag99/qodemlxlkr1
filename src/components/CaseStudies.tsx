import Link from "next/link";

export default function CaseStudies() {
  return (
    <section id="work" style={{ background: "var(--warm-sand)" }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Selected Work</span>
          <h2>Stories from warm, connected systems.</h2>
          <p>Real brands, real results, real transformation.</p>
        </div>

        <div className="case-grid">
          <article className="case-card">
            <div className="case-hero"></div>
            <h3 style={{ marginTop: "16px" }}>Border — Premium Audio</h3>
            <p>
              A warm redesign that increased conversions and repeat purchases.
            </p>
            <p style={{ fontSize: "13px", marginTop: "8px" }}>
              Result: +63% revenue in 90 days
            </p>
            <Link href="#" className="case-link">
              View Case Study ↗
            </Link>
          </article>

          <article className="case-card">
            <h3>Fintech Onboarding AI</h3>
            <p>
              Helping users feel guided and supported through a complex process.
            </p>
            <p style={{ fontSize: "13px", marginTop: "8px" }}>
              38% fewer support tickets
            </p>
            <Link href="#" className="case-link">
              View Case Study ↗
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
