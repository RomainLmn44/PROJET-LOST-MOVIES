import { Squash } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Burger.css";

function Burger() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <section className="burger">
      <Squash size={70} toggled={open} toggle={setOpen} />
      {open && (
        <ul>
          <Link to="/discover" onClick={handleLinkClick}>
            Découvrir
          </Link>
          <Link to="/test" onClick={handleLinkClick}>
            Favoris
          </Link>
          <Link to="/addfilm" onClick={handleLinkClick}>
            Ajouter des films
          </Link>
          <Link to="/test" onClick={handleLinkClick}>
            Inscription
          </Link>
          <Link to="/test" onClick={handleLinkClick}>
            Déconnexion
          </Link>
        </ul>
      )}
    </section>
  );
}

export default Burger;
