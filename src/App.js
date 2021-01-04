import React, { Component } from "react";
import "./App.css";
import { Reservations } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Users } from "./components/Users";
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
