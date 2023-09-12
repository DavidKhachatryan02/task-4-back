const { DataTypes } = require("sequelize");
const sequelize = require("../src/services/sequelize");
const User = require("./user");
const Role = require("./role");

const UserOnRoles = sequelize.define("user_on_Roles", {
  userRoleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
const syncTables = async () => {
  await User.sync({ force: true });
  await Role.sync({ force: true });

  await User.belongsToMany(Role, {
    through: UserOnRoles,
    foreignKey: "userId",
  });

  await Role.belongsToMany(User, {
    through: UserOnRoles,
    foreignKey: "roleId",
  });
};

syncTables();
module.exports = UserOnRoles;
