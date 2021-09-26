'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Applications',
      [
        {
          userId: 1,
          jobId: 1,
          resumeId: 1,
          readAt: new Date(),
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          jobId: 2,
          resumeId: 1,
          readAt: new Date(),
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          jobId: 3,
          resumeId: 1,
          readAt: new Date(),
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          jobId: 6,
          resumeId: 1,
          readAt: new Date(),
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          jobId: 4,
          resumeId: 1,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          jobId: 5,
          resumeId: 1,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          jobId: 3,
          resumeId: 1,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          jobId: 4,
          resumeId: 1,
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
