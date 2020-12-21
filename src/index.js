import React from "react";
import ReactDOM from "react-dom";

import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { AppPage } from "./App";

import { NavBar } from "./components";
import { TOSPage, PrivacyPage } from "./pages";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Routes = () => (
  <>
    <NavBar />
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AppPage} />
          <Route exact path="/tos" component={TOSPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
        </Switch>
      </BrowserRouter>
    </div>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Routes />, rootElement);
