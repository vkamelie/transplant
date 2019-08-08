import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>
    </section>
  );
};
export default Routes;
