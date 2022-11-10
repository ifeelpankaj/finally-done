import { asyncError } from "../middlewares/errorMiddleware.js";
import { Course } from "../models/Course.js";
import APIFEATURE from "../utils/apifeature1.js";
import ErrorHandler from "../utils/ErrorHandler.js";


export const addNewCourse = asyncError(async (req, res, next) => {

    const course = await Course.create(req.body)
    res.status(201).json({
        success: true,
        course,
      });
});

// Delete Content

export const deleteCourse = asyncError(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorHandler("Course not found with this Id", 404));
  }

  await course.remove();

  res.status(200).json({
    success: true,
  });
});

//Update content

export const updateCourse = asyncError(async (req, res, next) => {

  let course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorHandler("Content not found", 404));
  }
  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    course,
  });
});

//Get all Content

export const getAllCourse = asyncError(async (req, res, next) => {
  const courses = await Course.find();

  res.status(200).json({
    success: true,
    courses,
  });
});

export const getCourseDetails = asyncError(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorHandler("Notthing found", 404));
  }

  res.status(200).json({
    success: true,
    course,
  });
});
