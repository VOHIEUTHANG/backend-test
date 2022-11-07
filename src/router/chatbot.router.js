import express from "express";
const router = express.Router();
import { CHATBOT_TOKEN } from "../constants/index.js";
import axios from "axios";

router.get("/send-message", async (req, res) => {
  const { chat_id, text } = req.query;
  if (chat_id !== undefined && text) {
    try {
      const { data } = await axios.get(
        `https://api.telegram.org/bot${CHATBOT_TOKEN}/sendMessage?chat_id=${chat_id}&text=${text}`
      );

      return data?.ok
        ? res.status(200).send({
            messag: "send message successfully !",
          })
        : res.status(200).send({
            messag: "send message failure !",
          });
    } catch (err) {}
  }

  return res.status(400).send({
    messag: "Invalid request !",
  });
});

export default router;
