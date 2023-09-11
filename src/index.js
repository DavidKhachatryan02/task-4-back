const sequelize = require("./services/sequelize");
const express = require("express");
// const authRouter = require("./routes");
const cors = require("cors");
// const { errorHandler } = require("./errors");

const app = express();
const APP_PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use("/auth", authRouter);
// app.use(errorHandler);

const main = async () => {
  try {
    await sequelize.sync();
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
