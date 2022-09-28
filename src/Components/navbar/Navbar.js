import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function NavScrollExample() {
  return (
    <Navbar bg="#FFFFFF" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="logo_navbar">
            <img src={logo} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ display: "flex", gap: "40px" }}
            navbarScroll
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000000",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Home
            </Link>
            <Link
              to="/Servicess"
              style={{
                textDecoration: "none",
                color: "#000000",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Services
            </Link>
            <Link
              to="/Distributionpage"
              style={{
                textDecoration: "none",
                color: "#000000",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Distribution
            </Link>
            <Link
              to="Publishing"
              style={{
                textDecoration: "none",
                color: "#000000",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Publishing
            </Link>
            <Link
              to="Faqs"
              style={{
                textDecoration: "none",
                color: "#000000",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              FAQ
            </Link>
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "#000000",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Artists
            </Link>
            <Link
              to="Newshome"
              style={{
                textDecoration: "none",
                color: "#000000",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              News
            </Link>
            <Link
              to="Contact"
              style={{
                textDecoration: "none",
                color: "#000000",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Contact Us
            </Link>
            <div className="d-flex justify-content-center">
              <select
                name="dropdown"
                id=""
                style={{
                  border: "none",
                  fontWeight: "500",
                  marginTop: "-2px",
                  outline: "none",
                  width: "fit-content",
                }}
              >
                <option value="Eng">Eng</option>
                <option value="Chinese">Ch</option>
                <option value="Ur">Urdu</option>
              </select>
            </div>
          </Nav>
          <Form className="d-flex justify-content-center">
            <Button className="startbtn">Let’s Start</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
