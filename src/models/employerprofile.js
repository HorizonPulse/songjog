'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployerProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployerProfile.init({
    USER_ID: DataTypes.INTEGER,
    BUSINESS_NAME: DataTypes.STRING,
    BUSINESS_LOCATION: DataTypes.STRING,
    CONTACT_POINT_NAME: DataTypes.STRING,
    CONTACT_POINT_PHONE: DataTypes.STRING,
    BIN_NUMBER: DataTypes.STRING,
    BUSINESS_CATEGORY: DataTypes.STRING,
    BUSINESS_LOGO: DataTypes.STRING,
    VERIFIED_BUSINESS: DataTypes.BOOLEAN,
    TOTAL_REVIEWS: DataTypes.INTEGER,
    AVERAGE_RATING: DataTypes.FLOAT,
    CREATED_AT: DataTypes.DATE,
    UPDATED_AT: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'EmployerProfile',
  });
  return EmployerProfile;
};