class UserAlreadyExistsError extends Error {
  constructor(email) {
    super(`Email ${email} is taken.`);
  }
}

class UserNotExists extends Error {
  constructor(email) {
    super(`User with ${email} not found`);
  }
}

class InvalidCredentialsError extends Error {
  constructor() {
    super("Invalid login or password.");
  }
}

class UnAuthorizedError extends Error {
  constructor() {
    super("No auth token provided");
  }
}
class InvalidRefreshToken extends Error {
  constructor() {
    super("Refresh token is invalid");
  }
}

module.exports = {
  InvalidRefreshToken,
  UnAuthorizedError,
  InvalidCredentialsError,
  UserNotExists,
  UserAlreadyExistsError,
};
