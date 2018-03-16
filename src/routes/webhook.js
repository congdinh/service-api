const express = require('express');
const request = require('request');
const router = express.Router();
const Viber = require('../config/auth').viberAuth;
const User = require('../server/models/user');

router.route('/')
  .get(function (req, res) {
    console.log('get: ', req.body);
    res.send('Update the book')
  })
  .post(function (req, res) {
    if (req.body.sender.id) {
      console.log('post: ', req.body);
      // User.createOrUpdate(req.body.sender);
    }
    res.send('Add a book')
  });

router.route('/set')
  .get(function (req, res) {
    request({
      url: 'https://chatapi.viber.com/pa/set_webhook',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      json: Viber
    }, (error, response, body) => {
      if (!error && response.statusCode === 200 && body.status === 1) {
        res.send('set webhook done')
      }
    })
  });

module.exports = router;
