import { Link } from "react-router-dom";
import "./Connexion.css";

function Connexion() {
  return (
    <>
      <section className="connexion">
        <h1>.Ravie de vous revoir ! </h1>
        <form>
          <section className="form-group">
            <label htmlFor="user-mail">E-mail</label>
            <input type="email" id="user-mail" />
          </section>
          <section className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" />
          </section>

          <button type="submit">SE CONNECTER</button>
        </form>
        <p>
          Pas encore inscrit ?{" "}
          <Link className="link" to="/">
            S'inscrire
          </Link>
        </p>
      </section>
    </>
  );
}

export default Connexion;
