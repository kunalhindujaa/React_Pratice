import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [product1, setProduct1] = useState(0);
  const [product2, setProduct2] = useState(0);
  const [totalItems, setItems] = useState(0);

  function handleIncrement1() {
    setProduct1(product1 + 1);
  }

  function handleDecrement1() {
    if (product1 === 0) alert("Reached 0!!");
    else setProduct1(product1 - 1);
  }

  function handleIncrement2() {
    setProduct2(product2 + 1);
  }

  function handleDecrement2() {
    if (product2 === 0) alert("Reached 0!!");
    else setProduct2(product2 - 1);
  }

  function cartItems() {
    console.log("here");
    if (product1 > 0) setItems(totalItems + 1);
    //else setItems(totalItems + 0);
    if (product2 > 0) setItems(totalItems + 1);
    //else setItems(totalItems + 0);
  }

  return (
    <div className="App">
      <div className="nav_bar">
        <p className="text">
          Your cart has <span onChange={cartItems}>{totalItems}</span> items
        </p>
      </div>
      <span> {product1}</span>

      <button onClick={handleIncrement1} className="button">
        Increment
      </button>
      <button onClick={handleDecrement1} className="button">
        Decrement
      </button>

      <br />
      <br />
      <span> {product2}</span>

      <button onClick={handleIncrement2} className="button">
        Increment
      </button>
      <button onClick={handleDecrement2} className="button">
        Decrement
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
