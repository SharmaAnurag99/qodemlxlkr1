export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Team</span>
          <h2>The humans behind QodeML Labs.</h2>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-info">
              <h4>Anurag Sharma</h4>
              <p className="team-role">Founder & Lead Engineer</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-info">
              <h4>Someone X</h4>
              <p className="team-role">Growth & Performance</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-info">
              <h4>Someone Y</h4>
              <p className="team-role">Product & UX</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-info">
              <h4>Someone Z</h4>
              <p className="team-role">Automation & Data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
