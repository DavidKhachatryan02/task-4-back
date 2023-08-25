const { verifyAuthToken } = require("../utils");

const isUserAuthorized = async (req, res, next) => {
  try {
    const headersAuth = req.headers.authorization;
    if (!headersAuth) {
      res.status(404).send({error:"header not exists"});
    }
    const accessToken = headersAuth.replace("Bearer ", "");

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
