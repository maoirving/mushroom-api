var express = require('express')
var router = express.Router()
var path = require('path')
var fs = require('fs')
var multer = require('multer')

// 临时上传目录
var upload = multer({ dest: 'uploads/' })
var upload_config = require(__dirname + '/../config/config.json').upload_config

// 提供文件上传服务
router.post('/', upload.single('file'), function (req, res, next) {
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
