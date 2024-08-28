'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    PHONE_NUMBER: DataTypes.STRING,
    NAME: DataTypes.STRING,
    EMAIL: DataTypes.STRING,
    PHOTO: DataTypes.STRING,
    LOCATION: DataTypes.STRING,
    THANA_ID: DataTypes.INTEGER,
    NID: DataTypes.STRING,
    DATE_OF_BIRTH: DataTypes.DATE,
    CREATED_AT: DataTypes.DATE,
    UPDATED_AT: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};