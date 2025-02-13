import databaseClient, { type Rows, type Result } from "../../database/client";

import type { ResultSetHeader } from "mysql2/promise";

type Item = {
  id: number;
  title: string;
  user_id: number;
  year: number;
  style: string;
  description: string;
  picture: string;
};

class FilmsRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from film");

    // Return the array of items
    return rows as Item[];
  }

  async create(filmData: Omit<Item, "id">) {
    const [result] = await databaseClient.query<ResultSetHeader>(
      "INSERT INTO film (title, year, style, description, picture) VALUES (?,?,?,?,?)",
      [
        filmData.title,
        filmData.year,
        filmData.style,
        filmData.description,
        filmData.picture,
      ],
    );

    return { id: result.insertId, ...filmData };
  }
}

export default new FilmsRepository();
