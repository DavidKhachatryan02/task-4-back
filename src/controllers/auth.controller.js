const { JWT_EXPIRE_TIME, BCRYPT_SALT_ROUNDS } = require("../constants/config");
const { compare, hash } = require("bcrypt");
const {
  generateToken,
  generateRefreshToken,
  verifyAuthToken,
} = require("../utils");
const {
  InvalidCredentialsError,
  UnAuthorizedError,
} = require("../errors/auth");
const User = require("../../models/user");

//! NEED TO ADD ROlES??

const getMe = async (req, res, next) => {
  try {
    const email = req.user.data;

    const userWithTokens = await User.findOne({ where: { email } });
    if (!userWithTokens.dataValues.accessToken) {
      return next(new UnAuthorizedError());
    }
    const { refreshToken, accessToken, ...user } = userWithTokens.dataValues;

    res.status(200).json(user);

    next(null);
  } catch (e) {
    next(e);
  }
};

const register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await hash(password, BCRYPT_SALT_ROUNDS);
    const refreshToken = generateRefreshToken();
    const accessToken = generateToken(email);

    await User.create({
      email,
      password: hashedPassword,
      name,
      refreshToken,
      accessToken,
    });
    res
      .status(200)
      .json({ refreshToken, accessToken, ExpiteTime: JWT_EXPIRE_TIME });
    next(null);
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.user;

    const userPassword = req.body.password;

    if (await compare(password, userPassword)) {
      return next(new InvalidCredentialsError());
    }

    const accessToken = generateToken(email);

    await User.update({ accessToken }, { where: { email } });

    res.status(200).json({
      accessToken,
      refreshToken: req.user.refreshToken,
      ExpiteTime: JWT_EXPIRE_TIME,
    });

    next(null);
  } catch (e) {
    console.error(`login error ${e}`);
    next(e);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const { email, refreshToken } = req.user.dataValues;

    const newAccessToken = generateToken(email);

    await User.update({ accessToken: newAccessToken }, { where: { email } });

    res.status(200).json({
      refreshToken,
      accessToken: newAccessToken,
      ExpiteTime: JWT_EXPIRE_TIME,
    });

    next(null);
  } catch (e) {
    console.error(`Registration error ${e}`);
    next(e);
  }
};

const logout = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "");
    const email = verifyAuthToken(accessToken).data;
    await User.update({ accessToken: null }, { where: { email } });
    res.status(200).end();
    next(null);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getMe,
  login,
  refreshToken,
  register,
  logout,
};
