var express = require('express')
var router = express.Router()
var models = require('../models')
var Op = models.Sequelize.Op
var tool = require('../public/javascripts/tools.js')

// 职位列表
router.get('/', async function (req, res, next) {
  const currentPage = parseInt(req.query.currentPage) || 1
  const pageSize = parseInt(req.query.limit) || 10
  const where = {}
  // 模糊查询
  const name = req.query.name
  if (name) {
    where.name = {
      [Op.like]: '%' + name + '%'
    }
  }
  const result = await models.User.findAndCountAll({
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

// 新增（注册）
router.post('/', async function (req, res, next) {
  const solt = await tool.getRandomSolt()
  const password = req.body.password
  const md5Pass = await tool.getMD5(password, solt)
  req.body.solt = solt
  req.body.password = md5Pass
  const user = await models.User.create(req.body)
  res.json({ users: user, success: user !== null })
})

// 查询
// 根据id
router.get('/:id', async function (req, res, next) {
  const user = await models.User.findOne({
    where: { id: req.params.id }
  })
  res.json({ user: user })
})

// 根据账号密码
router.post('/check', async function (req, res, next) {
  const username = req.body.username
  const password = req.body.password
  // 用户名存在性校验
  const result = await models.User.findOne({
    where: { username: username }
  })
  if (!password) {
    res.json({ user: result, success: result !== null })
  } else {
    const solt = result.solt
    const md5Pass = await tool.getMD5(password, solt)
    const user = await models.User.findOne({
      where: { username: req.body.username, password: md5Pass }
    })
    res.json({ user: user, success: user !== null })
  }
})

// 修改
router.put('/:id', async function (req, res, next) {
  const user = await models.User.findByPk(req.params.id)
  user.update(req.body)
  res.json({ user: user })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  const user = await models.User.findByPk(req.params.id)
  user.destroy(req.body)
  res.json({ msg: '删除成功！' })
})

module.exports = router
