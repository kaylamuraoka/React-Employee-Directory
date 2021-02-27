import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "" ||
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/employee-directory"
              className={
                window.location.pathname === "/employee-directory"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Employee Directory
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
