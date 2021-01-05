import React from "react";
import ReactDOM from "react-dom";

import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

import { AppPage } from "./App";

import { NavBar, CookiesNotice } from "./components";
import {
  TOSPage,
  PrivacyPage,
  ThirdPartiesPage,
  OreopicsPage,
  ProductsPage,
  StaffPage,
  SupportServerRedirect,
  SignupPage,
  LoginPage,
  ProfilePage,
  ContactPage,
  JavaScriptTutorialPage,
  JavaScriptTutorialExamplePage,
  HandDrawnArtPage,
  DigitalArtPage
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
    {/* Syntax highlighting for code examples */}
    <link
      rel="stylesheet"
      href="https://highlightjs.org/static/demo/styles/railscasts.css"
    />
    {/* Navbar */}
    <NavBar />
    <div className="app">
      {/* Toasts */}
      <ToastContainer
        position="top-right"
        pauseOnFocusLoss={false}
        autoClose={4000}
      />
      {/* Cookies Notice */}
      <CookiesNotice />
      {/* Routes */}
      <BrowserRouter>
        <Switch>
          {/* Main Routes */}
          <Route exact path="/" component={AppPage} />
          <Route exact path="/tos" component={TOSPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/third-parties" component={ThirdPartiesPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/staff" component={StaffPage} />
          <Route exact path="/contactus" component={ContactPage} />
          {/* p0tato's Pages */}
          <Route
            exact
            path="/tutorials/javascript"
            component={JavaScriptTutorialPage}
          />
          <Route
            exact
            path="/tutorials/javascript/example"
            component={JavaScriptTutorialExamplePage}
          />
          {/* bug's Pages */}
          <Route exact path="/oreopics" component={OreopicsPage} />
          <Route exact path="/hand-drawn-art" component={HandDrawnArtPage} />
          <Route exact path="/digital-art" component={DigitalArtPage} />
          {/* Account Management */}
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />S
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
