const express = require("express");
const authController = require("../controllers/auth.controller");
const { LoginValidation } = require("../middlewares/LoginValidation");
const { isUserAuthorized } = require("../middlewares/isUserAuthorized");
const { RefreshValidation } = require("../middlewares/RefreshValidation");
const { isUserExists } = require("../middlewares/isUserExists");
const { isValidToken } = require("../middlewares/isValidToken");
const { isUserRegistered } = require("../middlewares/isUserRegistered");
const { RegisterValidation } = require("../middlewares/RegisterValidation");

const authRouter = express.Router();

authRouter.post(
  "/register",
  RegisterValidation,
  isUserRegistered,
  authController.register
);

authRouter.post("/login", LoginValidation, isUserExists, authController.login);

authRouter.post(
  "/refreshToken",
  RefreshValidation,
  isValidToken,
  authController.refreshToken
);

authRouter.get("/getMe", isUserAuthorized, authController.getMe);

authRouter.post("/logout", authController.logout);

module.exports = authRouter;
