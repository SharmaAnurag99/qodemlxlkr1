import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="about-section">
      <FadeIn className="container about-inner" direction="up" duration={0.6}>
        <div className="about-content">
          <span className="eyebrow">Our Story</span>
          <h2>
            We bridge the gap between
            <br />
            code & connection.
          </h2>
          <p style={{ marginTop: "24px" }}>
            QodeML Labs started with a simple observation: Digital systems were
            getting faster, but they were losing their soul. We set out to build
            technology that feels approachable, intuitive, and deeply connected
            to human needs.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px" }}>
            <div className="stat-box">
              <h3>3+</h3>
              <p>Years</p>
            </div>
            <div className="stat-box">
              <h3>40+</h3>
              <p>Projects</p>
            </div>
            <div className="stat-box">
              <h3>98%</h3>
              <p>Retention</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          {/* Placeholder for visual or texture */}
          <div
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "32px",
              background: "var(--cosmos-gradient)",
              opacity: 0.1,
            }}
          ></div>
        </div>
      </FadeIn>
    </section>
  );
}
