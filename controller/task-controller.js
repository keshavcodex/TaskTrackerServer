import Task from "../schema/task-schema.js";

export const addTask = async (req, res) => {
  const task = req.body;
  const newTask = new Task(task);

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getTasks = async (request, response) => {
  try {
    const Tasks = await Task.find({});
    response.status(200).json(Tasks);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getTask = async (request, response) => {
  try {
    const task = await Task.find({ _id: request.params.id });
    response.status(200).json(task);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editTask = async (request, response) => {
  let task = request.body;
  const editTask = new Task(task);

  try {
    const task = await Task.updateOne({ _id: request.params.id }, editTask);
    response.status(201).json(editTask);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteTask = async (request, response) => {
  try {
    await Task.deleteOne({ _id: request.params.id });
    response.status(201).json(deleteTask);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
