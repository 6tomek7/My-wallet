import "./App.css";
import Navbar from "./components/Navbar.js";
import React, { useState } from "react";
import Statistics from "./components/statistics/Statistics.js";

function App() {
  const [content, setContent] = useState(null);
  return (
    <div className="App container">
      <Navbar setContent={setContent} />
      <div>{content === "statistics" && <Statistics />}</div>
    </div>
  );
}

export default App;
