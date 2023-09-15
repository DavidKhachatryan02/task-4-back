// const { JWT_EXPIRE_TIME, BCRYPT_SALT_ROUNDS } = require("../constants/config");
// const ROLES = require("../constants/roles");
// const { compare, hash } = require("bcrypt");
// const {
//   generateToken,
//   generateRefreshToken,
//   verifyAuthToken,
// } = require("../utils");
// const {
//   InvalidCredentialsError,
//   UnAuthorizedError,
//   NoSuchRole,
// } = require("../errors/auth");
// const User = require("../../models/user");
// const Role = require("../../models/role");
// const UserOnRole = require("../../models/userOnRoles");

const addProduct = async (req, res, next) => {
  try {
    next(null);
  } catch (e) {
    next(e);
  }
};

const addToCard = async (req, res, next) => {
  try {
    next(null);
  } catch (e) {
    next(e);
  }
};

const removeProduct = async (req, res, next) => {
  try {
    next(null);
  } catch (e) {
    next(e);
  }
};

const addImg = async (req, res, next) => {
  try {
    next(null);
  } catch (e) {
    next(e);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    next(null);
  } catch (e) {
    next(e);
  }
};

const getProductInfo = async (req, res, next) => {
  try {
    next(null);
  } catch (e) {
    next(e);
  }
};

const getUserCard = async (req, res, next) => {
  try {
    next(null);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  addProduct,
  addToCard,
  removeProduct,
  addImg,
  getAllProducts,
  getProductInfo,
  getUserCard,
};
