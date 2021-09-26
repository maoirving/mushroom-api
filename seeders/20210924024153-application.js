'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Applications',
      [
        {
          userId: 1,
          jobId: 1,
          readAt: new Date(),
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          jobId: 2,
          readAt: new Date(),
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          jobId: 3,
          readAt: new Date(),
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          jobId: 6,
          readAt: new Date(),
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          jobId: 4,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          jobId: 5,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          jobId: 3,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          jobId: 4,
          status: 1,
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
