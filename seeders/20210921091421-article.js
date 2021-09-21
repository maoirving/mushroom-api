'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Articles',
      [
        {
          title: '文章1',
          content: '这是一首简单的小情歌',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: '文章2',
          content: '我是最帅的',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Articles', null, {})
  }
}
