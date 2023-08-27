const { InvalidRefreshToken } = require("../errors/auth");

const isValidToken = async (req, res, next) => {
  try {
    const { refreshToken, accessToken } = req.body;

    const user = req.user;

    if (accessToken !== user.accessToken) {
      return next(new Error("Invalid access token"));
    }

    if (refreshToken !== user.refreshToken) {
      return next(new InvalidRefreshToken());
    }

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
