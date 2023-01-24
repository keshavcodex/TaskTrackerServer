import express from "express";
import {addTask, getTasks, getTask, editTask, deleteTask } from '../controller/task-controller.js';

const router = express.Router()

router.get('/', getTasks);
router.post('/add', addTask);
router.get('/:id', getTask);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);

export default router;