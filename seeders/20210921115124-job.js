'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Jobs',
      [
        {
          name: 'web前端开发工程师',
          type: '校园招聘',
          recruitingNnumbers: 10,
          salary: '6-9k',
          workLocation: '厦门软件园三期',
          workExperience: '不限',
          educationBackground: '本科',
          description: '这是一个很厉害的职位',
          skill: '很厉害的技能',
          company_id: 1,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'web前端开发工程师',
          type: '校园招聘',
          recruitingNnumbers: 10,
          salary: '6-9k',
          workLocation: '厦门软件园三期',
          workExperience: '不限',
          educationBackground: '本科',
          description: '这是一个很厉害的职位',
          skill: '很厉害的技能',
          company_id: 1,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Jobs', null, {})
  }
}
