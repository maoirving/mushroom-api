var express = require('express')
var router = express.Router()
var path = require('path')
var fs = require('fs')
var multer = require('multer')

// 临时上传目录
var imageUpload = multer({ dest: 'uploads/images' })
var resumeUpload = multer({ dest: 'uploads/resumes' })
var upload_config = require(__dirname + '/../config/config.json').upload_config

// 上传图片
router.post('/image', imageUpload.single('image'), function (req, res, next) {
  var fileExtArray = req.file.originalname.split('.')
  var ext = fileExtArray[fileExtArray.length - 1]
  var targetPath = req.file.path + '.' + ext
  fs.rename(
    path.join(process.cwd(), '/' + req.file.path),
    path.join(process.cwd(), targetPath),
    function (err) {
      if (err) {
        return res.sendResult(null, 400, '上传图片失败')
      }
      const result = { path: targetPath, url: upload_config.baseURL + '/' + targetPath }
      res.json({ data: result, success: true })
    }
  )
})

// 上传简历
router.post('/resume', resumeUpload.single('file'), function (req, res, next) {
  var fileExtArray = req.file.originalname.split('.')
  var ext = fileExtArray[fileExtArray.length - 1]
  var targetPath = req.file.path + '.' + ext
  fs.rename(
    path.join(process.cwd(), '/' + req.file.path),
    path.join(process.cwd(), targetPath),
    function (err) {
      if (err) {
        return res.sendResult(null, 400, '上传文件失败')
      }
      const result = { path: targetPath, url: upload_config.baseURL + '/' + targetPath }
      res.json({ data: result, success: true })
    }
  )
})

module.exports = router
