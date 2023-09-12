const { JWT_EXPIRE_TIME, BCRYPT_SALT_ROUNDS } = require("../constants/config");
const { compare, hash } = require("bcrypt");
const { generateToken, generateRefreshToken } = require("../utils");
const { InvalidCredentialsError } = require("../errors/auth");
const User = require("../../models/user");

const register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await hash(password, BCRYPT_SALT_ROUNDS);
    const refreshToken = generateRefreshToken();
    const accessToken = generateToken(email);
    //!  ROle??

    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      refreshToken,
      accessToken,
    });
    console.log(user);
    res.status(200).json(user);
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

    const [rowCount, [updatedUser]] = await User.update(
      { accessToken },
      { where: { email }, returning: true }
    );

    res.status(200).json(updatedUser);

    next(null);
  } catch (e) {
    console.error(`login error ${e}`);
    next(e);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const { id, refreshToken } = req.user;

    const newAccessToken = generateToken(id);

    await prisma.user.update({
      where: { id },
      data: { accessToken: newAccessToken },
    });

    res.status(200).json({ refreshToken, accessToken: newAccessToken });

    next(null);
  } catch (e) {
    console.error(`Registration error ${e}`);
    next(e);
  }
};

const logout = async (req, res, next) => {
  try {
    next(null);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login,
  refreshToken,
  register,
  logout,
};
