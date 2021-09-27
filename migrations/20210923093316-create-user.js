'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(20),
        comment: '用户名'
      },
      realName: {
        type: Sequelize.STRING(20),
        comment: '真实姓名'
      },
      type: {
        type: Sequelize.STRING(20),
        comment: '用户类别'
      },
      imageUrl: {
        type: Sequelize.STRING(1000),
        comment: '用户头像'
      },
      sex: {
        type: Sequelize.STRING(10),
        comment: '性别'
      },
      birthday: {
        type: Sequelize.DATE,
        comment: '出生日期'
      },
      phoneNumber: {
        type: Sequelize.STRING(20),
        comment: '手机号码'
      },
      email: {
        type: Sequelize.STRING(20),
        comment: '邮箱'
      },
      password: {
        type: Sequelize.STRING(50),
        comment: '密码'
      },
      solt: {
        type: Sequelize.STRING(20),
        comment: '随机盐值'
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
    await queryInterface.dropTable('Users')
  }
}
