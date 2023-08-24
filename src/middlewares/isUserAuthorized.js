const { verifyAuthToken } = require("../utils");

const isUserAuthorized = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "");

    if (!accessToken) {
      res.status(401).send({ error: "User not authorised" });
    }

    if (!verifyAuthToken(accessToken)) {
      res.status(401).send({ error: "Something is wrong with Token" });
    }

    req.user = verifyAuthToken(accessToken);
    next();
  } catch (e) {
    console.error(
      `[middleware]: Error on isUserAuthorized middleware error => ${e}`
    );
    next(e);
  }
};

module.exports = {
  isUserAuthorized,
};
