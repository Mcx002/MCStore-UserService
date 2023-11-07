'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const DataTypes = Sequelize.DataTypes

    await queryInterface.dropTable("User")
    await queryInterface.createTable("User", {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      firstName: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: false
      },
      gender: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      version: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    })
  },

  async down(queryInterface, _) {
    await queryInterface.dropTable("User")
  }
};
