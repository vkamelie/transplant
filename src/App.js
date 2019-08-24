import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App" />
        <Navbar />

        <Fragment>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
