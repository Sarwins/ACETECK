var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var questionRouter = require('./routes/question');
var serviceRouter = require('./routes/service');
var productRouter = require('./routes/product');
var companyRouter = require('./routes/company');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set('views', __dirname + '/views');

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/question', questionRouter);
app.use('/service', serviceRouter);
app.use('/product', productRouter);
app.use('/company', companyRouter);

module.exports = app;
