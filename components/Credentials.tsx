"use client";

import Reveal from "./Reveal";

const achievements = [
  ["Full Stack Development", "INFOWIZ Software Solutions · 2023"],
  ["JavaScript", "Infosys Springboard"],
  ["6th place — E-Commerce Hackathon", "50+ teams"],
  ["Cricket Head & Captain", "CU-ARCS Sports Club · leadership"],
];

export default function Credentials() {
  return (
    <section className="block" id="credentials" style={{ paddingTop: 0 }}>
      <div className="wrap about-grid">
        <Reveal>
          <span className="idx">06 — EDUCATION</span>
          <h2 style={{ fontSize: "clamp(30px, 4.4vw, 56px)", marginTop: 14 }}>
            Where the foundation was laid.
          </h2>
          <div className="spec" style={{ marginTop: 26 }}>
            <div className="spec-h">
              <span>Degree</span>
              <span>2021 — 2025</span>
            </div>
            <div className="spec-row"><span className="k">Program</span><span className="v">B.E. Computer Science</span></div>
            <div className="spec-row"><span className="k">University</span><span className="v">Chitkara University</span></div>
            <div className="spec-row"><span className="k">CGPA</span><span className="v">7.90</span></div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="idx">CERTIFICATIONS &amp; ACHIEVEMENTS</span>
          <div className="spec" style={{ marginTop: 14 }}>
            <div className="spec-h">
              <span>Record</span>
              <span>Selected</span>
            </div>
            {achievements.map(([k, v]) => (
              <div className="spec-row" key={k}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
