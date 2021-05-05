import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticlesComponents/ArticleCard";
import { getArticle } from "../Api";
import LoadingCard from "./ArticlesComponents/ArticleCardComponents/LoadingCard";

export default function Articles({ articleIds, articleMode, iterate }) {
  const numberOfItemsToLoad = 10;
  const [articles, setArticles] = useState([]);
  const [prevMode, setPrevMode] = useState("newstories");

  useEffect(() => {
    if (iterate != 0) {
      for (
        let i = iterate * numberOfItemsToLoad;
        i < numberOfItemsToLoad + numberOfItemsToLoad * iterate;
        i++
      ) {
        console.log(`i is ${i}`);
        getArticle(articleIds[i]).then((article) => {
          setArticles((curArticles) => [...curArticles, article]);
        });
      }
    }
  }, [iterate, articleIds, articleMode]);
  return (
    <div className="mt-6 space-y-6">
      {/* show loading screen when the data hasnt arrived yet*/}
      {articles ? (
        /* Map through the articles JSON and generate a <ArticleCard/> component for each article  */
        articles.map((article) => <ArticleCard data={article} />)
      ) : (
        <LoadingCard />
      )}
    </div>
  );
}
