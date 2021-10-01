'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Job.belongsTo(models.Company, { foreignKey: 'companyId' })
      models.Job.hasMany(models.Application, { foreignKey: 'jobId' })
    }
  }
  Job.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      recruitingNnumbers: DataTypes.INTEGER,
      salary: DataTypes.STRING,
      workLocation: DataTypes.STRING,
      workExperience: DataTypes.STRING,
      educationBackground: DataTypes.STRING,
      description: DataTypes.TEXT,
      skill: DataTypes.TEXT,
      companyId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Job'
    }
  )
  return Job
}
