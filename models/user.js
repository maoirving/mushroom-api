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
      models.User.hasMany(models.Message, {
        foreignKey: 'senderId',
        targetKey: 'id',
        as: 'Sender'
      })
      models.User.hasMany(models.Message, {
        foreignKey: 'receiverId',
        targetKey: 'id',
        as: 'Receiver'
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
