import React, { Component } from "react";
import "../index.css";
import { formatCurrency } from "../util";

class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <ul className="products-container">
          {products.map((product) => (
            <li key={product._id}>
              <div>
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title} />
                  <a href="#">{product.title}</a>
                </a>
                <div className="price-wrapper">
                  <p>{formatCurrency(product.price)}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.props.addToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
