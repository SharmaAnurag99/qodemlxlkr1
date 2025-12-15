export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          {/* Left */}
          <div className="contact-left">
            <span className="eyebrow" style={{ color: "var(--teal-deep)" }}>
              Get In Touch
            </span>
            <h2>Let’s map your next 90 days.</h2>
            <p style={{ marginTop: "12px" }}>
              Tell us what you&apos;re building and what “good” looks like.
              We&apos;ll reply with warm clarity — not pressure.
            </p>

            <div className="contact-meta">
              <div>
                <strong>Email:</strong> hello@qodeml.com
              </div>
              <div>
                <strong>WhatsApp:</strong> +91-00000-00000
              </div>
              <div>
                <strong>Preferred:</strong> async + weekly calls
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form">
            <div className="field-group">
              <label>
                Name <span>*</span>
              </label>
              <input type="text" placeholder="Your name" required />
            </div>

            <div className="field-group">
              <label>
                Email <span>*</span>
              </label>
              <input type="email" placeholder="you@company.com" required />
            </div>

            <div className="field-group">
              <label>What do you need help with?</label>
              <div className="options-row">
                <div className="pill-option selected">Website / App</div>
                <div className="pill-option">Funnels</div>
                <div className="pill-option">Automation</div>
                <div className="pill-option">Something else</div>
              </div>
            </div>

            <div className="field-group">
              <label>Monthly Budget</label>
              <div className="options-row">
                <div className="pill-option">Under $1k</div>
                <div className="pill-option">$1k–$3k</div>
                <div className="pill-option">$3k–$7k</div>
                <div className="pill-option">$7k+</div>
              </div>
            </div>

            <div className="field-group">
              <label>Your message</label>
              <textarea placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="submit" className="btn btn-peach">
              Book Strategy Call
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
