import React from "react";

const Content = ({name, description, image, git, url}) => {
    return (
        <div className="portfolio__content">
            <div>
                <img src={image} className="portfolio__img" alt="Portfolio img"/>
                <h3 className="portfolio__title">{name}</h3>
                <p className="portfolio__description" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>

            <div className="portfolio__button__container">
                <a href={url} className="portfolio__button" target="_blank" rel="noreferrer">
                    View More
                    <i className="uil uil-arrow-right portfolio__button-icon"/>
                </a>
                <a href={git} className="portfolio__button__git" target="_blank" rel="noreferrer">
                    <i className="uil uil-github"/>
                </a>
            </div>
        </div>
    );
};

export default Content;
