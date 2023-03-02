import { asyncError } from "../middlewares/errorMiddleware.js";
import { Qura } from "../models/Qura.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const createQuestion = asyncError(async (req, res, next) => {
  const { title, question, link, answers } = req.body;

  const que = await Qura.create({
    title,
    question,
    link,
    answers,
    user: req.user._id,
  });
  // const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    message: " Added Successfully For You",
    que,
  });
});

export const getAllQuestions = asyncError(async (req, res, next) => {
  const ques = await Qura.find({});

  res.status(200).json({
    success: true,
    ques,
  });
  // const { title } = req.query;

  // const query = title ? { title: { $regex: new RegExp(title, 'i') } } : {};

  // const questions = await Qura.find(query);

  // res.status(200).json({
  //   success: true,
  //   message: `${questions.length} questions found`,
  //   questions,
  // });
});

export const getQuestionDetails = asyncError(async (req, res, next) => {
  const que = await Qura.findById(req.params.id);

  if (!que) {
    return next(new ErrorHandler("Notthing found", 404));
  }

  res.status(200).json({
    success: true,
    que,
  });
});

export const deleteQuestion = asyncError(async (req, res, next) => {
  const que = await Qura.findById(req.params.id);

  if (!que) {
    return next(new ErrorHandler("Notthing found", 404));
  }

  await que.remove();

  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});

//answer section
export const createAnswer = asyncError(async (req, res, next) => {
  const { comment, queId } = req.body;

  const answer = {
    user: req.user.id,
    name: req.user.name,
    comment,
  };

  const que = await Qura.findById(queId);

  const isAnswered = que.answers.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isAnswered) {
    que.answers.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        rev.comment = comment;
    });
  } else {
    que.answers.push(answer);
    que.numOfAnswers = que.answers.length;
  }

  await que.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

export const getAnswer = asyncError(async (req, res, next) => {
  const que = await Qura.findById(req.query.id);

  if (!que) {
    return next(new ErrorHandler(" Notthing found", 404));
  }

  res.status(200).json({
    success: true,
    answers: que.answers,
  });
});

export const deleteAnswer = asyncError(async (req, res, next) => {
  const que = await Qura.findById(req.query.queId);

  if (!que) {
    return next(new ErrorHandler("Notthing found", 404));
  }

  const answers = que.answers.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  await Qura.findByIdAndUpdate(
    req.query.queId,
    {
      answers,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
