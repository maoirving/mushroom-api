'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        comment: '公司名称'
      },
      type: {
        type: Sequelize.STRING,
        comment: '行业类别'
      },
      imageUrl: {
        type: Sequelize.STRING,
        comment: '图片地址'
      },
      address: {
        type: Sequelize.STRING,
        comment: '公司地址'
      },
      financingStage: {
        type: Sequelize.STRING,
        comment: '融资阶段'
      },
      introduction: {
        type: Sequelize.TEXT,
        comment: '公司简介'
      },
      scale: {
        type: Sequelize.STRING,
        comment: '公司规模'
      },
      legalRepresentative: {
        type: Sequelize.STRING,
        comment: '法定代表人'
      },
      registeredCapital: {
        type: Sequelize.STRING,
        comment: '注册资金'
      },
      registeredAt: {
        type: Sequelize.DATE,
        comment: '注册日期'
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
    await queryInterface.dropTable('Companies')
  }
}
