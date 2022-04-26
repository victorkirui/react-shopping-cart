// Feature 1
import "./index.css";
import React, { Component } from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      products: data.products,
      size: "",
      sort: "",
    };
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();

    let alreadyInCart = false;

    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({
      cartItems,
    });
  };

  sortProducts = (e) => {
    console.log(e.target.value);
    const sort = e.target.value;
    this.setState((state) => ({
      sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  filterProducts = (e) => {
    if (e.target.value === "") {
      this.setState({
        size: e.target.value,
        products: data.products,
      });
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter((product) =>
          product.availableSizes.includes(e.target.value)
        ),
      });
    }
  };

  render() {
    const { size, sort, products, cartItems } = this.state;
    return (
      <div className="App">
        <header>header</header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={products.length}
                size={size}
                sort={sort}
                sortProducts={this.sortProducts}
                filterProducts={this.filterProducts}
              />
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={cartItems}
                removeFromCart={this.removeFromCart}
              />
            </div>
          </div>
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
