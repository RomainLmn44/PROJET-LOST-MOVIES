import { useEffect, useState } from "react";
import "./Discover.css";
import CardFilms from "../../components/CardFilms/CardFilms";
import type { FilmsI } from "../../types/typeDiscover";

function Discover() {
  const [films, setFilms] = useState<null | FilmsI[]>(null);

  console.warn(films);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/films`)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {films?.map((el) => {
        return (
          <CardFilms
            key={el.id}
            picture={el.picture}
            description={el.description}
            year={el.year}
            style={el.style}
            title={el.title}
          />
        );
      })}
    </>
  );
}

export default Discover;
