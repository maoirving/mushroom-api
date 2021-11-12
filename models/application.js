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
      models.Application.belongsTo(models.User, { foreignKey: 'userId' })
      models.Application.belongsTo(models.Job, { foreignKey: 'jobId' })
      models.Application.belongsTo(models.ResumeFile, {
        foreignKey: 'resumeId'
      })
      models.Application.hasOne(models.Interview, {
        foreignKey: 'applicationId'
      })
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
