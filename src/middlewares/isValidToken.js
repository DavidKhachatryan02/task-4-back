const prisma = require("../services/prisma");
const { verifyAuthToken } = require("../utils");

const isValidToken = async (req, res, next) => {
  try {
    const { refreshToken, accessToken } = req.body;

    if (!verifyAuthToken(accessToken)) {
      res.status(400).send({ error: "Something wrong with AccessToken" });
    }

    const { id } = verifyAuthToken(accessToken);

    const user = await prisma.user.findUnique({ where: { id } });

    if (accessToken !== user.accessToken) {
      res.status(400).send({ error: "Wrong AccessToken" });
    }

    if (refreshToken !== user.refreshToken) {
      res.status(400).send({ error: "Wrong refreshToken" });
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
