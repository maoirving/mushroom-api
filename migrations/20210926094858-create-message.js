'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT,
        comment: '消息内容'
      },
      applicationId: {
        type: Sequelize.INTEGER,
        comment: '申请id'
      },
      senderId: {
        type: Sequelize.INTEGER,
        comment: '发送方id'
      },
      receiverId: {
        type: Sequelize.INTEGER,
        comment: '接受方id'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '创建时间'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '更新时间'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Messages')
  }
}
