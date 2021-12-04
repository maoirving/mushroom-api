var express = require('express')
var router = express.Router()
var models = require('../models')
var Op = models.Sequelize.Op
var tool = require('../public/javascripts/tools.js')
var vertoken = require('../public/javascripts/token.js')
var jwt = require('jsonwebtoken')
var jwt_config = require(__dirname + '/../config/config.json').jwt_config

// 用户列表
router.get('/', async function (req, res, next) {
  const currentPage = parseInt(req.query.currentPage) || 1
  const pageSize = parseInt(req.query.limit) || 10
  const where = {}
  // 模糊查询
  const realName = req.query.realName
  var type = req.query.type
  var sex = req.query.sex
  if (realName) {
    where.realName = {
      [Op.like]: '%' + realName + '%',
    }
  }
  if (type) {
    where.type = type
  }
  if (sex) {
    where.sex = sex
  }
  const result = await models.User.findAndCountAll({
    order: [['id', 'DESC']],
    where: where,
    attributes: {
      exclude: ['solt', 'password'],
    },
    offset: (currentPage - 1) * pageSize,
    limit: pageSize,
  })
  res.json({
    users: result.rows,
    pagination: {
      currentPage: currentPage,
      pageSize: pageSize,
      total: result.count,
    },
  })
})

// 用户列表选项
router.get('/options', async function (req, res, next) {
  let where = {}
  const type = req.query.type
  if (type) {
    where.type = type
  }
  var options = await models.User.findAll({
    attributes: [
      ['id', 'value'],
      ['realName', 'label'],
      ['companyId', 'companyId'],
    ],
    where: where,
    order: [['createdAt', 'DESC']],
  })
  res.json({
    options: options,
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
router.get('/info', async function (req, res, next) {
  const user = await models.User.findOne({
    where: { id: req.data.userId },
    attributes: {
      exclude: ['solt', 'password'],
    },
    include: [models.Company],
  })
  res.json({ user: user })
})

// 根据账号密码（登录）
router.post('/check', async function (req, res, next) {
  const username = req.body.username
  const userId = req.data && req.data.userId
  const type = req.body.type
  const password = req.body.password
  let where = {}
  if (username) {
    where.username = username
  }
  if (type) {
    where.type = type
  }
  if (userId) {
    where.id = userId
  }
  // 用户名存在性校验
  const result = await models.User.findOne({
    where: where,
  })

  if (!password) {
    res.json({ user: result, success: result !== null })
  } else {
    if (!result) {
      return res.json({ success: false })
    }
    const solt = result.solt
    const md5Pass = await tool.getMD5(password, solt)
    where.password = md5Pass
    const user = await models.User.findOne({
      where: where,
    })
    // 生成token
    if (username && user) {
      const token = await vertoken.setToken(user.id, user.type, user.companyId)
      user.dataValues.token = 'Bearer ' + token
    }
    res.json({ user: user, success: user !== null })
  }
})

// 修改
router.put('/info', async function (req, res, next) {
  const userId = req.query.userId ? req.query.userId : req.data.userId
  const user = await models.User.findByPk(userId)
  const password = req.body.password
  if (password) {
    const solt = await tool.getRandomSolt()
    const md5Pass = await tool.getMD5(password, solt)
    req.body.solt = solt
    req.body.password = md5Pass
  }
  user.update(req.body)
  res.json({ user: user, success: true })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  const user = await models.User.findByPk(req.params.id)
  user.destroy(req.body)
  res.json({ success: true })
})

module.exports = router
