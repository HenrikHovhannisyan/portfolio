import React from "react";
import { INFO } from "../../config/info";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href={INFO.git}
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"/>
      </a>

      <a
        href={INFO.linkedin}
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"/>
      </a>
    </div>
  );
};

export default Social;
