import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Button
} from "react-bootstrap";
import {
  FaHome,
  FaShoppingCart,
  FaRegQuestionCircle,
  FaUsers,
  FaCrown,
  FaCaretRight,
  FaBars,
  FaEnvelope,
  FaDiscord,
  FaCode,
  FaJs,
  FaLaptop,
  FaMountain,
  FaDog
} from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { AiTwotoneShopping } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { RiPaletteLine } from "react-icons/ri";
import "../css/navbar.css";

const baseURL = "http://localhost:9001";

const NavLink = ({ name, link, tooltip }) => {
  return (
    <OverlayTrigger
      placement="bottom"
      delay={100}
      overlay={<Tooltip>{tooltip}</Tooltip>}
    >
      <Nav.Link className="navlink" href={`${link}`}>
        {name}
      </Nav.Link>
    </OverlayTrigger>
  );
};

var account = <></>;

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    if (window.localStorage.getItem("userID")) {
      account = <>{JSON.stringify({})}</>;
    } else {
      account = <></>;
    }
  }

  render() {
    return (
      <div className="navbarContainer">
        <Navbar bg="dark" variant="dark" expand="lg">
          {/* Dropdown Menu */}

          <Dropdown focusFirstItemOnShow={false} id="navbarDropdown">
            <OverlayTrigger
              placement="bottom"
              delay={200}
              overlay={<Tooltip style={{ zIndex: "0" }}>Menu</Tooltip>}
            >
              <Dropdown.Toggle
                style={{ color: "white" }}
                variant="none"
                id="dropdown-basic"
                as={"span"}
              >
                <FaBars className="mainDropdownToggle" />
              </Dropdown.Toggle>
            </OverlayTrigger>
            <Dropdown.Menu alignRight={true} className="mainDropdownMenu">
              <Dropdown.Header>Navigation</Dropdown.Header>
              <Dropdown.Item active={false} href="/">
                <FaHome />
                Home
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Products</Dropdown.Header>
              <Dropdown.Item href="/products">
                <BiShoppingBag />
                Company Products
              </Dropdown.Item>
              <Dropdown
                focusFirstItemOnShow={false}
                drop="right"
                className="secondaryDropdown"
              >
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <AiTwotoneShopping />
                  p0tato <FaCaretRight />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight={true}>
                  <Dropdown.Header>Tutorials</Dropdown.Header>
                  <Dropdown.Item active={false} href="/tutorials/html">
                    <FaCode />
                    HTML Tutorial
                  </Dropdown.Item>
                  <Dropdown.Item active={false} href="/tutorials/javascript">
                    <FaJs />
                    JavaScript Tutorial
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                focusFirstItemOnShow={false}
                drop="right"
                className="secondaryDropdown"
              >
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <AiTwotoneShopping />
                  bug <FaCaretRight />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight={true} className="bug-dropdown">
                  <Dropdown.Header>ART</Dropdown.Header>
                  <Dropdown.Item
                    active={false}
                    href="/digital-art"
                    className="font-poppins"
                  >
                    <FaLaptop />
                    Digital Art
                  </Dropdown.Item>
                  <Dropdown.Item
                    active={false}
                    href="/hand-drawn-art"
                    className="font-poppins"
                  >
                    <RiPaletteLine />
                    Hand-Drawn Art
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>PHOTOGRAPHY</Dropdown.Header>
                  <Dropdown.Item
                    active={false}
                    href="/landscape-pics"
                    className="font-poppins"
                  >
                    <FaMountain />
                    Landscapes
                  </Dropdown.Item>
                  <Dropdown.Item
                    active={false}
                    href="/oreopics"
                    className="font-poppins"
                  >
                    <FaDog />
                    Oreo
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Divider />
              <Dropdown.Header>License</Dropdown.Header>
              <Dropdown.Item active={false} href="/tos">
                <IoIosPaper />
                Terms of Service
              </Dropdown.Item>
              <Dropdown.Item active={false} href="/privacy">
                <IoIosPaper />
                Privacy Notice
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Help</Dropdown.Header>
              <Dropdown.Item active={false} href="/staff">
                <FaCrown />
                Staff Team
              </Dropdown.Item>
              <Dropdown.Item active={false} href="/contactus">
                <FaEnvelope />
                Contact Us
              </Dropdown.Item>
              <Dropdown.Item active={false} href="/support">
                <FaDiscord />
                Discord
              </Dropdown.Item>
              <Dropdown.Item active={false} href="/faq">
                <FaRegQuestionCircle />
                FAQ
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Other</Dropdown.Header>
              <Dropdown.Item active={false} href="/third-parties">
                <FaUsers />
                Third-Parties
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Navbar Items */}

          <OverlayTrigger
            placement="bottom"
            delay={100}
            overlay={<Tooltip>Home</Tooltip>}
          >
            <Navbar.Brand href="/">Orelabs</Navbar.Brand>
          </OverlayTrigger>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          {account}
        </Navbar>
      </div>
    );
  }
}
