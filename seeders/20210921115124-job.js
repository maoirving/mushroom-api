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
          companyId: 1,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '前端开发工程师',
          type: '校园招聘',
          recruitingNnumbers: 10,
          salary: '6-9k',
          workLocation: '厦门软件园三期',
          workExperience: '不限',
          educationBackground: '本科',
          description: '这是一个很厉害的职位',
          skill: '很厉害的技能',
          companyId: 3,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'java开发工程师',
          type: '校园招聘',
          recruitingNnumbers: 10,
          salary: '5-6k',
          workLocation: '厦门软件园二期',
          workExperience: '不限',
          educationBackground: '本科',
          description: '这是一个很厉害的职位',
          skill: '很厉害的技能',
          companyId: 2,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'php开发工程师',
          type: '校园招聘',
          recruitingNnumbers: 10,
          salary: '5-6k',
          workLocation: '厦门软件园二期',
          workExperience: '不限',
          educationBackground: '本科',
          description: '这是一个很厉害的职位',
          skill: '很厉害的技能',
          companyId: 1,
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
