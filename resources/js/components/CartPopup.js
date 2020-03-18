import React, { Component } from "react";
import { connect } from "react-redux";
import { closingCart } from "../actions/allActions";

class CartPopup extends Component {
  constructor() {
    super();
    this.state = {
      name: "adam8Creats"
    };
  }

  componentDidUpdate() {
    if (this.props.globalState.popupCartOpen == true) {
      console.log(this.props.globalState.popupCartOpen);
      const cartPopupElement = document.getElementById("cart-popup");
      document.addEventListener("click", event => {
        var clickedInside = cartPopupElement.contains(event.target);
        if (clickedInside) {
        } else {
          this.props.closingCart();
        }
      });
    }
  }
  render() {
    return (
      <section
        id="cart-popup"
        className={this.props.globalState.popupCartOpen == true ? "active" : ""}
      >
        <div className="cart-header">
          <div className="header">Shopping Cart</div>
        </div>
        <div className="cart-units">
          <div className="unit-container">
            <div className="unit">
              <img src="/img/products/nike-airforce1-offwhite-volt.png" />
              <div className="delete-btn">
                <div className="circle">X</div>
              </div>
            </div>
          </div>

          <div className="unit-container">
            <div className="unit">
              <img src="/img/products/nike-airforce1-offwhite-volt.png" />
              <div className="delete-btn">
                <div className="circle">X</div>
              </div>
            </div>
          </div>

          <div className="unit-container">
            <div className="unit">
              <img src="/img/products/air-jordan-retro11.png" />
              <div className="delete-btn">
                <div className="circle">X</div>
              </div>
            </div>
          </div>
          <div className="unit-container">
            <div className="unit">
              <img src="/img/products/adidas-yeezy-700-v3.png" />
              <div className="delete-btn">
                <div className="circle">X</div>
              </div>
            </div>
          </div>

          <div className="unit-container">
            <div className="unit">
              <img src="/img/products/adidas-nmd-r1.png" />
              <div className="delete-btn">
                <div className="circle">X</div>
              </div>
            </div>
          </div>

          <div className="unit-container">
            <div className="unit">
              <img src="/img/products/air-jordan3-retro.png" />
              <div className="delete-btn">
                <div className="circle">X</div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-total">
          <div className="border-container">
            <div className="header">Total</div>
            <div className="quantity">x4</div>
          </div>
        </div>

        <div className="total-cost">
          <div className="border-container">
            <div className="header">Total</div>
            <div className="quantity">£2,000</div>
          </div>
        </div>
        <div className="checkout">
          <div className="title">checkout</div>
          <span href="/cart/checkout" className="ti-shopping-cart"></span>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  closingCart
})(CartPopup);
