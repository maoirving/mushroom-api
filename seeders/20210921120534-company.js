'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Companies',
      [
        {
          name: '字节跳动科技有限公司',
          type: '互联网',
          imageUrl:
            'https://img.bosszhipin.com/beijin/upload/com/logo/20210525/77d60eae41e48b90df64951371a7a07a19f97e2c258c6cead07beaf11928d91b.png?x-oss-process=image/resize,w_120,limit_0',
          address: '厦门软件园三期A03栋',
          financingStage: '已上市',
          introduction: '我们是非常厉害的公司',
          scale: '10000以上',
          legalRepresentative: '洪某人',
          registeredCapital: '10000万',
          registeredAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '字节跳动科技有限公司',
          type: '互联网',
          imageUrl:
            'https://img.bosszhipin.com/beijin/upload/com/logo/20210525/77d60eae41e48b90df64951371a7a07a19f97e2c258c6cead07beaf11928d91b.png?x-oss-process=image/resize,w_120,limit_0',
          address: '厦门软件园三期A03栋',
          financingStage: '已上市',
          introduction: '我们是非常厉害的公司',
          scale: '10000以上',
          legalRepresentative: '洪某人',
          registeredCapital: '10000万',
          registeredAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {})
  }
}
