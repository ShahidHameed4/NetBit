import express from "express";
import MovieDetailsController from "../controllers/MovieDetail.js";

const router = express.Router();

// Add an actor to a movie
router.post("/addRole/:movieId", MovieDetailsController.addActor);

// Delete an actor from a movie
router.delete("/removeRole/:movieId", MovieDetailsController.deleteActor);

// Update an actor for a movie
router.put("/:movieId/updateRole", MovieDetailsController.updateActor);

// Get all actors for a movie
router.get("/:movieId/allRoles", MovieDetailsController.getActorsForMovie);

// Get akll movie of actor name or character name
router.get("/search/:name", MovieDetailsController.searchMovieByActor);

export default router;
