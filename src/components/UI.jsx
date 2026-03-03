import { useState, useEffect, useRef } from "react";

export const ICON_PATHS = {
  elektriker: "M13 2L3 14h6l-1 6 10-12h-6l1-6z",
  snekker: "M3 9l1-1 5.5 5.5L15 8l1 1-7 7zM14.5 5.5a2.12 2.12 0 003-3L15 0l-3 3 2.5 2.5z",
  rorlegger: "M4.5 16.5c-1.5 0-3-1.5-3-3 0-1 .5-2 1.5-2.5V6a2 2 0 014 0v5c1 .5 1.5 1.5 1.5 2.5 0 1.5-1.5 3-3 3zM13.5 16.5c-1.5 0-3-1.5-3-3 0-1 .5-2 1.5-2.5V6a2 2 0 014 0v5c1 .5 1.5 1.5 1.5 2.5 0 1.5-1.5 3-3 3z",
  maler: "M19 3H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM11 9v9M8 21h6",
  taktekking: "M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10",
  renhold: "M12 2a4.5 4.5 0 00-4.5 4.5c0 1.3.5 2.4 1.5 3.3V22h6V9.8c1-.9 1.5-2 1.5-3.3A4.5 4.5 0 0012 2z",
  frisor: "M6 3v18M18 3v7c0 5.5-12 5.5-12 0V3",
  tannlege: "M12 5.5c-2 0-3.5 1-4 3-.5 2 .5 4 1 6s.5 4-.5 5.5c2 0 3-1 3.5-2 .5 1 1.5 2 3.5 2-1-1.5-1-3.5-.5-5.5s1.5-4 1-6c-.5-2-2-3-4-3z",
  bilverksted: "M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11M3 13a2 2 0 012-2h14a2 2 0 012 2v4H3v-4zM7 17a2 2 0 100 0M17 17a2 2 0 100 0",
  hage: "M12 22V8M12 8C12 4 8 2 8 2s0 4-4 6M12 8c0-4 4-6 4-6s0 4 4 6M7 14h10M9 18h6",
};

export function Ico({ id, size = 24, color = "#fff" }) {
  const p = ICON_PATHS[id];
  if (!p) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={p} />
    </svg>
  );
}

export function Check({ color = "#10b981", size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.5 12L13 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Arrow({ color = "currentColor" }) {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Star({ color = "#FFD700", size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 14 14" fill={color}><path d="M7 .8l1.8 3.7 4.1.5-3 2.9.7 4.1L7 10.2 3.4 12l.7-4.1-3-2.9 4.1-.5L7 .8z" /></svg>;
}

export function Chevron({ open }) {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform .3s", transform: open ? "rotate(180deg)" : "rotate(0)" }}><path d="M3.5 5.25L7 8.75l3.5-3.5" /></svg>;
}

export function Rev({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setV(true); obs.disconnect(); }
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ ...style, opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)", transition: `opacity .6s cubic-bezier(.23,1,.32,1) ${delay}s, transform .6s cubic-bezier(.23,1,.32,1) ${delay}s` }}>
      {children}
    </div>
  );
}

/* Shared style constants */
export const F = "'Fraunces', serif";
export const B = "'Sora', sans-serif";
export const dot = "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.06) 1px, transparent 0)";
