import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";
import "./Header.css";

function Header() {
  return (
    <section className="header">
      <Burger />
      <img src="LOGO.png" alt="LOST MOVIES LOGO" />
      <Link className="link-header" to="/connexion">
        Connexion
      </Link>
    </section>
  );
}

export default Header;
