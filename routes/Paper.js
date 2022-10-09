import express from "express";
import { addNewPaper, deletePaper, getAllPapers, updatePaper } from "../controllers/paperController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/addnewpaper", isAuthenticated,  authorizeAdmin,  addNewPaper);

router.delete("/deletejob/:id",  isAuthenticated,  authorizeAdmin,  deletePaper);

router.put("/updatejob/:id", isAuthenticated,  authorizeAdmin,  updatePaper);

router.get("/jobupdate", isAuthenticated,   getAllPapers);


export default router;