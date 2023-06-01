import mongoose from "mongoose";

const ActorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    facebook: {
        type: String,
        required: false,
    },
    instagram: {
        type: String,
        required: false,
    },
    twitter: {
        type: String,
        required: false,
    },
    imdb: {
        type: String,
        required: false,
    },
    
}, {
    timestamps: true
});

export default mongoose.model("Actor", ActorSchema);