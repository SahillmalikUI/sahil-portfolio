"use client";

import { useBackendStatus } from "./BackendStatusContext";

const nav = [
  ["Work", "#work"],
  ["NovaMind", "#novamind"],
  ["Capabilities", "#capabilities"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export default function Header() {
  const { state, ms } = useBackendStatus();

  const dotClass =
    state === "live" ? "dot dot--live" : state === "down" ? "dot dot--down" : "dot";
  const text =
    state === "live"
      ? `BACKEND LIVE${ms ? ` · ${ms}MS` : ""}`
      : state === "down"
      ? "BACKEND UNREACHABLE"
      : "CHECKING BACKEND…";

  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href="#top">
          SAHIL<b>·</b>MALIK
        </a>

        <nav className="nav">
          {nav.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="status" title="Live status of the NovaMind backend">
          <span className={dotClass} />
          <span>{text}</span>
        </div>
      </div>
    </header>
  );
}
