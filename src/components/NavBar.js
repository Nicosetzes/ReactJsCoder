import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { HamburgerMenu } from "./HamburgerMenu";
import "./NavBar.css";

export const NavBar = () => {
  const [catMenuClass, setCatMenuClass] = useState("navBar");

  const toggleMenu = () => {
    catMenuClass === "navBar"
      ? setCatMenuClass("navBar show")
      : setCatMenuClass("navBar");
  };

  const closeMenu = () => {
    setCatMenuClass("navBar");
  };

  useEffect(() => {
    window.addEventListener("resize", closeMenu);
    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  useEffect(() => {
    if (catMenuClass === "navBar show") {
      window.addEventListener("click", closeMenu);
      return () => {
        window.removeEventListener("click", closeMenu);
      };
    }
  }, [catMenuClass]);

  return (
    <>
      <div className="nav__img">
        <Link to={`/`}>Libros del mar</Link>
      </div>
      <HamburgerMenu toggleMenu={toggleMenu} />
      <nav id="nav" className={catMenuClass}>
        <ul id="nav__list" className="nav__list">
          <li className="nav__list-option">
            <Link to={`/`}>Inicio</Link>
          </li>
          <li className="nav__list-option">
            <Link to={`/category/ciencia`}>Ciencia</Link>
          </li>
          <li className="nav__list-option">
            <Link to={`/category/fantastico`}>Fantástico</Link>
          </li>
          <li className="nav__list-option">
            <Link to={`/category/historia`}>Historia</Link>
          </li>
          <li className="nav__list-option">
            <Link to={`/category/narrativa`}>Narrativa</Link>
          </li>
          <li className="nav__list-option">
            <Link to={`/category/policial`}>Policial</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </>
  );
};