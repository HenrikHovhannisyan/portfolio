import React from "react";
import "./qualification.css";

const Qualification = () => {
    return (
        <section className="qualification section">
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={"qualification__button button--flex qualification__active"}>
                        <i className="uil uil-briefcase-alt qualification__icon"/>
                        <h2>Experience</h2>
                    </div>
                </div>
                <h3>IThire</h3>
                <div className="qualification__section">
                    <p>
                        I am currently working on IThire's core product, where I focus on creating a user-friendly
                        interface. In addition to this, I am also involved in several side projects.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
