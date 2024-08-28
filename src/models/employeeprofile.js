'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeProfile.init({
    USER_ID: DataTypes.INTEGER,
    JOB_PREFER_LOCATION: DataTypes.STRING,
    JOB_INTEREST: DataTypes.TEXT,
    EDUCATION_DEGREE: DataTypes.STRING,
    EDUCATION_INSTITUTION: DataTypes.STRING,
    JOB_EXPERIENCE: DataTypes.TEXT,
    TOTAL_REVIEWS: DataTypes.INTEGER,
    AVERAGE_RATING: DataTypes.FLOAT,
    BIRTH_CERTIFICATE: DataTypes.STRING,
    CREATED_AT: DataTypes.DATE,
    UPDATED_AT: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'EmployeeProfile',
  });
  return EmployeeProfile;
};