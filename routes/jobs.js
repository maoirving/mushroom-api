var express = require('express')
var router = express.Router()
var models = require('../models')
var Op = models.Sequelize.Op

// 职位列表
router.get('/', async function (req, res, next) {
  var currentPage = parseInt(req.query.currentPage) || 1
  var pageSize = parseInt(req.query.limit) || 10
  var where = {}
  // 模糊查询
  var name = req.query.name
  var type = req.query.type
  var educationBackground = req.query.educationBackground
  var workExperience = req.query.workExperience

  if (name) {
    where.name = {
      [Op.like]: '%' + name + '%'
    }
  }
  if (type) {
    where.type = type
  }
  if (educationBackground) {
    where.educationBackground = educationBackground
  }
  if (workExperience) {
    where.workExperience = workExperience
  }

  var companyWhere = {}
  var financingStage = req.query.financingStage
  var scale = req.query.scale
  if (financingStage) {
    companyWhere.financingStage = financingStage
  }
  if (scale) {
    companyWhere.scale = scale
  }
  var result = await models.Job.findAndCountAll({
    order: [['id', 'DESC']],
    where: where,
    include: [
      {
        model: models.Company,
        where: companyWhere
      }
    ],
    offset: (currentPage - 1) * pageSize,
    limit: pageSize
  })
  res.json({
    jobs: result.rows,
    pagination: {
      currentPage: currentPage,
      pageSize: pageSize,
      total: result.count
    }
  })
})

// 新增
router.post('/', async function (req, res, next) {
  var job = await models.Job.create(req.body)
  res.json({ jobs: job })
})

// 查询
router.get('/:id', async function (req, res, next) {
  var job = await models.Job.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: models.Company,
        include: [models.Job]
      }
    ]
  })
  res.json({ job: job })
})

// 修改
router.put('/:id', async function (req, res, next) {
  var job = await models.Job.findByPk(req.params.id)
  job.update(req.body)
  res.json({ job: job })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  var job = await models.Job.findByPk(req.params.id)
  job.destroy(req.body)
  res.json({ success: true })
})

module.exports = router
