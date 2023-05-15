import Actor from "../models/Actors.js";

class ActorController {
  // Create a new actor
  static createActor(req, res) {
    const { name, age, image, bio } = req.body;
    const newActor = new Actor({
      name,
      age,
      image,
      bio,
    });

    newActor
      .save()
      .then((actor) => {
        res.status(201).json(actor);
      })
      .catch((error) => {
        
        res.status(500).json({ error: "Failed to create actor", error });
      });
  }

  // Retrieve all actors
  static getAllActors(req, res) {
    Actor.find()
      .then((actors) => {
        res.status(200).json(actors);
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to retrieve actors" });
      });
  }

  // Retrieve a specific actor by ID
  static getActorById(req, res) {
    const actorId = req.params.id;
    Actor.findById(actorId)
      .then((actor) => {
        if (actor) {
          res.status(200).json(actor);
        } else {
          res.status(404).json({ error: "Actor not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to retrieve actor" });
      });
  }

  //Search for a specific actor by name
  static searchActorByName(req, res) {
    const actorName = req.params.name;
    Actor.find({ name: { $regex: actorName, $options: "i" } })
      .then((actors) => {
        if (actors) {
          res.status(200).json(actors);
        } else {
          res.status(404).json({ error: "Actor not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to retrieve actor" });
      });
  }

  // Update an actor by ID
  static updateActor(req, res) {
    const actorId = req.params.id;
    const { name, age, image, autoBiography } = req.body;

    Actor.findByIdAndUpdate(
      actorId,
      { name, age, image, autoBiography },
      { new: true }
    )
      .then((updatedActor) => {
        if (updatedActor) {
          res.status(200).json(updatedActor);
        } else {
          res.status(404).json({ error: "Actor not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to update actor" });
      });
  }

  // Delete an actor by ID
  static deleteActor(req, res) {
    const actorId = req.params.id;
    Actor.findByIdAndDelete(actorId)
      .then(() => {
        res.status(204).end();
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to delete actor" });
      });
  }
}

export default ActorController;
