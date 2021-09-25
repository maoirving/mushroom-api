var md5 = require('md5')

exports.getMD5 = function (val, solt) {
  return new Promise((resolve, reject) => {
    const passSolt = md5(md5(val) + solt)
    resolve(passSolt)
  })
}

exports.getRandomSolt = function (length = 6) {
  return new Promise((resolve, reject) => {
    const chars = '123456789abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ'
    const maxPos = chars.length
    let solt = ''
    for (let i = 0; i < length; i++) {
      solt += chars.charAt(Math.floor(Math.random() * maxPos))
    }
    resolve(solt)
  })
}
