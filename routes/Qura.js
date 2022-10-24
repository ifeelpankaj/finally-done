import express from "express";
import { createAnswer, createQuestion, deleteAnswer, deleteQuestion, getAllQuestions, getAnswer, getQuestionDetails } from "../controllers/quraController.js";

const router = express.Router();

import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

router.post("/createQuestion",isAuthenticated, createQuestion);

router.get("/Questions", getAllQuestions);

router.get("/Question/:id",isAuthenticated, getQuestionDetails);

router.delete("/Question/:id",isAuthenticated,authorizeAdmin, deleteQuestion);

router.put("/answer",isAuthenticated, createAnswer);

router.get("/getallans",  isAuthenticated, getAnswer);

router.delete("/delete",authorizeAdmin, isAuthenticated, deleteAnswer);







export default router;