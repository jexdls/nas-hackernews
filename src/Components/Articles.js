import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticlesComponents/ArticleCard";
import { getArticle } from "../Api";
import LoadingCard from "./ArticlesComponents/ArticleCardComponents/LoadingCard";

export default function Articles({ articleIds, articleMode, iterate }) {
  const numberOfItemsToLoad = 10;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Reset the articles loaded in the screen if a different button (New, Top or Past) is clicked
    if (iterate === 0) {
      setArticles([]);
    }

    // Get article x times and store it to articles which is the array used for mapping through to show list of articles
    for (
      let i = iterate * numberOfItemsToLoad;
      i < numberOfItemsToLoad + numberOfItemsToLoad * iterate;
      i++
    ) {
      getArticle(articleIds[i]).then((article) => {
        setArticles((curArticles) => [...curArticles, article]);
      });
    }
  }, [iterate, articleMode, articleIds]);
  return (
    <div className="space-y-6">
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
