import React from "react";
import "./qualification.css";

const Qualification = () => {
    return (
        <section className="qualification section">
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={ "qualification__button button--flex qualification__active"}>
                        <i className="uil uil-briefcase-alt qualification__icon"/>
                        <h2>Experience</h2>
                    </div>
                </div>
                <h3>IThire</h3>
                <div className="qualification__section">
                    <p>
                        I work at IThire’s main product and on several side projects. As a Full Stack Engineer, I create
                        and maintain web applications.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
