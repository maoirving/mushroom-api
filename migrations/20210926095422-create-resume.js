'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Resumes', {
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
      anticipantJob: {
        type: Sequelize.STRING(100),
        comment: '期望职位'
      },
      anticipantCity: {
        type: Sequelize.STRING(20),
        comment: '期望城市'
      },
      anticipantSalary: {
        type: Sequelize.STRING(20),
        comment: '期望工资'
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
    await queryInterface.dropTable('Resumes')
  }
}
