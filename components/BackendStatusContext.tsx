"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type BackendState = "checking" | "live" | "down";

type StatusValue = { state: BackendState; ms: number | null };

const BackendStatusContext = createContext<StatusValue>({ state: "checking", ms: null });

export const useBackendStatus = () => useContext(BackendStatusContext);

// The NovaMind backend. Root returns 404 (no route at "/"), which still proves
// the server is up — a no-cors fetch resolves on any HTTP response.
const BACKEND = "https://novamind-backend-production-2f94.up.railway.app";

export function BackendStatusProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<BackendState>("checking");
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;

    const ping = () => {
      const t0 = performance.now();
      const ctrl = new AbortController();
      const timeout = setTimeout(() => ctrl.abort(), 6000);

      fetch(BACKEND, { mode: "no-cors", signal: ctrl.signal, cache: "no-store" })
        .then(() => {
          clearTimeout(timeout);
          if (!alive) return;
          setState("live");
          setMs(Math.round(performance.now() - t0));
        })
        .catch(() => {
          clearTimeout(timeout);
          if (!alive) return;
          setState("down");
          setMs(null);
        });
    };

    ping();
    const id = setInterval(ping, 30000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  return (
    <BackendStatusContext.Provider value={{ state, ms }}>
      {children}
    </BackendStatusContext.Provider>
  );
}
