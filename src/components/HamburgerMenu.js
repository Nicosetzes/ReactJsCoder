import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <button id="hamburger" className="hamburger" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};
