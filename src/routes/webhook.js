const express = require('express');
const request = require('request');
const router = express.Router();
const Viber = require('../config/auth').viberAuth;
const User = require('../server/models/user');

router.route('/')
  .get(function (req, res) {
    res.status(200).send('GET Webhook: ' + JSON.stringify(req.body));
  })
  .post(function (req, res) {
    res.status(200).json('POST Webhook: ' +  JSON.stringify(req.body));
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
        res.status(200).json('set webhook done');
      }
    });
  });

module.exports = router;
