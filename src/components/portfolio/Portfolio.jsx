import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {

  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {

    const updateItem = Menu.filter((curElem) => {
      return curElem.category.includes(categoryItem);
    });

    setItems(updateItem);
  };

  return (
    <section className="work container section" id="portfolio">

      <h2 className="section__title">My Projects</h2>

      <div className="work__filters">

        <span
          className="work__item"
          onClick={() => setItems(Menu)}
        >
          Everything
        </span>

        <span
          className="work__item"
          onClick={() => filterItem("Web App")}
        >
          Web App
        </span>

        <span
          className="work__item"
          onClick={() => filterItem("React")}
        >
          React
        </span>

        <span
          className="work__item"
          onClick={() => filterItem("Python")}
        >
          Python
        </span>

      </div>

      <div className="work__container grid">

        {items.map((elem) => {

          const { id, image, title, category, link } = elem;

          return (

            <div className="work__card" key={id}>

              <div className="work__thumbnail">

                <img
                  src={image}
                  alt={title}
                  className="work__img"
                />

                <div className="work__mask"></div>

              </div>

              <span className="work__category">
                {category.join(" • ")}
              </span>

              <h3 className="work__title">
                {title}
              </h3>

              <a
                href={link}
                className="work__button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon-link work__button-icon"></i>
              </a>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default Portfolio;