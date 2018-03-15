var express = require('express');
var router = express.Router();
var messages = require('./messages.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

//Account

module.exports = router;
