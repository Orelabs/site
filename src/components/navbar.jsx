import React from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import {
  FaHome,
  FaShoppingCart,
  FaServer,
  FaRegQuestionCircle,
  FaUsers
} from "react-icons/fa";
import "../css/navbar.css";

export function NavBar() {
  const NavLink = ({ name, link, tooltip }) => {
    return (
      <OverlayTrigger
        placement="bottom"
        delay={100}
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <Nav.Link href={`${link}`}>{name}</Nav.Link>
      </OverlayTrigger>
    );
  };

  return (
    <div className="navbarContainer">
      <Navbar bg="dark" variant="dark" expand="lg">
        <OverlayTrigger
          placement="bottom"
          delay={100}
          overlay={<Tooltip>Home</Tooltip>}
        >
          <Navbar.Brand href="/">Orelabs</Navbar.Brand>
        </OverlayTrigger>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              name="Products"
              link="/products"
              tooltip="View our official products available to everyone!"
            />
            <NavLink
              name="Third-Parties"
              link="/third-parties"
              tooltip="View our third-party sponsors and partners"
            />
          </Nav>
          <Dropdown focusFirstItemOnShow={false} id="navbarDropdown">
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
              More
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight={true}>
              <Dropdown.Item active={false} href="/">
                <FaHome />
                Home
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item active={false} href="/products">
                <FaShoppingCart />
                Products
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item active={false} href="/tos">
                <FaServer />
                Terms of Service
              </Dropdown.Item>
              <Dropdown.Item active={false} href="/privacy">
                <FaServer />
                Privacy Notice
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item active={false} href="/staff">
                <FaUsers />
                Staff Team
              </Dropdown.Item>
              <Dropdown.Item active={false} href="/support">
                <FaRegQuestionCircle />
                Support
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown
                focusFirstItemOnShow={false}
                className="mascotsDropdown"
                drop="left"
              >
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  Mascots
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight={true}>
                  <Dropdown.Item active={false} href="/oreopics">
                    <img
                      className="mascotImg"
                      alt=""
                      src="https://cdn.discordapp.com/attachments/723589296681910322/792062758827982858/puppy_oreo.png"
                    />
                    Oreo
                  </Dropdown.Item>
                  <Dropdown.Item active={false} href="/poppetpics">
                    <img
                      className="mascotImg"
                      alt=""
                      src="https://cdn.discordapp.com/attachments/729796250165182588/792059916394954762/unknown.png"
                    />
                    Poppet
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
