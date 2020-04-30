import React from "react";
import { Row, Col } from "react-bootstrap";

const TaxesFees = ({ taxes }) => (
  <Row className="show-grid">
    <Col md={6}>Est. taxes & fees</Col>
    <Col md={6}>
      <strong>{`${taxes} PLN`}</strong>
    </Col>
  </Row>
);

export default TaxesFees;
