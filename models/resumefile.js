'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ResumeFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ResumeFile.belongsTo(models.User, { foreignKey: 'userId' })
      models.ResumeFile.hasMany(models.Application, { foreignKey: 'resumeId' })
    }
  }
  ResumeFile.init(
    {
      name: DataTypes.STRING,
      url: DataTypes.TEXT,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'ResumeFile',
      tableName: 'Resume_Files'
    }
  )
  return ResumeFile
}
