import type { RequestHandler } from "express";

// Import access to data
import itemRepository from "./filmsRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const items = await itemRepository.readAll();

    // Respond with the items in JSON format
    res.json(items);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add: RequestHandler = async (req, res) => {
  try {
    const film = await itemRepository.create(req.body);

    res.status(201).json(film);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur", details: err });
  }
};

export default { browse, add };
