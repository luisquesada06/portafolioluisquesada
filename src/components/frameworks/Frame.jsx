import React from "react";
import "./frame.css";
import FrameBox from "./FrameBox";

const BadgeGrid = ({ title, items }) => (
  <div className="frame__row">
    {title && <div className="frame__groupTitle">{title}</div>}
    <div className="frame__grid">
      {items.map((b) => (
        <a
          key={b.name}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          className="frame__card"
          title={b.name}
        >
          <img className="frame__badge" src={b.src} alt={b.name} />
        </a>
      ))}
    </div>
  </div>
);

const Frame = () => {
  const mlData = [
    { name: "Keras",       href: "https://keras.io",           src: "https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white" },
    { name: "NumPy",       href: "https://numpy.org",          src: "https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" },
    { name: "Pandas",      href: "https://pandas.pydata.org",  src: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" },
    { name: "TensorFlow",  href: "https://tensorflow.org",     src: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" },
  ];

  const frontend = [
    { name: "React",        href: "https://react.dev",          src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
    { name: "React Native", href: "https://reactnative.dev",    src: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
    { name: "Bootstrap",    href: "https://getbootstrap.com",   src: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" },
    { name: "Django",       href: "https://www.djangoproject.com", src: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" },
  ];

  const others = [
    { name: "Laravel", href: "https://laravel.com", src: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" },
    { name: "Expo",    href: "https://expo.dev",    src: "https://img.shields.io/badge/Expo-000000?style=for-the-badge&logo=expo&logoColor=white" },
    { name: "Unity",   href: "https://unity.com",   src: "https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white" },
    { name: "Vuforia", href: "https://developer.vuforia.com", src: "https://img.shields.io/badge/Vuforia-2E86C1?style=for-the-badge&logoColor=white" },
  ];

  return (
    <section className="frame container section" id="frameworks">
      <h2 className="section__title">Frameworks and Libraries</h2>

      <div className="frame__panel">
        <BadgeGrid title="ML / Data" items={mlData} />
        <BadgeGrid items={frontend} />
        <BadgeGrid items={others} />
      </div>

      {/* Métricas animadas (mismo look que Databases) */}
      <FrameBox />
    </section>
  );
};

export default Frame;
