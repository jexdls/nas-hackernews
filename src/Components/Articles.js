import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticlesComponents/ArticleCard";
import { getArticle } from "../Api";
import LoadingCard from "./ArticlesComponents/ArticleCardComponents/LoadingCard";

export default function Articles({ articleIds }) {
  const [articles, setArticles] = useState([]);

  // this useEffect is ran only once
  useEffect(() => {
    // get top 5 of articles
    let temp = [];
    for (let i = 0; i < 5; i++) {
      getArticle(articleIds[i]).then((article) => {
        temp.push(article);
        setArticles(temp);
      });
    }
    // B takes precedence before A when sorting.
    // So, this sorts articles from latest to old
    // articles.sort((a, b) => (parseInt(a.time) > parseInt(b.time) ? 1 : -1));
  }, []);

  return (
    <div className="mt-6 space-y-6">
      {/* Map through the articles JSON and generate a <ArticleCard/> component for each article  */}
      {articles ? (
        articles.map((article) => (
          <ArticleCard data={article} key={article.id} />
        ))
      ) : (
        <LoadingCard />
      )}
    </div>
  );
}
