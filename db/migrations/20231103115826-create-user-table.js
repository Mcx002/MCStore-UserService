'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const DataTypes = Sequelize.DataTypes
        await queryInterface.createTable("User", {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            xid: {
                type: DataTypes.STRING(6),
                allowNull: false,
                unique: true,
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
                allowNull: false
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
        queryInterface.dropTable("User")
    }
};
