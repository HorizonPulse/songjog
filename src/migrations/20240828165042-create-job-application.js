'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JobApplications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      JOB_POST_ID: {
        type: Sequelize.INTEGER
      },
      EMPLOYEE_ID: {
        type: Sequelize.INTEGER
      },
      APPLICATION_STATUS: {
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
    await queryInterface.dropTable('JobApplications');
  }
};