const jwt = require("jsonwebtoken");
const { JWT_EXPIRE_TIME, JWT_SECRET_KEY } = require("../constants/config");

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRE_TIME });
};

const verifyAuthToken = (accessToken) => {
  try {
    return jwt.verify(accessToken, JWT_SECRET_KEY);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { generateToken, verifyAuthToken };
