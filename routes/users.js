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
  var result = await models.User.findAndCountAll({
    order: [['id', 'DESC']],
    where: where,
    offset: (currentPage - 1) * pageSize,
    limit: pageSize
  })
  res.json({
    users: result.rows,
    pagination: {
      currentPage: currentPage,
      pageSize: pageSize,
      total: result.count
    }
  })
})

// 新增
router.post('/', async function (req, res, next) {
  var user = await models.User.create(req.body)
  res.json({ users: user })
})

// 查询
// 根据id
router.get('/:id', async function (req, res, next) {
  var user = await models.User.findOne({
    where: { id: req.params.id, username: req.params.username, password: req.params.password }
  })
  res.json({ user: user })
})

// 根据账号密码
router.post('/login', async function (req, res, next) {
  var user = await models.User.findOne({
    where: { username: req.body.username, password: req.body.password }
  })
  res.json({ user: user, success: user !== null })
})

// 修改
router.put('/:id', async function (req, res, next) {
  var user = await models.User.findByPk(req.params.id)
  user.update(req.body)
  res.json({ user: user })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  var user = await models.User.findByPk(req.params.id)
  user.destroy(req.body)
  res.json({ msg: '删除成功！' })
})

module.exports = router
