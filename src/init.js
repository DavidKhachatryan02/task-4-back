const sequelize = require("./services/sequelize");
const User = require("../models/user");
const Role = require("../models/role");
const UserOnRole = require("../models/userOnRoles");

const initDB = async () => {
  await User.belongsToMany(Role, {
    through: UserOnRole,
    foreignKey: "userId",
  });

  await Role.belongsToMany(User, {
    through: UserOnRole,
    foreignKey: "roleId",
  });
  try {
    await sequelize.sync();
    await User.sync();
    await Role.sync();
    await UserOnRole.sync();
    console.log("Connection has been established successfully.");
  } catch (e) {
    await sequelize.close();
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = initDB;
