import React, { useEffect, useRef, useState } from "react";

/* Contador simple que se anima al entrar en pantalla */
const Counter = ({ end = 0, duration = 1200 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let started = false;
    const el = ref.current;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min((t - start) / duration, 1);
            setVal(Math.round(end * p));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    if (el) io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} aria-live="polite" aria-atomic="true">
      {val}
    </span>
  );
};

const AboutBox = () => {
  const stats = [
    { icon: "icon-fire", value: 2, label: "Projects Completed" },
    { icon: "icon-cup", value: 5, label: "Proyectos en proceso" },
    { icon: "icon-people", value: 3, label: "Clientes satisfechos" },
  ];

  return (
    <div className="about__boxes grid">
      {stats.map((s, i) => (
        <div className="about__box" key={i}>
          <i className={`about__icon ${s.icon}`} aria-hidden="true"></i>
          <div className="about__box-text">
            <h3 className="about__title">
              <Counter end={s.value} />
            </h3>
            <span className="about__subtitle">{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutBox;
