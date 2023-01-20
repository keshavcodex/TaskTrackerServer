const Task = require("../models/task.model");

// @description     Get Tasks
// @route           GET /tasks
// @access          Public
const getTasks = (req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
};

// @description     Add Task
// @route           POST /tasks/add
// @access          Public
const addTask = (req, res) => {
  const title = req.body.title;
  const imageLink = req.body.imageLink;
  const currentProgress = Number(req.body.currentProgress);
  const totalRequiredWork = Number(req.body.totalRequiredWork);
  const deadline = Date.parse(req.body.deadline);

  const newTask = new Task({
    title,
    imageLink,
    currentProgress,
    totalRequiredWork,
    deadline,
  });

  newTask
    .save()
    .then(() => res.json("Task Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// @description     Get Task By Id
// @route           GET /tasks/:id
// @access          Public
const getTaskById = (req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error: " + err));
};

// @description     Delete Task By Id
// @route           DELETE /tasks/:id
// @access          Public
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }
  await task.remove();
  res.status(200).json({ id: req.params.id });
};

// @description     Update Task By Id
// @route           POST /tasks/update/:id
// @access          Public
const updateTask = (req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      task.title = req.body.title;
      task.imageLink = req.body.imageLink;
      task.currentProgress = Number(req.body.currentProgress);
      task.totalRequiredWork = Number(req.body.totalRequiredWork);
      task.deadline = Date.parse(req.body.deadline);

      task
        .save()
        .then(() => res.json("Task Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {
  getTasks,
  addTask,
  getTaskById,
  deleteTask,
  updateTask,
};
