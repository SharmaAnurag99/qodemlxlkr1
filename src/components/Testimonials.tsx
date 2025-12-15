import FadeIn from "@/components/ui/FadeIn";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "var(--warm-sand)" }}>
      <FadeIn className="container" direction="up">
        <div className="section-header">
          <span className="eyebrow">Testimonials</span>
          <h2>Warm words from partners.</h2>
        </div>

        <div className="testimonial-grid">
          <article className="testimonial-card">
            <p>
              “A talented team that understands business and humans. The new
              site convert 2x better.”
            </p>
            <div className="testimonial-author">
              <div className="avatar"></div>
              <div>
                <strong>D2C Founder</strong>
                <br />
                <span>India</span>
              </div>
            </div>
          </article>

          <article className="testimonial-card">
            <p>
              “Their mix of design, code & marketing feels rare. They actually
              care about the outcome.”
            </p>
            <div className="testimonial-author">
              <div className="avatar"></div>
              <div>
                <strong>SaaS Startup</strong>
                <br />
                <span>EU</span>
              </div>
            </div>
          </article>

          <article className="testimonial-card">
            <p>
              “Everything they touch feels clearer and more convenient for our
              users.”
            </p>
            <div className="testimonial-author">
              <div className="avatar"></div>
              <div>
                <strong>Marketing Lead</strong>
                <br />
                <span>US</span>
              </div>
            </div>
          </article>
        </div>
      </FadeIn>
    </section>
  );
}
