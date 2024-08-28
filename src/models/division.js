'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Division extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Division.init({
    NAME: DataTypes.STRING,
    CREATED_AT: DataTypes.DATE,
    UPDATED_AT: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Division',
  });
  return Division;
};