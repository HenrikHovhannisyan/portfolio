import React from "react";

const Content = ({name, image, url}) => {
  return (
    <div className="portfolio__content">
      <div>
        <img
          src={image}
          className="portfolio__img"
          alt="Portfolio img"
        />
        <h3 className="portfolio__title">{name}</h3>
      </div>

      <a href={url} className="portfolio__button" target="_blank" rel="noreferrer">
        View More
        <i className="uil uil-arrow-right portfolio__button-icon"/>
      </a>
    </div>
  );
};

export default Content;
