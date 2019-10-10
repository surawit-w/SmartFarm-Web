import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App.js";

export default class MainRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact patch="/" component={App} />
        </Switch>
      </Router>
    );
  }
}
