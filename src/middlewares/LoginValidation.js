const Joi = require("joi");

const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().required(),
});

const LoginValidation = (req, res, next) => {
  try {
    const { error } = LoginSchema.validate(req.body);

    if (error) {
      res.status(401).send({ error: "Login Inputs Validation Error" });
      return;
    }
    next();
  } catch (e) {
    console.error(
      `[middleware]: Error on LoginValidation middleware error => ${e}`
    );
    next(e);
  }
};

module.exports = { LoginValidation };
