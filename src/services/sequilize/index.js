const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  host: process.env.DATABASE_URL,
  dialect: "postgres",
});

module.exports = sequelize;
