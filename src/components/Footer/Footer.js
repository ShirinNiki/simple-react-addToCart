import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { classes } from "./Footer.css";

function Footer() {
  return (
    <footer bg="dark">
      <Container>
        <Row>
          <Col>footer1</Col>
          <Col>footer2</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
