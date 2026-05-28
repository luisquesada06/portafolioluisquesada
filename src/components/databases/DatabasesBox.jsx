import React, { useEffect, useRef, useState, useMemo } from "react";

/* Contador animado y accesible */
const Counter = ({ end = 0, duration = 1200 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);

  // Respeta preferencias del usuario (reduce motion)
  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    // Sin animación si el usuario lo prefiere o no hay soporte
    if (prefersReduced || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVal(end);
      return;
    }

    const el = ref.current;
    let started = false;
    let rafId;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min((t - start) / duration, 1);
            setVal(Math.round(end * p));
            if (p < 1) rafId = requestAnimationFrame(tick);
          };
          rafId = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    if (el) io.observe(el);
    return () => {
      io.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [end, duration, prefersReduced]);

  return (
    <span ref={ref} aria-live="polite" aria-atomic="true">
      {val}
    </span>
  );
};

const AboutBox = () => {
  const stats = [
    { icon: "icon-fire",   value: 2, label: "Projects Completed",   gradient: "linear-gradient(135deg,#f43f5e,#f59e0b)" },
    { icon: "icon-cup",    value: 5, label: "Proyectos en proceso", gradient: "linear-gradient(135deg,#22c55e,#0ea5e9)" },
    { icon: "icon-people", value: 3, label: "Clientes satisfechos", gradient: "linear-gradient(135deg,#a855f7,#6366f1)" },
  ];

  return (
    <div className="about__boxes grid">
      {stats.map(({ icon, value, label, gradient }) => (
        <div className="about__box" key={label} role="group" aria-label={label}>
          <i
            className={`about__icon ${icon}`}
            aria-hidden="true"
            style={gradient ? { background: gradient } : undefined}
          />
          <div className="about__box-text">
            <h3 className="about__title">
              <Counter end={value} />
            </h3>
            <span className="about__subtitle">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DatabasesBox;
