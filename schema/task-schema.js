import mongoose from "mongoose";

import autoIncrement from "mongoose-auto-increment";

const taskSchema = mongoose.Schema({
  name: String,
  imgURL: String,
  progress: String,
  deadline: String,
});

autoIncrement.initialize(mongoose.connection);
taskSchema.plugin(autoIncrement.plugin, "task");

const task = mongoose.model("task", taskSchema);

export default task;
