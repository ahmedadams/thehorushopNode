import React, { Component } from "react";
import { connect } from "react-redux";
import { openingCart } from "../actions/allActions";

class CartBtn extends Component {
  constructor() {
    super();
    this.state = {
      name: "adam8Creats"
    };
  }
  clickedBtn = () => {};
  async test() {}
  render() {
    return (
      <a href="#" className="go-to-cart" onClick={this.props.openingCart}>
        cart<div>0</div>
      </a>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, {
  openingCart
})(CartBtn);
