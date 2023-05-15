import express from "express";
import ActorController from "../controllers/Actor.js";
import { verifyToken } from "../verifyTokenAdmin.js";

const router = express.Router();

// Create a new actor
router.post("/addActor",verifyToken, ActorController.createActor);

// Retrieve all actors
router.get("/allActors",verifyToken, ActorController.getAllActors);

// Retrieve a specific actor by ID
router.get("/:id",verifyToken, ActorController.getActorById);

// Update an actor by ID
router.put("/:id", ActorController.updateActor);

// Delete an actor by ID
router.delete("/:id", ActorController.deleteActor);

// Search for a specific actor by name
router.get("/search/:name", ActorController.searchActorByName);

export default router;
