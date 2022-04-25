// Feature 1
import "./index.css";
import React, { Component } from "react";
import data from "./data.json";
import Products from "./components/Products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="App">
        <header>header</header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">sidebar</div>
          </div>
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
