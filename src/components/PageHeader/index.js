import React from "react";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";

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

        <div className="input-icons">
          <IconContext.Provider
            value={{
              color: "grey",
              className: "icon",
            }}
          >
            <i>
              <FiSearch />
            </i>
          </IconContext.Provider>
          <input
            className="input-field"
            type="text"
            onkeyup={props.onkeyupFunction}
            placeholder="Search for employee.."
          ></input>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
