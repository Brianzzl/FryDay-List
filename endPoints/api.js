const taskControl = require("../controllers/taskControl");
const router = require("express").Router();

router.route("/").get(taskControl.findAll);

router.route("/add").post(taskControl.create);

router.route("/update/:id").put(taskControl.update);

router.route("/delete/:id").delete(taskControl.delete);

module.exports = router;
