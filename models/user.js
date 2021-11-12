'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Application, { foreignKey: 'userId' })
      models.User.hasMany(models.ResumeFile, { foreignKey: 'userId' })
      models.User.hasOne(models.Resume, { foreignKey: 'userId' })
      models.User.belongsTo(models.Company, { foreignKey: 'companyId' })
      models.User.hasMany(models.Interview, {
        foreignKey: 'recruiterId',
        targetKey: 'id',
        as: 'Recruiter'
      })
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      realName: DataTypes.STRING,
      type: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      sex: DataTypes.STRING,
      birthday: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      companyId: DataTypes.INTEGER,
      password: DataTypes.STRING,
      solt: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}
