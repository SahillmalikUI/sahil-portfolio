"use client";

import { useEffect, useRef } from "react";
import { useBackendStatus } from "./BackendStatusContext";

export default function EcgBand() {
  const { state, ms } = useBackendStatus();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0;
    let H = 0;
    let trace: number[] = [];

    const resize = () => {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (trace.length === 0) {
        for (let i = 0; i < W; i++) trace.push(H / 2);
      } else {
        while (trace.length < W) trace.push(H / 2);
        trace = trace.slice(-W);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const beatShape = () => [0, 0, 0, -3, -1, 0, 2, -22, 34, -10, 0, 4, 6, 3, 0, 0, 0, 0];

    let sincePulse = 0;
    let injecting: number[] = [];
    let injIdx = 0;
    const pulseGap = 62;

    const pushSample = () => {
      const mid = H / 2;
      let val = 0;
      if (injecting.length && injIdx < injecting.length) {
        val = injecting[injIdx++];
        if (injIdx >= injecting.length) {
          injecting = [];
          injIdx = 0;
        }
      }
      sincePulse++;
      const live = stateRef.current === "live";
      if (live && sincePulse >= pulseGap && injecting.length === 0) {
        injecting = beatShape();
        injIdx = 0;
        sincePulse = 0;
      }
      trace.push(mid - val);
      if (trace.length > W) trace.shift();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(21,21,14,0.10)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let gx = 0; gx < W; gx += 46) {
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, H);
      }
      ctx.stroke();

      const down = stateRef.current === "down";
      ctx.strokeStyle = down ? "#9a9a90" : "#FF3A20";
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.beginPath();
      for (let x = 0; x < trace.length; x++) {
        if (x === 0) ctx.moveTo(x, trace[x]);
        else ctx.lineTo(x, trace[x]);
      }
      ctx.stroke();

      if (!down) {
        const ly = trace[trace.length - 1];
        ctx.fillStyle = "#FF3A20";
        ctx.beginPath();
        ctx.arc(trace.length - 1, ly, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    if (reduce) {
      for (let k = 0; k < W; k++) trace[k] = H / 2;
      draw();
    } else {
      let acc = 0;
      let last = performance.now();
      const loop = (now: number) => {
        acc += now - last;
        last = now;
        while (acc >= 16) {
          pushSample();
          acc -= 16;
        }
        draw();
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const tag =
    state === "live"
      ? `SIGNAL · ${ms ? `${ms}ms` : "live"}`
      : state === "down"
      ? "SIGNAL · flatline"
      : "SIGNAL · ——";

  return (
    <div className="ecg-band">
      <div className="wrap ecg-inner">
        <span className="ecg-tag">{tag}</span>
        <canvas ref={canvasRef} className="ecg" />
      </div>
    </div>
  );
}
