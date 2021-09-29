'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Interview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Interview.belongsTo(models.Message)
    }
  }
  Interview.init(
    {
      interviewAt: DataTypes.DATE,
      address: DataTypes.STRING,
      tip: DataTypes.TEXT,
      messageId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Interview'
    }
  )
  return Interview
}
