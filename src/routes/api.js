import express from "express";
let router = express.Router();

import request from "request-promise";
import {
  getAccountInfo,
  getListFollow,
  getUserDetail,
  sendMessage,
  broadcast,
  postToPublicGroup,
  broadcastMedia,
  broadcastText
} from "./utils";

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({ message: "hooray! welcome to our api!" });
});

router.route("/send").get(async (req, res) => {
  const receiver = req.query["id"] || "5MNbJ5ovzWgHUVPx+aQirQ=="; //"p8CgTFVX3Ay4I7zDMjiDXQ==";
  //"JvuZ7+vhutlA1f+zWDzaPQ==";
  const content = req.query["content"];
  const data = await sendMessage(receiver, content);
  res.status(200).json(data);
});

router.route("/getAccountInfo").get(async (req, res) => {
  const data = await getAccountInfo();
  res.status(200).json(data);
});

router.route("/getUserDetail").get(async (req, res) => {
  const id = req.query["id"] || "5MNbJ5ovzWgHUVPx+aQirQ=="; //"p8CgTFVX3Ay4I7zDMjiDXQ==";
  //"JvuZ7+vhutlA1f+zWDzaPQ==";
  const data = await getUserDetail(id);
  res.status(200).json(data);
});

router.route("/getListFollow").get(async (req, res) => {
  const data = await getListFollow();
  res.status(200).json(data);
});

router.route("/post").get(async (req, res) => {
  const receiver = req.query["id"] || "5MNbJ5ovzWgHUVPx+aQirQ=="; //"p8CgTFVX3Ay4I7zDMjiDXQ==";
  //"JvuZ7+vhutlA1f+zWDzaPQ==";
  const content = req.query["content"];
  const data = await postToPublicGroup();
  res.status(200).json(data);
});

router.route("/broadcast").get(async (req, res) => {
  const title = req.query["title"];
  const content = req.query["content"];
  const link = req.query["link"];
  if ((!title && !content) || !link) {
    const result = {
      message: "Params are required"
    };
    return res.status(200).json(result);
  }
  const listFollow = await getListFollow();
  let members = (listFollow.result && listFollow.result.members) || [];
  if (!members || members.length === 0) {
    const result = {
      message: "Don't have follower",
      result: listFollow
    };
    return res.status(200).json(result);
  }
  console.log("members: ", members);
  members = members.map(i => i.id);
  const data = await broadcastMedia(members, title, content, link);
  res.status(200).json(data);
});

module.exports = router;
