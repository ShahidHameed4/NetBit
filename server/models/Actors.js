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
}, {
    timestamps: true
});

export default mongoose.model("Actor", ActorSchema);