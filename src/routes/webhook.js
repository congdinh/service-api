import express from "express";
import User from "../server/models/user";
import { setWebhook } from "./utils";

let router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.status(200).json({ message: "GET Webhook" });
  })
  .post((req, res) => {
    res.status(200).json({ message: "POST Webhook" });
  });

router.route("/set").get(async (req, res) => {
  const data = await setWebhook();
  res.status(200).json(data);
});

module.exports = router;
