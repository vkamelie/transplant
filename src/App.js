import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App" />
      <Navbar />

      <Fragment>
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
