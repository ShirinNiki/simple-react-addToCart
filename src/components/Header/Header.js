import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import nik from "../../assets/niki.png";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={nik}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Nik Tech
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">ADD TO CART</Nav.Link>
            <Nav.Link href="#features">ACCOUNT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
