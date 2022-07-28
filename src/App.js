import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./todo_page/Details";
import Home from "./todo_page/Home";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",

        fontSize: "calc(10px + 2vmin)",
        color: "white",
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Details/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
