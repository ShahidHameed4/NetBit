import MovieDetails from "../models/MovieDetails.js";

class MovieDetailsController {
  // Add an actor to a movie
  static addActor(req, res) {
    const { actorName, actorImg, characterName, role } = req.body;
    const movieId = req.params.movieId;

    const newActor = new MovieDetails({
      movieId,
      actorName,
      actorImg,
      characterName,
      role,
    });

    newActor
      .save()
      .then((actor) => {
        res.status(201).json(actor);
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to add actor" });
      });
  }

  // Delete an actor from a movie
  static deleteActor(req, res) {
    const actorId = req.params.id;

    MovieDetails.findByIdAndDelete(actorId)
      .then(() => {
        res.status(204).end();
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to delete actor" });
      });
  }

  // Update an actor for a movie
  static updateActor(req, res) {
    const actorId = req.params.id;
    const { actorName, actorImg, characterName, role } = req.body;

    MovieDetails.findByIdAndUpdate(
      actorId,
      { actorName, actorImg, characterName, role },
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

  //Search movies done by a actor using actorname or charactername
  static searchMovieByActor(req, res) {
    const actorName = req.params.name;
    MovieDetails.find({
      $or: [
        { actorName: { $regex: actorName, $options: "i" } },
        { characterName: { $regex: actorName, $options: "i" } },
      ],
    })
      .then((movies) => {
        if (movies) {
          res.status(200).json(movies);
        } else {
          res.status(404).json({ error: "Movie not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to retrieve movie" });
      });
  }

  // Get all actors for a movie
  static getActorsForMovie(req, res) {
    const movieId = req.params.movieId;

    MovieDetails.find({ movieId })
      .then((actors) => {
        res.status(200).json(actors);
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to retrieve actors" });
      });
  }
}

export default MovieDetailsController;
