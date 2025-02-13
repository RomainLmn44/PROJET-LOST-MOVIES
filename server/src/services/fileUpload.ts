import path from "node:path";
import type { RequestHandler } from "express-serve-static-core";
import multer from "multer";

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (_, file, cb) => {
    const uniqueSuffix = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, `picture-${uniqueSuffix}`);
  },
});

export const upload = multer({
  storage,
});

export const uploadImage: RequestHandler = (req, res) => {
  console.warn("C'est quoi le nom de mon fichier ?? ", req.file?.filename);
  const result = req.file?.filename;
  res.json(result);
};
