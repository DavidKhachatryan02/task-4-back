const Joi = require("joi");

const refreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
  accessToken: Joi.string().required(),
});

const RefreshValidation = (req, res, next) => {
  try {
    const { error } = refreshSchema.validate(req.body);

    if (error) {
      res.status(401).send({ error: "Refresh Token Validation Error" });
      return;
    }
    next();
  } catch (e) {
    console.error(
      `[middleware]: Error on RefreshValidation middleware error => ${e}`
    );
    next(e);
  }
};

module.exports = { RefreshValidation };
