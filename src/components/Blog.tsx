import Link from "next/link";

export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Insights</span>
          <h2>Warm ideas for modern teams.</h2>
          <p>
            We share lessons from engineering, design and thoughtful marketing.
          </p>
        </div>

        <div className="blog-grid">
          <article className="blog-card">
            <div className="blog-image"></div>
            <div className="blog-content">
              <div className="blog-meta">Playbook · 6 min read</div>
              <h3>Designing warm conversion flows.</h3>
              <p>How warmth and simplicity increase trust & reduce friction.</p>
              <Link href="#" className="blog-link">
                Read More ↗
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image"></div>
            <div className="blog-content">
              <div className="blog-meta">Case Study · 5 min read</div>
              <h3>From chaos to connected systems.</h3>
              <p>How a SME unified their tools into a single warm engine.</p>
              <Link href="#" className="blog-link">
                Read More ↗
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image"></div>
            <div className="blog-content">
              <div className="blog-meta">Mindset · 4 min read</div>
              <h3>Why warmth wins in marketing.</h3>
              <p>The emotional side of conversion, retention and loyalty.</p>
              <Link href="#" className="blog-link">
                Read More ↗
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
