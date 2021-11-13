var express = require('express')
var router = express.Router()
var models = require('../models')
var Op = models.Sequelize.Op

// 申请列表
router.get('/', async function (req, res, next) {
  var currentPage = parseInt(req.query.currentPage) || 1
  var pageSize = parseInt(req.query.limit) || 10
  var where = {}
  var isRead = req.query.isRead
  var handledStatus = req.query.handledStatus
  const userId = req.data.userId
  const role = req.data.role
  const jobId = req.query.jobId
  if (userId && role === 'worker') {
    where.userId = userId
  }
  if (jobId) {
    where.jobId = jobId
  }
  if (isRead) {
    where.readAt = {
      [Op.not]: null
    }
  }
  if (handledStatus) {
    where.handledStatus = handledStatus
  }
  const jobName = req.query.jobName
  const jobType = req.query.jobType
  const companyId = req.data.companyId
  let jobWhere = {}
  if (jobName) {
    jobWhere.name = {
      [Op.like]: '%' + jobName + '%'
    }
  }
  if (jobType) {
    jobWhere.type = jobType
  }
  if (companyId) {
    jobWhere.companyId = companyId
  }
  let userWhere = {}
  const userRealName = req.query.userRealName
  if (userRealName) {
    userWhere.realName = {
      [Op.like]: '%' + userRealName + '%'
    }
  }

  let resumeWhere = {}
  const educationBackground = req.query.educationBackground
  if (educationBackground) {
    resumeWhere.educationBackground = educationBackground
  }
  var result = await models.Application.findAndCountAll({
    order: [['createdAt', 'DESC']],
    where: where,
    include: [
      {
        model: models.Job,
        where: jobWhere,
        include: [models.Company]
      },
      {
        model: models.User,
        where: userWhere,
        attributes: {
          exclude: ['solt', 'password']
        },
        include: [
          {
            model: models.Resume,
            where: resumeWhere
          }
        ]
      },
      {
        model: models.ResumeFile
      }
    ],
    offset: (currentPage - 1) * pageSize,
    limit: pageSize,
    distinct: true
  })
  res.json({
    applications: result.rows,
    pagination: {
      currentPage: currentPage,
      pageSize: pageSize,
      total: result.count
    }
  })
})

// 申请列表id选项
router.get('/ids', async function (req, res, next) {
  const companyId = req.data.companyId
  const role = req.data.role
  const jobWhere = {}
  if (companyId && role === 'recruiter') {
    jobWhere.companyId = companyId
  }
  var options = await models.Application.findAll({
    where: {
      handledStatus: 1
    },
    include: [
      {
        model: models.Job,
        where: jobWhere
      }
    ],
    attributes: [
      ['id', 'value'],
      ['id', 'label']
    ],
    order: [['createdAt', 'DESC']]
  })
  res.json({
    options: options
  })
})

// 新增
router.post('/', async function (req, res, next) {
  req.body.userId = req.body.userId ?? req.data.userId
  var application = await models.Application.create(req.body)
  res.json({ applications: application, success: application !== null })
})

// 查询
router.get('/:id', async function (req, res, next) {
  const application = await models.Application.findOne({
    where: { id: req.params.id },
    include: [models.Company]
  })
  res.json({ application: application })
})

// 修改
router.put('/:id', async function (req, res, next) {
  var application = await models.Application.findByPk(req.params.id)
  application.update(req.body)
  res.json({ application: application, success: true })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  var application = await models.Application.findByPk(req.params.id)
  application.destroy(req.body)
  res.json({ msg: '删除成功！', success: true })
})

module.exports = router
