import express from "express";
import { addNewJob, deleteJob, getAllJobs, updateJobs } from "../controllers/jobController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/addnewjob", isAuthenticated,  authorizeAdmin,  addNewJob);

router.delete("/deletejob/:id", isAuthenticated,  authorizeAdmin,  deleteJob);

router.put("/updatejob/:id",  isAuthenticated,  authorizeAdmin, updateJobs);

router.get("/jobupdate",  isAuthenticated, getAllJobs);









export default router;