const axios = require("axios");
const urlBase = "https://hacker-news.firebaseio.com/v0/";

// return IDs of a set of articles from articlesURL
export const getArticleIds = async (articlesURL) => {
  try {
    const res = await axios
      .get(`${urlBase}${articlesURL}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// give an article id and returns an article data
export const getArticle = async (articleId) => {
  try {
    const res = await axios
      .get(`${urlBase}item/${articleId}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.log(err);
  }
  e;
};
