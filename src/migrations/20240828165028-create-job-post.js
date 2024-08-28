'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JobPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EMPLOYER_ID: {
        type: Sequelize.INTEGER
      },
      JOB_TITLE: {
        type: Sequelize.STRING
      },
      JOB_CATEGORY: {
        type: Sequelize.STRING
      },
      JOB_VACANCY: {
        type: Sequelize.INTEGER
      },
      JOB_LOCATION: {
        type: Sequelize.STRING
      },
      JOB_DESCRIPTION: {
        type: Sequelize.TEXT
      },
      JOB_START_DATE: {
        type: Sequelize.DATE
      },
      JOB_END_DATE: {
        type: Sequelize.DATE
      },
      PROFILE_COMPLETENESS: {
        type: Sequelize.INTEGER
      },
      MANDATORY_FIELDS_FILLED: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('JobPosts');
  }
};