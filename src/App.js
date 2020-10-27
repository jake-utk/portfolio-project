import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation"

const App = () => {
	return <div>
    <header>
      <Navigation />
    </header>
    <main>
      NewsReeder will go here!
    </main>
    <footer>
      Small footer message...
    </footer>

  </div>;
};

export default App;
