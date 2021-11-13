var jwt = require('jsonwebtoken')
var jwtScrect = 'mushroom' //签名

//登录接口 生成token的方法
var setToken = function (userId, role, companyId) {
  return new Promise((resolve, reject) => {
    //expiresln 设置token过期的时间
    //{ user_name: user_name, user_id: user_id } 传入需要解析的值（ 一般为用户名，用户id 等）
    const token = jwt.sign(
      { userId: userId, role: role, companyId: companyId },
      jwtScrect,
      {
        expiresIn: '24h'
      }
    )
    // const token = jwt.sign({ user_name: user_name, user_id: user_id }, jwtScrect, { expiresIn: '10s' });
    resolve(token)
  })
}
//各个接口需要验证token的方法
var getToken = function (token) {
  return new Promise((resolve, reject) => {
    if (!token) {
      console.log('token是空的')
      reject({
        error: 'token 是空的'
      })
    } else {
      var info = jwt.verify(token.split(' ')[1], jwtScrect)
      resolve(info) //解析返回的值（sign 传入的值）
    }
  })
}

module.exports = {
  setToken,
  getToken
}
