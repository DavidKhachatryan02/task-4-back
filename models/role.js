const { DataTypes } = require("sequelize");
const sequelize = require("../src/services/sequelize");

const Role = sequelize.define(
  "Role",
  {
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { timestamps: false }
);
module.exports = Role;
