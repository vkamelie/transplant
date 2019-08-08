import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App" />
      home page
      <Switch>
        <Route component={Routes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
