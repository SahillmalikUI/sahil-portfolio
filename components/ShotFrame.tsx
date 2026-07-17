"use client";

import { useState } from "react";

/**
 * Drop-in screenshot slot.
 * - `src`   : path in /public, e.g. "/work/novamind.png". Add the file later; it appears automatically.
 * - `label` : what goes here (shown while the image is missing).
 * - `url`   : the little browser-bar caption.
 */
export default function ShotFrame({
  src,
  label,
  url,
  alt,
}: {
  src?: string;
  label: string;
  url: string;
  alt?: string;
}) {
  const [ok, setOk] = useState(true);
  const showImg = Boolean(src) && ok;

  return (
    <div className="frame">
      <div className="frame-bar">
        <i />
        <i />
        <i />
        <span className="url">{url}</span>
      </div>
      <div className="shot">
        {showImg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="shot-img"
            src={src}
            alt={alt ?? label}
            onError={() => setOk(false)}
          />
        ) : (
          <span className="ph">
            <b>SCREENSHOT SLOT</b>
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
