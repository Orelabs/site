import React from "react";
import ReactDOM from "react-dom";

import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { AppPage } from "./App";

import { NavBar } from "./components";
import { TOSPage, PrivacyPage, ThirdPartiesPage } from "./pages";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Routes = () => (
  <>
    <NavBar />
    <div className="app">
      <BrowserRouter>
        <Switch>
          {/* Routes */}
          <Route exact path="/" component={AppPage} />
          <Route exact path="/tos" component={TOSPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/third-parties" component={ThirdPartiesPage} />

          {/* Redirects */}
          <Redirect from="/termsofservice" to="/tos" />
          <Redirect from="/privacynotice" to="/privacy" />
          <Redirect from="/thirdparties" to="third-parties" />
        </Switch>
      </BrowserRouter>
    </div>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Routes />, rootElement);
