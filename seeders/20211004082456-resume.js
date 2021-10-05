'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Resumes',
      [
        {
          userId: 1,
          anticipantJob: 'java开发工程师',
          anticipantCity: '厦门',
          anticipantSalary: '7-9k',
          currentAddress: '福建厦门',
          educationBackground: '本科',
          school: '闽南师范大学',
          schoolPeriod: '2017-09-01;2021-06-30',
          specializedSubject: '计算机科学与技术',
          workCompany: '美图科技有限公司',
          workPeriod: '2021-03-01;2021-06-01',
          workContent: '<p>1. aaaaaaaaaa<br/>2. aaaaaaaaaa<br/></p>',
          certificates: '英语四级证书;英语六级证书',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          anticipantJob: 'UI设计师',
          anticipantCity: '深圳',
          anticipantSalary: '11-15k',
          currentAddress: '福建厦门',
          educationBackground: '本科',
          school: '厦门大学',
          schoolPeriod: '2017-09-01;2021-06-30',
          specializedSubject: '美术设计',
          workCompany: '美图科技有限公司',
          workPeriod: '2021-03-01;2021-06-01',
          workContent: '<p>1. aaaaaaaaaa<br/>2. aaaaaaaaaa<br/></p>',
          certificates: '英语四级证书;英语六级证书',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          anticipantJob: 'Web前端工程师',
          anticipantCity: '厦门',
          anticipantSalary: '7-9k',
          currentAddress: '福建厦门',
          educationBackground: '本科',
          school: '闽南师范大学',
          schoolPeriod: '2017-09-01;2021-06-30',
          specializedSubject: '计算机科学与技术',
          workCompany: '美图科技有限公司',
          workPeriod: '2021-03-01;2021-06-01',
          workContent: '<p>1. aaaaaaaaaa<br/>2. aaaaaaaaaa<br/></p>',
          certificates: '英语四级证书;英语六级证书',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Resumes', null, {})
  }
}
