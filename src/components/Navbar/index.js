import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="topnav">
      <a>
        <NavLink to="/" activeClassName="active" exact={true}>
          About
        </NavLink>
      </a>
      <a>
        <NavLink to="/employee-directory" activeClassName="active">
          Employee Directory
        </NavLink>
      </a>
    </nav>
  );
}
export default Navbar;
