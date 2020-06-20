import React from "react";
import "./Scss/App.scss";
import Login from "./Components/Login";
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Home} path="/chat" />
          <Route component={Login} path="" exact />
          <Redirect to="" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
