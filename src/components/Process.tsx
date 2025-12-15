import FadeIn from "@/components/ui/FadeIn";

export default function Process() {
  return (
    <section id="process">
      <FadeIn className="container" direction="up">
        <div className="section-header">
          <span className="eyebrow">Process</span>
          <h2>The Framework.</h2>
          <p>Six stages, one direction, full clarity.</p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-badge">1</div>
            <h4>Decode</h4>
            <p>Understanding goals & gaps.</p>
          </div>
          <div className="process-step">
            <div className="step-badge">2</div>
            <h4>Design</h4>
            <p>Experiences, systems & flows.</p>
          </div>
          <div className="process-step">
            <div className="step-badge">3</div>
            <h4>Develop</h4>
            <p>Building the product.</p>
          </div>
          <div className="process-step">
            <div className="step-badge">4</div>
            <h4>Deploy</h4>
            <p>Launch & monitor.</p>
          </div>
          <div className="process-step">
            <div className="step-badge">5</div>
            <h4>Optimize</h4>
            <p>Improve what matters.</p>
          </div>
          <div className="process-step">
            <div className="step-badge">6</div>
            <h4>Scale</h4>
            <p>Grow into new markets.</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
