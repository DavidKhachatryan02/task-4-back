const { DataTypes } = require("sequelize");
const sequelize = require("../src/services/sequelize");

const UserOnRole = sequelize.define(
  "user_on_Roles",
  {
    userRoleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  { timestamps: false }
);

module.exports = UserOnRole;
