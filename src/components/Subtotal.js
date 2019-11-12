import React from "react";
import { Row, Col } from "react-bootstrap";

const Subtotal = ({ price }) => (
  <Row className="show-grid">
    <Col md={6}>Subtotal</Col>
    <Col md={6}>
      <strong>{`${price} PLN`}</strong>
    </Col>
  </Row>
);

export default Subtotal;
