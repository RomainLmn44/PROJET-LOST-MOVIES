import { useState } from "react";
import "./Addfilm.css";

function Addfilm() {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    style: "",
    description: "",
    picture: "",
  });

  const [picture, setPicture] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPicture(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage("");

    if (!picture) {
      notifyError("Please select an image.");
      return;
    }

    const formDataWithPicture = new FormData();
    formDataWithPicture.append("picture", picture);

    try {
      // Upload picture
      const uploadResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/upload`,
        { method: "POST", body: formDataWithPicture },
      );

      if (!uploadResponse.ok) {
        throw new Error("An unknown error occurred.");
      }

      const result = await uploadResponse.json();
      const imagePath = `/uploads/${result}`;

      console.warn("hello", result);

      // Set picture path in formData
      const completeFormData = { ...formData, picture: imagePath };

      // Submit complete form data
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/films`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(completeFormData),
        },
      );

      console.warn("coucou", formData);

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      setMessage("Formulaire envoyé avec succès !");
      setFormData({
        title: "",
        year: "",
        style: "",
        description: "",
        picture: "",
      });
    } catch (error) {
      console.error("Erreur :", error);
      setMessage("Erreur lors de l'envoi du formulaire");
    }
  };

  return (
    <section className="addfilm">
      <h1>Partage-nous un film !</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="title">/ Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </section>
        <section>
          <label htmlFor="year">/ Année :</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </section>
        <section>
          <label htmlFor="style">/ Style :</label>
          <input
            type="text"
            id="style"
            name="style"
            list="styles"
            value={formData.style}
            onChange={handleChange}
            required
          />
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
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </section>
        <section>
          <label htmlFor="file">Affiche :</label>
          <input type="file" name="picture" onChange={handleChangePicture} />
        </section>
        <button type="submit">AJOUTER</button>
        {message && <p>{message}</p>}
      </form>
    </section>
  );
}

export default Addfilm;

function notifyError(_message: string) {
  throw new Error("Function not implemented.");
}
