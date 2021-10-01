'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Message.belongsTo(models.Application, { foreignKey: 'applicationId' })
    }
  }
  Message.init(
    {
      content: DataTypes.TEXT,
      applicationId: DataTypes.INTEGER,
      senderId: DataTypes.INTEGER,
      receiverId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Message'
    }
  )
  return Message
}
