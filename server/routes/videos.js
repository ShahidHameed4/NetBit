import express from "express";
import { addVideo, addView, getByTag, getVideo, random, search, sub, trend,getAll } from "../controllers/video.js";
import { verifyToken } from "../verifyTokenAdmin.js";

const router = express.Router();

//create a video
router.post("/",verifyToken, addVideo)
router.get("/",verifyToken, getAll)
router.put("/:id", verifyToken,addVideo)
router.delete("/:id", verifyToken, addVideo)
router.get("/find/:id",verifyToken, getVideo)
router.put("/view/:id",verifyToken, addView)
router.get("/trend", trend)
router.get("/random",verifyToken, random)
router.get("/sub",verifyToken, sub)
router.get("/tags", getByTag)
router.get("/search", search)

export default router;
