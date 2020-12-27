import React from "react";
import ReactDOM from "react-dom";

import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

import { AppPage } from "./App";

import { NavBar } from "./components";
import {
  TOSPage,
  PrivacyPage,
  ThirdPartiesPage,
  OreoPicsPage,
  ProductsPage,
  StaffPage,
  SupportServerRedirect
} from "./pages";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const PageNotFound = () => (
  <>
    <h1>404</h1>
    <div style={{ marginBottom: "20px" }}>
      The page you are looking for does not exist.
    </div>
    <Button variant="success" href="/">
      <FaHome style={{ marginRight: "10px" }} />
      Return Home
    </Button>
  </>
);

const Routes = () => (
  <>
    <NavBar />
    <div className="app">
      <ToastContainer
        position="top-right"
        pauseOnFocusLoss={false}
        autoClose={4000}
      />
      <BrowserRouter>
        <Switch>
          {/* Routes */}
          <Route exact path="/" component={AppPage} />
          <Route exact path="/tos" component={TOSPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/third-parties" component={ThirdPartiesPage} />
          <Route exact path="/oreopics" component={OreoPicsPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/staff" component={StaffPage} />

          {/* Component Redirects */}
          <Route exact path="/support" component={SupportServerRedirect} />

          {/* Redirects */}
          <Redirect from="/termsofservice" to="/tos" />
          <Redirect from="/privacynotice" to="/privacy" />
          <Redirect from="/thirdparties" to="third-parties" />

          {/* Errors */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Routes />, rootElement);
