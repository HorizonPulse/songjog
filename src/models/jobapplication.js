'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobApplication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobApplication.init({
    JOB_POST_ID: DataTypes.INTEGER,
    EMPLOYEE_ID: DataTypes.INTEGER,
    APPLICATION_STATUS: DataTypes.STRING,
    CREATED_AT: DataTypes.DATE,
    UPDATED_AT: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'JobApplication',
  });
  return JobApplication;
};