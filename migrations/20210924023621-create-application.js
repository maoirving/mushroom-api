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
      resumeId: {
        type: Sequelize.INTEGER,
        comment: '简历id'
      },
      readAt: {
        type: Sequelize.DATE,
        comment: '查看时间'
      },
      handledStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        comment: '申请状态（0未处理，-1未通过，1通过）'
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
