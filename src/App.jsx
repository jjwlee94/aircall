import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./components/Header.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";
import Menu from "./components/Menu.jsx";

const App = () => {
  const [state, setState] = useState("default");
  const [allCalls, setAllCalls] = useState([]);

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
    <div className="container">
      <Header />
      <div className="container-view">
        <ActivityFeed allCalls={allCalls} setAllCalls={setAllCalls} />
      </div>
      <Menu state={state} setState={setState} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
