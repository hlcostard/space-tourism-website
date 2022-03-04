import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "./assets/shared/logo.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [menuItem, setMenuItem] = useState(0);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="flex primary-header">
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <div>
        <img src={logo} alt="space tourism logo" className="logo" />
      </div>
      <button
        onClick={handleToggle}
        className={`mobile-nav-toggle ${navbarOpen ? "show-menu" : ""}`}
        aria-controls="primary-navigation">
        <span className="sr-only" aria-expanded={navbarOpen}>
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={`primary-navigation underline-indicators flex 
          ${navbarOpen ? "show-menu" : ""}`}>
          <NavLink
            to="/"
            activeClassName="active"
            className="ff-sans-cond uppercase text-white letter-spacing-2"
            onClick={() => {
              closeMenu();
              setMenuItem(0);
            }}>
            <span aria-hidden="true">00</span> Home
          </NavLink>

          <NavLink
            to="/destination"
            activeClassName="active"
            className="ff-sans-cond uppercase text-white letter-spacing-2"
            onClick={() => {
              closeMenu();
              setMenuItem(1);
            }}>
            <span aria-hidden="true">01</span> Destination
          </NavLink>

          <NavLink
            to="/crew"
            activeClassName="active"
            className="ff-sans-cond uppercase text-white letter-spacing-2"
            onClick={() => {
              closeMenu();
              setMenuItem(2);
            }}>
            <span aria-hidden="true">02</span> Crew
          </NavLink>

          <NavLink
            to="/technology"
            activeClassName="active"
            className="ff-sans-cond uppercase text-white letter-spacing-2"
            onClick={() => {
              closeMenu();
              setMenuItem(3);
            }}>
            <span aria-hidden="true">03</span> Technology
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
