import React from "react";
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand ml-2" href="/home">
        <i class="fas fa-utensils"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link text-white text-uppercase ml-5" to="/home">
              <i class="fas fa-home"></i> Home&nbsp; <span className="sr-only">(Current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-white text-uppercase ml-5" to="/about">
                Food-Shop
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-white text-uppercase ml-5" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;