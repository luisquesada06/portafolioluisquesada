import React, { useEffect, useRef, useState, useMemo } from "react";

/* Contador animado accesible */
const Counter = ({ end = 0, duration = 1200 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);

  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
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

const SoftwareBox = () => {
  const stats = [
    { icon: "icon-fire",   value: 5,  label: "IDEs" },            // VS Code, Eclipse, NetBeans, Android Studio, Sublime
    { icon: "icon-cup",    value: 7,  label: "Dev Tools" },       // Git, Postman, CodePen, Jupyter, Colab, Sheets, Chrome
    { icon: "icon-people", value: 3,  label: "Plataformas/OS" },  // Windows, Arduino, VirtualBox
  ];

  return (
    <div className="sw__boxes">
      {stats.map((s) => (
        <div className="sw__box" key={s.label} role="group" aria-label={s.label}>
          <i className={`sw__icon ${s.icon}`} aria-hidden="true" />
          <div>
            <h3 className="sw__title"><Counter end={s.value} /></h3>
            <span className="sw__subtitle">{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftwareBox;
