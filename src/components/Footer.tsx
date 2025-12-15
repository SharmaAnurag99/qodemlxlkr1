"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      id="footer"
      style={{
        background: "#243334",
        color: "#ffffff",
        marginTop: "80px",
        padding: "60px 0",
      }}
    >
      <div className="container">
        <div className="footer-grid">
          {/* Logo */}
          <div>
            <div className="footer-logo">
              <div className="logo-mark-footer">Q</div>
              <span>QodeML Labs</span>
            </div>
            <p style={{ marginTop: "8px", opacity: 0.75 }}>
              Warm digital systems for modern teams.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <div className="footer-links">
              <Link href="#about">About</Link>
              <Link href="#work">Case Studies</Link>
              <Link href="#blog">Blog</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <div className="footer-links">
              <span>Development</span>
              <span>Marketing</span>
              <span>Automation</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-links">
              <span>hello@qodeml.com</span>
              <span>+91-00000-00000</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © <span id="year">{year}</span> QodeML Labs
          </span>
          <div className="footer-social">
            <span className="footer-pill">LinkedIn</span>
            <span className="footer-pill">X</span>
            <span className="footer-pill">GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
