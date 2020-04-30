import React from "react";
import { Row, Col } from "react-bootstrap";

const EstimatedTotal = ({ price }) => (
  <Row className="show-grid">
    <Col md={6}>
      <h4>Est. Total</h4>
    </Col>
    <Col md={6}>
      <h4>{`${price} PLN`}</h4>
    </Col>
  </Row>
);

export default EstimatedTotal;
