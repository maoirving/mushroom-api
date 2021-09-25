'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Applications',
      [
        {
          userId: 1,
          jobId: 2,
          readAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          jobId: 3,
          readAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Applications', null, {})
  }
}
