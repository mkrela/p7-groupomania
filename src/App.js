import "./styles/settings.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <h1>Bienvenue sur mon site</h1>
        <Route exact path="/connexion" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
