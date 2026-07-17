"use client";

const stack = [
  "Flutter", "Dart", "Figma", "Photoshop", "Next.js", "TypeScript", "Tailwind",
  "Node.js", "Express", "PostgreSQL", "MongoDB", "JWT Auth", "Groq AI",
  "Crank Storyboard", "Lua", "REST APIs", "Riverpod",
];

export default function Marquee() {
  const items = [...stack, ...stack];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}