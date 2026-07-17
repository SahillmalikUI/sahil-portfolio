"use client";

import { motion } from "motion/react";
import MagLink from "./MagLink";
import EcgBand from "./EcgBand";

export default function Hero() {
  return (
    <section className="hero">
      <span id="top" />
      <div className="wrap hero-grid">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Full-Stack Software Engineer · Flutter Embedded · UI · AI Integration
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            I design the interface, then I build <em>everything</em> behind it.
          </motion.h1>

          <motion.p
            className="sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            I&apos;m Sahil — a full-stack software engineer who designs interfaces and
            builds everything behind them. From Figma layouts to shipped APIs and real-time
            healthcare interfaces on embedded hardware, I take products the whole way.
          </motion.p>

          <motion.div
            className="cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <MagLink className="btn btn--solid" href="#work">
              View work ↗
            </MagLink>
            <MagLink className="btn btn--ghost" href="/resume.pdf">
              Download résumé
            </MagLink>
          </motion.div>
        </div>

        <motion.div
          className="spec"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="spec-h">
            <span>Profile</span>
            <span>REV · 2026.01</span>
          </div>
          <div className="spec-row"><span className="k">Role</span><span className="v">Full-Stack Software Engineer</span></div>
          <div className="spec-row"><span className="k">Company</span><span className="v">BluAi · Chandigarh, India</span></div>
          <div className="spec-row"><span className="k">Focus</span><span className="v">Embedded HMI · AI · Real-time</span></div>
          <div className="spec-row"><span className="k">Experience</span><span className="v">1.5+ yrs</span></div>
          <div className="spec-row"><span className="k">Status</span><span className="v v-open">● Open to work</span></div>
        </motion.div>
      </div>

      <EcgBand />
    </section>
  );
}