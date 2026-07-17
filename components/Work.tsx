"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import ShotFrame from "./ShotFrame";

type Disc = "fullstack" | "uiux" | "graphics";

type Project = {
  title: string;
  type: string;
  disc: Disc[];
  desc: string;
  tags: string[];
  url: string;
  foot: string;
  img: string;
  slot: string;
};

const projects: Project[] = [
  {
    title: "BluAi Vitals Chair",
    type: "Healthcare Interface / HMI",
    disc: ["uiux"],
    desc: "Real-time vitals screens — 7 & 12-lead ECG, SpO2, stethoscope waveform, BP — plus an AI voice assistant, on embedded Linux for a shipping commercial product.",
    tags: ["Figma", "Crank Storyboard", "Lua", "Flutter"],
    url: "https://bluai.ai/products/vitals-chair/",
    foot: "Commercial UI",
    img: "/work/bluai-vitals.png",
    slot: "BluAi vitals screen",
  },
  {
    title: "NovaMind",
    type: "Full-Stack AI App",
    disc: ["fullstack"],
    desc: "AI-powered productivity app — Node + PostgreSQL backend, JWT auth, Groq AI, Flutter app, live on Railway.",
    tags: ["Node.js", "PostgreSQL", "Groq AI", "Flutter", "JWT"],
    url: "https://github.com/SahillmalikUI/novamind",
    foot: "Full-stack build",
    img: "/work/novamind.png",
    slot: "NovaMind tasks + AI chat",
  },
  {
    title: "VitalsLog",
    type: "Full-Stack Health App",
    disc: ["fullstack"],
    desc: "Full-stack health tracker — Flutter frontend, Express APIs, MongoDB Atlas, JWT auth, and an automated Normal / Warning / Critical classifier on medical thresholds.",
    tags: ["Flutter", "Express", "MongoDB", "JWT"],
    url: "https://github.com/SahillmalikUI/vitalslog",
    foot: "Full-stack build",
    img: "/work/vitalslog.png",
    slot: "VitalsLog app screens",
  },
  {
    title: "Design Lab",
    type: "UI/UX Experiments",
    disc: ["uiux", "graphics"],
    desc: "Dashboards, landing pages, mobile screens and product visuals — interface explorations in Figma & code.",
    tags: ["Figma", "UI Design", "Landing Pages"],
    url: "#capabilities",
    foot: "Visual experiments",
    img: "/work/design-lab.png",
    slot: "Figma exploration board",
  },
  {
    title: "Brand & Visual System",
    type: "Graphics / Identity",
    disc: ["graphics"],
    desc: "Logo direction, color systems, and interface components — visual consistency across a product.",
    tags: ["Photoshop", "Figma", "Branding"],
    url: "#capabilities",
    foot: "Graphics",
    img: "/work/brand-system.png",
    slot: "Brand board / logo sheet",
  },
  {
    title: "Landing Page Studies",
    type: "Web Design",
    disc: ["uiux", "graphics"],
    desc: "Hero sections, SaaS-style pages, and animated, conversion-focused layouts built in modern frontend.",
    tags: ["Next.js", "Tailwind", "Motion"],
    url: "#capabilities",
    foot: "Web design",
    img: "/work/landing-studies.png",
    slot: "Landing page mockup",
  },
];

const filters: { key: "all" | Disc; label: string }[] = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "uiux", label: "UI / UX" },
  { key: "graphics", label: "Graphics" },
];

export default function Work() {
  const [active, setActive] = useState<"all" | Disc>("all");

  return (
    <section className="block" id="work">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <span className="idx">01 — SELECTED WORK</span>
            <h2 style={{ marginTop: 14 }}>Tell me what you need. I&apos;ll show you exactly that.</h2>
          </div>
          <p>Filter by discipline — the same person ships commercial UI, full-stack products, and visual design.</p>
        </Reveal>

        <div className="filter" role="group" aria-label="Filter work by discipline">
          {filters.map((f) => (
            <button
              key={f.key}
              className="chip"
              aria-pressed={active === f.key}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {projects
            .filter((p) => active === "all" || p.disc.includes(active))
            .map((p) => {
              const ext = p.url.startsWith("http");
              return (
                <motion.a
                  key={p.title}
                  className="card"
                  href={p.url}
                  target={ext ? "_blank" : undefined}
                  rel={ext ? "noopener noreferrer" : undefined}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                >
                  <ShotFrame
                    src={p.img}
                    label={p.slot}
                    url={p.title.toLowerCase().replace(/\s+/g, "-")}
                    alt={`${p.title} — ${p.type}`}
                  />
                  <div className="card-body">
                    <span className="card-type">{p.type}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span className="tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="card-foot">
                    <span>{p.foot}</span>
                    <span className="arrow">↗</span>
                  </div>
                </motion.a>
              );
            })}
        </div>
      </div>
    </section>
  );
}
