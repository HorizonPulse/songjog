'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EmployeeProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USER_ID: {
        type: Sequelize.INTEGER
      },
      JOB_PREFER_LOCATION: {
        type: Sequelize.STRING
      },
      JOB_INTEREST: {
        type: Sequelize.TEXT
      },
      EDUCATION_DEGREE: {
        type: Sequelize.STRING
      },
      EDUCATION_INSTITUTION: {
        type: Sequelize.STRING
      },
      JOB_EXPERIENCE: {
        type: Sequelize.TEXT
      },
      TOTAL_REVIEWS: {
        type: Sequelize.INTEGER
      },
      AVERAGE_RATING: {
        type: Sequelize.FLOAT
      },
      BIRTH_CERTIFICATE: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('EmployeeProfiles');
  }
};