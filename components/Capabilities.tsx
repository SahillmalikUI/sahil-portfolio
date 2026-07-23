"use client";

import Reveal from "./Reveal";

const caps = [
  {
    num: "A / FRONTEND & EMBEDDED",
    title: "Frontend & Embedded",
    desc: "Production interfaces from mobile to embedded Linux displays — the rare Flutter Embedded + HMI combination.",
    items: ["Flutter (Embedded + Mobile) · Dart", "Crank Storyboard · Lua", "Embedded Linux UI · HMI systems", "Riverpod · responsive UI"],
  },
  {
    num: "B / BACKEND & AI",
    title: "Backend & AI",
    desc: "The APIs, auth, and data behind the interface — plus secure AI integration and live deployment.",
    items: ["Node.js · Express · REST APIs", "PostgreSQL · MongoDB · Firestore", "Firebase Auth · JWT · bcrypt", "Groq AI · Gemini AI · Railway"],
  },
  {
    num: "C / DESIGN & VISUAL",
    title: "Design & Visual",
    desc: "Interfaces designed for clarity — from wireframe to a shippable design system and Figma → code handoff.",
    items: ["Figma · wireframing · prototyping", "Design systems · Figma → code", "Photoshop · InDesign", "HMI interface design"],
  },
];

export default function Capabilities() {
  return (
    <section className="block" id="capabilities">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <span className="idx">03 — CAPABILITIES</span>
            <h2 style={{ marginTop: 14 }}>One hire. Three disciplines.</h2>
          </div>
          <p>Bring me in for any layer — or the whole stack. Here&apos;s what each looks like.</p>
        </Reveal>

        <Reveal className="caps">
          {caps.map((c) => (
            <div className="cap" key={c.num}>
              <span className="num">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <ul>
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
