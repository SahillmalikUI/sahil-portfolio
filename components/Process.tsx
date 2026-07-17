"use client";

import Reveal from "./Reveal";

const steps = [
  ["01", "Understand", "Product goal, users, and flows — what the interface actually needs to solve."],
  ["02", "Design", "Clean layouts, visual direction, and components in Figma before any code."],
  ["03", "Build", "Responsive, smooth, production-ready interfaces in modern frontend tools."],
  ["04", "Connect", "APIs, auth, backend logic, databases, and real product data."],
  ["05", "Polish", "Spacing, motion, performance, and the tiny details until it feels premium."],
];

export default function Process() {
  return (
    <section className="block" id="process" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <span className="idx">04 — HOW I WORK</span>
            <h2 style={{ marginTop: 14 }}>Product thinking, start to polish.</h2>
          </div>
          <p>A real sequence — the order matters, so the numbers do too.</p>
        </Reveal>

        <Reveal className="proc">
          {steps.map(([n, title, text]) => (
            <div className="step" key={n}>
              <span className="n">{n}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
