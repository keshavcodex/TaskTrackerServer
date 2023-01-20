const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: { type: String, required: true },
    imageLink: { type: String, required: true },
    currentProgress: { type: Number, required: true },
    totalRequiredWork: { type: Number, required: true },
    deadline: { type: Date, required: true },
}, {
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;