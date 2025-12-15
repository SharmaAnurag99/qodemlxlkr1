export default function SOW() {
  return (
    <section id="sow" style={{ background: "var(--warm-sand)" }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">SOW</span>
          <h2>Clear, warm statements of work.</h2>
          <p>So you always know what’s happening, when and why.</p>
        </div>

        <div className="sow-inner">
          <div>
            <h3>What our SOW covers</h3>
            <ul className="sow-list">
              <li>Scope & deliverables</li>
              <li>Tech stack & integrations</li>
              <li>Timelines & communication</li>
              <li>Milestones & responsibilities</li>
            </ul>
          </div>

          <div>
            <p>
              Every engagement begins with a warm, clear SOW that both sides
              review. No vague promises. No hidden work. Full alignment from day
              zero.
            </p>

            <div
              style={{
                marginTop: "16px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <button className="btn btn-outline">View Sample SOW</button>
              <button className="btn btn-peach">Generate My SOW</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
