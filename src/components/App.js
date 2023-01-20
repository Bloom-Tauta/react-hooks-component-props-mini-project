import React from "react";
import blogData from "../data/blog";
import Header from './Components/Header'
import About from "./Components/About"
import ArticleList from "./Components/ArticleLIst"
import Article from "./Components/Article"

console.log(blogData);

function App() {
  return (
    <div className="App">
      < Header />
      < About />
      < ArticleList />
      < Article />
    </div>
  );
}

export default App;
