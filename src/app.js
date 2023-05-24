import React from "react";
import CardList from "./cardlist";
import SearchBox from "./searchbox"
import { robots } from "./robots";

const App = () => {
  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
