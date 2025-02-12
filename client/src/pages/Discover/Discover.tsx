import "./Discover.css";

function Discover() {
  return (
    <section className="discover">
      <div className="card-film">
        <img src="manfromearth.jpg" alt="affiche film" />
        <section className="text-card">
          <h2>Man from earth</h2>
          <p>2007</p>
          <p>Science Fiction</p>
          <p className="card-description">
            Un professeur d'université révèle à ses collègues qu'il est en
            réalité un homme immortel vivant depuis plus de 14 000 ans. Une
            conversation captivante où la science et la philosophie se
            mélangent.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Discover;
