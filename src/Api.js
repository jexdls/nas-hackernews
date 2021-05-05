const axios = require("axios");
const urlBase = "https://hacker-news.firebaseio.com/v0/";

// return IDs of a set of articles from articlesURL
export const getArticleIds = async (articlesURL) => {
  try {
    const res = await axios
      .get(`${urlBase}${articlesURL}.json`)
      .then((response) => response);
    console.log(`ArticleIds axios Status: ${res.status} ${res.statusText}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// give an article id and returns an article data
export const getArticle = async (articleId) => {
  try {
    const res = await axios
      .get(`${urlBase}item/${articleId}.json`)
      .then((response) => response);

    console.log(`Article axios Status: ${res.status} ${res.statusText}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
