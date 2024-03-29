import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import actors from "./routes/Actor.js";
import movieDetails from "./routes/MovieDetail.js";

import AdminRouter from "./routes/authAdmin.js";


const app = express();
app.use(cors());
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.Mongo_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

//middlewares
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use("/api/Actor", actors);
app.use("/api/movie", movieDetails);
app.use("/api/admin", AdminRouter);

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", (req, res) => {
  res.send("Hello to Youtube API");

});

app.listen(process.env.port || 8800 , () => {
  connect();
  console.log("Connected to Server");
});
