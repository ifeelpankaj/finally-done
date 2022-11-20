import { asyncError } from "../middlewares/errorMiddleware.js";
import { Job } from "../models/Job.js";
import ApiFeatures from "../utils/apifeature2.js";
import ErrorHandler from "../utils/ErrorHandler.js";




export const addNewJob = asyncError(async (req, res, next) => {

    const job = await Job.create(req.body)
    res.status(201).json({
        success: true,
        job,
      });
});

export const getJobDetails = asyncError(async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return next(new ErrorHandler("Notthing found", 404));
  }

  res.status(200).json({
    success: true,
    job,
  });
});
// Delete 

export const deleteJob = asyncError(async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return next(new ErrorHandler(" Notthing found with this Id", 404));
  }

  await job.remove();

  res.status(200).json({
    success: true,
  });
});

export const updateJobs = asyncError(async (req, res, next) => {

  let job = await Job.findById(req.params.id);

  if (!job) {
    return next(new ErrorHandler("notthing found", 404));
  }
  job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    job,
  });
});

export const getAllJobs = asyncError(async (req, res, next) => {
  const jobs = await Job.find();


  res.status(200).json({
    success: true,
    jobs,
    });
});