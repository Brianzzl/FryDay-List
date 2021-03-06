const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, require: true },
  dueDate: { type: Date },
  category: { type: String, require: true },
  status: { type: String, default: "Inprogress" },
  comment: { type: String },
  weather: { type: String, require: true }
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
