import React, { useState, useEffect } from "react";
import "./App.css";

import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Load from "./Components/Load";
import Articles from "./Components/Articles";
import Sort from "./Components/Sort";
import LoadingCard from "./Components/ArticlesComponents/ArticleCardComponents/LoadingCard";

import { getArticleIds } from "./Api";

function App() {
  const [articleIds, setArticleIds] = useState();
  const [story, setStory] = useState("newstories");

  // this useEffect is ran only once
  useEffect(() => {
    // Get the ids of new articles according to hackernews API and store it to articleIds
    getArticleIds(story).then((articleIds) => setArticleIds(articleIds));
    // console.log(articleIds);
  }, [story]);

  return (
    <div className="App h-screen flex flex-col">
      <Banner />
      <div className="p-6">
        <Sort />
        {/* show loading screen when the data hasnt arrived yet*/}
        {articleIds ? <Articles articleIds={articleIds} /> : <LoadingCard />}
        <Load />
      </div>
      <button
        onClick={() => {
          story == "newstories"
            ? setStory("topstories")
            : setStory("newstories");
        }}
      >
        click
      </button>
      <Footer />
    </div>
  );
}

export default App;
