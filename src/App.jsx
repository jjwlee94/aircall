import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";
import Menu from "./components/Menu.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <ActivityFeed />
      </div>
      <Menu />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
