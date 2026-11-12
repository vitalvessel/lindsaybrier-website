"use client";

import { useEffect, useState } from "react";
import { Arrow } from "@/components/Arrow";
import { BOOKING_URL } from "@/lib/config";

const LINKS = [
  { href: "/#approach", label: "Our approach" },
  { href: "/#first-visit", label: "Your first visit" },
  { href: "/#about", label: "About Lindsay" },
] as const;

export function PrimaryNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <nav className="nav" aria-label="Primary">
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <ul id="primary-menu" className={open ? "nav-list is-open" : "nav-list"}>
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={close}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href={BOOKING_URL} onClick={close}>
            Book Your First Visit <Arrow />
          </a>
        </li>
      </ul>
    </nav>
  );
}
