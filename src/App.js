import React, { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Load from "./Components/Load";
import Articles from "./Components/Articles";
import Sort from "./Components/Sort";
import fetchedArticleItems from "./data.json";

function App() {
  const [articleItems, setArticleItems] = useState(fetchedArticleItems);

  return (
    <div className="App flex flex-col space-y-2">
      <Banner />
      <Sort />
      <Articles articleItems={articleItems} />
      <Load />
      <Footer />
    </div>
  );
}

export default App;
