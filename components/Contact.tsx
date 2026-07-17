"use client";

import Reveal from "./Reveal";
import MagLink from "./MagLink";

export default function Contact() {
  return (
    <section className="block contact" id="contact">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            07 — Contact
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 style={{ marginTop: 20 }}>Let&apos;s build something sharp, smooth, and shipped.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="sub">
            Open to collaborations, software engineering roles, and building innovative
            products — frontend, Flutter, full-stack, and AI-powered work.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="cta">
            <MagLink className="btn btn--solid" href="mailto:mohdsahilali6051@gmail.com">
              Email me ↗
            </MagLink>
            <MagLink className="btn btn--ghost" href="https://www.linkedin.com/in/mohammed-sahil-ali-4a53a4216" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </MagLink>
            <MagLink className="btn btn--ghost" href="https://github.com/SahillmalikUI" target="_blank" rel="noopener noreferrer">
              GitHub
            </MagLink>
          </div>
        </Reveal>
      </div>

      <footer className="site-footer">
        <div className="wrap foot">
          <span>© 2026 SAHIL MALIK — DEVELOPER · DESIGNER · BUILDER</span>
          <span>BUILT WITH NEXT.JS · TYPESCRIPT · TAILWIND · MOTION</span>
        </div>
      </footer>
    </section>
  );
}
