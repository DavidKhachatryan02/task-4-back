const { UserNotExists } = require("../errors/auth");
const prisma = require("../services/prisma");

const isUserExists = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return next(new UserNotExists());
    }

    req.user = user;

    next();
  } catch (e) {
    console.error(
      `[middleware]: Error on isUserExists middleware error => ${e}`
    );
    next(e);
  }
};

module.exports = {
  isUserExists,
};
