require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: "",
});

async function chatWithGPT(message) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });

    console.log("GPT Response:", response.choices[0].message.content);
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}


module.exports = {chatWithGPT};
