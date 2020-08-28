// config/auth.js

// expose our config directly to our application using module.exports
const viberAuth = {
  auth_token: "47896b02c3a7d0b4-874c67191966ac49-123e45fb485a77b2",
  url: "https://service-alerts.herokuapp.com/v1/webhook",
  event_types: [
    "delivered",
    "seen",
    "failed",
    "subscribed",
    "unsubscribed",
    "conversation_started"
  ],
  name: "AutoBot",
  avatar: "https://seeklogo.com/images/V/viber-logo-02B562CBA7-seeklogo.com.png"
};

export { viberAuth };
