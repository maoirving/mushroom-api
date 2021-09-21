'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Company.hasMany(models.Job)
    }
  }
  Company.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      address: DataTypes.STRING,
      financingStage: DataTypes.STRING,
      introduction: DataTypes.TEXT,
      scale: DataTypes.STRING,
      financingStage: DataTypes.STRING,
      legalRepresentative: DataTypes.STRING,
      registeredCapital: DataTypes.STRING,
      registeredAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Company'
    }
  )
  return Company
}
