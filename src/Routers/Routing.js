import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import ProductPage from "../Pages/ProductPage";

function Routing() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/Products" component={ProductPage}>
          <Products />
        </Route>
        <Route path="/About"></Route>
      </Switch>
    </Router>
  );
}

export default Routing;
