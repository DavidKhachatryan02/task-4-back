const jwt = require("jsonwebtoken");
const { JWT_EXPIRE_TIME, JWT_SECRET_KEY } = require("../constants/config");

const generateToken = async (id) => {
  const token = await jwt.sign({ id }, JWT_SECRET_KEY, {
    // expiresIn: JWT_EXPIRE_TIME,
  });

  return token;
};

const verifyAuthToken = (accessToken) => {
  return jwt.verify(accessToken, JWT_SECRET_KEY);
};

module.exports = { generateToken, verifyAuthToken };
