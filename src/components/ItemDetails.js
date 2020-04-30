import React, { useState, Fragment } from "react";
import { Button, Collapse, Card, Media, Row, Col } from "react-bootstrap";

const ItemDetails = ({ price }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button className="item-details-button" variant="link" onClick={() => setOpen(!open)}>
        {open === false ? "See" : "Hide"} item details
        {open === false ? " +" : " -"}
      </Button>
      <Collapse in={open}>
        <Card bg="light">
          <Media className="p-3">
            <img
              width={100}
              height={100}
              src="https://i5.walmartimages.com/asr/58f40ef2-41ef-4290-b393-920f63da60ba_1.2b51c944c164d2a5e242e628dd402a9b.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
              alt=""
            />
            <Media.Body
              style={{
                fontSize: 14
              }}
            >
              <p>Essentials by OFM ESS - 3085 Racing Style Leather Gaming Chair, Blue</p>
              <Row className="show-grid">
                <Col md={6}>
                  <strong> {`${price} PLN`} </strong>
                  <br />
                  <strong className="price-strike">{`${price} PLN`}</strong>
                </Col>
                <Col md={6}>
                  <strong> Qty: 1 </strong>
                </Col>
              </Row>
            </Media.Body>
          </Media>
        </Card>
      </Collapse>
    </Fragment>
  );
};

export default ItemDetails;
