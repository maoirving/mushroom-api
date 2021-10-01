var express = require('express')
var router = express.Router()
var models = require('../models')
var Op = models.Sequelize.Op

// 面试列表
router.get('/', async function (req, res, next) {
  var currentPage = parseInt(req.query.currentPage) || 1
  var pageSize = parseInt(req.query.limit) || 10
  var companyWhere = {}
  var companyName = req.query.companyName
  if (companyName) {
    companyWhere.name = {
      [Op.like]: '%' + companyName + '%'
    }
  }
  var jobWhere = {}
  const jobName = req.query.jobName
  if (jobName) {
    jobWhere.name = {
      [Op.like]: '%' + jobName + '%'
    }
  }
  var userWhere = {}
  var intervieweeName = req.query.intervieweeName
  if (intervieweeName) {
    userWhere.realName = {
      [Op.like]: '%' + intervieweeName + '%'
    }
  }

  var result = await models.Interview.findAndCountAll({
    order: [['createdAt', 'DESC']],
    include: [
      {
        model: models.Application,
        include: [
          {
            model: models.Job,
            where: jobWhere,
            include: [
              {
                model: models.Company,
                where: companyWhere
              }
            ],
            distinct: true
          },
          {
            model: models.User,
            where: userWhere
          },
          {
            model: models.Message
          }
        ]
      }
    ],
    offset: (currentPage - 1) * pageSize,
    limit: pageSize,
    distinct: true
  })
  res.json({
    interviews: result.rows,
    pagination: {
      currentPage: currentPage,
      pageSize: pageSize,
      total: result.count
    }
  })
})

// 新增
router.post('/', async function (req, res, next) {
  var interview = await models.Interview.create(req.body)
  res.json({ interviews: interview, success: interview !== null })
})

// 查询
router.get('/:id', async function (req, res, next) {
  const interview = await models.Interview.findOne({
    where: { id: req.params.id },
    include: [models.Company]
  })
  res.json({ interview: interview })
})

// 修改
router.put('/:id', async function (req, res, next) {
  var interview = await models.Interview.findByPk(req.params.id)
  interview.update(req.body)
  res.json({ interview: interview })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  var interview = await models.Interview.findByPk(req.params.id)
  interview.destroy(req.body)
  res.json({ msg: '删除成功！', success: true })
})

module.exports = router
