const { UserExists } = require("../errors/auth");
const User = require("../../models/user");

const isUserRegistered = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) {
      return next(new UserExists(email));
    }

    next();
  } catch (e) {
    console.error(
      `[middleware]: Error on isUserRegistered middleware error => ${e}`
    );
    next(e);
  }
};

module.exports = {
  isUserRegistered,
};
