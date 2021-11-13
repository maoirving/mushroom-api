var express = require('express')
var router = express.Router()
var models = require('../models')
var Op = models.Sequelize.Op

// 公司列表
router.get('/', async function (req, res, next) {
  var currentPage = parseInt(req.query.currentPage) || 1
  var pageSize = parseInt(req.query.limit) || 10
  var where = {}
  // 模糊查询
  var name = req.query.name
  var type = req.query.type
  var financingStage = req.query.financingStage
  var scale = req.query.scale
  if (name) {
    where.name = {
      [Op.like]: '%' + name + '%'
    }
  }
  if (type) {
    where.type = type
  }
  if (financingStage) {
    where.financingStage = financingStage
  }
  if (scale) {
    where.scale = scale
  }
  var result = await models.Company.findAndCountAll({
    order: [['id', 'DESC']],
    where: where,
    include: [models.Job],
    offset: (currentPage - 1) * pageSize,
    limit: pageSize,
    distinct: true
  })
  res.json({
    companies: result.rows,
    pagination: {
      currentPage: currentPage,
      pageSize: pageSize,
      total: result.count
    }
  })
})

// 公司列表选项
router.get('/options', async function (req, res, next) {
  var options = await models.Company.findAll({
    attributes: [
      ['id', 'value'],
      ['name', 'label']
    ],
    order: [['createdAt', 'DESC']]
  })
  res.json({
    options: options
  })
})

// 新增
router.post('/', async function (req, res, next) {
  var company = await models.Company.create(req.body)
  res.json({ companies: company, success: company !== null })
})

// 查询
router.get('/:id', async function (req, res, next) {
  var company = await models.Company.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: models.Job,
        required: false,
        where: {
          status: 1
        }
      }
    ]
  })
  res.json({ company: company })
})

// 修改
router.put('/:id', async function (req, res, next) {
  var company = await models.Company.findByPk(req.params.id)
  company.update(req.body)
  res.json({ company: company, success: true })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  var company = await models.Company.findByPk(req.params.id)
  company.destroy(req.body)
  res.json({ success: true })
})

module.exports = router
