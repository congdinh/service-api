const express = require('express');
const router = express.Router();

const Viber = require('../config/auth').viberAuth;
const request = require('request');


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
        "receiver": '5MNbJ5ovzWgHUVPx+aQirQ==',//'JvuZ7+vhutlA1f+zWDzaPQ==',//'p8CgTFVX3Ay4I7zDMjiDXQ==',//"5MNbJ5ovzWgHUVPx+aQirQ==",
        "min_api_version": 1,
        // "sender": {
        //   "name": "John McClane",
        //   "avatar": "https://avatars0.githubusercontent.com/u/13956091?s=40&v=4"
        // },
        "tracking_data": "tracking data",
        "type": "text",
        "text": "Test User! lol. I created bot at https://partners.viber.com.!",
        "keyboard":{
          "Type":"keyboard",
          "DefaultHeight":true,
          "Buttons":[
             {
                "ActionType":"reply",
                "ActionBody":"reply to me",
                "Text":"Key text",
                "TextSize":"regular"
             }
          ]
       }
      }
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.status(200).json('GET send_message: ' +  JSON.stringify(body));
      }
    });
  })
  .post(function (req, res) {
    res.status(200).json('POST send_message: ' +  JSON.stringify(req.body));
  });

  router.route('/getAccountInfo')
  .get((req, res) => {
    request({
      url: 'https://chatapi.viber.com/pa/get_account_info',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      json: {
        "auth_token": "47896b02c3a7d0b4-874c67191966ac49-123e45fb485a77b2",
      }
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.status(200).json('getAccountInfo: ' +  JSON.stringify(body));
      }
    });
  });

  router.route('/getUserDetail')
  .get((req, res) => {
    request({
      url: 'https://chatapi.viber.com/pa/get_user_details',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      json: {
        "auth_token": "47896b02c3a7d0b4-874c67191966ac49-123e45fb485a77b2",
        "id": "5MNbJ5ovzWgHUVPx+aQirQ=="
      }
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.status(200).json('getUserDetail: ' +  JSON.stringify(body));
      }
    });
  });

  router.route('/post')
  .get((req, res) => {
    request({
      url: 'https://chatapi.viber.com/pa/post',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      json: {
        "auth_token": "47896b02c3a7d0b4-874c67191966ac49-123e45fb485a77b2",
        "from": "5MNbJ5ovzWgHUVPx+aQirQ==",
        "type":"text",
        "text":"Hello World!"
      }
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.status(200).json('POST: ' +  JSON.stringify(body));
      }
    });
  });

  router.route('/broadcast')
  .get((req, res) => {
    request({
      url: 'https://chatapi.viber.com/pa/broadcast_message',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      json: {
        "auth_token": "47896b02c3a7d0b4-874c67191966ac49-123e45fb485a77b2",
        "broadcast_list":[
          "p8CgTFVX3Ay4I7zDMjiDXQ",
          "JvuZ7+vhutlA1f+zWDzaPQ==",
          "5MNbJ5ovzWgHUVPx+aQirQ==",
       ],
        //"receiver": 'p8CgTFVX3Ay4I7zDMjiDXQ',//'JvuZ7+vhutlA1f+zWDzaPQ==',//'p8CgTFVX3Ay4I7zDMjiDXQ==',//"5MNbJ5ovzWgHUVPx+aQirQ==",
        "min_api_version": 2,
        "tracking_data": "tracking data",
        "type": "rich_media",
        "text": "Test User! lol. I created bot at https://partners.viber.com.!",
      //   "keyboard":{
      //     "Type":"keyboard",
      //     "DefaultHeight":true,
      //     "Buttons":[
      //        {
      //           "ActionType":"reply",
      //           "ActionBody":"reply to me",
      //           "Text":"Key text",
      //           "TextSize":"regular"
      //        }
      //     ]
      //  },
       "rich_media":{
        "Type":"rich_media",
        "BgColor":"#FFFFFF",
        "Buttons":[
           {
              "ActionBody":"https://www.google.com",
              "ActionType":"open-url",
              "Text":"Should get back my ID instead of replace_me_with_receiver_id"
           },
           {
              "ActionBody":"https://www.google.com",
              "ActionType":"open-url",
              "Text":"Should get back my URL encoded ID instead of replace_me_with_url_encoded_receiver_id"
           },
           {
              "ActionBody":"https://www.google.com",
              "ActionType":"open-url",
              "Text":"Should get back my name instead of replace_me_with_user_name"
           }
        ]
     }
      }
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.status(200).json('broadcast: ' +  JSON.stringify(body));
      }
    });
    res.status(200).send('sent');
  });
  
module.exports = router;
