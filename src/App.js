import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import ArticleCard from "./Components/ArticleCard";
import Load from "./Components/Load";
import New from "./Components/New";
import Past from "./Components/Past";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="flex m-4 space-x-3">
        <New />
        <Past />
      </div>
      <ArticleCard />
      <ArticleCard />
      <Load />
      <Footer />
    </div>
  );
}

export default App;
