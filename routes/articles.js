var express = require('express')
var router = express.Router()
var models = require('../models')
var Op = models.Sequelize.Op

// 文章列表
router.get('/', async function (req, res, next) {
  var currentPage = parseInt(req.query.currentPage) || 1
  var pageSize = parseInt(req.query.pageSize) || 2
  var where = {}
  // 模糊查询
  var title = req.query.title
  if (title) {
    where.title = {
      [Op.like]: '%' + title + '%'
    }
  }
  var result = await models.Article.findAndCountAll({
    order: [['id', 'DESC']],
    where: where,
    include: [models.Comment],
    offset: (currentPage - 1) * pageSize,
    limit: pageSize
  })
  res.json({
    articles: result.rows,
    pagination: {
      currentPage: currentPage,
      pageSize: pageSize,
      total: result.count
    }
  })
})

// 新增
router.post('/', async function (req, res, next) {
  var article = await models.Article.create(req.body)
  res.json({ articles: article })
})

// 查询
router.get('/:id', async function (req, res, next) {
  var article = await models.Article.findOne({
    where: { id: req.params.id },
    include: [models.Comment]
  })
  res.json({ article: article })
})

// 修改
router.put('/:id', async function (req, res, next) {
  var article = await models.Article.findByPk(req.params.id)
  article.update(req.body)
  res.json({ article: article })
})

// 删除
router.delete('/:id', async function (req, res, next) {
  var article = await models.Article.findByPk(req.params.id)
  article.destroy(req.body)
  res.json({ msg: '删除成功！' })
})

module.exports = router
