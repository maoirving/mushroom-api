'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Application.belongsTo(models.User)
      models.Application.belongsTo(models.Job)
    }
  }
  Application.init(
    {
      userId: DataTypes.INTEGER,
      jobId: DataTypes.INTEGER,
      resumeId: DataTypes.INTEGER,
      readAt: DataTypes.DATE,
      handledStatus: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Application'
    }
  )
  return Application
}
