import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/Asset 16@4x.png";

function Header() {
  return (
    <header>
      <div className="column-1">
        <img src={logo} alt="Little Lemon Logo" width="250px" height="60px" />
      </div>
      <div className="column-2">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/">Order Online</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
