const Joi = require("joi");
const { InvalidBody } = require("../../errors/validation");

const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const LoginValidation = (req, res, next) => {
  try {
    const { error } = LoginSchema.validate(req.body);

    if (error) {
      return next(new InvalidBody(error));
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
