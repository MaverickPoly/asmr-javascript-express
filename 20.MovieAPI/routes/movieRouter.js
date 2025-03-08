import mongoose from "mongoose";
import { addMovie, getMovie, getAllMovies, updateMovie, deleteMovie } from "../models/Movie.js";
import express from "express";

const router = express.Router();


router.get("/all/", async (req, res) => {
    try {
        const movies = await getAllMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get("/movie/:id/", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "Invalid ID" });
        }
        const movie = await getMovie(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: "Movie not found!" });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.post("/add/", async (req, res) => {
    try {
        const { name, rating } = req.body;
        const newMovie = await addMovie(name, rating);
        res.status(201).json(newMovie)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.put("/:id/update/", async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID" });
        }
        let { name, rating } = req.body;
        rating = parseInt(rating);
        const updatedMovie = await updateMovie(req.params.id, { name, rating });
        if (!updatedMovie) {
            return res.status(404).json({ error: "Movie not found!" });
        }
        res.json(updatedMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.delete("/:id/delete/", async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID" });
        }
        const deletedMovie = await deleteMovie(id);
        if (!deletedMovie) {
            return res.status(404).json({ error: "Movie not found!" });
        }
        res.json({ message: "Movie deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


export default router;
