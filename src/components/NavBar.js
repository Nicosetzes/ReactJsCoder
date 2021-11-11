import { CartWidget } from "./CartWidget";
import "./CartWidget.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to={`/`}>Logo</Link>
      </div>
      <ul>
        <li>
          <Link to={`/`}>Inicio</Link>
        </li>
        <li>
          <Link to={`/category/policial`}>Policial</Link>
        </li>
        <li>
          <Link to={`/category/historia`}>Historia</Link>
        </li>
      </ul>
      <div className="login">
        <button>Login</button>
      </div>
      <CartWidget />
    </nav>
  );
};
