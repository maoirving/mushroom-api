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
  if (name) {
    where.name = {
      [Op.like]: '%' + name + '%'
    }
  }
  var result = await models.Company.findAndCountAll({
    order: [['id', 'DESC']],
    where: where,
    include: [models.Job],
    offset: (currentPage - 1) * pageSize,
    limit: pageSize
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

// 新增
router.post('/', async function (req, res, next) {
  var company = await models.Company.create(req.body)
  res.json({ companies: company })
})

// 查询
router.get('/:id', async function (req, res, next) {
  var company = await models.Company.findOne({
    where: { id: req.params.id },
    include: [models.Job]
  })
  res.json({ company: company })
})

// 修改
router.put('/:id', async function (req, res, next) {
  var company = await models.Company.findByPk(req.params.id)
  company.update(req.body)
  res.json({ company: company })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  var company = await models.Company.findByPk(req.params.id)
  company.destroy(req.body)
  res.json({ msg: '删除成功！' })
})

module.exports = router