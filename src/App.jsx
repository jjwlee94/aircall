import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Components
import Header from "./components/Header.jsx";
import Archive from "./components/ArchiveFeed/Archive.jsx";
import ActivityFeed from "./components/ActivityFeed/ActivityFeed.jsx";
import Menu from "./components/Menu.jsx";

const App = () => {
  const [allCalls, setAllCalls] = useState([]);

  // Get all call data
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://aircall-job.herokuapp.com/activities")
        .then((res) => {
          setAllCalls(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="container-view">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ActivityFeed allCalls={allCalls} setAllCalls={setAllCalls} />
              }
            />
            <Route
              path="/archive"
              element={
                <Archive allCalls={allCalls} setAllCalls={setAllCalls} />
              }
            />
          </Routes>
        </div>
        <Menu />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
