var express = require('express')
var router = express.Router()
var models = require('../models')
var Op = models.Sequelize.Op

/* ------- 在线简历 ---------- */
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
  var result = await models.Resume.findAndCountAll({
    order: [['createdAt', 'DESC']],
    where: where,
    include: [
      {
        model: models.User,
        attributes: {
          exclude: ['id', 'solt', 'password', 'createdAt', 'updatedAt']
        }
      }
    ],
    ...extraFind
  })
  res.json({
    resumes: result.rows,
    total: result.count
  })
})

// 新增
router.post('/', async function (req, res, next) {
  var resume = await models.Resume.create(req.body)
  res.json({ resume: resume, success: resume !== null })
})

// 查询
router.get('/:id', async function (req, res, next) {
  const resume = await models.Resume.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: models.User,
        attributes: {
          exclude: ['id', 'solt', 'password']
        }
      }
    ]
  })
  res.json({ resume: resume })
})

// 修改
router.put('/:id', async function (req, res, next) {
  var resume = await models.Resume.findByPk(req.params.id)
  resume.update(req.body)
  res.json({ resume: resume, success: true })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  var resume = await models.Resume.findByPk(req.params.id)
  resume.destroy(req.body)
  res.json({ msg: '删除成功！', success: true })
})

/* ------- 附件简历 ---------- */
// 附件简历列表
router.get('/files', async function (req, res, next) {
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

// 附件简历选项列表
router.get('/files/options', async function (req, res, next) {
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

module.exports = router
