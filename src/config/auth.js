// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
  viberAuth: {
    authToken: "47896b02c3a7d0b4-874c67191966ac49-123e45fb485a77b2",
    auth_token: "47896b02c3a7d0b4-874c67191966ac49-123e45fb485a77b2",
    url: "https://service-alerts.herokuapp.com//v1/webhook",
    registerToEvents: [
      "delivered",
      "seen",
      "failed",
      "subscribed",
      "unsubscribed",
      "conversation_started"
    ],
    event_types: [
      "delivered",
      "seen",
      "failed",
      "subscribed",
      "unsubscribed",
      "conversation_started"
    ],
    name: "EchoBot",
    avatar: "https://avatars0.githubusercontent.com/u/13956091?s=40&v=4"
  }
};