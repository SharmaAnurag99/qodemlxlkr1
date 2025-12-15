import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Services() {
  return (
    <section id="services">
      <FadeIn className="container" direction="up">
        <div className="section-header">
          <span className="eyebrow">Services</span>
          <h2>Warm technology, deployed.</h2>
          <p>We build systems that grow with you.</p>
        </div>

        <div className="grid-3">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Web & App Development</h3>
            <p>
              Fast, responsive, and accessible websites built on Next.js and
              modern stacks.
            </p>
            <Link href="#" className="service-footer-link">
              Learn More ↗
            </Link>
          </div>
          <div className="service-card">
            <div className="service-icon">📈</div>
            <h3>Growth Marketing</h3>
            <p>
              Data-driven campaigns that respect user privacy while driving real
              revenue.
            </p>
            <Link href="#" className="service-footer-link">
              Learn More ↗
            </Link>
          </div>
          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>AI & Automation</h3>
            <p>
              Smart workflows that save time and add intelligence to your daily
              ops.
            </p>
            <Link href="#" className="service-footer-link">
              Learn More ↗
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3>MVP Launch</h3>
            <p>From idea to investor-ready MVP in weeks, not months.</p>
            <Link href="#" className="service-footer-link">
              Learn More ↗
            </Link>
          </div>
          <div className="service-card">
            <div className="service-icon">🧩</div>
            <h3>Brand & Content</h3>
            <p>Visual identity and content engines built for clarity.</p>
            <Link href="#" className="service-footer-link">
              Learn More ↗
            </Link>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Analytics & Insights</h3>
            <p>
              Measure what matters. Track performance with elegant dashboards.
            </p>
            <Link href="#" className="service-footer-link">
              Learn More ↗
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
