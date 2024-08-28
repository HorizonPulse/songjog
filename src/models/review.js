'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    REVIEWER_ID: DataTypes.INTEGER,
    REVIEWEE_ID: DataTypes.INTEGER,
    RATING: DataTypes.INTEGER,
    REVIEW_TEXT: DataTypes.TEXT,
    CREATED_AT: DataTypes.DATE,
    UPDATED_AT: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};