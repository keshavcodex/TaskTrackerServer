const express = require("express");
const colors = require("colors");
const body_parse = require("body-parser");
const cors = require("cors");
const { database_uri, port } = require("./config/config");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const server_port = port || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(body_parse.json());
app.use(express.urlencoded({ extended: false }));

const tasksRouter = require("./routes/tasks");

//Basic route path
app.use("/tasks", tasksRouter);

//To use the manual written error handler in middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${server_port}`);
});

//To run the server with nodemon write :- npm run server
