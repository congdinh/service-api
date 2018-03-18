const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const index = require('./routes/index');
const api = require('./routes/api');
const webhook = require('./routes/webhook');
const config = require('./config/connection').mongodb;

// DATABASE SETUP
// mongoose.connect(config.connection);
// // Handle the connection event
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, `unable to connect to database: ${config.connection}`));

// db.once('open', () => {
//   console.log("DB connection alive");
// });

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/v1', api);
app.use('/v1/webhook', webhook);

app.use('/v1/status', (req, res) => {
  res.status(200).json({
    success: true,
    name: 'Messages API',
    version: '1.0',
    status: 'green',
    header: req.header
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: 'error' });
});

module.exports = app;
