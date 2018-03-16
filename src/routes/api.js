const express = require('express');
const router = express.Router();

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const Viber = require('../config/auth').viberAuth;
const TextMessage = require('viber-bot').Message.Text;
const request = require('request');

// Creating the bot with access token, name and avatar
const bot = new ViberBot({
  authToken: Viber.authToken,
  name: Viber.name,
  avatar: Viber.avatar
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/send')
  .get((req, res) => {
    request({
      url: 'https://chatapi.viber.com/pa/send_message',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      json: {
        "auth_token": "47896b02c3a7d0b4-874c67191966ac49-123e45fb485a77b2",
        "receiver": "5MNbJ5ovzWgHUVPx+aQirQ==",
        "min_api_version": 1,
        "sender": {
          "name": "John McClane",
          "avatar": "http://avatar.example.com"
        },
        "tracking_data": "tracking data",
        "type": "text",
        "text": "Hello! When I create new bot instance in node I can set bot sender name. It does show correct sender name on android, and Linux Desktop versions of Viber, but on Windows and MacOS it just show sender name which I setted, when I created bot at https://partners.viber.com.!"
      }
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        console.log('body: ', body);
      }
    });
    res.send('Add a book');
  })
  .post(function (req, res) {
    console.log('req: ', req.body);
    res.send('Add a book')
  })
  .put(function (req, res) {
    console.log('req: ', req.body);
    res.send('Update the book')
  });

module.exports = router;
