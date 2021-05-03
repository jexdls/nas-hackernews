import React, { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Load from "./Components/Load";
import New from "./Components/New";
import Past from "./Components/Past";
import Articles from "./Components/Articles";
import fetchedArticleItems from "./data.json";

function App() {
  const [articleItems, setArticleItems] = useState(fetchedArticleItems);

  return (
    <div className="App">
      <Banner />

      {/* New Button and Past Button in a flex container */}
      <div className="flex m-4 space-x-3">
        <New />
        <Past />
      </div>

      <Articles articleItems={articleItems} />

      <Load />
      <Footer />
    </div>
  );
}

export default App;
