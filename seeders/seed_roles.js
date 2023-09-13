module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Role", [
      { name: "Admin" },
      { name: "Customer" },
      { name: "User" },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Role", null, {});
  },
};
