import express from "express";

const router = express.Router();

// Define item-related routes
import filmsActions from "./modules/filmsActions";
import itemActions from "./modules/item/itemActions";

import { upload, uploadImage } from "./services/fileUpload";
// import { imageUpload, upload } from "./services/fileUpload";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

router.get("/api/films", filmsActions.browse);
router.post("/api/films", filmsActions.add);
router.post("/api/upload", upload.single("picture"), uploadImage);

export default router;

// upload.single("file"), imageUpload,
