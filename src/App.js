import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Load from "./Components/Load";
import Articles from "./Components/Articles";
import Sort from "./Components/Sort";
import fetchedArticleItems from "./data.json";

import "firebase/firestore";
import { useFirestore } from "reactfire";

const urlTop = "https://hacker-news.firebaseio.com/v0/topstories.json";
const urlNew = "https://hacker-news.firebaseio.com/v0/newstories.json";

function App() {
  const [topArticleItems, setTopArticleItems] = useState(fetchedArticleItems);

  useEffect(() => {
    useFirestore().collection("hacker-news").doc("topstories");

    // useFirestore()
    // .collection("")
    // .onSnapshot((snapshot) => {
    //   setTopArticleItems(snapshot.docs.map((doc) => doc.data()));
    // });
  }, []);
  return (
    <div className="App h-screen flex flex-col">
      <Banner />
      <Sort />
      <Articles articleItems={topArticleItems} />
      <Load />
      <Footer />
    </div>
  );
}

export default App;
