import React, { Component } from "react";
import "../index.css";
import { formatCurrency } from "../util";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    console.log(cartItems);
    return (
      <>
        <div className="header-style">
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            <div>You have {cartItems.length} items in cart</div>
          )}
        </div>
        <div className="cart">
          <div className="cartItems">
            <ul>
              {cartItems.map((item) => {
                return (
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div>
                      <p className="content">{item.title}</p>
                      <div className="price-desc">
                        <p className="content">
                          <b>
                            {formatCurrency(item.price)} x {item.count}
                          </b>
                        </p>
                        <button
                          className="btn"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {cartItems.length > 0 && (
            <div className="total">
              <div>
                <b style={{ fontSize: "17px" }}>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </b>
              </div>
              <button className="btn btn-primary">Proceed</button>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Cart;
