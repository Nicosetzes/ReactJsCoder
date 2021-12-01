import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
// import { useEffect } from "react";
import "./NavBar.css";

export const NavBar = () => {
  const toggleMenu = () => {
    const nav = document.getElementById("nav");
    nav.classList.toggle("show");
  };

  const closeMenu = () => {
    const nav = document.getElementById("nav");
    nav.classList.remove("show");
  };

  // TO DO: REPASAR CLASE DE EVENTOS EN REACT, PARA AGREGAR UN EVENT LISTENER QUE ME PERMITE EJECUTAR closeMenu()

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      const nav = document.getElementById("nav");
      nav.classList.remove("show");
    }
  });

  // TO DO: REPASAR CLASE DE EVENTOS EN REACT, PARA AGREGAR UN WINDOW LISTENER QUE ME PERMITA CERRAR EL MENU AL CAMBIAR EL TAMAÑO DE LA PANTALLA

  // useEffect(() => {
  //   // initiate the event handler
  //   window.addEventListener(event, handler, passive);

  //   // this will clean up the event every time the component is re-rendered
  //   return function cleanup() {
  //     window.removeEventListener(event, handler);
  //   };
  // });

  return (
    <>
      <div className="nav__img">
        <Link to={`/`}>Logo</Link>
      </div>
      <HamburgerMenu toggleMenu={toggleMenu} />
      <nav id="nav" className="navBar">
        <ul id="nav__list" className="nav__list">
          <li className="nav__list-option">
            <Link to={`/`}>Inicio</Link>
          </li>
          <li className="nav__list-option">
            <Link to={`/category/policial`}>Policial</Link>
          </li>
          <li className="nav__list-option">
            <Link to={`/category/historia`}>Historia</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </>
  );
};
