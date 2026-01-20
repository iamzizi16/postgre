const { DataTypes } = require("sequelize");
const sequelize = require("../server/db");

const Task = sequelize.define("Task", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.STRING,
  completed: { type: DataTypes.BOOLEAN, defaultValue: false }
});

module.exports = Task;
