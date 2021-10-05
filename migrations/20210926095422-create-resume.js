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
      currentAddress: {
        type: Sequelize.STRING,
        comment: '当前住址'
      },
      educationBackground: {
        type: Sequelize.STRING(20),
        comment: '学历'
      },
      school: {
        type: Sequelize.STRING(50),
        comment: '学校'
      },
      schoolPeriod: {
        type: Sequelize.STRING,
        comment: '就读时间'
      },
      specializedSubject: {
        type: Sequelize.STRING(50),
        comment: '专业'
      },
      workCompany: {
        type: Sequelize.STRING(100),
        comment: '工作所在公司'
      },
      workPeriod: {
        type: Sequelize.STRING,
        comment: '在职时间'
      },
      workContent: {
        type: Sequelize.TEXT,
        comment: '工作内容'
      },
      certificates: {
        type: Sequelize.STRING,
        comment: '资格证书'
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
