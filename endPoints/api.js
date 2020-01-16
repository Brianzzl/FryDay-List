const taskControl = require("../controllers/taskControl");
const router = require("express").Router();

router.route("/").get(taskControl.findAll);

router.route("/add").post(taskControl.create);

router.route("/update").put(taskControl.update);

router.route("/delete").delete(taskControl.delete);

module.exports = router;
