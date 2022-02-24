import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";
import "./header.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light myNav p-0 m-0 ">
        <div className="container-fluid">
          <img className="navbar-brand p-0 myLogo" src={Logo} width={130} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center w-50 p-0 m-0 "
            id="navbarNav"
          >
            <ul className="navbar-nav my-ul ">
              <li className="nav-item">
                <NavLink
                  aria-activedescendant=""
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Karachi
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/lq">
                  Lahore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/qg">
                  Quetta
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/iu">
                  Islamabad
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ms">
                  Multan
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/pz">
                  Peshawar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
