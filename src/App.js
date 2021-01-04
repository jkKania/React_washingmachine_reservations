import React, { Component } from "react";
import "./App.css";
import { Reservations, Users } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavbarComponent } from "./components/NavbarComponent";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Router>
          <Switch>
            <Route path="/reservations">
              <Reservations />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
