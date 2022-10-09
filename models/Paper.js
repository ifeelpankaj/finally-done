import mongoose from "mongoose";

const schema = new mongoose.Schema({
     
    subject: {
        type: String,
        required: [true, "Please Enter Title Name"],
        trim: true
      },

      year:{
        type: Number,
        required:[true,"Please select the subject"],
      },

      solvedPaper: {
        type: String,
        required: [true, "Please Enter  contentInfo"],
      },

      link:{
        type: String,
        required: true,
      },
    

      author: {
        type: String,
        required: true,

      },
});

export const Paper = mongoose.model("Paper", schema);
