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
  const [articleMode, setArticleMode] = useState("newstories");
  const [iterate, setIterate] = useState(0);

  useEffect(() => {
    // Get the ids of new articles. store it to articleIds
    getArticleIds(articleMode).then((articleIds) => setArticleIds(articleIds));
    console.log(articleIds);
  }, [articleMode]);

  return (
    <div className="App h-screen flex flex-col">
      <Banner />
      {articleMode}
      <div className="p-6">
        <Sort setArticleMode={setArticleMode} />
        {/* show loading screen when the data hasnt arrived yet*/}
        {articleIds ? (
          <Articles
            articleIds={articleIds}
            articleMode={articleMode}
            iterate={iterate}
          />
        ) : (
          <LoadingCard />
        )}
        <Load iterate_state={{ iterate, setIterate }} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
