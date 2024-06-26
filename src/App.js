import "./App.css";
import Navbar from "./components/Navbar.js";
import React, { useState } from "react";
import Statistics from "./components/statistics/Statistics.js";
import Login from "./components/Login.js";
import Registration from "./pages/Registration.js";

function App() {
  const [content, setContent] = useState(null);
  return (
    <div className="App container">
      <Navbar setContent={setContent} />
      <div>{content === "statistics" && <Statistics />}</div>
      <div>{content === "login" && <Login />}</div>
      <div>{content === "registration" && <Registration />}</div>
    </div>
  );
}

export default App;
