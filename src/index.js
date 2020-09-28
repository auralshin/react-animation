import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Game from "./Game";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/game" exact component={Game}></Route>
        <Route path="/loader" exact component={Loader}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
