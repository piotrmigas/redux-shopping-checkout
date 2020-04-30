import React from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

const PickupSavings = ({ price }) => {
  const tooltip = (
    <Tooltip id="tooltip">
      <p>Picking up your order in the store helps cut costs, and we pass the savings on to you.</p>
    </Tooltip>
  );
  return (
    <Row className="show-grid">
      <Col md={6}>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <div style={styles.pickupSavings}>Pickup Savings</div>
        </OverlayTrigger>
      </Col>
      <Col style={styles.totalSavings} md={6}>
        <strong>{`${price} PLN`}</strong>
      </Col>
    </Row>
  );
};

const styles = {
  pickupSavings: {
    textDecoration: "underline"
  },
  totalSavings: {
    color: "red"
  }
};

export default PickupSavings;
