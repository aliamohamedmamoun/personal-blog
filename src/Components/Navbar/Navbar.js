import React, { Component } from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <ul id="nav-list">
        <li>
          <a href="#welcome-section">About</a>
        </li>
        <li>
          <a href="#projects">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
