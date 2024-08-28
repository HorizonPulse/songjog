'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Thanas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NAME: {
        type: Sequelize.STRING
      },
      DISTRICT_ID: {
        type: Sequelize.INTEGER
      },
      DIVISION_ID: {
        type: Sequelize.INTEGER
      },
      CREATED_AT: {
        type: Sequelize.DATE
      },
      UPDATED_AT: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Thanas');
  }
};