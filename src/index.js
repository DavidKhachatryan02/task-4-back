const sequelize = require("./services/sequilize");
const express = require("express");
const authRouter = require("./routes");
const cors = require("cors");
// const { errorHandler } = require("./errors");

const app = express();
const APP_PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use("/auth", authRouter);
// app.use(errorHandler);

const main = async () => {
  // try {
  //   await prisma.$connect();
  //   app.listen(APP_PORT, () => {
  //     console.log(
  //       `[server]: Server is running at http://localhost:${APP_PORT}`
  //     );
  //   });
  // } catch (e) {
  //   console.error(`[server]: Error on initializing server => ${e}`);
  // }
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main().then();
