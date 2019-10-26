import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App.js";
import QRCode from "./qrCode.js";

export default class MainRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact patch="/" component={App} />
          <Route exact patch="/qrcode" component={QRCode} />
        </Switch>
      </Router>
    );
  }
}
