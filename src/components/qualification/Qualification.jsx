import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              "qualification__button button--flex qualification__active"
            }
          >
            <i className="uil uil-briefcase-alt qualification__icon" />
            <h2>Experience</h2>
          </div>
        </div>
        <section>
          <h3>IThire | 03/2021 — Present</h3>
          <div className="qualification__section">
            <p>
              I am currently working on IThire's core product, where I focus on
              creating a user-friendly interface. In addition to this, I am also
              involved in several side projects. As a frontend developer, my
              main responsibilities include:
            </p>
            <p>
              <strong>UI Development:</strong> I build the visual parts of
              websites and applications that users interact with. I use HTML,
              CSS, and modern layout techniques such as Flexbox and Grid to
              create responsive interfaces.
            </p>
            <p>
              <strong>Frontend Logic Development:</strong> I implement
              interactive and dynamic elements using JavaScript and the ReactJS
              library. I'm also familiar with Redux for state management and
              TypeScript, and I can use them in projects when needed.
            </p>
          </div>
        </section>
        <section>
          <h3>Freelance | 2022 — Present</h3>
          <div className="qualification__section">
            <p>
              Work on various freelance projects in web development, creating
              responsive and dynamic applications.
            </p>
            <p>
              Solve different technical challenges to enhance problem-solving
              skills.
            </p>
            <p>Research and implement modern approaches in web development.</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Qualification;
