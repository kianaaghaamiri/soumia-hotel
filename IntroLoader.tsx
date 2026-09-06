"use client";

import { useEffect, useState } from "react";
import Silk from "./Silk";

export default function IntroLoader() {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minimumDisplay = reduceMotion ? 300 : 2200;
    let closeTimer: ReturnType<typeof setTimeout> | undefined;
    let removeTimer: ReturnType<typeof setTimeout> | undefined;

    document.documentElement.classList.add("intro-active");

    const dismiss = () => {
      const elapsed = performance.now() - startedAt;
      closeTimer = setTimeout(() => {
        setIsClosing(true);
        removeTimer = setTimeout(() => {
          setIsVisible(false);
          document.documentElement.classList.remove("intro-active");
        }, reduceMotion ? 20 : 800);
      }, Math.max(0, minimumDisplay - elapsed));
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
    }

    return () => {
      window.removeEventListener("load", dismiss);
      if (closeTimer) clearTimeout(closeTimer);
      if (removeTimer) clearTimeout(removeTimer);
      document.documentElement.classList.remove("intro-active");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`intro-loader${isClosing ? " is-closing" : ""}`}
      role="status"
      aria-label="در حال آماده‌سازی هتل سومیا"
    >
      <div className="intro-silk" aria-hidden="true">
        <Silk
          speed={5}
          scale={1}
          color="#2c5a2c"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="intro-vignette" aria-hidden="true" />
      <div className="intro-wordmark">
        <div className="intro-logo" aria-hidden="true">
          <b className="intro-logo-halo" />
          <img src="/soumia-logo-transparent.png" alt="" />
        </div>
        <span>SOUMIA</span>
        <i aria-hidden="true" />
        <small>HOTEL · AHVAZ</small>
      </div>
      <div className="intro-progress" aria-hidden="true"><i /></div>
    </div>
  );
}
