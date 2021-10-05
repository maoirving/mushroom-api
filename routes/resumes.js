var express = require('express')
var router = express.Router()
var models = require('../models')
var Op = models.Sequelize.Op

// 简历列表
router.get('/', async function (req, res, next) {
  var currentPage = parseInt(req.query.currentPage)
  var pageSize = parseInt(req.query.limit)
  var where = {}
  var userId = req.query.userId
  if (userId) {
    where.userId = userId
  }

  let extraFind = {}
  if (currentPage && pageSize) {
    extraFind = {
      offset: (currentPage - 1) * pageSize,
      limit: pageSize,
      distinct: true
    }
  }
  var result = await models.ResumeFile.findAndCountAll({
    order: [['createdAt', 'DESC']],
    where: where,
    ...extraFind
  })
  res.json({
    resumeFiles: result.rows,
    total: result.count
  })
})

// 简历选项列表
router.get('/options', async function (req, res, next) {
  var where = {}
  var userId = req.query.userId
  if (userId) {
    where.userId = userId
  }
  var options = await models.ResumeFile.findAll({
    attributes: [['id', 'value'], ['name', 'label'], 'userId'],
    where: where,
    order: [['createdAt', 'DESC']]
  })
  res.json({
    options: options
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
  res.json({ interview: interview, success: true })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  var interview = await models.Interview.findByPk(req.params.id)
  interview.destroy(req.body)
  res.json({ msg: '删除成功！', success: true })
})

module.exports = router
