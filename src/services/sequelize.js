const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres:example@localhost:5432",
  {
    dialect: "postgres",
  }
);

module.exports = sequelize;
