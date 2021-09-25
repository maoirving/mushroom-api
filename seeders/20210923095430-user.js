'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'admin',
          realName: '林某人',
          type: 'admin',
          imageUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          sex: '女',
          birthday: '2000-08-14',
          phoneNumber: '18239389584',
          email: 'wew@qq.com',
          password: '929b71104a53a192bd1d5da17f39eb64',
          solt: 'UkR4Zs',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'hong',
          realName: '洪某人',
          type: 'worker',
          imageUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          sex: '女',
          birthday: '2000-08-14',
          phoneNumber: '18239389584',
          email: 'wew@qq.com',
          password: '929b71104a53a192bd1d5da17f39eb64',
          solt: 'UkR4Zs',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'maomao',
          realName: '毛某人',
          type: 'worker',
          imageUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          sex: '男',
          birthday: '1999-01-16',
          phoneNumber: '18239389584',
          email: 'wdew@qq.com',
          password: '929b71104a53a192bd1d5da17f39eb64',
          solt: 'UkR4Zs',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
