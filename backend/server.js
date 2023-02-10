const express = require("express");
const students = require("./data/students");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.get("/api/students/:id", (req, res) => {
  const student = students.find((n) => n._id === req.params.id);
  res.send(student);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started at PORT ${5000}`));
