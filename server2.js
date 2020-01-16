const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3001;
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up Heroku
if (process.env.NODE_ENV === "priducton") {
  app.use(express.static("client/build"));
}

//connect to MongoDB

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connection success .....");
  })
  .catch(err => console.error(err));

const taskRouter = require("./endPoints/task");

app.use("/tasks", taskRouter);

//start the Api server

app.listen(PORT, () => {
  console.log("Listing......" + PORT);
});
