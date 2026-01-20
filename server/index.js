const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const taskRoutes = require("../routes/taskRoutes");

app.use("/tasks", taskRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on http://localhost:" + process.env.PORT);
});
