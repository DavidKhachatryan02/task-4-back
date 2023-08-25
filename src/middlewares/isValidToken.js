const { TokenExpiredError } = require("jsonwebtoken");
const prisma = require("../services/prisma");
const { verifyAuthToken } = require("../utils");

const isValidToken = async (req, res, next) => {
  try {
    const { refreshToken, accessToken } = req.body;

    const user = await prisma.user.findUnique({ where: { refreshToken } });

    console.log(user);

    if (accessToken !== user.accessToken) {
      res.status(400).send({ error: "Wrong AccessToken" });
      return;
    }

    if (refreshToken !== user.refreshToken) {
      res.status(400).send({ error: "Wrong refreshToken" });
      return;
    }

    req.user = user;

    next();
  } catch (e) {
    console.error(
      `[middleware]: Error on isValidToken middleware error => ${e}`
    );
    next(e);
  }
};

module.exports = {
  isValidToken,
};
