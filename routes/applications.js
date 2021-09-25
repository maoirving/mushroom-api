var express = require('express')
var router = express.Router()
var models = require('../models')
var Op = models.Sequelize.Op

// 申请列表
router.get('/', async function (req, res, next) {
  var currentPage = parseInt(req.query.currentPage) || 1
  var pageSize = parseInt(req.query.limit) || 10
  var result = await models.Application.findAndCountAll({
    order: [['createdAt', 'DESC']],
    include: [
      {
        model: models.Job,
        include: [models.Company]
      }
    ],
    offset: (currentPage - 1) * pageSize,
    limit: pageSize
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

// 新增
router.post('/', async function (req, res, next) {
  var application = await models.Application.create(req.body)
  res.json({ applications: application })
})

// 查询
router.get('/:id', async function (req, res, next) {
  var application = await models.Application.findOne({
    where: { id: req.params.id },
    include: [models.Company]
  })
  res.json({ application: application })
})

// 修改
router.put('/:id', async function (req, res, next) {
  var application = await models.Application.findByPk(req.params.id)
  application.update(req.body)
  res.json({ application: application })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  var application = await models.Application.findByPk(req.params.id)
  application.destroy(req.body)
  res.json({ msg: '删除成功！' })
})

module.exports = router
