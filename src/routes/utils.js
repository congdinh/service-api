import { viberAuth } from "../config/auth";
import rp from "request-promise";

const endpoint = "https://chatapi.viber.com/pa";
const token = viberAuth.auth_token;

const setWebhook = async () => {
  const data = await rp({
    uri: `${endpoint}/set_webhook`,
    method: "POST",
    body: viberAuth,
    json: true
  });
  if (data.status === 0 && data.status_message === "ok") {
    return {
      message: "success",
      result: data
    };
  } else {
    return {
      message: "error"
      // result: data
    };
  }
};

const getAccountInfo = async () => {
  const data = await rp({
    uri: `${endpoint}/get_account_info`,
    method: "POST",
    body: {
      auth_token: token
    },
    json: true
  });
  if (data.status === 0 && data.status_message === "ok") {
    return {
      message: "success"
      // result: data
    };
  } else {
    return {
      message: "error"
      // result: data
    };
  }
};

const getUserDetail = async (userId = null) => {
  const data = await rp({
    uri: `${endpoint}/get_user_details`,
    method: "POST",
    body: {
      auth_token: token,
      id: userId
    },
    json: true
  });
  if (data.status === 0 && data.status_message === "ok") {
    return {
      message: "success"
      // result: data
    };
  } else {
    return {
      message: "error"
      // result: data
    };
  }
};

const getListFollow = async () => {
  const data = await rp({
    uri: `${endpoint}/get_account_info`,
    method: "POST",
    body: {
      auth_token: token
    },
    json: true
  });
  if (data.status === 0 && data.status_message === "ok") {
    return {
      message: "success",
      result: data
    };
  } else {
    return {
      message: "error"
      // result: data
    };
  }
};

const postToPublicGroup = async (userId = null, content = null) => {
  const data = await rp({
    uri: `${endpoint}/post`,
    method: "POST",
    body: {
      auth_token: token,
      id: userId,
      type: "text",
      text: content
    },
    json: true
  });
  if (data.status === 0 && data.status_message === "ok") {
    return {
      message: "success"
      // result: data
    };
  } else {
    return {
      message: "error"
      // result: data
    };
  }
};

const sendMessage = async (receiver = null, content = null) => {
  const data = await rp({
    uri: `${endpoint}/send_message`,
    method: "POST",
    body: {
      auth_token: token,
      receiver: receiver,
      min_api_version: 1,
      tracking_data: "tracking data",
      type: "text",
      text: content
    },
    json: true
  });
  if (data.status === 0 && data.status_message === "ok") {
    return {
      message: "success"
      // result: data
    };
  } else {
    return {
      message: "error"
      // result: data
    };
  }
};

const broadcastText = async (members = [], content = null) => {
  const data = await rp({
    uri: `${endpoint}/broadcast_message`,
    method: "POST",
    body: {
      auth_token: token,
      broadcast_list: members,
      min_api_version: 2,
      tracking_data: "tracking data",
      type: "text",
      text: content
    },
    json: true
  });
  if (data.status === 0 && data.status_message === "ok") {
    return {
      message: "success"
      // result: data
    };
  } else {
    return {
      message: "error"
      // result: data
    };
  }
};

const broadcastMedia = async (
  members = [],
  title = null,
  content = null,
  link = null
) => {
  const data = await rp({
    uri: `${endpoint}/broadcast_message`,
    method: "POST",
    body: {
      auth_token: token,
      broadcast_list: members,
      min_api_version: 2,
      tracking_data: "tracking data",
      type: "rich_media",
      rich_media: {
        Type: "rich_media",
        ButtonsGroupColumns: 6,
        ButtonsGroupRows: 4,
        BgColor: "#FFFFFF",
        Buttons: [
          // {
          //   "Columns": 6,
          //   "Rows": 3,
          //   "ActionType": "open-url",
          //   "ActionBody": "https://www.google.com",
          //   "Image": "https://s16.postimg.org/wi8jx20wl/image_RMsmall2.png"
          // },
          {
            Columns: 6,
            Rows: 3,
            ActionBody: "",
            Text: `<font color=#323232><b>${title}</b></font><font color=#777777><br>${content}</font>`,
            TextSize: "medium",
            TextVAlign: "middle",
            TextHAlign: "left"
          },
          {
            Columns: 6,
            Rows: 1,
            ActionType: "open-url",
            ActionBody: `${link}`,
            Text: "<font color=#ffffff>Truy Cập Link Tài Liệu</font>",
            TextSize: "small",
            TextVAlign: "middle",
            TextHAlign: "middle",
            Image: "https://s14.postimg.org/4mmt4rw1t/Button.png"
          }
        ]
      }
    },
    json: true
  });
  if (data.status === 0 && data.status_message === "ok") {
    return {
      message: "success"
      // result: data
    };
  } else {
    return {
      message: "error"
      // result: data
    };
  }
};

export {
  setWebhook,
  getAccountInfo,
  getListFollow,
  getUserDetail,
  sendMessage,
  broadcastText,
  broadcastMedia,
  postToPublicGroup
};
