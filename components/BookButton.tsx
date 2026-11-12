"use client";

import { useRef } from "react";
import { Arrow } from "@/components/Arrow";
import { BOOKING_URL } from "@/lib/config";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const NAVIGATION_DELAY_MS = 1100;

const RIPPLES = [
  { hue: "lavender", delay: "0ms", duration: "1450ms" },
  { hue: "blue", delay: "80ms", duration: "1750ms" },
  { hue: "blush", delay: "30ms", duration: "1980ms" },
] as const;

export function BookButton() {
  const washRef = useRef<HTMLSpanElement>(null);
  const leavingRef = useRef(false);

  function spawn(x: number, y: number) {
    const wash = washRef.current;
    if (!wash) return;
    if (window.matchMedia(REDUCED_MOTION).matches) return;

    const stale = wash.querySelectorAll(".ink-ripple");
    if (stale.length > 9) {
      stale.forEach((node, index) => {
        if (index < 3) node.remove();
      });
    }

    for (const ripple of RIPPLES) {
      const node = document.createElement("span");
      node.className = `ink-ripple ink-ripple-${ripple.hue}`;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.animationDelay = ripple.delay;
      node.style.animationDuration = ripple.duration;
      wash.appendChild(node);
      const remove = () => node.remove();
      node.addEventListener("animationend", remove, { once: true });
      window.setTimeout(remove, 2600);
    }
  }

  return (
    <span className="book-wash" ref={washRef}>
      <span className="wash-bloom" aria-hidden="true" />
      <span className="wash-glow" aria-hidden="true" />
      <a
        className="book-button"
        href={BOOKING_URL}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          const wash = washRef.current;
          if (!wash || window.matchMedia(REDUCED_MOTION).matches) return;
          const rect = wash.getBoundingClientRect();
          spawn(event.clientX - rect.left, event.clientY - rect.top);
        }}
        onClick={(event) => {
          if (
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey ||
            event.button !== 0
          ) {
            return;
          }

          const wash = washRef.current;
          const reduce = window.matchMedia(REDUCED_MOTION).matches;
          if (reduce || !wash) return;

          if (event.detail === 0) {
            const rect = wash.getBoundingClientRect();
            spawn(rect.width / 2, rect.height / 2);
          }

          event.preventDefault();
          if (leavingRef.current) return;
          leavingRef.current = true;
          const href = event.currentTarget.href;
          window.setTimeout(() => {
            window.location.assign(href);
          }, NAVIGATION_DELAY_MS);
        }}
      >
        Book Your First Visit <Arrow />
      </a>
    </span>
  );
}
