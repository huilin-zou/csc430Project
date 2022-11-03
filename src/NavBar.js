import React from "react";

export default function Navbar() {
  return (
    <nav className="navigation">
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Menu</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
