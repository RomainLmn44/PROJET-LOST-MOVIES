import type { FilmsI } from "../../types/typeDiscover";
import "./CardFilms.css";

function CardFilms({ title, style, picture, year, description }: FilmsI) {
  return (
    <section className="discover">
      <div className="card-film">
        <img
          src={`${import.meta.env.VITE_API_URL}${picture}`}
          alt="affiche film"
        />
        <section className="text-card">
          <h2>{title}</h2>
          <p className="p-text">{year}</p>
          <p className="p-text">{style}</p>
          <p className="card-description">{description}</p>
        </section>
      </div>
    </section>
  );
}

export default CardFilms;
