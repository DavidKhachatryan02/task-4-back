const express = require("express");
const authController = require("../controllers/auth.controller");
const { LoginValidation } = require("../middlewares/auth/LoginValidation");
const { isUserAuthorized } = require("../middlewares/auth/isUserAuthorized");
const { RefreshValidation } = require("../middlewares/auth/RefreshValidation");
const { isUserExists } = require("../middlewares/auth/isUserExists");
const { isValidToken } = require("../middlewares/auth/isValidToken");
const { isUserRegistered } = require("../middlewares/auth/isUserRegistered");
const { addRoleValidation } = require("../middlewares/auth/addRoleValidation");
const {
  RegisterValidation,
} = require("../middlewares/auth/RegisterValidation");

const authRouter = express.Router();

authRouter.get("/getMe", isUserAuthorized, authController.getMe);

authRouter.post("/login", LoginValidation, isUserExists, authController.login);

authRouter.post(
  "/register",
  RegisterValidation,
  isUserRegistered,
  authController.register
);

authRouter.post(
  "/refreshToken",
  RefreshValidation,
  isValidToken,
  authController.refreshToken
);

authRouter.post("/logout", authController.logout);

authRouter.post(
  "/addRole",
  addRoleValidation,
  isUserAuthorized,
  authController.addRole
);

module.exports = authRouter;
