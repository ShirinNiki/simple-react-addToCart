import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import nik from "../../assets/niki.png";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
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
        </LinkContainer>
        <Nav className="justify-content-end">
          <LinkContainer to="/cart">
            <Nav.Link>
              <FontAwesomeIcon icon={faBasketShopping} />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/dashboard">
            <Nav.Link>
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
