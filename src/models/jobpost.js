'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobPost.init({
    EMPLOYER_ID: DataTypes.INTEGER,
    JOB_TITLE: DataTypes.STRING,
    JOB_CATEGORY: DataTypes.STRING,
    JOB_VACANCY: DataTypes.INTEGER,
    JOB_LOCATION: DataTypes.STRING,
    JOB_DESCRIPTION: DataTypes.TEXT,
    JOB_START_DATE: DataTypes.DATE,
    JOB_END_DATE: DataTypes.DATE,
    PROFILE_COMPLETENESS: DataTypes.INTEGER,
    MANDATORY_FIELDS_FILLED: DataTypes.BOOLEAN,
    CREATED_AT: DataTypes.DATE,
    UPDATED_AT: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'JobPost',
  });
  return JobPost;
};