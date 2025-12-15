import FadeIn from "@/components/ui/FadeIn";

export default function Feature() {
  return (
    <section id="approach">
      <FadeIn className="container feature-split" direction="up">
        <div>
          <span className="eyebrow">Our Approach</span>
          <h2>
            We don&apos;t just build.
            <br />
            We architect growth.
          </h2>
          <p style={{ marginTop: "16px" }}>
            Most agencies define success by “shipping.” We define it by impact.
            Every line of code and every pixel is designed to move your business
            forward.
          </p>
          <button className="btn btn-peach" style={{ marginTop: "24px" }}>
            See How We Work
          </button>
        </div>

        <div className="checklist">
          <div className="checklist-item">
            <div className="check">✓</div>
            <span>Data-Driven Design</span>
          </div>
          <div className="checklist-item">
            <div className="check">✓</div>
            <span>Scalable Architecture</span>
          </div>
          <div className="checklist-item">
            <div className="check">✓</div>
            <span>Fast Execution</span>
          </div>
          <div className="checklist-item">
            <div className="check">✓</div>
            <span>Transparent Comms</span>
          </div>
          <div className="checklist-item">
            <div className="check">✓</div>
            <span>Accessibility First</span>
          </div>
          <div className="checklist-item">
            <div className="check">✓</div>
            <span>SEO Optimized</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
