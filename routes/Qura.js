import express from "express";
import { createAnswer, createQuestion, deleteAnswer, deleteQuestion, getAllQuestions, getAnswer, getQuestionDetails } from "../controllers/quraController.js";

const router = express.Router();

import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

router.post("/createQuestion",createQuestion);

router.get("/Questions", getAllQuestions);

router.get("/Question/:id",getQuestionDetails);

router.delete("/Question/:id",authorizeAdmin, deleteQuestion);

router.put("/answer", createAnswer);

router.get("/getallans",   getAnswer);

router.delete("/delete",authorizeAdmin, deleteAnswer);







export default router;