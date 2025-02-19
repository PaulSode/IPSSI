import express from "express";
import { getFilms, getFilmById, newFilm, deleteFilm, updateFilm } from "../Controllers/filmController.js";
import {date} from "../middleware.js";

const router = express.Router();
router.get("/films", date, getFilms);
router.get("/films/:id", date, getFilmById);
router.post("/films", date, newFilm);
router.delete("/films/:id", date, deleteFilm);
router.put("/films/:id", date, updateFilm);

export default router;