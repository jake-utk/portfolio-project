import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation"
import NewsReader from "./components/NewsReader"

const App = () => {
  const [newsArticles, setNewsArticles] = useState()
  const url = ''

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setNewsArticles(res)
      })
  })


	return <div>
    <header>
      <Navigation />
    </header>
    <main>
      <NewsReader />
    </main>
    <footer>
      Small footer message...
    </footer>

  </div>;
};

export default App;
