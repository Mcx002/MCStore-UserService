'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const DataTypes = Sequelize.DataTypes
    await queryInterface.addColumn("User", "photoProfile", {
      type: DataTypes.STRING(36),
      allowNull: true,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("User", "photoProfile")
  }
};
