const express = require("express");
const router = express.Router();
const { handleChatbotResponse } = require("../controllers/Chatbotcontroller");

router.post("/", handleChatbotResponse);

module.exports = router;
