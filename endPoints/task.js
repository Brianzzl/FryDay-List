const router = require("express").Router();
let Task = require("../models/task.model");

router.route("/add").post((req, res) => {
  const taskName = req.body.taskname;
  const dueDate = req.body.dueDate;
  const category = req.body.category;
  const status = req.body.status;
  const comment = req.body.comment;
  const weather = req.body.weather;

  // const newTask = new Task({
  //   taskName
  // });

  const newTask = new Task({
    taskName,
    dueDate,
    category,
    status,
    comment,
    weather
  });
  console.log(newTask);
  newTask
    .save()
    .then(() => res.json("Task added!"))
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;
