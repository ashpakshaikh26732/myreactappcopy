import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutus}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
            <div className="dropdown mx-3">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Theme
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    type="button"
                    onClick={props.darkblue}
                    class="btn btn-outline-dark"
                  >
                    Dark-blue
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={props.light}
                    class="btn btn-outline-dark"
                  >
                    light
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={props.seatalBlack}
                    class="btn btn-outline-dark"
                  >
                    seatal-black
                  </button>
                  <button
                    type="button"
                    onClick={props.redblack}
                    class="btn btn-outline-dark"
                  >
                    red-black
                  </button>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  aboutus: PropTypes.string,
};
Navbar.defaultProps = {
  title: "TextUtils",
  home: "home",
  aboutus: "about",
};
