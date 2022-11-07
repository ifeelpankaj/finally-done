import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter  Title"],
  },
  Course: [
    {
      subtitle: {
        type: String,
        required: [true, "Please Enter Sub Title"],
      },
      links: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      category: {
        type: String,
        required: [true, "Please select the subject"],
      },

      author: {
        type: String,
        required: true,
      },
    },
  ],
});

export const Course = mongoose.model("Course", schema);
