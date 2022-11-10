import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = ({ history }) => {
  const [isOpen, setOpen] = useState(false);


  return (
    <nav
      className="navigation"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a href
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navigation-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">

            <NavLink
              className="navbar-item"

              to="/"
              exact
            >
              Home
            </NavLink>

            <NavLink
              className="navbar-item"

              to="/menu"
            >
              Menu
            </NavLink>

            <NavLink
              className="navbar-item"

              to="/contact"
            >
              Contact
            </NavLink>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
