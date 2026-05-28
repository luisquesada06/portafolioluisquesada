import React from "react";
import "./databases.css";

const Databases = () => {
  const badges = [
    {
      name: "Hostinger",
      href: "https://www.hostinger.com/",
      src: "https://img.shields.io/badge/Hostinger-673de6?style=for-the-badge&logo=hostinger&logoColor=white",
    },
    {
      name: "GitHub Pages",
      href: "https://pages.github.com/",
      src: "https://img.shields.io/badge/GitHub%20Pages-327FC7?style=for-the-badge&logo=github&logoColor=white",
    },
    {
      name: "Heroku",
      href: "https://www.heroku.com/",
      src: "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
    },
    {
      name: "MySQL",
      href: "https://www.mysql.com/",
      src: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      name: "Firebase",
      href: "https://firebase.google.com/",
      src: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black",
    },
    {
      name: "Microsoft Azure",
      href: "https://azure.microsoft.com/",
      src: "https://img.shields.io/badge/Microsoft%20Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white",
    },
  ];

  return (
    <section className="db container section" id="databases">
      <h2 className="section__title">Databases &amp; Cloud Hosting</h2>

      <div className="db__panel">
        <div className="db__grid">
          {badges.map((b) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="db__card"
              title={b.name}
            >
              <img className="db__badge" src={b.src} alt={b.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Databases;
