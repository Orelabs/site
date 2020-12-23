import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import "../css/navbar.css";

export function NavBar() {
  return (
    <div className="navbarContainer">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Orelabs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/thirdparties">Third-Parties</Nav.Link>
          </Nav>
          <Dropdown focusFirstItemOnShow={false} id="navbarDropdown">
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
              More
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight={true}>
              <Dropdown.Item active={false} href="/">
                Home
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item active={false} href="/tos">
                Terms of Service
              </Dropdown.Item>
              <Dropdown.Item active={false} href="/privacy">
                Privacy Notice
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
