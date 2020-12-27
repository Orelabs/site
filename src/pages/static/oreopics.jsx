import React, { Component, useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { MdSystemUpdateAlt } from "react-icons/md";
import "../../css/oreopics.css";

const baseURL = "https://orelabs-api.herokuapp.com";

export class OreoPicsPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { oreopics: [], auth: "", admin: false };
  }

  async componentDidMount() {
    fetch(`${baseURL}/oreopics`, { method: "GET" })
      .then((oreopics) => oreopics.json())
      .then((oreopics) => {
        fetch(`${baseURL}/oreopics/auth`, { method: "GET" })
          .then((auth) => auth.text())
          .then((auth) => {
            this.setState({
              oreopics,
              auth,
              admin: this.state.admin
            });
          });
      });
  }

  handleAuthCodeSubmit = () => {
    let val = document.getElementById("authCodeInput").value;

    if (typeof val === "string" && val.length > 0 && val === this.state.auth) {
      toast.success(
        <>
          <h3>Authorized</h3>
          <div>
            Successful authorization code! You can now add more oreo pictures.
          </div>
        </>
      );

      let { oreopics, auth } = this.state;

      this.setState({
        oreopics,
        auth,
        admin: true
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
        <div style={{ display: "inline-block" }}>
          {typeof this.state.oreopics === "object" &&
          this.state.oreopics.length > 0 ? (
            this.state.oreopics.map((oreopic) => {
              return (
                <div className="oreopicContainer" key={`${oreopic.link}`}>
                  <img
                    className="oreopic"
                    src={`${oreopic.link}`}
                    alt=""
                    onClick={() => window.open(`${oreopic.link}`, "_blank")}
                  />
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
  const { admin, auth, oreopics } = props.state;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewOreo = () => {
    if (!admin) return;

    let inputVal = document.getElementById("oreoInputAdd").value.trim();

    if (
      (inputVal.startsWith("https://") || inputVal.startsWith("http://")) &&
      inputVal.includes(".")
    ) {
      fetch(`${baseURL}/oreopics`, {
        method: "POST",
        headers: {
          Authentication: auth,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ link: inputVal })
      }).then((res) => res.json());
      toast.success(
        <>
          <h3>Image Added</h3>
          Image successfully added! Refresh to view.
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
    if (!admin) return;

    let inputVal = document.getElementById("oreoInputDelete").value.trim();

    if (
      (inputVal.startsWith("https://") || inputVal.startsWith("http://")) &&
      inputVal.includes(".")
    ) {
      if (!oreopics.find((pic) => pic.link === inputVal))
        return toast.error(
          <>
            <h3>Invalid Link</h3>That image link doesn't exist.
          </>
        );

      fetch(`${baseURL}/oreopics`, {
        method: "DELETE",
        headers: {
          Authentication: auth,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ link: inputVal })
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);

          toast.info(
            <>
              <h3>Image Deleted</h3>
              Image successfully deleted, refresh to view. If you deleted it on
              accident, you can copy{" "}
              <span
                className="js-link"
                onClick={() => {
                  navigator.clipboard.writeText(inputVal);
                }}
              >
                the link
              </span>{" "}
              to add it again.
            </>
          );
        });
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

  return admin ? (
    <>
      <h3 style={{ marginBottom: "40px" }}>Add or Delete an Oreo</h3>
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
            Add an Oreo
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
            Delete an Oreo
          </Button>
        </InputGroup>
      </div>
    </>
  ) : (
    <>
      <Button variant="warning" onClick={handleShow}>
        <MdSystemUpdateAlt />
        Add or delete an Oreo
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
