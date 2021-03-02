import React from "react";
import "./style.css";

function PageHeader(props) {
  return (
    <div
      className="hero-image"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.backgroundImage})`,
      }}
    >
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <br />
      </div>
    </div>
  );
}

export default PageHeader;
