import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Subtotal from "./components/Subtotal";
import PickupSavings from "./components/PickupSavings";
import TaxesFees from "./components/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode";
import { connect } from "react-redux";

class App extends Component {
  state = {
    total: 100,
    pickupSavings: -9.95,
    taxes: 0,
    estimatedTotal: 0,
    disablePromoButton: false
  };

  componentDidMount() {
    this.setState({ taxes: (this.state.total + this.state.pickupSavings) * 0.0875 }, () => {
      this.setState({
        estimatedTotal: this.state.total + this.state.pickupSavings + this.state.taxes
      });
    });
  }

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState({ estimatedTotal: this.state.estimatedTotal * 0.9 }, () => {
        this.setState({
          disablePromoButton: true
        });
      });
    }
  };

  render() {
    const { total, pickupSavings, taxes, estimatedTotal } = this.state;
    return (
      <Container className="purchase-card mt-4">
        <Subtotal price={total.toFixed(2)} />
        <PickupSavings price={pickupSavings} />
        <TaxesFees taxes={taxes.toFixed(2)} />
        <hr />
        <EstimatedTotal price={estimatedTotal.toFixed(2)} />
        <ItemDetails price={estimatedTotal.toFixed(2)} />
        <hr />
        <PromoCode
          giveDiscount={this.giveDiscountHandler}
          isDisabled={this.state.disablePromoButton}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  null
)(App);
