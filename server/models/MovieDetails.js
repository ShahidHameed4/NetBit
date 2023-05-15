import mongoose from "mongoose";

const MovieDetailsSchema = new mongoose.Schema(
    {
    movieId: {
        type: String,
        required: true,
    },
    actorName: {
        type: String,
        required: true,
    },
    actorImg: {
        type: String,
        required: true,
    },
    characterName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
}, {
        timestamps: true
});

export default mongoose.model("MovieDetails", MovieDetailsSchema);