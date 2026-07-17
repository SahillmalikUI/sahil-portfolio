"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="block" id="about" style={{ paddingTop: 0 }}>
      <div className="wrap about-grid">
        <Reveal>
          <span className="idx">05 — ABOUT</span>
          <h2 style={{ fontSize: "clamp(30px, 4.4vw, 56px)", marginTop: 14 }}>
            Developer by logic. Designer by instinct.
          </h2>
          <div className="spec" style={{ marginTop: 26 }}>
            <div className="spec-h">
              <span>Now</span>
              <span>Jan 2025 — Present</span>
            </div>
            <div className="spec-row"><span className="k">At</span><span className="v">BluAi · Chandigarh, India</span></div>
            <div className="spec-row"><span className="k">Building</span><span className="v">Embedded HMI &amp; full-stack</span></div>
            <div className="spec-row"><span className="k">Learning</span><span className="v">Next.js · TypeScript · backend</span></div>
          </div>
        </Reveal>

        <Reveal className="about-card" delay={0.1}>
          <p>
            I like building software that people actually use. Whether it&apos;s an embedded
            healthcare interface, a full-stack app, or an AI-powered tool, I enjoy taking an
            idea from its first Figma sketch to a working, deployed product — and owning every
            layer in between.
          </p>
          <p>
            At BluAi I build the interface for a commercially deployed smart medical device:
            real-time vitals screens, 7 &amp; 12-lead ECG and stethoscope visualization, an AI
            voice assistant, and the backend that feeds the companion app. I grew that role from
            Crank Storyboard into Flutter Embedded, then into full-stack.
          </p>
          <p>
            My strength is combining design taste with technical execution — Figma layouts,
            responsive interfaces, APIs, and databases from the same person. Right now I&apos;m
            going deeper on Next.js, TypeScript, and advanced backend.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
