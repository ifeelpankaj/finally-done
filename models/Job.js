import mongoose from "mongoose";

const schema = new mongoose.Schema({

  title: {
    type: String,
    required: [true, "Please Enter Title Name"],
    trim: true
  },

  company: {
    type: String,
    required: [true, "Please select the subject"],
  },

  aboutjob: {
    type: String,
    required: [true, "Please Enter  contentInfo"],
  },
  post: {
    type: String,
    required: true,
  },
  impdatesfrom: {
    type: String,
    required: true,
  },
  impdatesto: {
    type: String,
    required: true,
  },
  agelimit: {
    type: String,
    required: true,
  },
  fee: {
    type: String,
    required: true,
  },
  procedure: {
    type: String,
    required: true,
  },
  eligibliity: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  salary:{
    type: String,
    required: true,
  },

  joblocation:{
    type: String,
    required: true,
  },


  link: {
    type: String,
    required: true,
  },


  postedby: {
    type: String,
    required: true,

  },
});

export const Job = mongoose.model("Job", schema);
