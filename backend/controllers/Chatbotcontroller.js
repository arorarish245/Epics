require("dotenv").config();
const axios = require("axios");

const handleChatbotResponse = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const openAiResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", 
        messages: [{ role: "user", content: message }],
        max_tokens: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const botResponse = openAiResponse.data.choices[0].message.content;
    res.status(200).json({ response: botResponse });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ response: "Sorry, I am having trouble responding right now." });
  }
};

module.exports = { handleChatbotResponse };
