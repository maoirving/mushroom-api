'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Interviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      interviewAt: {
        type: Sequelize.DATE,
        comment: '面试时间'
      },
      address: {
        type: Sequelize.STRING,
        comment: '面试地点'
      },
      tip: {
        type: Sequelize.TEXT,
        comment: '备注'
      },
      applicationId: {
        type: Sequelize.INTEGER,
        comment: '申请id'
      },
      recruiterId: {
        type: Sequelize.INTEGER,
        comment: '招聘者id'
      },
      agreedStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        comment: '同意状态（0未处理，-1拒绝，1接受）'
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
    await queryInterface.dropTable('Interviews')
  }
}
