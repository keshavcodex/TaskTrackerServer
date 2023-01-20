const router = require("express").Router();
const {
  getTasks,
  addTask,
  getTaskById,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

//Get all Task
router.route("/").get(getTasks);

//Add a new task
router.route("/add").post(addTask);

//Get a particular task by id and delete by particular id
router.route("/:id").get(getTaskById).delete(deleteTask);

//Update a particular task by id
router.route("/update/:id").post(updateTask);

module.exports = router;
