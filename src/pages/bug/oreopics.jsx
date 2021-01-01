import React, { Component, useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import $ from "jquery";

import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { MdSystemUpdateAlt } from "react-icons/md";
import "../../css/oreopics.css";

const baseURL = "https://orelabs-api.herokuapp.com";

export class OreopicsPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { oreopics: [], authCode: "", authorized: false };
  }

  async componentDidMount() {
    fetch(`${baseURL}/oreopics`, { method: "GET" })
      .then((oreopics) => oreopics.json())
      .then((oreopics) => {
        fetch(`${baseURL}/oreopics/auth`, { method: "GET" })
          .then((authCode) => authCode.text())
          .then((authCode) => {
            this.setState({
              oreopics,
              authCode,
              authorized: this.state.authorized
            });
          });
      });
  }

  handleAuthCodeSubmit = () => {
    let val = $("#authCodeInput").val().trim();

    if (
      typeof val === "string" &&
      val.length > 0 &&
      val === this.state.authCode
    ) {
      toast.success(
        <>
          <h3>Authorized</h3>
          <div>
            Successful authorization code! You can now add more Oreo pictures.
          </div>
        </>
      );

      let { oreopics, authCode } = this.state;

      this.setState({
        oreopics,
        authCode,
        authorized: true
      });
    } else {
      toast.error(
        <>
          <h3>Invalid Code</h3>
          Invalid authorization code, try again.
        </>
      );
    }
  };

  render() {
    return (
      <>
        <img
          src="https://cdn.discordapp.com/attachments/723589296681910322/793868998948683796/6f1c9c784cbad903b4c7fb84514987c9.png"
          alt=""
        />
        <div style={{ display: "inline-block" }}>
          {typeof this.state.oreopics === "object" &&
          this.state.oreopics.length > 0 ? (
            this.state.oreopics.map((oreopic) => {
              return (
                <div className="oreopicContainer" key={`${oreopic.link}`}>
                  <CopyToClipboard text={`${oreopic.link}`}>
                    <img
                      className="oreopic"
                      src={`${oreopic.link}`}
                      alt=""
                      onClick={() => {
                        toast.success(
                          <>
                            <h3>Link Copied</h3>Image link copied to clipboard!
                          </>
                        );
                      }}
                    />
                  </CopyToClipboard>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>

        <div className="oreopicsInputContainer">
          <OreopicsInput
            submitFunction={this.handleAuthCodeSubmit}
            state={this.state}
          />
        </div>
      </>
    );
  }
}

function OreopicsInput(props) {
  var { authorized, authCode, oreopics } = props.state;

  const [show, setShow] = useState(false);

  // FIX LATER //
  authorized = true;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewOreo = () => {
    if (!authorized) return;

    let inputVal = $("#oreoInputAdd").val().trim();

    if (
      (inputVal.startsWith("https://") || inputVal.startsWith("http://")) &&
      inputVal.includes(".")
    ) {
      fetch(`${baseURL}/oreopics`, {
        method: "POST",
        headers: {
          Authorization: authCode,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ link: inputVal })
      });
      $("#oreoInputAdd").val("");
      toast.success(
        <>
          <h3>Image Added</h3>
          Image successfully added! If it isn't appearing, it's because you
          don't have authorization.
        </>
      );
    } else {
      toast.error(
        <>
          <h3>Invalid Link</h3>
          That isn't a valid link, try again.
        </>
      );
      return;
    }
  };

  const handleDeleteOreo = () => {
    if (!authorized) return;

    let inputVal = $("#oreoInputDelete").val().trim();

    if (
      (inputVal.startsWith("https://") || inputVal.startsWith("http://")) &&
      inputVal.includes(".")
    ) {
      if (!oreopics.find((pic) => pic.link === inputVal))
        return toast.error(
          <>
            <h3>Invalid Link</h3>
            That image link doesn't exist.
          </>
        );

      fetch(`${baseURL}/oreopics`, {
        method: "DELETE",
        headers: {
          Authorization: authCode,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ link: inputVal })
      });
      $("#oreoInputDelete").val("");

      toast.info(
        <>
          <h3>Image Deleted</h3>
          Image successfully deleted, refresh to view. If you deleted it on
          accident, you can view{" "}
          <span
            className="js-link"
            onClick={() => window.open(`${inputVal}`, "_blank")}
          >
            the link
          </span>{" "}
          here.
        </>
      );
    } else {
      toast.error(
        <>
          <h3>Invalid Link</h3>
          That isn't a valid link, try again.
        </>
      );
      return;
    }
  };

  return authorized ? (
    <>
      <h3 style={{ marginBottom: "40px" }}>Add or Delete Oreo Images</h3>
      <div className="oreoInputContainer">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter an image link..."
            aria-describedby="basic-addon1"
            style={{ borderRadius: "5px" }}
            id="oreoInputAdd"
            autoComplete="off"
          />
          <Button
            variant="success"
            style={{ marginLeft: "20px" }}
            onClick={handleNewOreo}
          >
            <FaPlusCircle />
            Add Oreo
          </Button>
        </InputGroup>
      </div>
      <div className="oreoInputContainer">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter an existing image link..."
            aria-describedby="basic-addon1"
            style={{ borderRadius: "5px" }}
            id="oreoInputDelete"
            autoComplete="off"
          />
          <Button
            variant="danger"
            style={{ marginLeft: "20px" }}
            onClick={handleDeleteOreo}
          >
            <FaTrash />
            Delete Oreo
          </Button>
        </InputGroup>
      </div>
    </>
  ) : (
    <>
      <Button variant="warning" onClick={handleShow}>
        <MdSystemUpdateAlt />
        Add or delete Oreo images
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="font-poppins">
            <h2>Authorization</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font-poppins" style={{ marginBottom: "10px" }}>
            Enter an authorization code to add or delete an oreo image.
          </div>
          <InputGroup size="lg">
            <FormControl
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Enter authorization code..."
              id="authCodeInput"
              type="password"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="font-poppins"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="success"
            className="font-poppins"
            onClick={() => {
              handleClose();
              props.submitFunction();
            }}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
