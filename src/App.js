import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Load from "./Components/Load";
import Articles from "./Components/Articles";
import Sort from "./Components/Sort";
import LoadingCard from "./Components/ArticlesComponents/ArticleCardComponents/LoadingCard";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { getArticleIds } from "./Api";

function App() {
  // Array of ids of article
  const [articleIds, setArticleIds] = useState();
  // If the current mode is New or Top ,etc
  const [articleMode, setArticleMode] = useState("newstories");
  // How many times load more is clicked
  const [iterate, setIterate] = useState(0);
  // when isSortFixed is true, the tab sticks to the topscreen
  const [isSortFixed, setIsSortFixed] = useState(false);
  const elementRef = useRef();

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < -18) {
        setIsSortFixed(true);
      } else {
        setIsSortFixed(false);
      }
    },
    [],
    elementRef
  );

  useEffect(() => {
    // Get the ids of articles. store it to articleIds
    getArticleIds(articleMode).then((articleIds) => setArticleIds(articleIds));
  }, [articleMode]);

  return (
    <div className="App h-screen flex flex-col">
      <Banner elRef={elementRef} />
      <Sort
        articleMode_state={{ articleMode, setArticleMode }}
        setIterate={setIterate}
        isSortFixed={isSortFixed}
      />
      <div className="pb-6 px-6">
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
