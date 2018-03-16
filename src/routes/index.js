const express = require('express');
const router = express.Router();

// middleware to use for all requests
router.use(function (req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: 'hooray! welcome to service messages!' });
});

module.exports = router;
