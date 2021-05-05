import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticlesComponents/ArticleCard";
import { getArticle } from "../Api";
import LoadingCard from "./ArticlesComponents/ArticleCardComponents/LoadingCard";

export default function Articles({ articleIds }) {
  const [articles, setArticles] = useState([]);

  // this useEffect is ran only once
  useEffect(() => {
    let temp = [];
    // get top 5 of articles
    for (let i = 0; i < 5; i++) {
      getArticle(articleIds[i]).then((article) => {
        setArticles((curArticles) => [...curArticles, article]);
      });
    }
    // B takes precedence before A when sorting.
    // So, this sorts articles from latest to old
    // articles.sort((a, b) => (parseInt(a.time) > parseInt(b.time) ? 1 : -1));
  }, []);
  return (
    <div className="mt-6 space-y-6">
      {/* show loading screen when the data hasnt arrived yet*/}
      {articles ? (
        /* Map through the articles JSON and generate a <ArticleCard/> component for each article  */
        articles.map((article) => (
          <ArticleCard data={article} key={article.id} />
        ))
      ) : (
        <LoadingCard />
      )}
    </div>
  );
}
