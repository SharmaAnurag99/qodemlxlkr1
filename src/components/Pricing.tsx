export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Engagements</span>
          <h2>Warm, clear pricing models.</h2>
        </div>

        <div className="pricing-grid">
          <article className="pricing-card">
            <h3>Launch</h3>
            <p className="pricing-price">$1.5k+</p>
            <ul className="pricing-list">
              <li>1 landing page</li>
              <li>Basic tracking</li>
              <li>2 revisions</li>
            </ul>
            <button className="btn btn-peach" style={{ marginTop: "16px" }}>
              Start Launch
            </button>
          </article>

          <article className="pricing-card">
            <h3>Growth Sprint</h3>
            <p className="pricing-price">$3.5k+</p>
            <ul className="pricing-list">
              <li>Landing pages + flows</li>
              <li>Marketing setup</li>
              <li>Experiment roadmap</li>
            </ul>
            <button className="btn btn-peach" style={{ marginTop: "16px" }}>
              Start Sprint
            </button>
          </article>

          <article className="pricing-card">
            <h3>Partner</h3>
            <p className="pricing-price">Custom</p>
            <ul className="pricing-list">
              <li>Ongoing design & dev</li>
              <li>Campaign management</li>
              <li>Monthly strategy</li>
            </ul>
            <button className="btn btn-outline" style={{ marginTop: "16px" }}>
              Contact Us
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
