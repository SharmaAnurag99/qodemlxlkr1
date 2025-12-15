export default function Industries() {
  return (
    <section id="industries" style={{ background: "var(--warm-sand)" }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Industries</span>
          <h2>Warm solutions for modern teams.</h2>
        </div>

        <div className="industries-grid">
          <div className="industry-card">
            <h4>E-commerce</h4>
            <p>Growth, retention, funnels.</p>
          </div>
          <div className="industry-card">
            <h4>SaaS</h4>
            <p>Onboarding & conversions.</p>
          </div>
          <div className="industry-card">
            <h4>Education</h4>
            <p>Cohorts & content.</p>
          </div>
          <div className="industry-card">
            <h4>Fintech</h4>
            <p>Trust-building UX.</p>
          </div>
          <div className="industry-card">
            <h4>Healthcare</h4>
            <p>Simple patient flows.</p>
          </div>
          <div className="industry-card">
            <h4>Local SMBs</h4>
            <p>Websites & systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
