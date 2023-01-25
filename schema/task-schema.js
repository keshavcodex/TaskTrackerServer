import mongoose from "mongoose";

const taskSchema = {
  _id: Number,
  name: String,
  imgURL: String,
  progress: String,
  deadline: String,
};


const Task = mongoose.model("task", taskSchema);

export default Task;
