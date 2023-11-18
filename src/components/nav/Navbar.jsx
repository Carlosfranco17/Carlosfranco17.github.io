import React, { useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const navToggler = document.querySelector(".nav-toggler");
    const navMenu = document.querySelector(".site-navbar ul");
    const navLinks = document.querySelectorAll(".site-navbar a");

    allEventListeners();

    function allEventListeners() {
      navToggler.addEventListener("click", togglerClick);
      navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
    }

    function togglerClick() {
      navToggler.classList.toggle("toggler-open");
      navMenu.classList.toggle("open");
    }

    function navLinkClick() {
      if (navMenu.classList.contains("open")) {
        navToggler.click();
      }
    }

    return () => {
      navToggler.removeEventListener("click", togglerClick);
      navLinks.forEach((elem) =>
        elem.removeEventListener("click", navLinkClick)
      );
    };
  }, []);

  return (
    <div>
      <header className="header-area">
        <div className="navbar-area">
          <div className="container">
            <nav className="site-navbar">
              <a href="#home" className="site-logo">
                <img className="logo" src="/public/img/gateway-logo.webp" alt="" />
              </a>

              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/nosotros">Nosotros</Link>
                </li>
                <li>
                  <Link to="/servicios">Servicios</Link>
                </li>
                <li>
                  <Link to="/idi">I+D+I</Link>
                </li>
                <li>
                  <Link to="/proyectos">Proyectos</Link>
                </li>
                <li>
                  <Link to="/trabajaconnosotros">Trabaja con nosotros</Link>
                </li>
                <li>
                  <Link to="https://dreambox.com.co/">Dream Box</Link>
                </li>
              </ul>

              <button className="nav-toggler">
                <span></span>
              </button>
            </nav>
          </div>
        </div>

        
      </header>
    </div>
  );
};

export default Navbar;
