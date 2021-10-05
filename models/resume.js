'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Resume extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Resume.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Resume.init(
    {
      userId: DataTypes.INTEGER,
      anticipantJob: DataTypes.STRING,
      anticipantCity: DataTypes.STRING,
      anticipantSalary: DataTypes.STRING,
      currentAddress: DataTypes.STRING,
      educationBackground: DataTypes.STRING,
      school: DataTypes.STRING,
      schoolPeriod: DataTypes.STRING,
      specializedSubject: DataTypes.STRING,
      workCompany: DataTypes.STRING,
      workPeriod: DataTypes.STRING,
      workContent: DataTypes.TEXT,
      certificates: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Resume'
    }
  )
  return Resume
}
