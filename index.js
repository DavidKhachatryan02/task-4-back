const express = require("express");


const APP_PORT = 3000
const app = express();

const main = async () => {
  try {
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