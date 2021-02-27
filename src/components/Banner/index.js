import React from "react";
import "./style.css";

function Banner(props) {
  return (
    <div
      className="banner text-center"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      {props.children}
    </div>
  );
}

export default Banner;
