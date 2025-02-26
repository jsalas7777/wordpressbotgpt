require('dotenv').config();
const axios = require('axios');

const API_KEY = "";
const QUERY = 'Bitcoin'; // Change to your subject

 async function fetchNews(query) {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                q: query,
                apiKey: API_KEY,
                language: 'en',
                sortBy: 'publishedAt',
            },
        });

        return response.data.articles;
        console.log(response.data.articles);
    } catch (error) {
        console.error('Error fetching news:', error.response ? error.response.data : error.message);
        return null;
    }
}

module.exports = {fetchNews};

