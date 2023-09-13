const sequelize = require("./services/sequelize");
const express = require("express");
const authRouter = require("./routes");
const cors = require("cors");
const { errorHandler } = require("./errors");
const User = require("../models/user");
const Role = require("../models/role");
const UserOnRole = require("../models/userOnRoles");

const app = express();
const APP_PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use(errorHandler);

const main = async () => {
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
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(APP_PORT, () => {
      console.log(
        `[server]: Server is running at http://localhost:${APP_PORT}`
      );
    });
  } catch (e) {
    await sequelize.close();
    console.error("Unable to connect to the database:", error);
    console.error(`[server]: Error on initializing server => ${e}`);
  }
};

main().then();
