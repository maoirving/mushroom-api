'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        comment: '用户id'
      },
      jobId: {
        type: Sequelize.INTEGER,
        comment: '职位id'
      },
      readAt: {
        type: Sequelize.DATE,
        comment: '查看时间'
      },
      status: {
        type: Sequelize.BOOLEAN,
        comment: '申请状态（null未处理，0未通过，1通过）'
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
    await queryInterface.dropTable('Applications')
  }
}
