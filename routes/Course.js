import express from "express";
import { addNewCourse, deleteCourse, getAllCourse, getCourseDetails, updateCourse } from "../controllers/courseController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/addnewcourse",isAuthenticated,  authorizeAdmin,  addNewCourse);

router.delete("/deletecourse/:id", isAuthenticated,  authorizeAdmin,  deleteCourse);

router.put("/updatecourse/:id", isAuthenticated,  authorizeAdmin,  updateCourse);

router.get("/courses",isAuthenticated,   getAllCourse);

router.get("/course/:id", getCourseDetails);






export default router;