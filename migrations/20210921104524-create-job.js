'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        comment: '职位名称'
      },
      type: {
        type: Sequelize.STRING(20),
        comment: '招聘类别'
      },
      recruitingNnumbers: {
        type: Sequelize.INTEGER,
        comment: '招聘人数'
      },
      salary: {
        type: Sequelize.STRING(20),
        comment: '工资范围'
      },
      workLocation: {
        type: Sequelize.STRING,
        comment: '工作地点'
      },
      workExperience: {
        type: Sequelize.STRING(20),
        comment: '工作经验'
      },
      educationBackground: {
        type: Sequelize.STRING(20),
        comment: '学历'
      },
      description: {
        type: Sequelize.TEXT,
        comment: '职位描述'
      },
      skill: {
        type: Sequelize.TEXT,
        comment: '工作技能'
      },
      companyId: {
        type: Sequelize.INTEGER,
        comment: '公司id'
      },
      status: {
        type: Sequelize.BOOLEAN,
        comment: '状态： 0已下架、1已上架'
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
    await queryInterface.dropTable('Jobs')
  }
}
