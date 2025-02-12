import "./Addfilm.css";

function Addfilm() {
  return (
    <section className="addfilm">
      <h1>Partage-nous un film !</h1>
      <form>
        <section>
          <label htmlFor="title">/ Titre :</label>
          <input type="text" id="title" name="title" />
        </section>

        <section>
          <label htmlFor="year">/ Année :</label>
          <input type="number" id="year" name="year" />
        </section>
        <section>
          <label htmlFor="style">/ Style :</label>
          <input type="text" id="style" name="style" list="styles" />
        </section>
        <section>
          <datalist id="styles">
            <option value="Action" />
            <option value="Comédie" />
            <option value="Drame" />
            <option value="Fantastique" />
            <option value="Horreur" />
            <option value="Science-fiction" />
            <option value="Policier" />
          </datalist>
        </section>
        <section>
          <label htmlFor="description">/ Description :</label>
          <textarea id="description" name="description" />
        </section>
        <button type="submit">AJOUTER</button>
      </form>
    </section>
  );
}

export default Addfilm;
