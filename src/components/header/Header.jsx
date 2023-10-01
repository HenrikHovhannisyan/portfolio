import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    this.scrollY >= 80
      ? header.classList.add("scroll-header")
      : header.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [isToggle, setIsToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Portfolio
        </a>

        <div className={isToggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"/> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"/> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"/> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"/> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"/> Contact
              </a>
            </li>
          </ul>

          <i
    className="uil uil-times nav__close"
    onClick={() => setIsToggle(!isToggle)}
    />
        </div>

        <div className="nav__toggle" onClick={() => setIsToggle(!isToggle)}>
          <i className="uil uil-apps"/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
