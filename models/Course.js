import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter  Title"],
  },

  subtitle: {
    type: String,
    required: [true, "Please Enter Sub Title"],
  },
  links: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: [true, "Please select the subject"],
  },

  author: {
    type: String,
    required: true,
  },
});

export const Course = mongoose.model("Course", schema);
