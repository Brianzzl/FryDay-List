const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, require: true },
  dueDate: { type: Date },
  category: { type: String, require: true },
  status: { type: String, default: "inprogress" },
  comments: { type: String },
  weather: { type: String, require: true }
});

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
