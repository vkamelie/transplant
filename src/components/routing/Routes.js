import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../auth/Login";
import Posts from "../posts/Posts";
import Resources from "../layout/Resources";
import Contact from "../layout/Contact";
import About from "../layout/About";

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </section>
  );
};
export default Routes;
