'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Resume_Files',
      [
        {
          name: 'java工程师-林某人',
          url: 'http://localhost:3000/uploads/resumes/%E4%B8%9A%E5%8A%A1%E5%BC%95%E5%AF%BC%E5%8D%A1.pdf',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'UI设计师-洪某人',
          url: 'http://localhost:3000/uploads/resumes/%E4%B8%9A%E5%8A%A1%E5%BC%95%E5%AF%BC%E5%8D%A1.pdf',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Web前端工程师-毛某人',
          url: 'http://localhost:3000/uploads/resumes/%E4%B8%9A%E5%8A%A1%E5%BC%95%E5%AF%BC%E5%8D%A1.pdf',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Resume_Files', null, {})
  }
}
