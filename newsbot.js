const { fetchNews } = require("./querynews");
const { chatWithGPT } = require("./testgpt");

async function createNewArticle() {
  let news = await fetchNews("GPT");

  const stringifiedArray = JSON.stringify(news);

 // console.log(stringifiedArray);

  const QUERY = "Using the following content create an html article: "+stringifiedArray;
  const response = await chatWithGPT(QUERY);

  console.log("AI RESPONSE ",response);

}

createNewArticle();
