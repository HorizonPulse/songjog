'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PHONE_NUMBER: {
        type: Sequelize.STRING
      },
      NAME: {
        type: Sequelize.STRING
      },
      EMAIL: {
        type: Sequelize.STRING
      },
      PHOTO: {
        type: Sequelize.STRING
      },
      LOCATION: {
        type: Sequelize.STRING
      },
      THANA_ID: {
        type: Sequelize.INTEGER
      },
      NID: {
        type: Sequelize.STRING
      },
      DATE_OF_BIRTH: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Users');
  }
};