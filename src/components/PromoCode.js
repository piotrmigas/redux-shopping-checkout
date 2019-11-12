import React, { useState, Fragment } from "react";
import { Button, Collapse, Card, Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { handleChange } from "../redux/actions/promoCodeActions";

const PromoCode = ({ promoCode, isDisabled, giveDiscount, handleChange }) => {
  const [open, setOpen] = useState(false);

  const handleAmount = e => {
    handleChange(e);
  };

  return (
    <Fragment>
      <Button className="promo-code-button" variant="link" onClick={() => setOpen(!open)}>
        {open === false ? `Apply ` : `Hide `}
        promo code {open === false ? ` +` : ` -`}
      </Button>
      <Collapse in={open}>
        <Card bg="light">
          <Row className="show-grid">
            <Col md={12}>
              <Form className="m-3">
                <Form.Group controlId="formInlineName">
                  <Form.Label>
                    <strong>Promo Code: </strong>DISCOUNT
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={handleAmount}
                  />
                </Form.Group>
                <Button
                  block
                  className="btn-round btn-success"
                  disabled={isDisabled}
                  onClick={giveDiscount}
                >
                  Apply
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>
      </Collapse>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCode);
