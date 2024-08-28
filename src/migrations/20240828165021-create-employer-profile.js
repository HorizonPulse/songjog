'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EmployerProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USER_ID: {
        type: Sequelize.INTEGER
      },
      BUSINESS_NAME: {
        type: Sequelize.STRING
      },
      BUSINESS_LOCATION: {
        type: Sequelize.STRING
      },
      CONTACT_POINT_NAME: {
        type: Sequelize.STRING
      },
      CONTACT_POINT_PHONE: {
        type: Sequelize.STRING
      },
      BIN_NUMBER: {
        type: Sequelize.STRING
      },
      BUSINESS_CATEGORY: {
        type: Sequelize.STRING
      },
      BUSINESS_LOGO: {
        type: Sequelize.STRING
      },
      VERIFIED_BUSINESS: {
        type: Sequelize.BOOLEAN
      },
      TOTAL_REVIEWS: {
        type: Sequelize.INTEGER
      },
      AVERAGE_RATING: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('EmployerProfiles');
  }
};