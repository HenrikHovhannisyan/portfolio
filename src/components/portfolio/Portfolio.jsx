import React, { useState } from "react";
import Content from "./Content";
import "./portfolio.css";
import { PORTFOLIO } from "../../config/data";

const Portfolio = () => {
  const [item, setItem] = useState(PORTFOLIO);
  const types = [...new Set(PORTFOLIO.map((i) => i.type))];

  const filterItem = (type) => {
    const portfolio_type = PORTFOLIO.filter((filter) => {
      return filter.type === type;
    });
    setItem(portfolio_type);
  };

  return (
    <section className="services section" id="portfolio">
      <h2 className="section__title">My Portfolio</h2>
      <span className="section__subtitle">Recent Works</span>

      <div className="portfolio__social">
        <button className="portfolio__link" onClick={() => setItem(PORTFOLIO)}>
          All
        </button>
        {console.log(types)}
        {types.map((name, id) => {
          return (
            name && (
              <button
                className="portfolio__link"
                key={id}
                onClick={() => filterItem(name)}
              >
                {name}
              </button>
            )
          );
        })}
      </div>

      <div className="portfolio__container container grid">
        {item.map((i) => {
          return (
            <Content key={i.id} name={i.name} image={i.image} url={i.url} />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
