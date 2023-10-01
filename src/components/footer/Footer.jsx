import React from "react";
import { INFO } from "../../config/info";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href={INFO.git}
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"/>
          </a>

          <a
            href={INFO.linkedin}
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
