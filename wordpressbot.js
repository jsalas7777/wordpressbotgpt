const axios = require("axios");

// WordPress site details
const wordpressUrl = "";
const username = "";
const appPassword = ""; // Application password from WordPress

// Data for the new post
const postData = {
  title: "My New Post",
  content:
    "<header>" +
    "<h1>Understanding ChatGPT: A Revolution in AI Conversations</h1>" +
    "<h2>Theme 1: Analysis</h2>" +

    "</header>",
  status: "publish", // Can be 'draft', 'publish', or 'pending'
  categories: [1], // Array of category IDs to assign to the post (optional)
};

const createPost = async () => {
  try {
    const response = await axios.post(`${wordpressUrl}/posts`, postData, {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(username + ":" + appPassword).toString("base64"),
        "Content-Type": "application/json",
      },
    });
    console.log("Post Created:", response.data);
  } catch (error) {
    console.error(
      "Error creating post:",
      error.response ? error.response.data : error.message
    );
  }
};

createPost();
