// const prisma = require("../services/prisma");
// const { JWT_EXPIRE_TIME } = require("../constants/config");
// const { generateToken } = require("../utils");
// const { InvalidCredentialsError } = require("../errors/auth");

// const getMe = async (req, res, next) => {
//   try {
//     const { id } = req.user;

//     const userWithTokens = await prisma.user.findUnique({
//       where: {
//         id,
//       },
//     });

//     const { refreshToken, accessToken, ...user } = userWithTokens;

//     res.status(200).json(user);

//     next(null);
//   } catch (e) {
//     next(e);
//   }
// };

// const login = async (req, res, next) => {
//   try {
//     const { id, email, code, refreshToken } = req.user;

//     const userInputCode = req.body.code;

//     if (code !== userInputCode) {
//       return next(new InvalidCredentialsError());
//     }

//     const accessToken = generateToken(id);

//     await prisma.user.update({
//       where: { email },
//       data: { accessToken },
//     });

//     res
//       .status(200)
//       .json({ jwt: { refreshToken, accessToken }, JWT_EXPIRE_TIME });

//     next(null);
//   } catch (e) {
//     console.error(`login error ${e}`);
//     next(e);
//   }
// };

// const refreshToken = async (req, res, next) => {
//   try {
//     const { id, refreshToken } = req.user;

//     const newAccessToken = generateToken(id);

//     await prisma.user.update({
//       where: { id },
//       data: { accessToken: newAccessToken },
//     });

//     res.status(200).json({ refreshToken, accessToken: newAccessToken });

//     next(null);
//   } catch (e) {
//     console.error(`Registration error ${e}`);
//     next(e);
//   }
// };

// module.exports = {
//   getMe,
//   login,
//   refreshToken,
// };
