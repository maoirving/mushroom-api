var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var vertoken = require('./public/javascripts/token.js')
var expressJwt = require('express-jwt')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var jobsRouter = require('./routes/jobs')
var companiesRouter = require('./routes/companies')
var applicationsRouter = require('./routes/applications')
var resumesRouter = require('./routes/resumes')
var interviewsRouter = require('./routes/interviews')
var uploadRouter = require('./routes/upload')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// 设置跨域和相应数据格式
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
  )
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

//解析token获取用户信息
app.use(function (req, res, next) {
  var token = req.headers['authorization']
  if (token == undefined) {
    next()
  } else {
    vertoken
      .getToken(token)
      .then(userInfo => {
        req.data = userInfo
        next()
      })
      .catch(error => {
        next()
      })
  }
})

//验证token是否过期并规定那些路由不需要验证
app.use(
  expressJwt({
    secret: 'mushroom',
    // 算法
    algorithms: ['HS256']
  }).unless({
    path: [
      '/users/check',
      '/users',
      /^\/uploads\/*/,
      /^\/upload\/*/,
      '/',
      /^\/jobs\/*/,
      /^\/companies\/*/
    ] //不需要验证的接口名称
  })
)

//token失效返回信息
app.use(function (err, req, res, next) {
  if (err.status == 401) {
    return res.status(401).send('token失效')
    //可以设置返回json 形式  res.json({message:'token失效'})
  }
})

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/jobs', jobsRouter)
app.use('/companies', companiesRouter)
app.use('/applications', applicationsRouter)
app.use('/resumes', resumesRouter)
app.use('/interviews', interviewsRouter)
app.use('/upload', uploadRouter)
app.use('/uploads', express.static('uploads'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
