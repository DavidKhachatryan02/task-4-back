class UserNotExists extends Error {
  constructor(email) {
    super(`User with ${email} not found`);
  }
}

class UserExists extends Error {
  constructor(email) {
    super(`User with ${email} already exists`);
  }
}

class InvalidCredentialsError extends Error {
  constructor() {
    super("Invalid Code");
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
  UserExists,
  InvalidRefreshToken,
  UnAuthorizedError,
  InvalidCredentialsError,
  UserNotExists,
};
