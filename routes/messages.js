var express = require('express')
var router = express.Router()
var models = require('../models')
var Op = models.Sequelize.Op

// 消息列表
router.get('/', async function (req, res, next) {
  var currentPage = parseInt(req.query.currentPage) || 1
  var pageSize = parseInt(req.query.limit) || 10
  var where = {}
  var result = await models.Message.findAndCountAll({
    order: [['createdAt', 'DESC']],
    where: where,
    include: [
      {
        model: models.Application
      },
      {
        model: models.Interview
      }
    ],
    offset: (currentPage - 1) * pageSize,
    limit: pageSize,
    distinct: true
  })
  res.json({
    messages: result.rows,
    pagination: {
      currentPage: currentPage,
      pageSize: pageSize,
      total: result.count
    }
  })
})

// 新增
router.post('/', async function (req, res, next) {
  var message = await models.Message.create(req.body)
  res.json({ messages: message, success: message !== null })
})

// 查询
router.get('/:id', async function (req, res, next) {
  const message = await models.Message.findOne({
    where: { id: req.params.id },
    include: [models.Company]
  })
  res.json({ message: message })
})

// 修改
router.put('/:id', async function (req, res, next) {
  var message = await models.Message.findByPk(req.params.id)
  message.update(req.body)
  res.json({ message: message })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  var message = await models.Message.findByPk(req.params.id)
  message.destroy(req.body)
  res.json({ msg: '删除成功！', success: true })
})

module.exports = router
