import React from "react";
import "./software.css";
import SoftwareBox from "./SoftwareBox";

const Software = () => {
  const badges = [
    { name: "Adobe",            href: "https://www.adobe.com/",
      src: "https://img.shields.io/badge/Adobe-%23FF0000?style=for-the-badge&logo=adobe&logoColor=white" },

    { name: "Android Studio",   href: "https://developer.android.com/studio",
      src: "https://img.shields.io/badge/Android%20Studio-008678?style=for-the-badge&logo=android-studio&logoColor=white" },

    { name: "Chrome",           href: "https://www.google.com/chrome/",
      src: "https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white" },

    { name: "Google Colab",     href: "https://colab.research.google.com/",
      src: "https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=black" },

    { name: "CodePen",          href: "https://codepen.io/",
      src: "https://img.shields.io/badge/CodePen-000000?style=for-the-badge&logo=codepen&logoColor=white" },

    { name: "Git",              href: "https://git-scm.com/",
      src: "https://img.shields.io/badge/Git-%23F05033?style=for-the-badge&logo=git&logoColor=white" },

    { name: "Google Sheets",    href: "https://www.google.com/sheets/about/",
      src: "https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white" },

    { name: "Jupyter",          href: "https://jupyter.org/",
      src: "https://img.shields.io/badge/Jupyter-%23F37626?style=for-the-badge&logo=jupyter&logoColor=white" },

    { name: "Postman",          href: "https://www.postman.com/",
      src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },

    { name: "Stack Overflow",   href: "https://stackoverflow.com/",
      src: "https://img.shields.io/badge/Stack%20Overflow-FE7A16?style=for-the-badge&logo=stackoverflow&logoColor=white" },

    { name: "Visual Studio Code", href: "https://code.visualstudio.com/",
      src: "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white" },

    { name: "Tinkercad",        href: "https://www.tinkercad.com/",
      src: "https://img.shields.io/badge/Tinkercad-1967D2?style=for-the-badge&logo=tinkercad&logoColor=white" },

    { name: "Windows",          href: "https://www.microsoft.com/windows",
      src: "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" },

    { name: "Arduino",          href: "https://www.arduino.cc/",
      src: "https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white" },

    { name: "Sublime Text",     href: "https://www.sublimetext.com/",
      src: "https://img.shields.io/badge/Sublime%20Text-FF9800?style=for-the-badge&logo=sublimetext&logoColor=white" },

    { name: "VirtualBox",       href: "https://www.virtualbox.org/",
      src: "https://img.shields.io/badge/VirtualBox-183A61?style=for-the-badge&logo=virtualbox&logoColor=white" },

    { name: "Eclipse IDE",      href: "https://www.eclipse.org/ide/",
      src: "https://img.shields.io/badge/Eclipse%20IDE-2C2255?style=for-the-badge&logo=eclipseide&logoColor=white" },

    { name: "Apache NetBeans",  href: "https://netbeans.apache.org/",
      src: "https://img.shields.io/badge/Apache%20NetBeans-1B6AC6?style=for-the-badge&logo=apachenetbeanside&logoColor=white" },
  ];

  return (
    <section className="sw container section" id="software">
      <h2 className="section__title">Software and Tools</h2>

      <div className="sw__panel">
        <div className="sw__grid">
          {badges.map(b => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="sw__card"
              title={b.name}
            >
              <img className="sw__badge" src={b.src} alt={b.name} />
            </a>
          ))}
        </div>
      </div>

      {/* Opcional: métricas/contadores al pie */}
      <SoftwareBox />
    </section>
  );
};

export default Software;
