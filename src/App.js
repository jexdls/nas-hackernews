import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Load from "./Components/Load";
import Articles from "./Components/Articles";
import Sort from "./Components/Sort";
import { getArticleIds } from "./Api";

function App() {
  const [articleIds, setArticleIds] = useState();

  // this useEffect is ran only once
  useEffect(() => {
    // Get the ids of new articles according to hackernews API and store it to articleIds
    getArticleIds("newstories").then((articleIds) => setArticleIds(articleIds));
  }, []);

  return (
    <div className="App h-screen flex flex-col">
      <Banner />
      <Sort />
      {/* show loading screen when the data hasnt arrived yet*/}
      {articleIds ? <Articles articleIds={articleIds} /> : "Loading..."}
      <Load />
      <Footer />
    </div>
  );
}

export default App;
