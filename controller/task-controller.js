import Task from "../schema/task-schema.js";

function generateRandom() {
  var second = new Date().toLocaleTimeString("en-UK", { second: "numeric" });
  console.log(second);
  let random = Math.random();
  random = Math.floor(random * 100000);
  if (second === 0) {
    second = 61;
  }
  return random * second;
}

export const addTask = async (req, res) => {
  const task = req.body;
  task._id = generateRandom();
  task.lastUpdate = new Date();
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
    const Tasks = await Task.find({}).sort({lastUpdate: -1});
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
  task.lastUpdate = new Date();
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
