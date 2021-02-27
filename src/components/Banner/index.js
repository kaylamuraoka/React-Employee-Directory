import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div
      className="banner-image"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.backgroundImage})`,
      }}
    >
      <div className="banner-text">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <br />

        <Link to={props.buttonRoute}>
          <button>{props.buttonText} </button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
