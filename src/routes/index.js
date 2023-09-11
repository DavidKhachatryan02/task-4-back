// const express = require("express");
// const authController = require("../controllers/auth.controller");
// const { LoginValidation } = require("../middlewares/LoginValidation");
// const { isUserAuthorized } = require("../middlewares/isUserAuthorized");
// const { RefreshValidation } = require("../middlewares/RefreshValidation");
// const { isUserExists } = require("../middlewares/isUserExists");
// const { isValidToken } = require("../middlewares/isValidToken");

// const authRouter = express.Router();

// authRouter.post("/login", LoginValidation, isUserExists, authController.login);

// authRouter.post(
//   "/refreshToken",
//   RefreshValidation,
//   isValidToken,
//   authController.refreshToken
// );

// authRouter.get("/getMe", isUserAuthorized, authController.getMe);

// module.exports = authRouter;
