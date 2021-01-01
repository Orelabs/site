import React, { Component } from "react";
import $ from "jquery";
import { toast } from "react-toastify";

import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

import "../../css/signup.css";
const baseURL = "http://localhost:9001";

export class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { authorizationCode: "" };
  }

  componentDidMount() {
    fetch(`${baseURL}/oreopics/auth`, {
      method: "GET"
    })
      .then((res) => res.text())
      .then((res) => this.setState({ authorizationCode: res }));

    $.get("https://www.cloudflare.com/cdn-cgi/trace", function (data) {
      let params = new URLSearchParams(data.replace(/\n/g, "&"));
      let ip = params.get("ip");

      console.log(ip);
    });
  }

  handleSubmit = () => {
    let username = $("#usernameInput").val();
    let email = $("#emailInput").val();
    let password = $("#passwordInput").val();

    if (!email) {
      toast.error('"Email" is a required field.');
      $("#emailInput").focus();
      return;
    }
    if (!password) {
      toast.error('"Password" is a required field.');
      $("#passwordInput").focus();
      return;
    }

    //  checks
    let err = null;
    let elemID = null;
    if (password.length < 8) {
      err = (
        <>
          Your password must be at least 8 characters long.
          <br />
          Current password length: {password.length}
        </>
      );
      elemID = "passwordInput";
    }
    if (password.length > 100) {
      err = (
        <>
          Your password cannot be more than 100 characters long.
          <br />
          Current password length: {password.length}
        </>
      );
      elemID = "passwordInput";
    }
    if (!email.includes(".")) {
      err = 'Email is missing a "."';
      elemID = "emailInput";
    }
    if (!email.includes("@")) {
      err = 'Email is missing a "@"';
      elemID = "emailInput";
    }
    if (email.length < 4) {
      err = "Invalid email";
      elemID = "emailInput";
    }
    if (username.length > 20) {
      err = "Username cannot be longer than 20 characters.";
      elemID = "usernameInput";
    }
    if (err) {
      $(`#${elemID}`).focus();
      return toast.error(err);
    }
    if (!username || !username.length > 0) {
      username = email.length > 20 ? email.slice(0, 20 - email.length) : email;
    }

    toast.warning("Creating your account...");

    fetch(`${baseURL}/accounts/create`, {
      method: "POST",
      headers: {
        Authorization: this.state.authorizationCode,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success("Your account was successfully created! Redirecting...");

        setTimeout(() => {
          window.location.href = "/profile?n=1";
        }, 2500);
      })
      .catch(() => {
        toast.error(
          `We ran into an error while creating your account, please try again.`
        );
      });
  };

  render() {
    return (
      <>
        <div className="signupContainer">
          <h1>Sign Up</h1>
          <p>Create an Orelabs account</p>
          <label htmlFor="usernameInput" className="inputLabel">
            Username
            <span
              style={{
                fontSize: "13px",
                color: "lightgrey",
                userSelect: "none"
              }}
            >
              {" "}
              (optional)
            </span>
          </label>
          <InputGroup className="signupInput">
            <FormControl
              placeholder="Username"
              id="usernameInput"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <label htmlFor="emailInput" className="inputLabel">
            Email
            <span style={{ color: "#cc0000", userSelect: "none" }}> *</span>
          </label>
          <InputGroup className="signupInput">
            <FormControl
              placeholder="Email"
              id="emailInput"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <label htmlFor="passwordInput" className="inputLabel">
            Password
            <span style={{ color: "#cc0000", userSelect: "none" }}> *</span>
          </label>
          <InputGroup className="signupInput lastInput">
            <FormControl
              placeholder="Password"
              type="password"
              id="passwordInput"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <div className="passwordRequirements">
            Make sure your password is at least 8 characters long.
          </div>
          <Button onClick={this.handleSubmit} variant="info">
            <FaUserPlus />
            Create Account
          </Button>
          <br />
          <div style={{ marginTop: "40px" }}>
            <span
              style={{
                color: "lightgrey",
                fontSize: "14px"
              }}
            >
              Already have an account?
            </span>
            <Button
              variant="outline-light"
              href="/login"
              style={{ marginLeft: "10px" }}
              size="sm"
            >
              <FaSignInAlt /> Log In
            </Button>
          </div>
        </div>
      </>
    );
  }
}
