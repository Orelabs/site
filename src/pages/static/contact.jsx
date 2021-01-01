import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import $ from "jquery";
import { toast } from "react-toastify";

import "../../css/contact.css";

const baseURL = "http://localhost:9001";

export class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.lastMessageSent = null;
  }

  sendEmail = () => {
    let author = $("#emailAuthor").val();
    let subject = $("#emailSubject").val();
    let body = $("#emailBody").val();

    if (!body || body.length < 1) {
      toast.error('"Body" is a required field.');
      return;
    }

    let timeout = 10000;
    if (this.lastMessageSent && Date.now() - this.lastMessageSent < timeout) {
      toast.error(
        "You are being ratelimited. Wait up to 10 seconds, then try again."
      );
      return;
    }

    fetch(`${baseURL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        author,
        subject,
        body
      })
    });

    this.lastMessageSent = Date.now();
    toast.success("Success! Your message was sent.");
    $("#emailAuthor").val("");
    $("#emailSubject").val("");
    $("#emailBody").val("");
  };

  render() {
    return (
      <>
        <h1>Contact Us</h1>
        <div className="emailContainer">
          <label htmlFor="emailAuthor">
            Email{" "}
            <span style={{ color: "lightgrey", fontSize: "14px" }}>
              (optional)
            </span>
          </label>
          <InputGroup>
            <FormControl
              id="emailAuthor"
              placeholder="Your email or alias..."
              autoComplete="off"
            />
          </InputGroup>
          <label htmlFor="emailSubject">
            Subject{" "}
            <span style={{ color: "lightgrey", fontSize: "14px" }}>
              (optional)
            </span>
          </label>
          <InputGroup>
            <FormControl
              id="emailSubject"
              placeholder="Message subject..."
              autoComplete="off"
            />
          </InputGroup>
          <label htmlFor="emailBody">
            Body <span style={{ color: "#cc0000", userSelect: "none" }}>*</span>
          </label>
          <InputGroup>
            <FormControl
              as="textarea"
              id="emailBody"
              placeholder="Message body..."
              rows="5"
            />
          </InputGroup>
        </div>
        <Button variant="success" onClick={this.sendEmail}>
          <FaPaperPlane />
          Send
        </Button>
      </>
    );
  }
}
