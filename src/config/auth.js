// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth': {
        'clientID': '1511669862461835', // your App ID
        'clientSecret': 'cd73010c6bfa1d9010d4055805bbf724', // your App Secret
        'callbackURL': 'http://localhost:5858/auth/fb/facebook/callback'
    },

    'googleAuth' : {
        'clientID'      : '1012279681057-t67c3b0hq9md2tplr5b3g6qdl1tdgfbm.apps.googleusercontent.com',
        'clientSecret'  : 'bUE1VZ78SksDV2QkzhxCyHtq',
        'callbackURL'   : 'http://localhost:5858/auth/goo/google/callback'
    },

    'viberAuth' : {

    },
};