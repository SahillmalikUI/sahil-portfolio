"use client";

import Reveal from "./Reveal";
import MagLink from "./MagLink";
import ShotFrame from "./ShotFrame";
import { useBackendStatus } from "./BackendStatusContext";

function LivePanel() {
  const { state, ms } = useBackendStatus();
  const pulse = state === "live" ? "♥ beating" : state === "down" ? "— flatline —" : "— — —";
  const stateLabel = state === "live" ? "● live" : state === "down" ? "○ down" : "checking…";
  const stateColor = state === "live" ? "var(--vital)" : "var(--ink-2)";

  return (
    <div className="live-panel">
      <div className="live-h">
        <span>Backend · Live status</span>
        <span>{pulse}</span>
      </div>
      <div className="live-b">
        <span className="lk">Endpoint</span>
        <span className="lv">railway.app</span>
        <span className="lk">State</span>
        <span className="lv" style={{ color: stateColor }}>{stateLabel}</span>
        <span className="lk">Response</span>
        <span className="lv">{ms ? `${ms} ms` : "—"}</span>
        <span className="lk">Uptime</span>
        <span className="lv">24/7 target</span>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="block" id="cases" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <span className="idx">02 — FLAGSHIP CASE STUDIES</span>
            <h2 style={{ marginTop: 14 }}>Two builds. One designs, one engineers.</h2>
          </div>
          <p>The full range in two products — a commercial healthcare interface, and a full-stack AI app running live.</p>
        </Reveal>

        {/* BluAi */}
        <Reveal className="case">
          <div className="case-grid">
            <div className="case-info">
              <span className="case-badge">Commercial Product · HMI / Embedded UI</span>
              <h3>BluAi Vitals Chair</h3>
              <p className="lede">
                A commercially deployed smart medical device used in real clinical settings.
                Doctors and hospitals needed a responsive embedded interface that renders live
                patient vitals reliably on constrained hardware. I owned the interface end to
                end — 7 &amp; 12-lead ECG, SpO2, digital stethoscope with real-time audio
                waveform, blood pressure, heart rate, and temperature — plus an AI voice
                assistant that lets patients report symptoms before a consultation, cutting
                diagnosis time. The screens shown here are my own UI concepts in the same style;
                the real product is linked below.
              </p>
              <div className="kv">
                <div className="row"><span className="k">Type</span><span>Healthcare Interface / HMI</span></div>
                <div className="row"><span className="k">Stack</span><span>Crank Storyboard · Lua · Flutter Embedded</span></div>
                <div className="row"><span className="k">My role</span><span>Crank → Flutter Embedded → Full-Stack</span></div>
                <div className="row"><span className="k">Status</span><span>Live commercial product</span></div>
              </div>
              <div className="build">
                <span className="build-h">How I built it</span>
                <p>
                  The hard part was rendering live ECG at high sample rates on constrained
                  embedded hardware without dropping frames. I used a ring buffer for O(1) sample
                  writes, isolated each lead&apos;s canvas so only the waveforms repaint instead
                  of the whole screen, and batched each trace into a single draw call — holding a
                  steady 60fps across every lead. I later grew the same role from Crank Storyboard
                  into Flutter Embedded, then into full-stack, building the backend that feeds the
                  companion VitalsLog app.
                </p>
              </div>
              <div className="case-cta">
                <MagLink className="btn btn--solid" href="https://bluai.ai/products/vitals-chair/" target="_blank" rel="noopener noreferrer">
                  View live product ↗
                </MagLink>
              </div>
            </div>
            <div className="case-visual">
              <div>
                <ShotFrame src="/cases/ecg-monitor.png" label="Real-time 12-lead ECG monitor (16:10, ~1600px wide)" url="ecg-monitor · ui concept" alt="12-lead ECG monitor UI concept" />
                <p className="shot-cap">Real-time 12-lead monitor</p>
              </div>
              <div>
                <ShotFrame src="/cases/vitals-dashboard.png" label="Patient vitals dashboard (16:10, ~1600px wide)" url="vitals-dashboard · ui concept" alt="Patient vitals dashboard UI concept" />
                <p className="shot-cap">Patient vitals dashboard</p>
              </div>
              <div className="hl-grid">
                <div className="hl"><b>7 &amp; 12-lead</b> ECG viz</div>
                <div className="hl"><b>SpO2 · BP</b> vitals flows</div>
                <div className="hl"><b>Stethoscope</b> audio waveform</div>
                <div className="hl"><b>AI voice</b> symptom intake</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* NovaMind */}
        <Reveal className="case">
          <div id="novamind" className="case-grid">
            <div className="case-info">
              <span className="case-badge">Full-Stack · AI · Live on Railway</span>
              <h3>NovaMind</h3>
              <p className="lede">
                An AI-powered productivity app I built end to end, from the PostgreSQL schema to
                live deployment. Most task apps are static — you have to think of every task
                yourself. NovaMind lets you describe a goal in plain language, like &quot;get
                fit&quot; or &quot;learn Python,&quot; and an AI assistant generates specific,
                actionable tasks you can add with one tap.
              </p>
              <div className="kv">
                <div className="row"><span className="k">Backend</span><span>Node · Express · PostgreSQL</span></div>
                <div className="row"><span className="k">Auth</span><span>JWT · bcrypt · secure storage</span></div>
                <div className="row"><span className="k">AI</span><span>Groq · Llama 3.3 70B (proxied)</span></div>
                <div className="row"><span className="k">My role</span><span>Solo · full-stack (personal project)</span></div>
              </div>
              <div className="build">
                <span className="build-h">How I built it</span>
                <p>
                  Node and Express power the REST API, backed by PostgreSQL with parameterized
                  queries. Auth is JWT with bcrypt hashing, and tokens live in encrypted device
                  storage — never plain text. The AI (Groq, Llama 3.3 70B) is routed through a
                  backend proxy so the API key never touches the mobile app. The Flutter client
                  uses Riverpod for state, and every push to GitHub auto-deploys the live backend
                  on Railway.
                </p>
              </div>
              <div className="case-cta">
                <MagLink className="btn btn--solid" href="https://github.com/SahillmalikUI/novamind-backend" target="_blank" rel="noopener noreferrer">
                  Backend repo ↗
                </MagLink>
                <MagLink className="btn btn--ghost" href="https://github.com/SahillmalikUI/novamind" target="_blank" rel="noopener noreferrer">
                  Flutter repo ↗
                </MagLink>
              </div>
            </div>
            <div className="case-visual">
              <ShotFrame src="/cases/novamind-app.png" label="NovaMind app — tasks + AI chat (phone screens, side by side)" url="novamind — app screens" alt="NovaMind app screens" />
              <LivePanel />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}