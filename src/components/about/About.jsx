import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

/* Barra reutilizable */
const SkillBar = ({ label, value, color }) => (
  <div className="skill">
    <div className="skill__head">
      <span className="skill__label">{label}</span>
      <span className="skill__value">{value}%</span>
    </div>

    <div
      className="skill__track"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <span className="skill__bar" style={{ "--w": `${value}%`, "--c": color }} />
    </div>
  </div>
);

const About = () => {
  const skills = [
    { label: "Development",    value: 85, color: "#f59e0b" },
    { label: "UI/UX Design",   value: 80, color: "#eab308" },
    { label: "JavaScript",     value: 60, color: "#f97316" },
    { label: "C",              value: 80, color: "#60a5fa" },
    { label: "C++",            value: 90, color: "#3b82f6" },
    { label: "Sublime Text",   value: 90, color: "#f59e0b" },
    { label: "HTML",           value: 90, color: "#ef4444" },
    { label: "CSS",            value: 90, color: "#8b5cf6" },
    { label: "Node.js",        value: 80, color: "#22c55e" },
    { label: "PHP",            value: 90, color: "#64748b" },
    { label: "SQL",            value: 90, color: "#6366f1" },
    { label: "Python",         value: 40, color: "#0ea5e9" },
  ];

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container">
        {/* Columna izquierda */}
        <div className="about__left">
          <img
            src={Image}
            alt="Avatar de Luis Quesada"
            className="about__img"
          />

          <div className="about__card">
            <p className="about__description">
              Yo soy <b>Luis Quesada</b>, Ingeniero en computación de La Ceiba,
              Atlántida, Honduras. Tengo experiencia en el desarrollo de páginas
              web y aplicaciones móviles basada en mis estudios universitarios.
            </p>

            <a
              href="/luis_cv.pdf"
              download="CV_Luis_Quesada.pdf"
              className="btn btn--primary"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="about__right">
          <div className="about__skills">
            {skills.map((s) => (
              <SkillBar key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;

