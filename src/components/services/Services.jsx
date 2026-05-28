import React from "react";
import "./services.css";
import Image1 from "../../assets/svc-uiux.svg";
import Image2 from "../../assets/svc-api.svg";
import Image3 from "../../assets/svc-db-pro.svg";
import Image4 from "../../assets/svc-mobile.svg";
import Image5 from "../../assets/svc-ar.svg";
import Image6 from "../../assets/svc-deploy.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX & Front-End",
    what: "Diseño interfaces modernas, accesibles y responsive con foco en rendimiento.",
    includes: [
      "Wireframes/prototipos (Figma) y guía de estilos",
      "Maquetación en React con componentes reutilizables",
      "Animaciones sutiles + buenas prácticas A11y/SEO",
      "Optimización de performance (Lighthouse)",
    ],
    stack: "React · Bootstrap/Tailwind · Git · VS Code",
  },
  {
    id: 2,
    image: Image2,
    title: "Back-End & APIs",
    what: "Construyo backends y APIs REST que conectan tu front con la base de datos.",
    includes: [
      "Node.js/Express o PHP/Laravel",
      "Autenticación JWT, roles y middlewares",
      "Endpoints documentados (Postman) y validaciones",
      "Estructura lista para producción",
    ],
    stack: "Node.js/Express · PHP/Laravel · Postman · Git",
  },
  {
    id: 3,
    image: Image3,
    title: "Bases de Datos & Dashboards",
    what: "Modelado, consultas y visualización para toma de decisiones.",
    includes: [
      "Esquemas MySQL/SQL y normalización básica",
      "CRUDs, relaciones, índices y backups",
      "Dashboards/Reportes con Google Sheets/Charts",
      "Migraciones y seeders",
    ],
    stack: "MySQL/SQL · Firebase · Google Sheets",
  },
  {
    id: 4,
    image: Image4,
    title: "Apps Móviles (React Native/Expo)",
    what: "Desarrollo apps Android con UI nativa y consumo de APIs.",
    includes: [
      "Navegación, formularios y almacenamiento local",
      "Cámara, GPS y notificaciones",
      "Build y publicación APK/AAB (Android Studio)",
      "PWA o versión web si se necesita",
    ],
    stack: "React Native/Expo · Android Studio · APIs REST",
  },
  {
    id: 5,
    image: Image5,
    title: "Realidad Aumentada & Visión",
    what: "Prototipos AR y visión por computador para experiencias interactivas.",
    includes: [
      "AR con Vuforia/Unity (markers, tracking por imagen)",
      "OpenCV / TensorFlow Lite para procesamiento básico",
      "Integración de cámara y overlay 3D",
      "Demo funcional y documentación",
    ],
    stack: "Unity · Vuforia · OpenCV/TensorFlow Lite",
  },
  {
    id: 6,
    image: Image6,
    title: "Deploy, Hosting & Optimización",
    what: "Preparo y publico tu app, asegurando velocidad y seguridad.",
    includes: [
      "Deploy en Hostinger / Azure / GitHub Pages / Heroku",
      "Dominios, SSL, variables de entorno y backups",
      "Optimización de bundle, caché e imágenes",
      "SEO básico, analítica y monitoreo",
    ],
    stack: "Hostinger · Microsoft Azure · GitHub Pages · CI/CD simple",
  },
];

const Services = () => (
  <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {data.map(({ id, image, title, what, includes, stack }) => (
        <div className="services__card" key={id}>
          <img src={image} alt={title} className="services__img" />
          <h3 className="services__title">{title}</h3>

          <p className="services__description">
            <strong>Qué hago:</strong> {what}
          </p>

          <p className="services__meta">Incluye</p>
          <ul className="services__list">
            {includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="services__meta">Stack</p>
          <p className="services__stack">{stack}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
