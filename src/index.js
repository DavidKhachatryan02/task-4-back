const initDB = require("./init");
const app = require("./app");

const APP_PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    await initDB();
    app.listen(APP_PORT, () => {
      console.log(
        `[server]: Server is running at http://localhost:${APP_PORT}`
      );
    });
  } catch (e) {
    console.error(`[server]: Error on initializing server => ${e}`);
  }
};

main().then();
