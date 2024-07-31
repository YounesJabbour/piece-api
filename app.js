require('dotenv').config()
var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var pieceRouter = require('./routes/piece')
var commandeRouter = require('./routes/commande')
var marqueRouter = require('./routes/marque')
var modelRouter = require('./routes/model')
var operationRouter = require('./routes/operation')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(errorHandler)

const corsOptions = {
  origin: '*',
  credentials: true,
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
}

app.use(cors(corsOptions))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/piece', pieceRouter)
app.use('/commande', commandeRouter)
app.use('/marque', marqueRouter)
app.use('/model', modelRouter)
app.use('/operation', operationRouter)

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
