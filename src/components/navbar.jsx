import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";

export function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Dropdown navbar={true} focusFirstItemOnShow={false}>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight={true}>
              <Dropdown.Item active={false} href="/">
                Home
              </Dropdown.Item>
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
    </>
  );
}
