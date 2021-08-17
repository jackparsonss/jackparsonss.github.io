import "./App.css";
import Header from "./Components/Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>THIS WEBSITE IS CURRENTLY UNDER DEVELOPMENT</h1>
      <Router>
        <Switch>
          <Header />
          <Route path="/">
            <h3>Intro Page</h3>
          </Route>
          <Route path="/about">
            <h3>About Me Page</h3>
          </Route>
          <Route path="/project1">
            <h3>Personal Project 1</h3>
          </Route>
          <Route path="/project2">
            <h3>Personal Project 2</h3>
          </Route>
          <Route path="/project3">
            <h3>Personal Project 3</h3>
          </Route>
          <Route path="/contact">
            <h3>Contact Me</h3>
          </Route>
          <Route path="/footer">
            <h3>Footer</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
